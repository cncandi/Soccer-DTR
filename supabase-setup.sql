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
