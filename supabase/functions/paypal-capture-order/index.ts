import { corsHeaders, json, loadPaypalSettings, markPenaltyPaid, paypalRequest, serviceClient } from "../_shared/paypal.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed." }, { status: 405 });

  try {
    const payload = await req.json();
    const clubId = String(payload.clubId || "");
    const penaltyId = String(payload.penaltyId || "");
    const orderId = String(payload.orderId || "");
    if (!clubId || !penaltyId || !orderId) {
      return json({ error: "clubId, penaltyId and orderId are required." }, { status: 400 });
    }

    const supabase = serviceClient();
    const settings = await loadPaypalSettings(supabase, clubId);
    if (!settings?.paypal_enabled) return json({ error: "PayPal is disabled for this club." }, { status: 400 });

    const payment = await supabase
      .from("penalty_payments")
      .select("paypal_order_id,status")
      .eq("club_id", clubId)
      .eq("penalty_id", penaltyId)
      .maybeSingle();
    if (payment.error) throw new Error(payment.error.message);
    if (!payment.data || payment.data.paypal_order_id !== orderId) {
      return json({ error: "PayPal order does not match this penalty." }, { status: 409 });
    }
    if (payment.data.status === "paid") {
      return json({ status: "paid" });
    }

    const capture = await paypalRequest(settings, `/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, {});
    const captureItem = capture.purchase_units?.[0]?.payments?.captures?.[0];
    const captureId = captureItem?.id || "";
    const captureStatus = captureItem?.status || capture.status;
    if (captureStatus !== "COMPLETED" || !captureId) {
      await supabase.from("penalty_payments").update({
        status: "failed",
        updated_at: new Date().toISOString()
      }).eq("club_id", clubId).eq("penalty_id", penaltyId);
      return json({ error: `PayPal capture was not completed (${captureStatus || "unknown"}).` }, { status: 400 });
    }

    const paidAt = captureItem?.create_time || new Date().toISOString();
    await markPenaltyPaid(supabase, clubId, penaltyId, captureId, paidAt);

    const { error } = await supabase.from("penalty_payments").update({
      status: "paid",
      paypal_capture_id: captureId,
      paid_at: paidAt,
      updated_at: new Date().toISOString()
    }).eq("club_id", clubId).eq("penalty_id", penaltyId);
    if (error) throw new Error(error.message);

    return json({ status: "paid", paypal_capture_id: captureId, paid_at: paidAt });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
});
