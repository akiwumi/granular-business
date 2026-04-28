# Supabase Auth, Login, and Invite Setup

This guide shows a simple way to add:

- a login page
- email + password authentication
- one-time user invites
- invite activation
- IP capture at activation time
- protected pages

It is written for the current site, which is a static frontend. The safest simple setup is:

- frontend: your existing site
- backend: Supabase
- auth: Supabase Auth
- database: Supabase Postgres
- server logic: small secure endpoints or Supabase Edge Functions

## Recommended Simple Architecture

Use this flow:

1. You create an invite for a specific email address.
2. Supabase stores a one-time invite record with a secure token.
3. The user opens the invite link.
4. The user sets their password and creates their account.
5. The system records the IP address used during activation.
6. The invite is marked as used.
7. Future logins use normal email + password.

Important:

- Do not trust frontend-only code for invite creation or activation rules.
- Invite creation and invite activation checks should be enforced on the server side.
- IP address should be stored as a security/audit field, not as a permanent lock unless you truly need that.

## What You Need In Supabase

Create a Supabase project and configure:

- Authentication
- A `profiles` table
- An `invites` table
- Row Level Security policies
- One secure server-side invite creation path
- One secure server-side invite activation path

## Step 1: Create the Supabase Project

1. Create a new project in Supabase.
2. Save these values:
   - Project URL
   - `anon` public key
   - `service_role` key
3. Keep the `service_role` key private.

You will use:

- `anon` key in the frontend
- `service_role` key only in secure backend code or Edge Functions

## Step 2: Configure Auth

In Supabase Auth settings:

1. Enable `Email` provider.
2. Turn on email/password sign-in.
3. Decide whether you want email confirmation:
   - simplest: off during testing
   - better for production: on
4. Set your site URL.
5. Add redirect URLs for:
   - local development
   - production
   - your invite activation page

Example redirect URLs:

```text
http://localhost:3000/login
http://localhost:3000/activate-invite
https://yourdomain.com/login
https://yourdomain.com/activate-invite
```

## Step 3: Create the Database Schema

Run the following SQL in the Supabase SQL editor.

### 3.1 Profiles table

This stores app-level user metadata linked to Supabase Auth users.

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  role text not null default 'user' check (role in ('admin', 'user')),
  invite_id uuid,
  activated_invite_at timestamptz,
  activated_invite_ip inet,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

### 3.2 Invites table

This stores one invite per intended user. Each invite has its own unique token.

```sql
create extension if not exists pgcrypto;

create table if not exists public.invites (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  token_hash text not null unique,
  status text not null default 'pending' check (status in ('pending', 'activated', 'expired', 'revoked')),
  expires_at timestamptz not null,
  created_by uuid references auth.users(id),
  activated_by uuid references auth.users(id),
  activated_ip inet,
  activated_at timestamptz,
  created_at timestamptz not null default now()
);
```

### 3.3 Updated-at trigger helper

```sql
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
```

```sql
drop trigger if exists profiles_set_updated_at on public.profiles;

create trigger profiles_set_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();
```

### 3.4 Auto-create profile on signup

This creates a profile row whenever a new auth user is created.

```sql
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;

  return new;
end;
$$;
```

```sql
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();
```

## Step 4: Enable Row Level Security

```sql
alter table public.profiles enable row level security;
alter table public.invites enable row level security;
```

## Step 5: Add Basic RLS Policies

These are intentionally simple.

### 5.1 Profiles policies

Users can read and update only their own profile.

```sql
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (auth.uid() = id);
```

```sql
create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);
```

### 5.2 Invite policies

Do not allow normal users to freely read or write invites from the client.

For the simple setup, invites should be managed only by:

- backend code using `service_role`, or
- a secure Edge Function

So you can start with no public invite policies at all.

## Step 6: Decide How Admin Access Works

You need one admin account that can create invites.

The simplest way:

1. Create your own user account first.
2. In SQL editor, promote that account to admin:

```sql
update public.profiles
set role = 'admin'
where email = 'your-email@example.com';
```

Your secure backend or Edge Function should check this admin role before creating invites.

## Step 7: How Invite Tokens Should Work

Do not store raw invite tokens in the database.

Use this pattern:

1. Generate a long random token.
2. Send the raw token to the invited user in the link.
3. Store only a hash of the token in the database.
4. When the user opens the link, hash the provided token and compare it to the stored hash.

Example invite link:

```text
https://yourdomain.com/activate-invite?token=RAW_RANDOM_TOKEN
```

Why this matters:

