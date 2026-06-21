alter table public.clubs add column if not exists license_activated_at timestamptz default now();
alter table public.clubs add column if not exists license_expires_at timestamptz default (now() + interval '21 days');
alter table public.clubs add column if not exists license_auto_renew boolean not null default false;

update public.clubs
set
  license_activated_at = coalesce(license_activated_at, created_at, now()),
  license_expires_at = coalesce(
    license_expires_at,
    coalesce(license_activated_at, created_at, now()) + interval '21 days'
  ),
  license_auto_renew = coalesce(license_auto_renew, false);
