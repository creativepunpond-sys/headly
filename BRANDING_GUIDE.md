# 🎨 Headly - Brand Guidelines

**Version:** 1.0
**Date:** November 5, 2025
**Status:** ✅ Official Brand Identity

---

## 🎯 Brand Overview

**Headly** is a professional yet approachable headcount forecasting tool for Southeast Asian customer service teams.

**Brand Personality:**
- Professional but friendly
- Smart but simple
- Modern but accessible
- Data-driven but human

**Brand Promise:**
> "Headcount made easy" - From 2 hours in Excel to 5 minutes with Headly

---

## 📝 Brand Name

### **Primary Name:**
**Headly**

### **Pronunciation:**
- English: "HED-lee" (rhymes with "deadly")
- Thai: "เฮดลี่" (เฮด-ลี่)

### **Name Meaning:**
- "Head" = Headcount (what we calculate)
- "-ly" = Friendly, approachable suffix (like Grammarly, Assembly)
- Together = "Making headcount planning easy and friendly"

### **Taglines:**

**Primary (English):**
> "Headcount made easy"

**Primary (Thai):**
> "คำนวณพนักงานง่ายๆ ใน 5 นาที"

**Alternate Taglines:**
- "From Excel to easy" (positioning against manual work)
- "Smart staffing for Southeast Asia" (geographical focus)
- "5-minute workforce planning" (speed benefit)

---

## 🎨 Color Palette

### **Primary Colors:**

**Headly Purple (Main Brand Color)**
- Hex: `#667eea`
- RGB: 102, 126, 234
- CMYK: 56, 46, 0, 8
- Usage: Logo, primary buttons, headings

**Headly Purple Dark**
- Hex: `#764ba2`
- RGB: 118, 75, 162
- CMYK: 27, 54, 0, 36
- Usage: Gradient ends, hover states

**Gradient (Signature):**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### **Secondary Colors:**

**Success Green**
- Hex: `#48bb78`
- RGB: 72, 187, 120
- Usage: Success messages, "Sufficient" status

**Warning Orange**
- Hex: `#f56565`
- RGB: 245, 101, 101
- Usage: Alerts, "Need +X" status

**Info Blue**
- Hex: `#3182ce`
- RGB: 49, 130, 206
- Usage: Info boxes, tips

### **Neutral Colors:**

**Text Dark**
- Hex: `#2d3748`
- RGB: 45, 55, 72
- Usage: Body text, headings

**Text Gray**
- Hex: `#718096`
- RGB: 113, 128, 150
- Usage: Secondary text, captions

**Background Light**
- Hex: `#f7fafc`
- RGB: 247, 250, 252
- Usage: Page backgrounds, cards

**Border Gray**
- Hex: `#e2e8f0`
- RGB: 226, 232, 240
- Usage: Borders, dividers

**White**
- Hex: `#ffffff`
- Usage: Card backgrounds, contrast

---

## 🔤 Typography

### **Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             'Helvetica Neue', Arial, sans-serif, 'Noto Sans Thai';
```

**Why this stack:**
- Native system fonts = faster loading
- Professional appearance across all platforms
- Excellent Thai language support (Noto Sans Thai)
- Works without web fonts (no external dependencies)

### **Type Scale:**

**Headings:**
- H1: 48px / Bold (Hero titles)
- H2: 40px / Bold (Section titles)
- H3: 28px / Bold (Card titles)
- H4: 24px / SemiBold (Subsections)
- H5: 20px / SemiBold (Small headings)

**Body:**
- Large: 20px / Regular (Subtitles, intro text)
- Default: 16px / Regular (Body text)
- Small: 14px / Regular (Captions, labels)

**Line Height:**
- Headings: 1.2
- Body: 1.6
- Captions: 1.4

---

## 🏷️ Logo

### **Logo Concept:**

**Wordmark Only (Current):**
```
Headly
```

**Future Logo Ideas:**

**Option 1: Simple "H" Icon**
```
┌─────┐
│ H   │  Headly
│  └─ │
└─────┘
```
- Minimalist "H" in geometric shape
- Can be used as favicon
- Scalable and memorable

**Option 2: People + Head Icon**
```
 👤👤👤
  HEAD   Headly
