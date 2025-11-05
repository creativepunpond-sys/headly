# Headly Pre-Launch Checklist
## Connecting All Components & Launch Preparation

**Date:** November 5, 2025  
**Version:** 1.1  
**Status:** ⏳ Pre-Launch Phase

---

## 🎯 Launch Strategy

### **Phase 1: Soft Launch** (This Week)
- Deploy Free Tier Calculator (anonymous, no auth required)
- Test with 10-20 beta users
- Collect feedback

### **Phase 2: Full Launch** (Week 2)
- Add authentication for saving calculations
- Enable Pro tier checkout
- Begin marketing campaign

---

## 📋 Pre-Launch Tasks

### **1. Navigation & Links** ⏳

#### **Landing Page Updates Needed:**

**Current Issue:** Landing page CTAs point to Auth/Signup  
**Fix Needed:** Add direct calculator link without auth requirement

**Files to Update:**
- `Product/Landing_Page/index.html`

**Changes:**
```html
<!-- BEFORE (line 547): -->
<a href="../../Auth/signup.html" class="btn btn-primary">

<!-- AFTER: -->
<a href="../Free_Tier/calculator.html" class="btn btn-primary">
```

**All CTAs to Update:**
1. Hero section "Try Free Trial" button (line 547)
2. Free plan "Start Free" button (line 739)
3. Bottom CTA "Start Free Trial" button (line 827)

**Keep Auth Links For:**
- Pro plan "Get Pro" button → `../../Payment/checkout-pro.html`
- Pro Max plan "Get Pro Max" button → `../../Payment/checkout.html`
- Nav bar "Sign Up" / "Log In" → Keep as is

---

#### **Calculator Updates:**

**File:** `Product/Free_Tier/calculator.html`

**Check Links:**
- [ ] Line 856: Upgrade button → `../../Payment/checkout-pro.html` ✅ (already correct)
- [ ] Add "Back to Home" link in header
- [ ] Add "Try Calculator" teaser on landing page

---

### **2. File Structure** ✅

**Current Structure:**
```
Headly/
├── Product/
│   ├── Landing_Page/
│   │   └── index.html                 ✅ Ready
│   ├── Free_Tier/
│   │   └── calculator.html            ✅ v1.1 Ready
│   ├── Pro_Tier_Mockup/
│   │   └── calculator_pro_final.html  ⏳ Needs benchmarks
│   └── Pro_Max_Tier/
│       └── calculator_pro_max.html    ⏳ Needs benchmarks
├── Auth/
│   ├── login.html                     ✅ Ready
│   ├── signup.html                    ✅ Ready
│   └── logout.html                    ✅ Ready
├── Payment/
│   ├── checkout-pro.html              ⏳ Needs testing
│   └── checkout.html (Pro Max)        ⏳ Needs testing
└── Dashboard/
    └── index.html                     ⏳ Needs integration
```

---

### **3. User Flows** 

#### **Flow A: Anonymous User (Free Calculator)**
```
Landing Page → Free Calculator → Results → Exit
                                         ↓
                                   [Optional] Sign Up
```

**Required:**
- [x] Landing page displays
- [x] Calculator works without auth
- [x] Results display correctly
- [ ] Add "Save Results" CTA → requires signup

---

#### **Flow B: Paid User (Pro/Pro Max)**
```
Landing Page → Pricing → Checkout → Payment → Dashboard → Pro Calculator
```

**Required:**
- [ ] Checkout pages work
- [ ] Payment integration (PromptPay/Card)
- [ ] Dashboard redirects after payment
- [ ] Pro calculators accessible

---

#### **Flow C: Returning User**
```
Landing Page → Login → Dashboard → Calculator History
```

**Required:**
- [ ] Login works
- [ ] Dashboard shows saved calculations
- [ ] Access to Pro features if subscribed

---

### **4. Testing Checklist**

#### **Landing Page:**
- [ ] All sections display correctly
- [ ] Language toggle works (EN/TH)
- [ ] Responsive on mobile
- [ ] All navigation links work
- [ ] CTA buttons point to correct pages
- [ ] Auth status displays (logged in/out)

