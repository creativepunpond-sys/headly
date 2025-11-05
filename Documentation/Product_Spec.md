# Headly - Product Specification

**Version:** 1.0 (Free Tier MVP)
**Date:** November 5, 2025
**Status:** ✅ Free Tier Complete, Pro Tier In Development

---

## 🎯 Product Overview

**Headly** is a SaaS headcount forecasting calculator designed specifically for customer service teams in Southeast Asia, with special focus on the Thailand market.

### **Unique Selling Propositions:**

1. **LINE & Telegram Support** - The ONLY workforce planning tool that supports LINE and Telegram
2. **Thailand Market Focus** - Thai + English bilingual, PromptPay payments, local industry understanding
3. **50x Cheaper** - ฿1,999/month vs ฿90,000+/month for enterprise WFM tools
4. **5-Minute Setup** - No implementation, training, or complex configuration
5. **Industry-Specific** - Pre-configured templates for BPO, Banking, Fintech, E-commerce, etc.
6. **Proven Methodology** - Used by CS managers in fintech and BPO for real workforce planning

---

## 📋 Product Tiers

### **Free Tier** ✅ **LAUNCHED**

**Purpose:** Lead generation + demonstrate value

**Features:**
- ✅ Industry selection (10 industries)
- ✅ Single channel calculation (Chat, Phone, LINE, Telegram, Email, Facebook)
- ✅ Operating hours presets (24/7, Business Hours, Extended)
- ✅ 3-month forecasting
- ✅ Basic headcount calculation with gap analysis
- ✅ Thai + English bilingual interface
- ✅ Industry-specific default KPIs (CPD, Shrinkage, Occupancy)
- ✅ Monthly breakdown table with status badges
- ✅ Upgrade CTA to Pro tier

**Limitations:**
- ❌ Single channel only (no multi-channel blending)
- ❌ No peak hours analysis
- ❌ No shift planning
- ❌ No PDF export
- ❌ No custom KPI targets
- ❌ No data saving/historical tracking

**File:** `/Product/Free_Tier/calculator.html`

---

### **Pro Tier** 🚧 **IN DEVELOPMENT**

**Pricing:** ฿1,999/month (~$59 USD)

**Target Market:** Small-medium CS teams (50-200 agents)

**Additional Features:**
- ✅ Multi-channel blended calculations (Chat + Phone + LINE + Telegram simultaneously)
- ✅ Custom operating hours (set exact times per day)
- ✅ Custom KPI targets (set your own CPD, AHT, Occupancy, Shrinkage)
- ✅ Peak hours analysis (hourly breakdown with charts)
- ✅ 12-month forecasting
- ✅ Basic shift planning (suggested shifts)
- ✅ PDF export (professional reports)
- ✅ Save scenarios (compare different plans)
- ✅ Email support

**Limits:**
- Up to 100 agents
- 1 team/department
- Monthly data retention

**Status:** Planned for December 2025 launch

---

### **Business Tier** 🔮 **PLANNED**

**Pricing:** ฿5,999/month (~$179 USD)

**Target Market:** Multi-team operations, BPO companies

**Additional Features:**
- Unlimited agents
- Multi-team/department support
- Advanced shift optimization with coverage heatmaps
- Campaign scenarios (1.5x, 2x, 3x volume planning)
- Historical data tracking and trend analysis
- White-label reports (custom branding)
- API access
- Priority support (Thai + English)
- Dedicated account manager

**Status:** Q1 2026

---

### **Enterprise Tier** 🔮 **PLANNED**

**Pricing:** ฿14,999+/month (~$449+ USD)

**Target Market:** Large BPO, multi-country operations

**Additional Features:**
- Multi-location support
- Custom integrations (Zendesk, Freshdesk, Salesforce)
- Custom industry templates
- SSO/SAML authentication
- Dedicated infrastructure
- SLA guarantee (99.9% uptime)
- On-site training
- Custom development

**Status:** Q2 2026

---

## 🏗️ Technical Architecture

### **Free Tier (Current)**

**Technology Stack:**
- Pure HTML/CSS/JavaScript (no frameworks)
- Single-file application (130 KB)
- No backend required
- No database
- Runs entirely in browser
- Works offline after initial load

