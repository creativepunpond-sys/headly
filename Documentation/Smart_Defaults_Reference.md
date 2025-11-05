# Smart Defaults Reference
## Auto-populated Volume Suggestions by Industry & Channel

**Feature:** Calculator automatically suggests realistic monthly volumes based on industry and channel selection  
**Date:** November 5, 2025  
**Version:** 1.1

---

## 🎯 How It Works

When users select their **industry** (Step 1) and **channel** (Step 2), the calculator automatically pre-fills:
1. **Monthly volumes** (Month 1, 2, 3) with realistic industry + channel averages
2. **Current team size** calculated based on CPD and volume
3. Natural **+/- 5-10% variation** across months to simulate real-world fluctuation

**Users can edit these defaults** to match their actual situation.

---

## 📊 Default Monthly Volumes

### Based on typical small-medium teams (10-20 agents)

| Industry | Phone | Chat | Email | LINE | Telegram | Facebook |
|----------|-------|------|-------|------|----------|----------|
| **BPO** | 9,000 | 10,000 | 11,000 | 8,500 | 8,500 | 7,500 |
| **Banking** | 6,000 | 7,000 | 8,500 | 7,000 | 7,000 | 7,000 |
| **Fintech** | 7,000 | 7,500 | 9,000 | 7,500 | 7,500 | 7,000 |
| **E-commerce** | 9,500 | 11,000 | 12,500 | 10,000 | 8,500 | 8,000 |
| **Hospitality** | 8,000 | 9,000 | 10,000 | 8,500 | 8,000 | 7,500 |
| **Healthcare** | 6,000 | 7,500 | 8,000 | 7,500 | 7,000 | 7,000 |
| **Government** | 5,500 | 6,500 | 7,000 | 6,500 | 6,500 | 6,500 |
| **Logistics** | 10,500 | 12,500 | 12,500 | 11,000 | 9,000 | 8,000 |
| **B2B** | 7,000 | 7,500 | 8,000 | 7,500 | 7,500 | 7,000 |
| **Other** | 8,000 | 9,000 | 10,000 | 8,500 | 8,500 | 7,500 |

---

## 🔢 Calculation Logic

### **Step 1: Base Volume Selection**
```javascript
baseVolume = volumeDefaults[industry][channel]
```

### **Step 2: Monthly Variation**
```javascript
Month 1 = baseVolume (100%)
Month 2 = baseVolume × 0.95 (5% decrease - simulates natural dip)
Month 3 = baseVolume × 1.05 (5% increase - simulates recovery)
```

### **Step 3: Team Size Estimation**
```javascript
avgVolume = (Month1 + Month2 + Month3) / 3
CPD = industryDefaults[industry].cpd[channel]
workingDays = 22 per month
estimatedTeam = avgVolume / (CPD × 22)
minimumTeam = 5 agents
```

---

## 📈 Examples

### **Example 1: BPO Phone Support**
- **Industry:** BPO
- **Channel:** Phone
- **Auto-filled:**
  - Month 1: 9,000 calls
  - Month 2: 8,550 calls (95%)
  - Month 3: 9,450 calls (105%)
  - Current Team: ~11 agents
  - *Based on: CPD 40, 22 working days*

### **Example 2: E-commerce Email**
- **Industry:** E-commerce
- **Channel:** Email
- **Auto-filled:**
  - Month 1: 12,500 tickets
  - Month 2: 11,875 tickets (95%)
  - Month 3: 13,125 tickets (105%)
  - Current Team: ~10 agents
  - *Based on: CPD 55, 22 working days*

### **Example 3: Fintech LINE**
- **Industry:** Fintech
- **Channel:** LINE
- **Auto-filled:**
  - Month 1: 7,500 conversations
  - Month 2: 7,125 conversations (95%)
  - Month 3: 7,875 conversations (105%)
  - Current Team: ~10 agents
  - *Based on: CPD 34, 22 working days*

---

## 💡 Rationale for Default Volumes

### **Volume Sizing:**
Defaults represent typical **small-to-medium CS teams** (10-20 agents):
- Small teams: 5-10 agents → 5,000-8,000 monthly volume
- Medium teams: 10-20 agents → 8,000-15,000 monthly volume
- Large teams: 20+ agents → 15,000+ monthly volume

### **Why These Numbers:**
1. **Realistic:** Based on actual team sizes in Asia-Pacific
2. **Actionable:** Results in meaningful headcount (5-20 agents)
3. **Demonstrative:** Shows calculator value without overwhelming users
4. **Editable:** Users can easily adjust up or down

