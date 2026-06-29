-- Übungsdatenbank (drills)
create table if not exists public.drills (
  id text primary key default gen_random_uuid()::text,
  club_id text not null references public.clubs(id) on delete cascade,
  name text not null,
  focus text not null default '',
  duration_min integer not null default 0,
  remark text not null default '',
  type text not null default 'tactic' check (type in ('tactic', 'image', 'youtube')),
  tactic_board_id text references public.tactic_boards(id) on delete set null,
  image_url text not null default '',
  youtube_url text not null default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists drills_club_idx on public.drills (club_id);

alter table public.drills enable row level security;

drop policy if exists "drills read" on public.drills;
drop policy if exists "drills write" on public.drills;
drop policy if exists "drills update" on public.drills;
drop policy if exists "drills delete" on public.drills;

create policy "drills read" on public.drills for select using (true);
create policy "drills write" on public.drills for insert with check (true);
create policy "drills update" on public.drills for update using (true);
create policy "drills delete" on public.drills for delete using (true);

-- Zuordnung Übungen zu Trainingsterminen
create table if not exists public.event_drills (
  id text primary key default gen_random_uuid()::text,
  event_id text not null references public.events(id) on delete cascade,
  drill_id text not null references public.drills(id) on delete cascade,
  club_id text not null references public.clubs(id) on delete cascade,
  sort_order integer not null default 0,
  created_at timestamptz default now()
);

create index if not exists event_drills_event_idx on public.event_drills (event_id);
create index if not exists event_drills_club_idx on public.event_drills (club_id);

alter table public.event_drills enable row level security;

drop policy if exists "event drills read" on public.event_drills;
drop policy if exists "event drills write" on public.event_drills;
drop policy if exists "event drills update" on public.event_drills;
drop policy if exists "event drills delete" on public.event_drills;

create policy "event drills read" on public.event_drills for select using (true);
create policy "event drills write" on public.event_drills for insert with check (true);
create policy "event drills update" on public.event_drills for update using (true);
create policy "event drills delete" on public.event_drills for delete using (true);
