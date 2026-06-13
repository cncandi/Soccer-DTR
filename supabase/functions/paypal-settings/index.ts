import { corsHeaders, encryptSecret, json, serviceClient } from "../_shared/paypal.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabase = serviceClient();
    const url = new URL(req.url);
    const clubId = url.searchParams.get("clubId");
    if (!clubId) return json({ error: "clubId is required." }, { status: 400 });

    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("club_paypal_settings")
        .select("club_id,paypal_enabled,paypal_mode,paypal_client_id,paypal_receiver_email,paypal_webhook_id,updated_at")
        .eq("club_id", clubId)
        .maybeSingle();
      if (error) throw new Error(error.message);
      return json(data || {
        club_id: clubId,
        paypal_enabled: false,
        paypal_mode: "sandbox",
        paypal_client_id: "",
        paypal_receiver_email: "",
        paypal_webhook_id: ""
      });
    }

    if (req.method !== "POST") return json({ error: "Method not allowed." }, { status: 405 });

    const payload = await req.json();
    const existing = await supabase
      .from("club_paypal_settings")
      .select("paypal_client_secret_encrypted")
      .eq("club_id", clubId)
      .maybeSingle();
    if (existing.error) throw new Error(existing.error.message);

    const secret = String(payload.paypal_client_secret || "").trim();
    const secretEncrypted = secret
      ? await encryptSecret(secret)
      : existing.data?.paypal_client_secret_encrypted || "";

    const { data, error } = await supabase
      .from("club_paypal_settings")
      .upsert({
        club_id: clubId,
        paypal_enabled: Boolean(payload.paypal_enabled),
        paypal_mode: payload.paypal_mode === "live" ? "live" : "sandbox",
        paypal_client_id: String(payload.paypal_client_id || "").trim(),
        paypal_client_secret_encrypted: secretEncrypted,
        paypal_receiver_email: String(payload.paypal_receiver_email || "").trim(),
        paypal_webhook_id: String(payload.paypal_webhook_id || "").trim(),
        updated_at: new Date().toISOString()
      })
      .select("club_id,paypal_enabled,paypal_mode,paypal_client_id,paypal_receiver_email,paypal_webhook_id,updated_at")
      .single();
    if (error) throw new Error(error.message);
    return json(data);
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
});

