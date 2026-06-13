import { corsHeaders, findPenalty, json, loadClubDocument, loadPaypalSettings, paypalRequest, serviceClient } from "../_shared/paypal.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed." }, { status: 405 });

  try {
    const payload = await req.json();
    const clubId = String(payload.clubId || "");
    const penaltyId = String(payload.penaltyId || "");
    if (!clubId || !penaltyId) return json({ error: "clubId and penaltyId are required." }, { status: 400 });

    const supabase = serviceClient();
    const settings = await loadPaypalSettings(supabase, clubId);
    if (!settings?.paypal_enabled) return json({ error: "PayPal is disabled for this club." }, { status: 400 });
    if (!settings.paypal_client_id || !settings.paypal_client_secret_encrypted) {
      return json({ error: "PayPal credentials are incomplete." }, { status: 400 });
    }

    const { document } = await loadClubDocument(supabase, clubId);
    const penalty = findPenalty(document, penaltyId);
    if (!penalty) return json({ error: "Penalty was not found." }, { status: 404 });
    if (penalty.fine.paid) return json({ error: "Penalty is already paid." }, { status: 400 });

    const amount = Number(penalty.fine.amount || penalty.fine.fine || 0);
    if (!Number.isFinite(amount) || amount <= 0) return json({ error: "Penalty amount must be greater than 0." }, { status: 400 });

    const order = await paypalRequest(settings, "/v2/checkout/orders", {
      intent: "CAPTURE",
      purchase_units: [{
        reference_id: penaltyId,
        description: String(penalty.fine.label || "Kadrivo Strafe").slice(0, 127),
        ...(settings.paypal_receiver_email ? { payee: { email_address: settings.paypal_receiver_email } } : {}),
        amount: {
          currency_code: "EUR",
          value: amount.toFixed(2)
        }
      }]
    });

    const { error } = await supabase.from("penalty_payments").upsert({
      club_id: clubId,
      penalty_id: penaltyId,
      player_id: String(penalty.fine.player || penalty.playerName || ""),
      amount,
      currency: "EUR",
      status: "pending",
      paypal_order_id: order.id,
      updated_at: new Date().toISOString()
    }, { onConflict: "club_id,penalty_id" });
    if (error) throw new Error(error.message);

    return json({ id: order.id, status: order.status });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
});