**Why This Stack:**
- Zero deployment complexity
- Can be emailed as attachment
- Works on any device with browser
- No hosting costs for Free tier
- Fast iteration and testing

**Browser Support:**
- ✅ Chrome/Edge (Chromium)
- ✅ Safari
- ✅ Firefox
- ✅ Mobile browsers

---

### **Pro Tier (Planned Architecture)**

**Technology Stack:**
- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **Authentication:** Auth0 or Firebase Auth
- **Payments:** Omise (for PromptPay + Credit Card)
- **Hosting:** Vercel (frontend) + Railway/Render (backend)
- **Storage:** AWS S3 (for PDF exports)

**Key Components:**
1. User authentication & subscription management
2. Saved scenarios database
3. PDF generation service
4. Payment integration (PromptPay + Credit Card)
5. Email notification service

---

## 📊 Industry Defaults

Each industry has pre-configured KPIs based on workforce management best practices:

| Industry | CPD | Shrinkage | Occupancy | Notes |
|----------|-----|-----------|-----------|-------|
| BPO / Call Center | 35 | 19% | 90% | High volume, standard metrics |
| Banking | 25 | 15% | 85% | Lower CPD, more complex interactions |
| Fintech / Crypto | 30 | 19% | 90% | Based on fintech industry standards |
| E-commerce | 40 | 20% | 85% | Higher CPD, simpler queries |
| Hospitality | 35 | 22% | 85% | Seasonal variations |
| Healthcare | 25 | 18% | 85% | Complex, regulated |
| Government | 20 | 15% | 80% | Lower productivity expectations |
| Logistics | 45 | 20% | 90% | High volume, tracking queries |
| B2B / Enterprise | 30 | 15% | 85% | Lower volume, complex |
| Other | 35 | 19% | 90% | Default fallback |

**Formulas Used:**

```
Weekly Volume = Monthly Volume ÷ 4.33
AHT (Average Handling Time) = 7.5 hours ÷ CPD
Workload = Weekly Volume × AHT
Base HC = Workload ÷ 37.5 hours/week
After Shrinkage = Base HC ÷ (1 - Shrinkage %)
Required HC = ROUNDUP(After Shrinkage ÷ Occupancy)
```

---

## 🎨 Design System

### **Colors:**
- Primary: `#667eea` → `#764ba2` (Purple gradient)
- Secondary: `#f093fb` → `#f5576c` (Pink gradient for CTAs)
- Success: `#48bb78`
- Warning: `#f56565`
- Background: `#f7fafc`
- Text: `#2d3748`

### **Typography:**
- Font Stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Noto Sans Thai'`
- Headings: Bold, 24px-48px
- Body: Regular, 16px
- Line Height: 1.6

### **Components:**
- Cards with rounded corners (15px)
- Soft shadows (`0 5px 20px rgba(0,0,0,0.1)`)
- Smooth transitions (0.3s)
- Gradient buttons with hover effects
- Progress indicators
- Status badges (color-coded)

---

## 🌍 Localization

### **Supported Languages:**
1. **English** (Primary for international teams)
2. **Thai** (Primary for local market)

### **Implementation:**
- Client-side language toggle (instant switch)
- All text duplicated in both languages
- CSS display toggle (no page reload)
- Language preference stored in localStorage (Pro tier)

### **Future Languages (Regional Expansion):**
- Vietnamese (Year 2)
- Tagalog/Filipino (Year 2)
- Bahasa Indonesia (Year 3)

---

## 💰 Business Model

### **Revenue Streams:**

**1. Subscription Revenue (Primary)**
- Free: ฿0 (lead generation)
- Pro: ฿1,999/month
- Business: ฿5,999/month
- Enterprise: ฿14,999+/month

**2. One-Time Services**
- Custom industry template: ฿9,999
- Implementation/training: ฿15,000
- Integration development: ฿25,000+

**3. Annual Prepay Discount**
- 2 months free (16.7% discount)
- Better cash flow
- Lower churn

**4. White-Label Licensing (Future)**
- HR software companies license the calculator
- ฿50,000-100,000/year per partner

---

## 📈 Go-to-Market Strategy

### **Phase 1: Validation (Months 1-3)**

**Objective:** Validate market demand

**Tactics:**
1. Launch Free tier calculator
2. Create landing page with industry professional testimonial
3. LinkedIn outreach to 50 CS/Operations managers in Thailand
4. Offer free beta access to Pro tier for 10 companies
5. Collect testimonials and feedback