- if the database leaks, raw invite links are not exposed
- one-time tokens are safer than reusable passwords

## Step 8: Invite Creation Logic

Invite creation should happen server-side only.

The server-side flow:

1. Admin submits user email.
2. Server verifies the current user is an admin.
3. Server generates a secure random token.
4. Server hashes the token.
5. Server inserts a new `invites` row:
   - `email`
   - `token_hash`
   - `expires_at`
   - `created_by`
6. Server emails or displays the invite link.

### Minimal backend payload

Input:

```json
{
  "email": "invitee@example.com"
}
```

Output:

```json
{
  "invite_url": "https://yourdomain.com/activate-invite?token=..."
}
```

### Node example for secure token generation and hashing

Use this in a secure backend route or Edge Function, not in the browser.

```js
import crypto from "crypto";

const rawToken = crypto.randomBytes(32).toString("hex");
const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
```

### Example insert using Supabase server client

```js
const { data, error } = await supabaseAdmin
  .from("invites")
  .insert({
    email,
    token_hash: tokenHash,
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    created_by: adminUserId,
  })
  .select()
  .single();
```

## Step 9: Invite Activation Logic

This should also be enforced server-side.

The activation flow:

1. User opens `/activate-invite?token=...`
2. Frontend shows:
   - email field or prefilled email
   - password field
   - confirm password field
3. Frontend submits to a secure activation endpoint.
4. Server:
   - hashes the token
   - finds the invite
   - confirms it is `pending`
   - confirms it is not expired
   - confirms the email matches the invite
   - creates the auth user if needed
   - records activation IP
   - marks invite as `activated`
   - links invite to user profile

### Important order of operations

Recommended order:

1. Validate invite token.
2. Create the auth user with email/password.
3. Update `invites`.
4. Update `profiles`.

If any step fails, return a clear error and avoid partial updates where possible.

## Step 10: How To Capture IP Address

Do not try to get the IP from browser JavaScript.

Instead:

- capture IP in your backend route or Edge Function from the request headers/context
- record it during invite activation

### What to store

Store:

- activation IP
- activation timestamp
- activated user id

### Example update on activation

```sql
update public.invites
set
  status = 'activated',
  activated_at = now(),
  activated_by = :user_id,
  activated_ip = :ip_address
where id = :invite_id;
```

Then:

```sql
update public.profiles
set
  invite_id = :invite_id,
  activated_invite_at = now(),
  activated_invite_ip = :ip_address
where id = :user_id;
```

### Recommended use of IP

Use IP as:

- audit trail
- security signal
- suspicious login detection input

Do not permanently block the user to only that IP unless that is a hard business requirement.

## Step 11: Login Page

Your login page should include:

- email field
- password field
- sign-in button
- forgot password link
- optional link to activate invite

For Supabase email/password sign-in:

```js
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
});
```

After login:

- check session
- redirect to protected content

## Step 12: Password Reset

You should also add password reset from the start.

Frontend call:

```js
const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: "https://yourdomain.com/reset-password",
});
```

Then add a reset password page where the user sets a new password.

## Step 13: Protecting Pages

If you keep the project mostly static, the protected content should be hidden unless a valid Supabase session exists.

At minimum:

1. On page load, check `supabase.auth.getSession()`
2. If there is no session:
   - redirect to `/login`
3. If there is a session:
   - load protected content

Example client check:

```js
const { data } = await supabase.auth.getSession();
const session = data.session;

if (!session) {
  window.location.href = "/login.html";
}
```

Important:

- client-side checks improve UX
- real security for sensitive data must still be enforced server-side or via RLS-backed database access

## Step 14: Frontend Pages To Add

You should add these pages:

- `login.html`
- `activate-invite.html`
- `forgot-password.html`
- `reset-password.html`
- optionally `admin-invites.html`

### `login.html`

Purpose:

- regular sign-in

### `activate-invite.html`

Purpose:

- read token from URL
- collect email + password
- submit activation request

### `admin-invites.html`

Purpose:

- allow only admins to create/revoke invites

## Step 15: Secure Backend Options

Because this site is currently static, you need one small secure server-side layer for:

- creating invites
- activating invites
- optionally revoking invites

You have two simple options.

### Option A: Supabase Edge Functions

Best if you want to keep most of the stack inside Supabase.

Use Edge Functions for:

- `create-invite`
- `activate-invite`

Advantages:

- close to database
- uses service role securely
- simple deployment if you are already using Supabase

### Option B: Small Node server

