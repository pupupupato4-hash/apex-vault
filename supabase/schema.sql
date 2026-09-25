create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  role text not null default 'member' check (role in ('member','admin','staff')),
  wallet_balance numeric(12,2) not null default 0 check (wallet_balance >= 0),
  created_at timestamptz not null default now()
);

create table if not exists products (
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

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id),
  total numeric(12,2) not null check (total >= 0),
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists wallet_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id),
  amount numeric(12,2) not null,
  type text not null check (type in ('topup','purchase','refund','adjustment')),
  status text not null default 'pending',
  reference text,
  created_at timestamptz not null default now()
);

create table if not exists random_boxes (
  id uuid primary key default gen_random_uuid(),
  game text not null,
  name text not null,
  price numeric(12,2) not null check (price >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists random_rewards (
  id uuid primary key default gen_random_uuid(),
  box_id uuid not null references random_boxes(id) on delete cascade,
  name text not null,
  rarity text,
  probability numeric(7,4) not null check (probability >= 0 and probability <= 100),
  stock_count integer not null default 0 check (stock_count >= 0),
  is_active boolean not null default true
);

create table if not exists random_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id),
  box_id uuid not null references random_boxes(id),
  reward_id uuid references random_rewards(id),
  price numeric(12,2) not null,
  created_at timestamptz not null default now()
);