#### **Free Calculator:**
- [x] Step 1: Industry selection works
- [x] Step 2: Channel selection works (1 channel limit)
- [x] Step 3: Operating hours selection works
- [x] Step 4: Smart defaults auto-populate
- [x] Calculate button produces results
- [x] Results display with monthly breakdown
- [x] Language toggle works throughout
- [x] Upgrade CTA displays
- [ ] "Back to Home" link works
- [ ] Works on mobile

#### **Authentication:**
- [ ] Signup form works
- [ ] Login form works
- [ ] Email verification (if enabled)
- [ ] Password reset works
- [ ] Logout works
- [ ] Session persists

#### **Payment:**
- [ ] Checkout-pro page loads
- [ ] PromptPay QR code displays
- [ ] Credit card form works
- [ ] Payment success redirect
- [ ] Subscription created in Supabase

#### **Cross-Browser:**
- [ ] Chrome/Edge
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

### **5. Content Updates**

#### **Landing Page:**
- [x] Hero copy
- [x] Feature descriptions
- [x] Social proof / testimonial
- [x] Pricing information
- [x] CTA copy
- [ ] FAQ section (optional)
- [ ] Contact information

#### **Calculator:**
- [x] Step instructions
- [x] Help text / tooltips
- [x] Industry descriptions
- [x] Smart defaults info box
- [x] Results interpretation
- [ ] Error messages (if needed)

---

### **6. Analytics & Tracking** ⏳

**Add to All Pages:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Events to Track:**
- Landing page views
- Calculator starts
- Calculator completions
- Upgrade button clicks
- Signup conversions
- Payment completions

---

### **7. SEO Optimization** ⏳

#### **Landing Page Meta Tags:**
```html
<meta name="description" content="Professional headcount calculator for customer service teams in Thailand. Supports LINE, Telegram, and traditional channels. Free forever.">
<meta name="keywords" content="headcount calculator, workforce planning, Thailand, LINE, Telegram, customer service, BPO, call center">

<!-- Open Graph -->
<meta property="og:title" content="Headly - Headcount Calculator for Thai CS Teams">
<meta property="og:description" content="Calculate your CS team size in 5 minutes. FREE forever.">
<meta property="og:image" content="[URL to preview image]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Headly - Headcount Calculator">
<meta name="twitter:description" content="Professional workforce planning for Thailand">
```

---

### **8. Performance Optimization** ⏳

**Checks:**
- [ ] Images optimized
- [ ] Minify CSS/JS (optional for v1)
- [ ] Enable gzip compression
- [ ] Fast server response time
- [ ] Mobile page speed < 3 seconds

---

### **9. Security Checks** ⏳

**Landing Page:**
- [x] HTTPS (when deployed)
- [x] No sensitive data exposed
- [x] Supabase keys are anon keys (safe for client)

**Calculator:**
- [x] No backend = minimal attack surface
- [x] Client-side calculations only
- [x] No user data stored (Free tier)

**Auth Pages:**
- [x] Supabase handles security
- [ ] Password requirements enforced
- [ ] Rate limiting on signup/login

---

### **10. Deployment Preparation** ⏳

#### **Option A: Vercel (Recommended)**

**Steps:**
1. Create Vercel account
2. Connect GitHub repo
3. Deploy with one click
4. Custom domain (optional)

**Files to deploy:**
```
/Product/Landing_Page/index.html  → homepage
/Product/Free_Tier/calculator.html → /calculator
/Auth/* → /auth/*
/Payment/* → /payment/*
```

**Deployment commands:**
```bash
# Not needed - Vercel auto-deploys from GitHub
```

---

#### **Option B: Netlify**

**Steps:**
1. Create Netlify account
2. Drag & drop /Product folder
3. Configure routes
4. Add custom domain

---

#### **Option C: GitHub Pages**

**Steps:**
```bash
# In Headly repo root
git add .
git commit -m "v1.1 Pre-launch"
git push origin main

# Enable GitHub Pages in repo settings
# Point to /Product folder
```

---

### **11. Domain & Hosting** ⏳

**Recommendations:**
- Domain: `headly.co` or `headly.app` or `getheadly.com`
- Hosting: Vercel (free tier sufficient)
- CDN: Cloudflare (optional, for speed)
- Email: Google Workspace or Zoho Mail

