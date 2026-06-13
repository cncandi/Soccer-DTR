import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, paypal-transmission-id, paypal-transmission-time, paypal-transmission-sig, paypal-cert-url, paypal-auth-algo",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
};

export type PaypalMode = "sandbox" | "live";

export type PaypalSettings = {
  club_id: string;
  paypal_enabled: boolean;
  paypal_mode: PaypalMode;
  paypal_client_id: string;
  paypal_client_secret_encrypted: string;
  paypal_receiver_email?: string;
  paypal_webhook_id?: string;
};

export function json(data: unknown, init: ResponseInit = {}) {
  return Response.json(data, { ...init, headers: { ...corsHeaders, ...(init.headers || {}) } });
}

export function serviceClient() {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) throw new Error("Supabase service role is not configured.");
  return createClient(supabaseUrl, serviceRoleKey);
}

export function paypalBaseUrl(mode: PaypalMode) {
  return mode === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
}

function base64ToBytes(value: string) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

function bytesToBase64(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes));
}

async function encryptionKey() {
  const raw = Deno.env.get("PAYPAL_ENCRYPTION_KEY");
  if (!raw) throw new Error("PAYPAL_ENCRYPTION_KEY is not configured.");
  const bytes = raw.includes("=") ? base64ToBytes(raw) : new TextEncoder().encode(raw.padEnd(32, "0").slice(0, 32));
  return crypto.subtle.importKey("raw", bytes.slice(0, 32), "AES-GCM", false, ["encrypt", "decrypt"]);
}

export async function encryptSecret(secret: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = new Uint8Array(await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    await encryptionKey(),
    new TextEncoder().encode(secret)
  ));
  return `${bytesToBase64(iv)}.${bytesToBase64(encrypted)}`;
}

export async function decryptSecret(encrypted: string) {
  const [ivValue, payloadValue] = encrypted.split(".");
  if (!ivValue || !payloadValue) throw new Error("Stored PayPal secret is invalid.");
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBytes(ivValue) },
    await encryptionKey(),
    base64ToBytes(payloadValue)
  );
  return new TextDecoder().decode(decrypted);
}

export async function loadPaypalSettings(supabase: ReturnType<typeof createClient>, clubId: string) {
  const { data, error } = await supabase
    .from("club_paypal_settings")
    .select("*")
    .eq("club_id", clubId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as PaypalSettings | null;
}

export async function paypalAccessToken(settings: PaypalSettings) {
  const secret = await decryptSecret(settings.paypal_client_secret_encrypted);
  const credentials = btoa(`${settings.paypal_client_id}:${secret}`);
  const response = await fetch(`${paypalBaseUrl(settings.paypal_mode)}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error_description || data.error || "PayPal authentication failed.");
  return data.access_token as string;
}

export async function paypalRequest(settings: PaypalSettings, path: string, body?: unknown) {
  const token = await paypalAccessToken(settings);
  const response = await fetch(`${paypalBaseUrl(settings.paypal_mode)}${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || data.name || "PayPal request failed.");
  return data;
}

export function findPenalty(document: Record<string, unknown>, penaltyId: string) {
  const cashFines = Array.isArray(document.cashFines) ? document.cashFines as Array<Record<string, unknown>> : [];
  const manual = cashFines.find((fine) => fine.id === penaltyId);
  if (manual) return { source: "manual", fine: manual };

  if (penaltyId.includes("::")) {
    const [eventId, playerName] = penaltyId.split("::");
    const events = Array.isArray(document.events) ? document.events as Array<Record<string, unknown>> : [];
    const event = events.find((item) => item.id === eventId);
    const rsvps = event?.rsvps as Record<string, Record<string, unknown>> | undefined;
    const record = rsvps?.[playerName];
    if (event && record && Number(record.fine || 0) > 0) {
      return { source: "event", event, playerName, fine: record };
    }
  }

  return null;
}

export async function loadClubDocument(supabase: ReturnType<typeof createClient>, clubId: string) {
  const documentId = `club-state:${clubId}`;
  const { data, error } = await supabase
    .from("club_documents")
    .select("document")
    .eq("id", documentId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data?.document) throw new Error("Club document was not found.");
  return { documentId, document: data.document as Record<string, unknown> };
}

export async function markPenaltyPaid(
  supabase: ReturnType<typeof createClient>,
  clubId: string,
  penaltyId: string,
  captureId: string,
  paidAt = new Date().toISOString()
) {
  const { documentId, document } = await loadClubDocument(supabase, clubId);
  const penalty = findPenalty(document, penaltyId);
  if (!penalty) throw new Error("Penalty was not found.");

  penalty.fine.paid = true;
  penalty.fine.paidAt = paidAt;
  penalty.fine.paymentStatus = "paid";
  penalty.fine.paypalCaptureId = captureId;

  const { error } = await supabase
    .from("club_documents")
    .upsert({ id: documentId, document, updated_at: new Date().toISOString() });
  if (error) throw new Error(error.message);
}

