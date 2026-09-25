# Server-side integration notes

For sensitive actions, use a Vercel server-side function / Supabase Edge Function:

- create and verify top-up
- apply wallet credit
- checkout / reserve stock
- create order
- server-side lucky draw
- admin CRUD
- admin logs
- credential release

The browser should only send authenticated requests. Never ship:
- SUPABASE_SERVICE_ROLE_KEY
- payment provider secret/API secret
- private signing keys
- privileged database credentials
