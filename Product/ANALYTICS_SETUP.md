# 📊 Headly Analytics Setup Guide

## ✅ What's Been Implemented

### Google Analytics 4 Integration

**Status**: Code added, awaiting your GA4 tracking ID

**What we track:**

#### 1. Page Views (Automatic)
- Landing page visits
- Calculator page visits  
- Payment page visits
- All other pages

#### 2. CTA Clicks
```javascript
// Hero section - "Try Free Calculator"
gtag('event', 'cta_click', {
  'tier': 'free',
  'location': 'hero'
});

// Pricing section - "Try Free Calculator"  
gtag('event', 'cta_click', {
  'tier': 'free', 
  'location': 'pricing_section'
});

// Bottom CTA - "Try Free Calculator"
gtag('event', 'cta_click', {
  'tier': 'free',
  'location': 'bottom_cta'
});
```

#### 3. Demo Views
```javascript
// Preview Pro Features
gtag('event', 'demo_view', {
  'tier': 'pro',
  'location': 'pricing_section'
});

// Preview Pro Max Features
gtag('event', 'demo_view', {
  'tier': 'promax',
  'location': 'pricing_section'
});
```

#### 4. Upgrade Clicks
```javascript
// Get Pro button
gtag('event', 'upgrade_click', {
  'tier': 'pro',
  'location': 'pricing_section'
});

// Get Pro Max button
gtag('event', 'upgrade_click', {
  'tier': 'promax',
  'location': 'pricing_section'
});
```

#### 5. Pricing Section Views
```javascript
// View Pricing button in hero
gtag('event', 'view_pricing', {
  'location': 'hero'
});
```

---

## 🚀 Setup Instructions

### Step 1: Create Google Analytics 4 Account

1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Create account:
   - Account name: "Headly"
   - Property name: "Headly Website"
   - Time zone: "Thailand (GMT+7)"
   - Currency: "Thai Baht (฿)"
4. Get your **Measurement ID** (format: G-XXXXXXXXXX)

### Step 2: Add Your Tracking ID

**Replace in these files:**

#### Landing Page
File: `/Users/admin/Projects/Business/Headly/Product/Landing_Page/index.html`

Find (line 10):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

Replace both instances of `G-XXXXXXXXXX` with your actual ID.

#### Calculator Pages (Add to each)

Add this code to the `<head>` section of:
- `/Users/admin/Projects/Business/Headly/Product/Free_Tier/calculator.html`
- `/Users/admin/Projects/Business/Headly/Product/Pro_Tier/calculator.html`
- `/Users/admin/Projects/Business/Headly/Product/Pro_Max_Tier/calculator.html`

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

### Step 3: Add Calculator Event Tracking

**Events to track in calculator:**

```javascript
// When user starts calculator (Step 1)
gtag('event', 'calculator_started', {
  'page': 'free' // or 'pro', 'promax'
});

// When user selects industry
gtag('event', 'industry_selected', {
  'industry': 'fintech', // BPO, banking, etc.
  'page': 'free'
});

// When user selects channel  
gtag('event', 'channel_selected', {
  'channel': 'line', // phone, chat, email, etc.
  'page': 'free'
});

// When user completes calculation
gtag('event', 'calculation_completed', {
  'industry': 'fintech',
  'channel': 'line',
  'operation_hours': '24/7',
  'team_size': 11,
  'page': 'free'
});

// When user clicks upgrade button
gtag('event', 'upgrade_intent', {
  'from_tier': 'free',
  'to_tier': 'pro',
  'location': 'results_page'
});
```

### Step 4: Verify Installation

1. Deploy your site (local or production)
2. Open browser DevTools > Network tab
3. Visit landing page
4. Look for request to `google-analytics.com/g/collect`
5. Check GA4 Real-Time reports (should see activity within 30 seconds)

---

## 📈 What You'll See in Google Analytics

### Real-Time Reports
- Active users right now
- Page views in real-time
- Events as they happen

### Engagement Reports
- **Pages and screens**: Most visited pages
- **Events**: All custom events (cta_click, demo_view, etc.)
- **Conversions**: Mark important events as conversions

### User Acquisition
- Where traffic comes from (organic, direct, referral)
- Landing pages
- Campaign performance

### Demographics (After data accumulates)
- Country/city
- Device type (desktop/mobile)
- Browser/OS

---

## 🎯 Key Metrics to Track

### Validation Phase (Week 1-4)

**Traffic**:
- Total visitors
- Page views per visitor
- Bounce rate

