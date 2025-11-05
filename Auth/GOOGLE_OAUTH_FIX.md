# Google OAuth Redirect Fix

## 🐛 Problem
When you sign in with Google, it redirects to Neptune/Scruncies instead of Headly Dashboard.

## 🔧 Solution

### **Option 1: Deploy to Vercel First (RECOMMENDED)**

Google OAuth doesn't work well with local `file://` URLs. Deploy Headly to Vercel first:

1. **Deploy to Vercel:**
   ```bash
   # We'll do this together in next session
   ```

2. **Update Supabase Redirect URLs:**
   - Go to: https://supabase.com/dashboard
   - Select your project: `ncjpkpkobxzinagrhbcl`
   - Go to: **Authentication** → **URL Configuration**
   - Add your Vercel URL: `https://your-headly-app.vercel.app/Dashboard/index.html`

3. **Done!** Google OAuth will redirect correctly.

---

### **Option 2: Add Headly Redirect to Supabase (Temporary Local Fix)**

If you want to test locally first:

1. **Go to Supabase Dashboard:**
   - URL: https://supabase.com/dashboard/project/ncjpkpkobxzinagrhbcl
   - Login with: creativepunpond@gmail.com

2. **Navigate to Authentication Settings:**
   - Left sidebar: **Authentication**
   - Click: **URL Configuration**

3. **Add Redirect URLs:**
   
   Find the section **"Redirect URLs"** and add:
   ```
   file:///Users/admin/Projects/Business/Headly/Dashboard/index.html
   ```
   
   **OR** add a wildcard for local development:
   ```
   file:///*
   ```

4. **Save Changes**

5. **Test Again:**
   - Open: `file:///Users/admin/Projects/Business/Headly/Auth/signup.html`
   - Click "Continue with Google"
   - Should redirect to Dashboard now

---

### **Option 3: Use Email/Password Instead (Works Now)**

Google OAuth is optional. Email/password signup works perfectly:

1. **Sign Up:**
   - Open: `Auth/signup.html`
   - Enter: Name, Email, Password
   - Click "Create Account"
   - ✅ Redirects to login page

2. **Login:**
   - Open: `Auth/login.html`
   - Enter: Email, Password
   - Click "Log In"
   - ✅ Redirects to Dashboard

---

## 🎯 Recommended Flow

**For NOW (Testing Locally):**
- Use **Email/Password** signup/login
- Skip Google OAuth until deployed

**After Deploying to Vercel:**
- Configure Google OAuth with real domain
- Add Vercel URL to Supabase redirect URLs
- Google OAuth will work perfectly

---

## 📝 Current User Journey (Without Google OAuth)

```
Landing Page → "Try Free Trial" button
    ↓
Signup Page → Enter email/password
    ↓
Login Page → Enter credentials
    ↓
Dashboard → Access Free Calculator
    ↓
Free Calculator → Start forecasting
```

---

## ✅ What Works Right Now

- ✅ Landing page
- ✅ Email/Password signup
- ✅ Email/Password login
- ✅ Dashboard after login
- ✅ Free calculator access
- ✅ Language toggle (Thai/English)

## ⏳ What Needs Deployment

- ⏳ Google OAuth (needs real domain)
- ⏳ Proper redirect URLs
- ⏳ Email confirmation links

---

## 🚀 Next Steps

1. **Test Email/Password Flow:**
   - Create account with email
   - Login with credentials
   - Access Dashboard
   - Use Free Calculator

2. **When Ready to Deploy:**
   - Deploy to Vercel (5 minutes)
   - Configure Google OAuth in Supabase
   - Add redirect URLs
   - Test Google sign-in

---

**Want me to help you deploy to Vercel now? It's quick and free!** 🎉