```
- Three people icons forming "HEAD"
- Represents workforce planning
- More literal but friendly

**Recommendation:** Start with wordmark only (keep it simple for MVP), add icon later.

### **Logo Usage:**

**Colors:**
- Primary: Purple gradient
- On dark backgrounds: White
- On light backgrounds: Purple gradient

**Spacing:**
- Minimum clear space: 0.5× logo height on all sides
- Don't place on busy backgrounds
- Don't stretch or distort

**Sizes:**
- Website header: 24px
- Favicon: 32×32px, 64×64px
- Social media: 400×400px
- Print: Vector (SVG) preferred

---

## 🎨 Design Elements

### **Rounded Corners:**
- Cards: `border-radius: 15px`
- Buttons: `border-radius: 10px`
- Small elements: `border-radius: 5px`
- Pills/badges: `border-radius: 20px`

### **Shadows:**
```css
/* Soft shadow for cards */
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

/* Hover state */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
```

### **Transitions:**
```css
transition: all 0.3s ease;
```
- Use for hover states, color changes, transforms
- Keep consistent at 0.3s across all elements

### **Gradients:**
```css
/* Primary gradient (purple) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* CTA gradient (pink/red) */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

---

## 🖼️ Visual Style

### **Illustrations:**
- **Style:** Simple, friendly, modern
- **Colors:** Match brand palette
- **Tone:** Professional but approachable (not corporate, not playful)

### **Icons:**
- **Style:** Emoji for casual (💬 📞 📱 ✈️)
- **Style:** Line icons for professional
- **Size:** 24px-48px typically
- **Color:** Inherit or brand purple

### **Photography:**
- **Style:** Authentic, diverse teams
- **Subjects:** Asian customer service teams, offices in Southeast Asia
- **Tone:** Bright, positive, professional
- **Avoid:** Stock photos that look too corporate/Western

---

## ✍️ Voice & Tone

### **Brand Voice:**

**We are:**
- Clear and direct
- Helpful and supportive
- Professional but friendly
- Data-driven but human

**We are NOT:**
- Overly technical or jargony
- Corporate and stiff
- Overly casual or cutesy
- Salesy or pushy

### **Writing Style:**

**English:**
- Use simple, clear language
- Active voice preferred
- Short sentences and paragraphs
- Avoid jargon (or explain it)
- "You" language (not "we")

**Thai:**
- Polite but not overly formal (ครับ/ค่ะ)
- Use modern Thai business language
- Avoid overly complex phrases
- Transliterate foreign terms when clearer (e.g., "LINE", "Telegram")

### **Example Voice:**

❌ **Too corporate:**
> "Headly provides enterprise-grade workforce optimization solutions leveraging advanced algorithmic forecasting methodologies."

✅ **Just right:**
> "Headly helps you calculate headcount needs in 5 minutes instead of 2 hours in Excel."

❌ **Too casual:**
> "OMG calculating headcount is such a pain! 😭 We totally get it! Let Headly save the day! 🎉"

✅ **Just right:**
> "Headcount planning doesn't have to take hours. Headly makes it simple."

---

## 📱 Social Media Guidelines

### **Profile Images:**
- Use simple "Headly" wordmark in purple gradient
- White background or transparent
- Square format: 400×400px minimum

### **Cover Images:**
- Tagline: "Headcount made easy"
- Purple gradient background
- Dimensions vary by platform:
  - LinkedIn: 1128×191px
  - Facebook: 820×312px
  - Twitter: 1500×500px

### **Post Style:**

**Tone:**
- Helpful and educational
- Share tips about workforce planning
- Celebrate Southeast Asian teams
- Mix English and Thai content

**Content Mix:**
- 40% Educational (how-to, tips)
- 30% Product updates and features
- 20% Community (customer stories, industry news)
- 10% Company culture and behind-the-scenes

**Hashtags:**
- #WorkforcePlanning
- #HRTech
- #ThaiStartup
- #CustomerService
- #BPO

---

## 🌐 Website Guidelines

### **Homepage Structure:**
1. Hero with value proposition
2. Social proof (stats, testimonials)
3. Key features (3-6 cards)
4. How it works (3 steps)
5. Pricing
6. CTA (try free calculator)

### **Button Hierarchy:**

