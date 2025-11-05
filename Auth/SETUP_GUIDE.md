# Headly Authentication Setup Guide

## 🎯 What You'll Set Up

1. **Supabase Account** - Your backend database and authentication
2. **Authentication Pages** - Login, Signup, Forgot Password
3. **Connect Everything** - Link your pages to Supabase

**Time Required:** 15-20 minutes
**Cost:** FREE (up to 50,000 users/month)

---

## Step 1: Create Supabase Account

### 1.1 Sign Up for Supabase

1. Go to https://supabase.com
2. Click **"Start your project"**
3. Sign up with your email or GitHub account
4. Verify your email if required

### 1.2 Create a New Project

1. Click **"New Project"**
2. Fill in the details:
   - **Name:** `headly-production` (or any name you like)
   - **Database Password:** Create a strong password and **SAVE IT SOMEWHERE SAFE**
   - **Region:** Choose closest to your users (e.g., US East, Asia Southeast)
   - **Pricing Plan:** Free (select this)
3. Click **"Create new project"**
4. Wait 2-3 minutes for your project to be set up

---

## Step 2: Get Your Supabase Credentials

### 2.1 Find Your API Keys

1. Once your project is ready, click on **"Settings"** (⚙️ icon) in the left sidebar
2. Click on **"API"** under Project Settings
3. You'll see two important values:

   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (long string under "Project API keys")

4. **Copy both of these** - you'll need them in the next step

---

## Step 3: Configure Your Authentication Pages

### 3.1 Update Login Page

1. Open `/Users/admin/Projects/Business/Headly/Auth/login.html`
2. Find these lines near the top of the `<script>` section:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';
```

3. Replace with your actual values:

```javascript
const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'your-long-anon-key-here';
```

### 3.2 Update Signup Page

1. Open `/Users/admin/Projects/Business/Headly/Auth/signup.html`
2. Find the same lines and replace with your credentials (same as above)

### 3.3 Update Forgot Password Page

1. Open `/Users/admin/Projects/Business/Headly/Auth/forgot-password.html`
2. Find the same lines and replace with your credentials (same as above)

---

## Step 4: Enable Email Authentication in Supabase

### 4.1 Configure Email Settings

1. In Supabase dashboard, go to **"Authentication"** in the left sidebar
2. Click on **"Providers"**
3. Make sure **"Email"** is enabled (it should be by default)
4. Scroll down to **"Email Templates"** (optional - customize welcome emails later)

### 4.2 Enable Email Confirmations (Optional)

1. Go to **"Authentication" → "Settings"**
2. Under **"User Signups"**, you can choose:
   - ✅ **Enable email confirmations** - Users must verify email (more secure, recommended)
   - OR disable it for testing (users can login immediately)

---

## Step 5: Set Up Google Sign-In (Optional but Recommended)

### 5.1 Create Google OAuth Credentials

1. Go to https://console.cloud.google.com
2. Create a new project or select existing
3. Go to **"APIs & Services" → "Credentials"**
4. Click **"Create Credentials" → "OAuth client ID"**
5. Configure:
   - **Application type:** Web application
   - **Name:** Headly
   - **Authorized redirect URIs:** Add this URL:
     ```
     https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback
     ```
     (Replace YOUR_PROJECT_REF with your Supabase project reference from Step 2)

6. Click **"Create"**
7. **Copy the Client ID and Client Secret**

### 5.2 Add Google Credentials to Supabase

1. In Supabase dashboard, go to **"Authentication" → "Providers"**
2. Find **"Google"** and click to expand
3. Toggle **"Enable Sign in with Google"** ON
4. Paste your:
   - **Client ID**
   - **Client Secret**
5. Click **"Save"**

---

## Step 6: Test Your Authentication

### 6.1 Test Signup

1. Open `signup.html` in your browser
2. Fill in:
   - Full Name: Test User
   - Email: your-email@example.com
   - Password: TestPassword123
3. Click **"Create Account"**
4. If email confirmation is enabled, check your email and click the confirmation link
5. Success! You should see a success message

### 6.2 Test Login

1. Open `login.html` in your browser
2. Enter the email and password you just created
3. Click **"Log In"**
4. You should be redirected to the dashboard (we'll create this next)

### 6.3 Test Forgot Password

1. Open `forgot-password.html`
2. Enter your email
3. Click **"Send Reset Link"**
4. Check your email for the password reset link

### 6.4 Test Google Sign-In (if configured)

1. Open `login.html` or `signup.html`
2. Click **"Continue with Google"**
3. Select your Google account
4. You should be logged in and redirected

---

## Step 7: View Your Users in Supabase

1. Go to Supabase dashboard
2. Click **"Authentication"** in the left sidebar
3. You'll see all your users listed here
4. You can:
   - See user emails, sign-up dates, last login
   - Manually delete users
   - View user metadata

---

## 🎉 You're Done!

Your authentication system is now live! You have:

✅ User signup with email/password
✅ User login
✅ Password reset functionality
✅ Google sign-in (if configured)
✅ Secure backend (Supabase)
✅ User management dashboard

---

## Next Steps

### Create Dashboard Page
Next, we'll create:
1. User dashboard to view saved forecasts
2. Settings page to update profile
3. Integrate with your Pro calculator

### Deploy to Vercel
After testing locally, we'll deploy to Vercel so your app is live on the internet!

---

## Troubleshooting

### "Invalid API key" error
- Double-check you copied the **anon public** key (not the service_role key)
- Make sure there are no extra spaces when pasting

### "Invalid login credentials" error
- If email confirmation is enabled, check your email and click the confirmation link first
- Password must be at least 8 characters

### Google sign-in not working
- Make sure you added the correct redirect URI to Google Console
- Verify Client ID and Secret are correct in Supabase

### Email not sending
- Check your spam folder
- Supabase Free tier has email limits - check your usage in dashboard

### Can't see login page
- Make sure you're opening the HTML file in a web browser
- Try a different browser (Chrome, Firefox, Safari)

---

## Support Resources

- **Supabase Docs:** https://supabase.com/docs/guides/auth
- **Supabase Discord:** https://discord.supabase.com
- **Video Tutorial:** https://www.youtube.com/watch?v=PdmKlne1gRY

---

## Security Notes

⚠️ **IMPORTANT:**
- Never commit your `service_role` key (only use `anon` key in frontend)
- Always use HTTPS in production
- Enable email confirmations for production
- Set up Row Level Security (RLS) policies (we'll do this in the database setup step)

---

## Files Created

- ✅ `/Auth/login.html` - Login page
- ✅ `/Auth/signup.html` - Signup page
- ✅ `/Auth/forgot-password.html` - Password reset page
- ✅ `/Auth/SETUP_GUIDE.md` - This guide

**Next to create:**
- 🔲 `/Dashboard/index.html` - User dashboard
- 🔲 Database tables for forecasts
- 🔲 Admin panel

---

Last updated: 2025-11-05
