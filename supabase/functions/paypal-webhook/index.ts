import { corsHeaders, json, loadPaypalSettings, markPenaltyPaid, paypalAccessToken, paypalBaseUrl, serviceClient } from "../_shared/paypal.ts";

async function verifyWebhook(req: Request, body: unknown, settings: Awaited<ReturnType<typeof loadPaypalSettings>>) {
  if (!settings?.paypal_webhook_id) return false;
  const token = await paypalAccessToken(settings);
  const response = await fetch(`${paypalBaseUrl(settings.paypal_mode)}/v1/notifications/verify-webhook-signature`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      auth_algo: req.headers.get("paypal-auth-algo"),
      cert_url: req.headers.get("paypal-cert-url"),
      transmission_id: req.headers.get("paypal-transmission-id"),
      transmission_sig: req.headers.get("paypal-transmission-sig"),
      transmission_time: req.headers.get("paypal-transmission-time"),
      webhook_id: settings.paypal_webhook_id,
      webhook_event: body
    })
  });
  const result = await response.json().catch(() => ({}));
  return result.verification_status === "SUCCESS";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed." }, { status: 405 });

  try {
    const event = await req.json();
    if (event.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
      return json({ ignored: true });
    }

    const capture = event.resource || {};
    const captureId = String(capture.id || "");
    const orderId = String(capture.supplementary_data?.related_ids?.order_id || "");
    if (!captureId) return json({ error: "Capture id is missing." }, { status: 400 });

    const supabase = serviceClient();
    const paymentQuery = orderId
      ? supabase.from("penalty_payments").select("*").eq("paypal_order_id", orderId).maybeSingle()
      : supabase.from("penalty_payments").select("*").eq("paypal_capture_id", captureId).maybeSingle();
    const { data: payment, error } = await paymentQuery;
    if (error) throw new Error(error.message);
    if (!payment) return json({ ignored: true, reason: "payment_not_found" });

    const settings = await loadPaypalSettings(supabase, payment.club_id);
    const verified = await verifyWebhook(req, event, settings);
    if (!verified) return json({ error: "Webhook signature verification failed." }, { status: 401 });

    const paidAt = capture.create_time || new Date().toISOString();
    await markPenaltyPaid(supabase, payment.club_id, payment.penalty_id, captureId, paidAt);

    const { error: updateError } = await supabase.from("penalty_payments").update({
      status: "paid",
      paypal_capture_id: captureId,
      paid_at: paidAt,
      updated_at: new Date().toISOString()
    }).eq("id", payment.id);
    if (updateError) throw new Error(updateError.message);

    return json({ status: "paid" });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
});