### **Industry Variations:**
- **Government (lowest):** 5,500-7,000 - Lower CPD, smaller operations
- **Logistics (highest):** 10,500-12,500 - High volume, simple queries
- **Banking/Healthcare (low):** 6,000-8,500 - Complex, regulated, lower CPD
- **E-commerce (high):** 9,500-12,500 - High volume, seasonal peaks

### **Channel Variations:**
- **Email (highest):** +15-20% vs phone - Batch processing, highest CPD
- **Chat (high):** +10-15% vs phone - Concurrent chats, efficient
- **Phone (baseline):** 100% - One-to-one, longer AHT
- **LINE/Telegram (similar to chat):** +/- 10% vs phone
- **Facebook (lower):** -10-15% vs phone - Slower response times

---

## 🎨 User Experience

### **Before (v1.0):**
- Generic defaults: 20,000 / 18,000 / 19,000
- Generic team size: 15 agents
- No context for user's industry

### **After (v1.1):**
- Industry-specific defaults
- Channel-specific defaults
- Calculated team size based on CPD
- Info box explaining smart defaults
- Still fully editable

### **User Journey:**
1. **Step 1:** Select "Fintech"
2. **Step 2:** Select "LINE"
3. **Step 3:** Select "24/7 Operations"
4. **Step 4:** See smart defaults → 7,500 / 7,125 / 7,875 + 10 agents
5. User can adjust or proceed as-is

---

## 🔄 Future Enhancements (Pro Tier)

### **Planned Features:**
1. **Historical data learning:** Adjust defaults based on user's past data
2. **Seasonal adjustments:** Auto-adjust for peak seasons (11.11, 12.12)
3. **Growth scenarios:** 10%, 20%, 30% growth projections
4. **Team size input first:** Reverse calculation (team → volume)
5. **Multi-channel blended volumes:** Suggest split across channels

---

## 📚 Technical Implementation

### **Location:** `Product/Free_Tier/calculator.html`

### **Key Functions:**
```javascript
// Volume defaults data structure
const volumeDefaults = {
    industry: { 
        channel: baseVolume 
    }
}

// Auto-populate function
function updateVolumeDefaults() {
    // 1. Get industry + channel
    // 2. Fetch base volume
    // 3. Add variation (95%, 100%, 105%)
    // 4. Calculate team size from CPD
    // 5. Update form fields
}

// Triggered when navigating to Step 4
nextStep(4) → updateVolumeDefaults()
```

---

## ✅ Benefits

### **For Users:**
- ✅ **Faster setup:** No need to guess volumes
- ✅ **Realistic context:** Industry-appropriate numbers
- ✅ **Educational:** Learn typical volumes for their sector
- ✅ **Editable:** Full control to adjust as needed

### **For Headly:**
- ✅ **Lower friction:** Users don't abandon at input step
- ✅ **Better demos:** Show relevant results immediately
- ✅ **Data-driven:** Demonstrates research and expertise
- ✅ **Conversion tool:** Users see personalized results faster

---

## 🧪 Testing Scenarios

### **Test Case 1: BPO Chat**
- **Input:** BPO + Chat
- **Expected:** ~10,000 / 9,500 / 10,500, Team: ~11
- **Verify:** Result shows 11-13 agents needed

### **Test Case 2: Banking Phone**
- **Input:** Banking + Phone
- **Expected:** ~6,000 / 5,700 / 6,300, Team: ~10
- **Verify:** Result shows 10-12 agents needed

### **Test Case 3: E-commerce Email**
- **Input:** E-commerce + Email
- **Expected:** ~12,500 / 11,875 / 13,125, Team: ~10
- **Verify:** Result shows 9-11 agents needed

---

## 📊 Validation Against Benchmarks

### **Cross-check with CPD:**
```
Monthly Volume = Team Size × CPD × Working Days
Example: 10 agents × 40 CPD × 22 days = 8,800/month ✓
```

### **Cross-check with Industry Data:**
- BPO teams: 10-50 agents → 9,000-45,000 volume ✓
- Banking: 5-20 agents → 6,000-15,000 volume ✓
- E-commerce: 10-30 agents → 9,500-30,000 volume ✓

All defaults fall within realistic ranges for small-medium teams.

---

**Last Updated:** November 5, 2025  
**Version:** 1.1  
**Status:** ✅ Implemented and Tested