**Engagement**:
- "Try Free Calculator" click rate
- Calculator completion rate
- Time on calculator page

**Interest**:
- "Preview Pro" click rate
- "Upgrade" click rate  
- Payment page visits

### Revenue Phase (Month 2+)

**Conversion Funnel**:
```
Landing Page View → 100%
  ↓
CTA Click → 40-60%
  ↓
Calculator Started → 80-90%
  ↓
Calculation Completed → 60-80%
  ↓
Upgrade Button Clicked → 5-10%
  ↓
Payment Page Visited → 80%
  ↓
Payment Completed → 40-60%
```

**Target Metrics**:
- Landing → Calculator: >50%
- Calculator → Completion: >70%
- Completion → Upgrade Click: >5%
- Upgrade Click → Payment: >50%

---

## 🔥 Advanced Tracking (Optional)

### Add Mixpanel for User-Level Analytics

Mixpanel gives you user-level tracking (who did what, when):

1. Sign up: https://mixpanel.com/ (FREE tier)
2. Get Project Token
3. Add to every page:

```html
<!-- Mixpanel -->
<script type="text/javascript">
  (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
  for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
  MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
  
  mixpanel.init('YOUR_PROJECT_TOKEN');
</script>
```

4. Track events:

```javascript
// Track page view
mixpanel.track('Page Viewed', {
  'page': 'landing'
});

// Track calculation
mixpanel.track('Calculation Completed', {
  'industry': 'fintech',
  'channel': 'line',
  'team_size': 11
});

// Identify users (after login)
mixpanel.identify('user_123');
mixpanel.people.set({
  '$email': 'user@example.com',
  'subscription': 'pro'
});
```

---

## 📊 Dashboard Setup (Google Analytics)

### Create Custom Dashboard

1. In GA4, go to "Explore"
2. Create new exploration
3. Add these tiles:

**Tile 1: Conversion Funnel**
- Landing page views
- CTA clicks
- Calculator starts
- Calculations completed
- Upgrade clicks
- Payments completed

**Tile 2: Top Industries**
- Custom dimension: `industry`
- Metric: Event count

**Tile 3: Top Channels**  
- Custom dimension: `channel`
- Metric: Event count

**Tile 4: Traffic Sources**
- Dimension: Source/Medium
- Metrics: Users, Sessions, Conversions

---

## ⚙️ Custom Dimensions (Advanced)

To track industry, channel, etc. as dimensions:

1. Go to Admin > Data display > Custom definitions
2. Add custom dimensions:
   - `industry` (Event-scoped)
   - `channel` (Event-scoped)
   - `tier` (Event-scoped)
   - `team_size` (Event-scoped)

3. These will appear in reports after 24-48 hours

---

## ✅ Quick Setup Checklist

- [ ] Create Google Analytics 4 account
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Replace tracking ID in landing page
- [ ] Add tracking code to calculator pages
- [ ] Deploy to test server
- [ ] Verify tracking in Real-Time reports
- [ ] Set up conversion events
- [ ] Create custom dashboard
- [ ] (Optional) Set up Mixpanel

---

## 🎯 What to Track Week 1

**Day 1-3:**
- Total visitors
- Pages per session
- Bounce rate
- CTA click rate

**Day 4-7:**
- Calculator completion rate
- Top industries selected
- Top channels selected
- Upgrade click rate

**Week 2+:**
- Traffic sources (where users come from)
- Conversion rate (landing → payment)
- Most popular features
- Time to complete calculator

---

## 🚨 Common Issues

### Tracking Not Working

**Check:**
1. Is tracking ID correct? (G-XXXXXXXXXX format)
2. Is page loading correctly? (no JavaScript errors)
3. Is AdBlocker enabled? (disable for testing)
4. Wait 10-30 seconds, then check Real-Time reports

### Events Not Showing

**Fix:**
1. Check browser console for errors
2. Verify `gtag('event', ...)` is being called
3. Make sure GA4 code loads before event code
4. Wait 24-48 hours for historical reports

---

## 📞 Need Help?

**Google Analytics Resources:**
- Help Center: https://support.google.com/analytics
- YouTube Channel: https://www.youtube.com/GoogleAnalytics
- Community: https://www.en.advertisercommunity.com/t5/Google-Analytics/ct-p/Google_Analytics

**Quick Questions:**
- Use Google Analytics Help Chat (bottom right in GA4)

---

**Created**: November 5, 2025  
**Status**: Ready to implement  
**Estimated setup time**: 30 minutes
