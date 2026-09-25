# APEX VAULT Web Starter

A production-oriented starter for **APEX VAULT**, a dark gaming marketplace designed for GitHub + Vercel + Supabase.

## Included

- Marketplace: Free Fire, eFootball, ROV, Roblox
- Search/filter/product detail/checkout
- Lucky Draw with transparent probability display
- Register/login/logout/profile
- Wallet balance and top-up request flow
- Purchase history and orders
- Credential Vault placeholder UI
- Admin dashboard structure
- Products, stock, rewards, users, wallet/top-up, orders and audit-log sections
- Supabase schema + RLS policies
- Environment variable template
- Responsive dark gaming UI
- No provider secrets in frontend

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` if you want to connect Supabase.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL Editor.
3. Create an authentication provider in Supabase Auth.
4. Put the public URL and anon key in `.env.local`.
5. Keep `service_role` and payment-provider secrets server-side only.

## Vercel

Import the GitHub repository into Vercel.

Build command:
`npm run build`

Output directory:
`dist`

Add the `VITE_*` variables in Vercel. Add server-only payment/service-role secrets only to server-side functions when those integrations are implemented.

## Payment integration

The top-up flow intentionally creates a **pending top-up request**. It does not fake a successful payment, bypass TrueMoney, or expose provider credentials. A future server/API route should create or verify an official payment transaction and update the top-up status after provider verification.

## Lucky Draw

The UI shows configured probabilities transparently. For a real-money/credit reward system, draw selection should be performed server-side with a cryptographically secure RNG and an auditable transaction. Do not trust a browser-only result for balance, stock, or reward ownership.

## Important

This is a starter application, not a claim that payment, financial settlement, anti-fraud, or identity verification is production-certified. Review security, legal, payment-provider terms, and local requirements before going live.

## Stitch source included

The uploaded Stitch APEX VAULT Gaming Marketplace package is preserved under:

`stitch-source/`

This allows the original generated UI/source to be referenced while the main application remains a Vite + React + Supabase project.

No secrets are copied into the frontend. Payment and privileged database operations remain intended for server-side functions.


## Additional Stitch source
The additional uploaded Stitch package is preserved under `stitch-source-2/` for reference/integration.