**Primary (Call-to-Action):**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 18px 40px;
border-radius: 10px;
```

**Secondary:**
```css
background: rgba(255, 255, 255, 0.2);
color: white;
border: 2px solid white;
padding: 16px 38px;
border-radius: 10px;
```

**Tertiary:**
```css
background: #e2e8f0;
color: #2d3748;
padding: 15px 30px;
border-radius: 10px;
```

---

## 📧 Email Guidelines

### **Sender Name:**
- From: "Headly" or "Poom from Headly"
- Email: hello@headly.io or poom@headly.io

### **Subject Lines:**
- Clear and specific
- Avoid ALL CAPS
- Use emojis sparingly (1 max)
- Keep under 50 characters

**Examples:**
- ✅ "Your Free Headcount Calculator is Ready"
- ✅ "3 Tips for Better Workforce Planning"
- ❌ "🎉🎉 AMAZING OFFER - DON'T MISS OUT! 🎉🎉"

### **Email Design:**
- Simple, clean layout
- Purple header with logo
- White background with light gray sections
- Clear CTA button (purple)
- Footer with social links

---

## 🎯 Messaging Framework

### **Elevator Pitch (30 seconds):**

**English:**
> "Headly is a headcount forecasting calculator for customer service teams in Southeast Asia. We're the only tool that supports LINE and Telegram alongside traditional channels, with industry-specific templates and 50x lower cost than enterprise solutions. Calculate your staffing needs in 5 minutes instead of 2 hours in Excel."

**Thai:**
> "Headly คือเครื่องมือคำนวณจำนวนพนักงานสำหรับทีม Customer Service ในเอเชียตะวันออกเฉียงใต้ เรารองรับ LINE และ Telegram พร้อมเทมเพลตเฉพาะอุตสาหกรรม ในราคาถูกกว่า 50 เท่า คำนวณพนักงานที่ต้องการใน 5 นาทีแทนที่จะใช้เวลา 2 ชั่วโมงใน Excel"

### **Key Messages:**

**For BPO Companies:**
> "Stop wasting hours in Excel. Get professional headcount forecasts in 5 minutes."

**For Fintech/Crypto:**
> "Built by a CS manager with 5+ years fintech experience. We understand night shifts and KYC/B planning."

**For E-commerce:**
> "Plan for peak season in minutes. No more guessing how many agents you need for 11.11 or 12.12."

**For Thai Market:**
> "The only workforce planning tool with LINE and Telegram support. Built for Southeast Asia."

---

## 🚫 Don'ts (Brand Rules)

### **Never:**
1. ❌ Use Headly logo with other colors (only purple gradient or white)
2. ❌ Stretch or distort the logo
3. ❌ Use overly corporate language
4. ❌ Make promises we can't keep
5. ❌ Use stock photos that don't represent Southeast Asia
6. ❌ Spell it as "Headley" or "Headlee"
7. ❌ Use emoji excessively 🎉🔥💯 (1-2 max per message)
8. ❌ ALL CAPS in normal text
9. ❌ Outdated design trends (gradients from 2010s, drop shadows)
10. ❌ Comparison attacks on competitors (stay positive)

---

## ✅ Do's (Best Practices)

### **Always:**
1. ✅ Keep it simple and clear
2. ✅ Focus on user benefits, not features
3. ✅ Show, don't just tell (screenshots, demos)
4. ✅ Use real customer testimonials
5. ✅ Be helpful and educational
6. ✅ Celebrate Southeast Asian culture
7. ✅ Maintain bilingual support (Thai + English)
8. ✅ Test on mobile devices
9. ✅ Optimize for fast loading
10. ✅ Be authentic and transparent

---

## 📊 Brand Assets Checklist

### **Required Assets:**
- [ ] Logo (SVG, PNG in multiple sizes)
- [ ] Favicon (32×32, 64×64, ICO)
- [ ] Social media images (profile + covers)
- [ ] Email signature template
- [ ] Business card design
- [ ] Presentation template (Google Slides / PowerPoint)
- [ ] Letterhead template

### **Future Assets:**
- [ ] Icon set for features
- [ ] Illustration set
- [ ] Video intro animation
- [ ] Product screenshots
- [ ] Customer testimonial graphics

---

## 🎨 Quick Reference

**Brand Colors:**
- Primary: `#667eea` → `#764ba2` (gradient)
- Success: `#48bb78`
- Warning: `#f56565`
- Text: `#2d3748`

**Typography:**
- Headings: 24px-48px, Bold
- Body: 16px, Regular
- Line height: 1.6

**Spacing:**
- Sections: 80px padding
- Cards: 40px padding
- Elements: 20px-30px margin

**Border Radius:**
- Cards: 15px
- Buttons: 10px
- Pills: 20px

---

## 📞 Brand Contact

**Brand Manager:** Poom
**Role:** Founder & CS Manager
**Email:** [Your email]
**LinkedIn:** [Your profile]

**For questions about:**
- Logo usage → This guide (Sections: Logo, Visual Style)
- Color codes → This guide (Section: Color Palette)
- Voice & tone → This guide (Section: Voice & Tone)
- New assets → Contact Poom

---

**Last Updated:** November 5, 2025
**Version:** 1.0
**Status:** ✅ Official Brand Guidelines

**Remember:** Consistency is key. When in doubt, keep it simple and keep it purple! 💜
