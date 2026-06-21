alter table public.clubs add column if not exists league text not null default '';
alter table public.clubs add column if not exists federal_state text not null default '';