**Success Metrics:**
- 500+ Free tier users
- 10 beta customers for Pro
- 5 testimonials collected
- 70%+ would pay for Pro

---

### **Phase 2: Launch (Months 4-6)**

**Objective:** Launch paid Pro tier

**Tactics:**
1. Launch Pro tier (฿1,999/month)
2. Convert beta users to paying customers
3. Content marketing (Thai blog posts)
4. LinkedIn ads targeting Thai CS managers
5. Partner with Thai HR SaaS companies (MiHCM, BetterHR)

**Success Metrics:**
- 50 paying Pro customers
- ฿99,950/month MRR
- 30% conversion from Free to Pro
- <10% monthly churn

---

### **Phase 3: Scale (Months 7-12)**

**Objective:** Achieve profitability and scale

**Tactics:**
1. Launch Business tier
2. Build API for integrations
3. Expand content marketing
4. Attend Thailand CS/BPO industry events
5. Launch referral program (1 month free for referrals)

**Success Metrics:**
- 200 paying customers (mix of Pro + Business)
- ฿500,000+/month MRR
- Break-even on operations
- Ready for regional expansion

---

## 🎯 Target Customer Segments

### **Primary Market (Thailand):**

**1. BPO / Call Center Companies (Priority 1)**
- Size: 10-500 agents
- Locations: Bangkok, Chiang Mai, Phuket
- Pain: Manual Excel forecasting, high turnover, shift planning chaos
- Estimated: 500+ companies in Thailand
- Willingness to pay: High (directly impacts costs)

**2. Fintech / Crypto Companies (Priority 2)**
- Examples: Bitkub, Zipmex, SCB Easy, True Money
- Pain: Night shift coverage, regulatory staffing, rapid growth
- Estimated: 100+ companies
- Willingness to pay: Very high (well-funded, tech-savvy)
- **Competitive Advantage:** Creator has 5+ years fintech CS experience

**3. E-commerce Customer Service**
- Companies: Shopee TH, Lazada, JD Central, Thai retailers
- Pain: Peak season planning (11.11, 12.12), flash sales
- Estimated: 200+ companies
- Willingness to pay: Medium-high (seasonal needs)

**4. Banking KYC/B Operations**
- All major Thai banks need KYC/B planning
- Regulatory compliance requirements
- Estimated: 20+ banks
- Willingness to pay: Very high (compliance critical)

**5. Hotel / Tourism Contact Centers**
- Post-COVID recovery creating staffing needs
- Multilingual support planning
- Estimated: 100+ companies
- Willingness to pay: Medium

---

## 🆚 Competitive Analysis

### **Direct Competitors (Global):**

**1. NICE WFM**
- **Pricing:** $30,000-$190,000/year
- **Strengths:** Enterprise features, proven at scale, Erlang C
- **Weaknesses:** Too expensive for SMEs, no LINE/Telegram, no Thai language
- **Our Advantage:** 50x cheaper, LINE/Telegram support, Thai market focus

**2. Calabrio WFM**
- **Pricing:** $50,000+/year
- **Strengths:** Contact center focus, quality management
- **Weaknesses:** Complex implementation, expensive
- **Our Advantage:** 5-minute setup vs 6-month implementation

**3. Zendesk WFM**
- **Pricing:** Add-on to Zendesk ($$$)
- **Strengths:** Integrates with Zendesk
- **Weaknesses:** Requires Zendesk subscription, no LINE/Telegram
- **Our Advantage:** Standalone tool, supports LINE/Telegram

---

### **Indirect Competitors:**

**1. Excel / Google Sheets**
- **Pricing:** Free
- **Strengths:** Flexible, familiar
- **Weaknesses:** Error-prone, not shareable, no templates
- **Our Advantage:** Automated, professional, industry-specific

**2. HR Software (MiHCM, BetterHR)**
- **Pricing:** ฿50-200/employee/month
- **Strengths:** Full HRIS features
- **Weaknesses:** General HR, not WFM-specific
- **Our Advantage:** Specialized for headcount forecasting
- **Partnership Opportunity:** Integrate as add-on

---

## 📊 Revenue Projections

### **Conservative Scenario (Year 1):**