**DNS Setup:**
```
A     @       76.76.21.21 (Vercel IP)
CNAME www     cname.vercel-dns.com
```

---

### **12. Marketing Assets** ⏳

**Create:**
- [ ] Logo (SVG format)
- [ ] Favicon (16x16, 32x32)
- [ ] OG image (1200x630px)
- [ ] Screenshots for social media
- [ ] Demo video (2-3 minutes)
- [ ] LinkedIn banner
- [ ] Email templates

---

## 🚀 Launch Day Checklist

### **Morning of Launch:**

**Pre-Launch (1 hour before):**
- [ ] Final smoke test all pages
- [ ] Verify all links work
- [ ] Test calculator with 3 scenarios
- [ ] Check mobile responsiveness
- [ ] Clear browser cache
- [ ] Check analytics tracking

**Go Live:**
- [ ] Deploy to production
- [ ] Verify production URL works
- [ ] Test from different devices
- [ ] Send test through full user journey

**Announce:**
- [ ] LinkedIn post
- [ ] Twitter/X post  
- [ ] Facebook post (if applicable)
- [ ] Email to beta testers
- [ ] Share in relevant groups

---

## 📊 Success Metrics (Week 1)

**Free Tier:**
- [ ] 100+ calculator uses
- [ ] 60%+ completion rate
- [ ] 5+ pieces of feedback

**Conversions:**
- [ ] 20+ email signups
- [ ] 5+ "Upgrade" clicks
- [ ] 1-2 actual Pro subscriptions

**Technical:**
- [ ] <3 sec page load time
- [ ] Zero critical bugs
- [ ] 99%+ uptime

---

## 🔧 Quick Fixes Needed

### **Priority 1: Landing Page CTA Links**

Replace auth links with calculator links:

```javascript
// File: Product/Landing_Page/index.html
// Lines to update: 547, 739, 827

// Change FROM:
href="../../Auth/signup.html"

// Change TO:
href="../Free_Tier/calculator.html"
```

### **Priority 2: Add "Home" Link to Calculator**

```html
<!-- Add to calculator.html header (line ~27) -->
<div class="header">
    <a href="../Landing_Page/index.html" style="text-decoration: none;">
        <div class="logo">
            <span class="logo-text-en">Headly</span>
            <span class="logo-text-th" style="display: none;">เฮดลี่</span>
        </div>
    </a>
    <!-- Rest of header -->
</div>
```

---

## 📝 Post-Launch Todo

**Week 1:**
- [ ] Monitor analytics daily
- [ ] Respond to user feedback
- [ ] Fix any bugs reported
- [ ] Share user testimonials

**Week 2:**
- [ ] A/B test CTA copy
- [ ] Add FAQ section
- [ ] Create blog post about launch
- [ ] Reach out to first 10 users

**Month 1:**
- [ ] Collect 10+ testimonials
- [ ] Build Pro tier features
- [ ] Launch payment integration
- [ ] Begin outbound sales

---

## ✅ Current Status Summary

**Ready for Launch:**
- ✅ Landing Page v1.0
- ✅ Free Calculator v1.1 (with 2024 benchmarks)
- ✅ Authentication system
- ✅ Database (Supabase)

**Needs Work:**
- ⏳ Navigation links (15 min fix)
- ⏳ Pro calculator updates (1-2 hours)
- ⏳ Payment testing (30 min)
- ⏳ Analytics setup (30 min)

**Estimated Time to Launch:** 3-4 hours of focused work

---

## 🎯 Minimum Viable Launch

**What You Need:**
1. ✅ Landing page
2. ✅ Free calculator (working)
3. ⏳ Fixed navigation links
4. ⏳ Domain + hosting
5. ⏳ Analytics tracking

**What Can Wait:**
- Pro tier features (ship later)
- Payment integration (ship later)
- Dashboard (ship later)
- Marketing assets (iterate)

**Recommendation:** Fix navigation links (Priority 1) and deploy today. Everything else can be added post-launch.

---

**Last Updated:** November 5, 2025  
**Next Action:** Fix landing page CTA links → Deploy → Launch! 🚀