Use a lightweight backend with Express, Fastify, or serverless routes.

Advantages:

- familiar if you want custom logic
- easy to expand later

If you want the simplest Supabase-centered path, choose Edge Functions.

## Step 16: Example Edge Function Responsibilities

### `create-invite`

Should:

- verify caller is authenticated
- verify caller is admin
- generate token
- hash token
- save invite
- return invite URL

### `activate-invite`

Should:

- validate token
- validate status and expiry
- create auth user or fail if already exists
- capture IP
- mark invite used
- update profile

## Step 17: Suggested Folder / App Changes

Since your current app is plain HTML/CSS/JS, a simple manual path is:

1. Keep marketing content public.
2. Add standalone auth pages.
3. Add one JS module for Supabase client setup.
4. Add one JS file for login.
5. Add one JS file for invite activation.
6. Add one JS file for route/session protection.

Suggested frontend files:

```text
/login.html
/activate-invite.html
/forgot-password.html
/reset-password.html
/admin-invites.html
/js/supabase-client.js
/js/login.js
/js/activate-invite.js
/js/admin-invites.js
/js/protect.js
```

## Step 18: Environment Variables

Frontend:

```text
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

Backend or Edge Function only:

```text
SUPABASE_SERVICE_ROLE_KEY=
```

Never expose:

- `service_role` key in browser code
- admin-only invite logic in browser-only code

## Step 19: Email Delivery Options

For invites, you can either:

### Simple first version

- create invite
- copy generated invite URL manually
- send it yourself by email

### Better version

- connect an email provider
- send the invite automatically

For a first implementation, manual sending is fine.

## Step 20: Security Rules You Should Keep

1. Use one-time invite tokens.
2. Hash tokens before storing them.
3. Add invite expiry.
4. Record activation IP server-side.
5. Restrict invite creation to admins only.
6. Never expose `service_role` key in the frontend.
7. Enable RLS on user data tables.
8. Add password reset flow.
9. Use HTTPS in production.
10. Consider adding rate limiting on invite activation and login endpoints.

## Step 21: Privacy / Legal Notes About IP Addresses

IP addresses are usually treated as personal data.

That means you should:

- mention IP collection in your privacy policy
- store only what you need
- avoid using IP as a rigid permanent lock unless necessary
- protect access to audit data

## Step 22: Testing Checklist

Before going live, test:

- admin can create invite
- non-admin cannot create invite
- invite link works once
- reused invite fails
- expired invite fails
- wrong email fails
- password setup works
- activation IP is recorded
- login works after activation
- password reset works
- protected pages redirect when logged out
- protected pages load when logged in

## Step 23: Simplest Build Plan

If you want the least-complex implementation path, do it in this order:

1. Create Supabase project.
2. Run the SQL schema from this document.
3. Configure email/password auth.
4. Create your admin account.
5. Build `login.html`.
6. Build `activate-invite.html`.
7. Create secure `create-invite` function.
8. Create secure `activate-invite` function.
9. Add route/session protection to private pages.
10. Add password reset.

## Step 24: What Not To Do

Do not:

- store plaintext invite tokens in the database
- create invites from browser-only code
- expose the service role key
- rely on client-side checks alone for access control
- permanently bind user access to a single IP unless you fully accept the usability issues

## Step 25: Minimal Manual Implementation Summary

If you want the simplest version that is still correct:

- use Supabase Auth for email/password
- use Supabase Postgres for `profiles` and `invites`
- use Edge Functions for `create-invite` and `activate-invite`
- hash invite tokens
- store activation IP
- make invites one-time-use and expiring
- keep marketing pages public
- protect private pages with session checks and server-enforced rules

## Optional: Example Activation Request Shape

Your activation page can submit a payload like:

```json
{
  "token": "raw_invite_token_from_url",
  "email": "invitee@example.com",
  "password": "user-selected-password"
}
```

The secure activation endpoint should:

1. hash `token`
2. find matching invite
3. verify `pending` and not expired
4. verify email matches
5. create user
6. record IP
7. mark invite activated

## Optional: Example Admin Invite Request Shape

```json
{
  "email": "invitee@example.com"
}
```

The secure invite creation endpoint should:

1. verify admin
2. create token
3. hash token
4. save invite
5. return invite URL

## Final Recommendation

For this site, the best balance of simplicity and correctness is:

- Supabase Auth
- Supabase Postgres
- Supabase Edge Functions
- static frontend pages for login and invite activation

That gives you a simple mental model while keeping invite generation and IP capture in a secure server-side layer.
