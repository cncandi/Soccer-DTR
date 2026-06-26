import webpush from "npm:web-push@3.6.7";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

type PushRequest = {
  clubId: string;
  group: string;
  excludeUser?: string;
  title: string;
  body: string;
  url?: string;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const vapidPublicKey = Deno.env.get("VAPID_PUBLIC_KEY");
  const vapidPrivateKey = Deno.env.get("VAPID_PRIVATE_KEY");
  const vapidSubject = Deno.env.get("VAPID_SUBJECT") || "mailto:admin@example.com";

  if (!supabaseUrl || !serviceRoleKey || !vapidPublicKey || !vapidPrivateKey) {
    return Response.json({ error: "Push secrets are not configured." }, { status: 500, headers: corsHeaders });
  }

  const payload = await req.json() as PushRequest;
  if (!payload.clubId || !payload.group || !payload.title || !payload.body) {
    return Response.json({ error: "clubId, group, title and body are required." }, { status: 400, headers: corsHeaders });
  }

  webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  let query = supabase
    .from("push_subscriptions")
    .select("endpoint,user_name,subscription")
    .eq("club_id", payload.clubId)
    .contains("groups", [payload.group]);

  if (payload.excludeUser) {
    query = query.neq("user_name", payload.excludeUser);
  }

  const { data, error } = await query;
  if (error) {
    return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }

  const notification = JSON.stringify({
    title: payload.title,
    body: payload.body.length > 160 ? `${payload.body.slice(0, 157)}...` : payload.body,
    url: payload.url || "/Soccer-DTR/#messages"
  });

  const results = await Promise.allSettled((data || []).map(async (row) => {
    try {
      await webpush.sendNotification(row.subscription, notification, { TTL: 60 * 60 * 24 });
      return "sent";
    } catch (sendError) {
      const statusCode = Number((sendError as { statusCode?: number }).statusCode || 0);
      if (statusCode === 404 || statusCode === 410) {
        await supabase.from("push_subscriptions").delete().eq("endpoint", row.endpoint);
        return "deleted";
      }
      throw sendError;
    }
  }));

  const sent = results.filter((result) => result.status === "fulfilled" && result.value === "sent").length;
  const deleted = results.filter((result) => result.status === "fulfilled" && result.value === "deleted").length;
  const failed = results.filter((result) => result.status === "rejected").length;

  return Response.json({ sent, deleted, failed }, { headers: corsHeaders });
});
