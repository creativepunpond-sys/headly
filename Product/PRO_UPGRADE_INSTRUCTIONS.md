# Pro & Pro Max Calculator Upgrade Instructions
## Applying 2024 Asia-Pacific Benchmarks

**Date:** November 5, 2025  
**Status:** Free Tier ✅ Complete | Pro/Pro Max ⏳ Ready to Apply

---

## 📋 Overview

The **Free Tier calculator** has been upgraded with:
1. ✅ 2024 Asia-Pacific benchmark data (channel-specific CPD)
2. ✅ Smart volume defaults based on industry + channel
3. ✅ Auto-calculated team sizes

**Pro and Pro Max calculators** need the same upgrades applied.

---

## 📁 Files to Update

### **Pro Tier:**
- `Product/Pro_Tier_Mockup/calculator_pro_final.html` (Main Pro calculator - 91KB)
- `Product/Pro_Tier_Mockup/calculator_pro.html` (Original - 40KB)
- `Product/Pro_Tier_Mockup/calculator_pro_v2.html` (v2 - 29KB)

**Recommendation:** Update `calculator_pro_final.html` (most complete version)

### **Pro Max Tier:**
- `Product/Pro_Max_Tier/calculator_pro_max.html` (54KB)

---

## 🔧 What to Apply

### **1. Benchmark Data Structure** ✅

Copy the 2024 benchmark data from `Product/benchmark_defaults_2024.js`:

```javascript
// Industry defaults with channel-specific CPD
const industryDefaults = {
    bpo: { 
        cpd: { phone: 40, chat: 45, email: 50, line: 38, telegram: 38, facebook: 33 },
        shrinkage: 0.19, 
        occupancy: 0.90 
    },
    // ... (all 10 industries)
};

// Smart volume defaults
const volumeDefaults = {
    bpo: { phone: 9000, chat: 10000, email: 11000, line: 8500, telegram: 8500, facebook: 7500 },
    // ... (all 10 industries)
};
```

### **2. Helper Functions** ✅

Add these utility functions from `benchmark_defaults_2024.js`:

- `getChannelCPD(industry, channel)` - Get channel-specific CPD
- `getShrinkage(industry)` - Get industry shrinkage rate
- `getOccupancy(industry)` - Get industry occupancy rate
- `getDefaultVolume(industry, channel)` - Get smart volume default
- `estimateTeamSize(monthlyVolume, cpd)` - Calculate team size
- `populateSmartDefaults(industry, channel, monthCount)` - Auto-populate volumes
- `getBlendedCPD(channels, industry)` - For multi-channel (Pro Max)

### **3. Smart Defaults Integration**

**For Pro Calculator:**
Add function to pre-fill industry + channel selection:

```javascript
function updateIndustryDefaults() {
    const industry = document.getElementById('industry').value;
    const selectedChannels = getSelectedChannels(); // Your existing function
    
    if (industry && selectedChannels.length > 0) {
        // Pre-fill KPI inputs with benchmark defaults
        const primaryChannel = selectedChannels[0];
        const cpd = getChannelCPD(industry, primaryChannel);
        const shrinkage = getShrinkage(industry) * 100; // Convert to percentage
        const occupancy = getOccupancy(industry) * 100;
        
        document.getElementById('kpiCPD').value = cpd;
        document.getElementById('kpiShrinkage').value = shrinkage;
        document.getElementById('kpiOccupancy').value = occupancy;
        
        // Show hint that these are defaults
        showIndustryDefaultsHint();
    }
}
```

**For Volume Defaults:**
Add auto-population when duration is set:

```javascript
function updateMonthInputs() {
    const duration = parseInt(document.getElementById('forecastDuration').value);
    const industry = document.getElementById('industry').value;
    const channel = getPrimaryChannel(); // Your function to get main channel
    
    if (industry && channel) {
        const volumes = populateSmartDefaults(industry, channel, duration);
        
        // Fill volume inputs
        const volumeInputs = document.querySelectorAll('.volume-input');
        volumes.forEach((vol, idx) => {
            if (volumeInputs[idx]) {
                volumeInputs[idx].value = vol;
            }
        });
    }
    
    // Existing code to show/hide month inputs
    // ...
}
```

### **4. Multi-Channel Blending (Pro Max)**

For Pro Max calculator with multiple channels:

```javascript
function calculateBlendedMetrics() {
    const industry = document.getElementById('industry').value;
    
    // Get selected channels with their percentages
    const channels = [];
    document.querySelectorAll('.channel-percentage').forEach(input => {
        if (input.value > 0) {
            channels.push({
                channel: input.dataset.channel,
                percentage: parseFloat(input.value)
            });
        }
    });
    
    // Calculate blended CPD
    const blendedCPD = getBlendedCPD(channels, industry);
    
    // Use in calculations
    return blendedCPD;
}
```

---

## 🎨 UI Enhancements

### **Add Info Boxes:**

```html
<div class="info-box" style="background: #ebf8ff; padding: 15px; border-radius: 10px; margin-top: 15px;">
    <p style="color: #2c5282;">
        <strong>💡 Smart Defaults Applied:</strong> 
        KPI values are pre-filled based on 2024 Asia-Pacific benchmarks for your industry. 
        You can adjust these to match your specific operations.
    </p>
</div>
```

### **Show Source:**

```html
<small style="color: #718096; font-size: 12px;">
    Default based on 2024 Asia-Pacific benchmarks 
    <a href="../Documentation/Channel_Benchmarks_2024.md" style="color: #667eea;">View source data →</a>
</small>
```

