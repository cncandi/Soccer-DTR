create table if not exists public.club_documents (
  id text primary key,
  document jsonb not null,
  updated_at timestamptz default now()
);

alter table public.club_documents enable row level security;

drop policy if exists "club read" on public.club_documents;
drop policy if exists "club write" on public.club_documents;
drop policy if exists "club update" on public.club_documents;

create policy "club read" on public.club_documents
for select using (true);

create policy "club write" on public.club_documents
for insert with check (true);

create policy "club update" on public.club_documents
for update using (true);

create table if not exists public.push_subscriptions (
  endpoint text primary key,
  club_id text not null,
  user_name text not null,
  groups text[] not null default '{}',
  subscription jsonb not null,
  updated_at timestamptz default now()
);

alter table public.push_subscriptions enable row level security;

drop policy if exists "push read" on public.push_subscriptions;
drop policy if exists "push write" on public.push_subscriptions;
drop policy if exists "push update" on public.push_subscriptions;

create policy "push read" on public.push_subscriptions
for select using (true);

create policy "push write" on public.push_subscriptions
for insert with check (true);

create policy "push update" on public.push_subscriptions
for update using (true);

create table if not exists public.club_paypal_settings (
  club_id text primary key,
  paypal_enabled boolean not null default false,
  paypal_mode text not null default 'sandbox' check (paypal_mode in ('sandbox', 'live')),
  paypal_client_id text not null default '',
  paypal_client_secret_encrypted text not null default '',
  paypal_receiver_email text not null default '',
  paypal_webhook_id text not null default '',
  updated_at timestamptz default now()
);

alter table public.club_paypal_settings enable row level security;

drop policy if exists "paypal settings read" on public.club_paypal_settings;
drop policy if exists "paypal settings write" on public.club_paypal_settings;
drop policy if exists "paypal settings update" on public.club_paypal_settings;

create policy "paypal settings read" on public.club_paypal_settings
for select using (false);

create policy "paypal settings write" on public.club_paypal_settings
for insert with check (false);

create policy "paypal settings update" on public.club_paypal_settings
for update using (false);

create table if not exists public.penalty_payments (
  id uuid primary key default gen_random_uuid(),
  club_id text not null,
  player_id text not null default '',
  penalty_id text not null,
  amount numeric(10,2) not null,
  currency text not null default 'EUR',
  status text not null default 'open' check (status in ('open', 'pending', 'paid', 'failed', 'cancelled')),
  paypal_order_id text,
  paypal_capture_id text,
  paid_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (club_id, penalty_id)
);

alter table public.penalty_payments enable row level security;

drop policy if exists "penalty payments read" on public.penalty_payments;
drop policy if exists "penalty payments write" on public.penalty_payments;
drop policy if exists "penalty payments update" on public.penalty_payments;

create policy "penalty payments read" on public.penalty_payments
for select using (true);

create policy "penalty payments write" on public.penalty_payments
for insert with check (true);

create policy "penalty payments update" on public.penalty_payments
for update using (true);
