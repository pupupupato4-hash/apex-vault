-- APEX VAULT Supabase starter schema.
-- Run this in Supabase SQL Editor. Review policies and business rules before production.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  role text not null default 'member' check (role in ('member','staff','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  game text not null check (game in ('Free Fire','eFootball','ROV','Roblox')),
  title text not null,
  description text,
  price numeric(12,2) not null check (price >= 0),
  stock_count integer not null default 0 check (stock_count >= 0),
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.wallets (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  balance numeric(12,2) not null default 0 check (balance >= 0),
  updated_at timestamptz not null default now()
);

create table if not exists public.topups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  amount numeric(12,2) not null check (amount > 0),
  provider text not null default 'truemoney',
  provider_reference text,
  status text not null default 'pending' check (status in ('pending','paid','failed','cancelled','refunded')),
  created_at timestamptz not null default now(),
  verified_at timestamptz
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  total numeric(12,2) not null check (total >= 0),
  status text not null default 'pending' check (status in ('pending','paid','processing','completed','cancelled','refunded')),
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  quantity integer not null default 1 check (quantity > 0),
  unit_price numeric(12,2) not null check (unit_price >= 0)
);

create table if not exists public.random_boxes (
  id uuid primary key default gen_random_uuid(),
  game text not null,
  name text not null,
  price numeric(12,2) not null check (price >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.rewards (
  id uuid primary key default gen_random_uuid(),
  box_id uuid not null references public.random_boxes(id) on delete cascade,
  name text not null,
  rarity text,
  probability numeric(7,4) not null check (probability >= 0 and probability <= 100),
  stock_count integer not null default 0 check (stock_count >= 0),
  is_active boolean not null default true
);

create table if not exists public.reward_probabilities (
  id uuid primary key default gen_random_uuid(),
  reward_id uuid not null references public.rewards(id) on delete cascade,
  probability numeric(7,4) not null check (probability >= 0 and probability <= 100),
  effective_from timestamptz not null default now()
);

create table if not exists public.reward_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  box_id uuid not null references public.random_boxes(id),
  reward_id uuid references public.rewards(id),
  price numeric(12,2) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admins (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  granted_at timestamptz not null default now()
);

create table if not exists public.admin_logs (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid not null references public.profiles(id),
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.wallets enable row level security;
alter table public.topups enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.random_boxes enable row level security;
alter table public.rewards enable row level security;
alter table public.reward_probabilities enable row level security;
alter table public.reward_history enable row level security;
alter table public.admins enable row level security;
alter table public.admin_logs enable row level security;

-- Public catalog reads.
create policy "products_read_active" on public.products for select using (is_active = true);
create policy "boxes_read_active" on public.random_boxes for select using (is_active = true);
create policy "rewards_read_active" on public.rewards for select using (is_active = true);

-- Users can read/update their own profile (username only should normally be mutable).
create policy "profile_self_read" on public.profiles for select using (auth.uid() = id);
create policy "profile_self_update" on public.profiles for update using (auth.uid() = id);

create policy "wallet_self_read" on public.wallets for select using (auth.uid() = user_id);
create policy "topup_self_read" on public.topups for select using (auth.uid() = user_id);
create policy "order_self_read" on public.orders for select using (auth.uid() = user_id);
create policy "order_items_self_read" on public.order_items for select using (
  exists (select 1 from public.orders o where o.id = order_id and o.user_id = auth.uid())
);
create policy "reward_history_self_read" on public.reward_history for select using (auth.uid() = user_id);

-- Inserts/updates affecting money, stock, rewards and admin data should be
-- performed by trusted server-side functions with authorization checks.
-- Do NOT expose service_role to the browser.