---

## ✅ Testing Checklist

After applying updates to each calculator:

### **Functional Tests:**
- [ ] Industry selection pre-fills KPI values
- [ ] Channel selection affects CPD calculation
- [ ] Volume inputs auto-populate with realistic defaults
- [ ] Multi-channel blending works correctly (Pro Max)
- [ ] Manual KPI override still works
- [ ] Calculations produce accurate results

### **Data Validation:**
- [ ] CPD values match `Channel_Benchmarks_2024.md`
- [ ] Shrinkage rates correct (15-22%)
- [ ] Occupancy rates correct (80-90%)
- [ ] Volume defaults realistic for team sizes

### **UI/UX:**
- [ ] Info boxes display benchmark hints
- [ ] Default vs custom values clearly indicated
- [ ] All language toggles work (if bilingual)
- [ ] Responsive on mobile

---

## 📊 Specific Implementation Notes

### **Pro Calculator (calculator_pro_final.html):**

**Current State:**
- Uses custom KPI inputs (CPD, AHT, Occupancy, Shrinkage)
- Has campaign and business impact features
- Supports 12-month forecasting

**Integration Strategy:**
1. Add `industryDefaults` and `volumeDefaults` objects
2. Add helper functions
3. Create `updateIndustryDefaults()` function
4. Call on industry selection change
5. Pre-fill KPI inputs with benchmarks
6. Add "Reset to Industry Default" button

**Example Code Location:**
```javascript
// Around line 855 where calculateForecast() starts
// Add new functions before existing functions
```

---

### **Pro Max Calculator (calculator_pro_max.html):**

**Current State:**
- Multi-channel support
- Auto shift scheduler
- Team management features

**Integration Strategy:**
1. Add all benchmark data and functions
2. Implement `getBlendedCPD()` for multi-channel
3. Pre-fill channel percentages based on industry norms
4. Update shift calculations with accurate CPD
5. Show blended metrics in results

**Multi-Channel Defaults:**
```javascript
const channelMixDefaults = {
    bpo: { chat: 40, phone: 35, email: 25 },
    banking: { phone: 50, email: 30, chat: 20 },
    fintech: { chat: 35, telegram: 30, phone: 20, line: 15 },
    ecommerce: { chat: 45, email: 35, facebook: 20 }
    // Add more as needed
};
```

---

## 🚀 Deployment Steps

### **Step 1: Backup Current Files**
```bash
cp Product/Pro_Tier_Mockup/calculator_pro_final.html Product/Pro_Tier_Mockup/calculator_pro_final_backup_v1.0.html
cp Product/Pro_Max_Tier/calculator_pro_max.html Product/Pro_Max_Tier/calculator_pro_max_backup_v1.0.html
```

### **Step 2: Apply Updates**
1. Open each calculator file
2. Locate the `<script>` section
3. Add benchmark data objects at the top
4. Add helper functions
5. Integrate smart defaults into existing functions
6. Add UI enhancements

### **Step 3: Test**
1. Open in browser
2. Test each industry + channel combination
3. Verify calculations match Free Tier accuracy
4. Check multi-channel blending (Pro Max)

### **Step 4: Document Version**
Update version numbers in files:
```html
<title>Headly Pro v1.1 - 2024 Benchmarks</title>
```

---

## 📝 Quick Copy-Paste Snippets

### **Add at Top of <script> Section:**
```javascript
// ========== 2024 ASIA-PACIFIC BENCHMARKS ==========
// Source: Documentation/Channel_Benchmarks_2024.md

[COPY industryDefaults object from benchmark_defaults_2024.js]
[COPY volumeDefaults object from benchmark_defaults_2024.js]
[COPY helper functions from benchmark_defaults_2024.js]
```

### **Add After Industry Selection:**
```javascript
document.getElementById('industry').addEventListener('change', function() {
    updateIndustryDefaults();
    updateVolumeDefaults();
});
```

---

## 💡 Pro Tips

1. **Don't Remove Custom KPI Inputs:** Pro users should still be able to override
2. **Show "Industry Default" Label:** Make it clear when using benchmarks vs custom
3. **Add Reset Button:** Let users revert to industry defaults after customization
4. **Document Changes:** Add changelog in each file's comments
5. **Keep Free Tier Logic:** Use same calculation formulas for consistency

---

## 🆘 Need Help?

**Reference Files:**
- `Product/Free_Tier/calculator.html` - See working implementation
- `Product/benchmark_defaults_2024.js` - Copy-paste ready code
- `Documentation/Channel_Benchmarks_2024.md` - Full benchmark reference
- `Documentation/Smart_Defaults_Reference.md` - Volume defaults explained

**Test Cases:**
- BPO + Chat: CPD 45, Volume 10,000
- Fintech + Telegram: CPD 33, Volume 7,500
- E-commerce + Email: CPD 55, Volume 12,500

---

## ✅ Completion Checklist

- [ ] `calculator_pro_final.html` updated
- [ ] `calculator_pro_max.html` updated
- [ ] All helper functions added
- [ ] Smart defaults working
- [ ] Multi-channel blending tested (Pro Max)
- [ ] UI hints added
- [ ] Cross-browser tested
- [ ] Documentation updated

---

**Estimated Time:** 1-2 hours per calculator  
**Complexity:** Medium (copy-paste + integration)  
**Priority:** High (keeps all tiers consistent)

---

**Last Updated:** November 5, 2025  
**Version:** 1.1 Upgrade Instructions  
**Status:** Ready to Apply
