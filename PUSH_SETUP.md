# Soccer-DTR Web Push Setup

Web Push funktioniert nur mit einer Server-Komponente. Die App speichert Push-Abos in Supabase; die Edge Function `send-push` verschickt die Benachrichtigungen.

## 1. SQL ausfuehren

In Supabase SQL Editor den Inhalt von `supabase-setup.sql` ausfuehren. Dadurch wird auch `public.push_subscriptions` angelegt.

## 2. Secrets setzen

Der oeffentliche VAPID-Key ist in `js/app.js` hinterlegt. Der private Key liegt lokal in `vapid-private-key.txt` und wird nicht nach GitHub gepusht.

In Supabase muss fuer die Edge Function gesetzt werden:

```bash
supabase secrets set VAPID_PUBLIC_KEY="BMzLO4YI3nJQ2J6OPpj22v7-S8XOuMTq7Ftm5L62CihAq-gNemRJPWAqhn3xzolyq97jJZ6x5KIrrgpdur7Hb8E"
supabase secrets set VAPID_PRIVATE_KEY="$(cat vapid-private-key.txt)"
supabase secrets set VAPID_SUBJECT="mailto:admin@example.com"
supabase secrets set SUPABASE_SERVICE_ROLE_KEY="DEIN_SERVICE_ROLE_KEY"
```

## 3. Edge Function deployen

```bash
supabase functions deploy send-push
```

## 4. Auf dem Handy aktivieren

Die installierte Soccer-DTR-App oeffnen, zu `Mitteilungen` wechseln und `Benachrichtigungen aktivieren` antippen. Danach koennen neue Mitteilungen auch bei geschlossener App als Push erscheinen.

Hinweis: iPhone-Web-Push funktioniert fuer installierte Home-Screen-Web-Apps. Direkt im normalen Browser-Tab kann iOS Push blockieren.
