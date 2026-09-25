# Supabase

Run `schema.sql` in a new Supabase project.

Auth is handled by Supabase Auth. The `profiles` row should be created by a trusted trigger/function after signup, or by a protected server-side workflow.

For production:
- review every RLS policy
- create admin authorization through server-side checks
- keep service_role private
- use transactions/functions for wallet and stock changes
- record immutable audit events for financial/admin operations
