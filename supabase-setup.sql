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
