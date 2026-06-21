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

create extension if not exists pgcrypto;

create table if not exists public.clubs (
  id text primary key default gen_random_uuid()::text,
  name text not null,
  slug text unique,
  color text not null default '#155e3b',
  logo text not null default '',
  license_key text not null unique default ('KAD-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 12))),
  license_status text not null default 'trial' check (license_status in ('trial', 'active', 'blocked')),
  license_activated_at timestamptz default now(),
  license_expires_at timestamptz default (now() + interval '21 days'),
  license_auto_renew boolean not null default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.clubs add column if not exists license_activated_at timestamptz default now();
alter table public.clubs add column if not exists license_expires_at timestamptz default (now() + interval '21 days');
alter table public.clubs add column if not exists license_auto_renew boolean not null default false;

alter table public.clubs enable row level security;

drop policy if exists "clubs read" on public.clubs;
drop policy if exists "clubs write" on public.clubs;
drop policy if exists "clubs update" on public.clubs;
drop policy if exists "clubs delete" on public.clubs;

create policy "clubs read" on public.clubs
for select using (true);

create policy "clubs write" on public.clubs
for insert with check (true);

create policy "clubs update" on public.clubs
for update using (true);

create policy "clubs delete" on public.clubs
for delete using (true);

create table if not exists public.players (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  name text not null,
  password text not null default '',
  role text not null default 'Spieler' check (role in ('Spieler', 'Admin', 'Superadmin')),
  member_roles text[] not null default '{"Spieler"}',
  groups text[] not null default '{"Mannschaft"}',
  position text not null default 'Spieler',
  phone text not null default '',
  notes text not null default '',
  photo text not null default '',
  alternate_positions text[] not null default '{}',
  availability jsonb not null default '{}'::jsonb,
  performance jsonb not null default '{}'::jsonb,
  data jsonb not null default '{}'::jsonb,
  active boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.players add column if not exists data jsonb not null default '{}'::jsonb;

create unique index if not exists players_club_name_unique
on public.players (club_id, lower(name));

alter table public.players enable row level security;

drop policy if exists "players read" on public.players;
drop policy if exists "players write" on public.players;
drop policy if exists "players update" on public.players;
drop policy if exists "players delete" on public.players;

create policy "players read" on public.players
for select using (true);

create policy "players write" on public.players
for insert with check (true);

create policy "players update" on public.players
for update using (true);

create policy "players delete" on public.players
for delete using (true);

create table if not exists public.events (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  type text not null check (type in ('Spiel', 'Training', 'Event', 'Sonstiges', 'game', 'training', 'event')),
  title text not null default '',
  date date not null,
  time text not null default '',
  location text not null default '',
  opponent text not null default '',
  home_away text not null default '',
  field_address text not null default '',
  game_type text not null default '',
  meeting_place text not null default '',
  meeting_time text not null default '',
  on_site_time text not null default '',
  repeat text not null default '',
  repeat_until date,
  coach text not null default '',
  focus text not null default '',
  details text not null default '',
  remark text not null default '',
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.events drop constraint if exists events_type_check;
alter table public.events
add constraint events_type_check check (type in ('Spiel', 'Training', 'Event', 'Sonstiges', 'game', 'training', 'event'));
alter table public.events add column if not exists data jsonb not null default '{}'::jsonb;

create index if not exists events_club_date_idx on public.events (club_id, date);

alter table public.events enable row level security;

drop policy if exists "events read" on public.events;
drop policy if exists "events write" on public.events;
drop policy if exists "events update" on public.events;
drop policy if exists "events delete" on public.events;

create policy "events read" on public.events
for select using (true);

create policy "events write" on public.events
for insert with check (true);

create policy "events update" on public.events
for update using (true);

create policy "events delete" on public.events
for delete using (true);

create table if not exists public.event_rsvps (
  event_id text not null references public.events(id) on delete cascade,
  player_id text not null references public.players(id) on delete cascade,
  status text not null check (status in ('yes', 'no', 'maybe')),
  note text not null default '',
  transport text not null default '',
  updated_at timestamptz default now(),
  primary key (event_id, player_id)
);

alter table public.event_rsvps enable row level security;

drop policy if exists "event rsvps read" on public.event_rsvps;
drop policy if exists "event rsvps write" on public.event_rsvps;
drop policy if exists "event rsvps update" on public.event_rsvps;
drop policy if exists "event rsvps delete" on public.event_rsvps;

create policy "event rsvps read" on public.event_rsvps
for select using (true);

create policy "event rsvps write" on public.event_rsvps
for insert with check (true);

create policy "event rsvps update" on public.event_rsvps
for update using (true);

create policy "event rsvps delete" on public.event_rsvps
for delete using (true);

create table if not exists public.cash_entries (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  player_id text references public.players(id) on delete set null,
  player_name text not null default '',
  label text not null,
  amount numeric(10,2) not null default 0,
  date date,
  note text not null default '',
  paid boolean not null default false,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.cash_entries add column if not exists player_name text not null default '';
alter table public.cash_entries add column if not exists data jsonb not null default '{}'::jsonb;

alter table public.cash_entries enable row level security;

drop policy if exists "cash entries read" on public.cash_entries;
drop policy if exists "cash entries write" on public.cash_entries;
drop policy if exists "cash entries update" on public.cash_entries;
drop policy if exists "cash entries delete" on public.cash_entries;

create policy "cash entries read" on public.cash_entries
for select using (true);

create policy "cash entries write" on public.cash_entries
for insert with check (true);

create policy "cash entries update" on public.cash_entries
for update using (true);

create policy "cash entries delete" on public.cash_entries
for delete using (true);

create table if not exists public.fine_catalog (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  label text not null,
  description text not null default '',
  amount numeric(10,2) not null default 0,
  penalty text not null default '',
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.fine_catalog add column if not exists data jsonb not null default '{}'::jsonb;

create index if not exists fine_catalog_club_idx on public.fine_catalog (club_id);

alter table public.fine_catalog enable row level security;

drop policy if exists "fine catalog read" on public.fine_catalog;
drop policy if exists "fine catalog write" on public.fine_catalog;
drop policy if exists "fine catalog update" on public.fine_catalog;
drop policy if exists "fine catalog delete" on public.fine_catalog;

create policy "fine catalog read" on public.fine_catalog
for select using (true);

create policy "fine catalog write" on public.fine_catalog
for insert with check (true);

create policy "fine catalog update" on public.fine_catalog
for update using (true);

create policy "fine catalog delete" on public.fine_catalog
for delete using (true);

create table if not exists public.polls (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  question text not null,
  options jsonb not null default '[]'::jsonb,
  votes jsonb not null default '{}'::jsonb,
  group_name text not null default 'Mannschaft',
  data jsonb not null default '{}'::jsonb,
  active boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.polls add column if not exists data jsonb not null default '{}'::jsonb;

alter table public.polls enable row level security;

drop policy if exists "polls read" on public.polls;
drop policy if exists "polls write" on public.polls;
drop policy if exists "polls update" on public.polls;
drop policy if exists "polls delete" on public.polls;

create policy "polls read" on public.polls
for select using (true);

create policy "polls write" on public.polls
for insert with check (true);

create policy "polls update" on public.polls
for update using (true);

create policy "polls delete" on public.polls
for delete using (true);

create table if not exists public.messages (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  group_name text not null default 'Mannschaft',
  title text not null default '',
  body text not null default '',
  author text not null default '',
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.messages add column if not exists data jsonb not null default '{}'::jsonb;

create index if not exists messages_club_created_idx on public.messages (club_id, created_at desc);

alter table public.messages enable row level security;

drop policy if exists "messages read" on public.messages;
drop policy if exists "messages write" on public.messages;
drop policy if exists "messages update" on public.messages;
drop policy if exists "messages delete" on public.messages;

create policy "messages read" on public.messages
for select using (true);

create policy "messages write" on public.messages
for insert with check (true);

create policy "messages update" on public.messages
for update using (true);

create policy "messages delete" on public.messages
for delete using (true);

create table if not exists public.hall_of_fame_entries (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  player_id text references public.players(id) on delete set null,
  player_name text not null default '',
  category text not null,
  value numeric(10,2) not null default 0,
  meta jsonb not null default '{}'::jsonb,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.hall_of_fame_entries add column if not exists player_name text not null default '';
alter table public.hall_of_fame_entries add column if not exists data jsonb not null default '{}'::jsonb;

alter table public.hall_of_fame_entries enable row level security;

drop policy if exists "hall of fame read" on public.hall_of_fame_entries;
drop policy if exists "hall of fame write" on public.hall_of_fame_entries;
drop policy if exists "hall of fame update" on public.hall_of_fame_entries;
drop policy if exists "hall of fame delete" on public.hall_of_fame_entries;

create policy "hall of fame read" on public.hall_of_fame_entries
for select using (true);

create policy "hall of fame write" on public.hall_of_fame_entries
for insert with check (true);

create policy "hall of fame update" on public.hall_of_fame_entries
for update using (true);

create policy "hall of fame delete" on public.hall_of_fame_entries
for delete using (true);

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