| Metric | Value |
|--------|-------|
| Free tier users | 500 |
| Free → Pro conversion | 10% |
| Paying customers | 50 |
| Average revenue | ฿1,999/month |
| MRR | ฿99,950 |
| ARR | ฿1,199,400 (~$36K USD) |

### **Moderate Scenario (Year 2):**

| Metric | Value |
|--------|-------|
| Free tier users | 2,000 |
| Paying customers | 200 (Pro + Business mix) |
| Average revenue | ฿2,500/month |
| MRR | ฿500,000 |
| ARR | ฿6,000,000 (~$180K USD) |

### **Optimistic Scenario (Year 3):**

| Metric | Value |
|--------|-------|
| Free tier users | 10,000 |
| Paying customers | 500 |
| Average revenue | ฿3,000/month |
| MRR | ฿1,500,000 |
| ARR | ฿18,000,000 (~$540K USD) |

---

## ✅ What's Been Built (Current Status)

### **Completed:**
- ✅ Free Tier calculator (fully functional)
- ✅ Bilingual support (Thai + English)
- ✅ Industry selection with 10 industries
- ✅ Multi-channel selection (Chat, Phone, LINE, Telegram, Email, Facebook)
- ✅ Operating hours presets
- ✅ 3-month forecasting
- ✅ Calculation engine with industry-specific formulas
- ✅ Results page with monthly breakdown
- ✅ Status badges (Sufficient, Need +X, Surplus)
- ✅ Upgrade CTA to Pro tier
- ✅ Professional landing page (Thai + English)
- ✅ Responsive design (desktop + mobile)

### **Files Created:**
1. `/Product/Free_Tier/calculator.html` - Free tier calculator (130 KB)
2. `/Product/Landing_Page/index.html` - Marketing landing page (40 KB)
3. `/Documentation/Product_Spec.md` - This document

---

## 🚀 Next Steps

### **Immediate (This Week):**
1. ✅ Test Free tier calculator with 10 different scenarios
2. ✅ Get feedback from 2-3 CS managers
3. ✅ Create social media preview images
4. ✅ Write LinkedIn post announcing Free tier

### **Short-term (Next 2 Weeks):**
5. Create professional testimonial and case study
6. Set up Google Analytics on landing page
7. Create Thai blog post: "วิธีคำนวณจำนวนพนักงาน Contact Center"
8. Reach out to 20 Thai BPO companies on LinkedIn
9. Set up email collection for Pro waitlist

### **Medium-term (Next Month):**
10. Develop Pro tier MVP (React + Node.js)
11. Set up payment integration (Omise for PromptPay)
12. Create pricing page and signup flow
13. Build user authentication
14. Launch beta program (10 companies)

---

## 📝 Success Criteria

### **Free Tier Success:**
- ✅ Calculator loads in < 2 seconds
- ✅ Works on mobile and desktop
- ✅ Calculations are accurate
- ✅ Clear upgrade path to Pro
- ✅ Bilingual works perfectly

### **Pro Tier Success (Future):**
- 50+ paying customers in first 3 months
- < 10% monthly churn
- 30%+ conversion from Free to Pro
- 4.5+ star rating from users
- Break-even on operations by Month 6

---

## 🎓 Lessons from Real-World Usage

**What worked in practice:**
1. ✅ Simple, focused tool beats complex software
2. ✅ Pre-filled with real data = instant value
3. ✅ Professional PDF export for management
4. ✅ Industry-specific assumptions (not generic)
5. ✅ Single HTML file = easy to share

**Applied to WorkforcePlanner:**
- Free tier is simple and focused (proven approach)
- Industry templates = instant value
- Upgrade CTA for advanced features (PDF, multi-channel)
- Pro tier will have management-ready reports

---

## 📞 Contact & Support

**Creator:** Poom
**Role:** CS Manager with 5+ years experience in Fintech
**Email:** [Your email]
**LinkedIn:** [Your profile]

**For questions about:**
- Product features → This document
- Thailand market → `/Business_Plan/Thailand_Market_Analysis.md`
- Pricing → Landing page or this document
- Technical → `/Product/Free_Tier/calculator.html` (see source code)

---

**Last Updated:** November 5, 2025
**Version:** 1.0
**Status:** ✅ Free Tier Launched, Pro Tier In Development
