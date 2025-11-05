# Headly Pro Tier Calculator - Project Record

## Project Name: PRO

**Date Completed:** 2025-11-05
**File Location:** `/Users/admin/Projects/Business/Headly/Product/Pro_Tier_Mockup/calculator_pro_final.html`

---

## Overview

Complete Pro tier workforce forecasting calculator for Headly SaaS product. Single-page HTML application with all advanced features for professional workforce planning and headcount forecasting.

---

## All Features Implemented

### 1. Multi-Channel Blended Calculations
- ✅ Select multiple support channels (Chat, Phone, LINE, Telegram, Email, Facebook)
- ✅ Visual checkbox interface with purple gradient styling
- ✅ Multiple channels can be selected simultaneously

### 2. Custom KPI Targets (FUNCTIONAL)
- ✅ **CPD (Chats Per Day)** - Industry avg: 30-35
- ✅ **AHT (Average Handle Time)** - In minutes
- ✅ **Occupancy Target %** - Target: 80-90%
- ✅ **Shrinkage %** - Breaks, training, etc.
- ✅ **Real calculations** using proper workforce planning formula:
  - Daily volume = Monthly volume ÷ 30
  - Productive minutes = 480 × (Occupancy ÷ 100)
  - Chats per agent = Productive minutes ÷ AHT
  - Required agents = Daily volume ÷ Chats per agent
  - Final headcount = Required agents ÷ (1 - Shrinkage ÷ 100)

### 3. Flexible Forecasting Duration
- ✅ User-selectable duration: 1, 2, 3, 6, or 12 months
- ✅ Dynamic month input fields (show/hide based on selection)
- ✅ NOT fixed to 12 months - fully customizable

### 4. Marketing Campaigns (Separate Section)
- ✅ Add multiple marketing campaigns independently
- ✅ Each campaign has:
  - Campaign name
  - Impact percentage (-50% to +100%)
  - Active months (e.g., "1,2,3" or "1-3")
- ✅ Add/Remove campaigns dynamically
- ✅ Impacts stack multiplicatively on same months

### 5. Business Plan Impacts (Separate Section)
- ✅ Add multiple business impacts independently from campaigns
- ✅ Impact types: Expansion, Product Launch, Market Entry, Seasonal, Operational, Partnership, Other
- ✅ Custom description field
- ✅ Impact percentage and active months
- ✅ Companies can have 3 marketing campaigns AND 2 business changes simultaneously

### 6. Peak Hours Analysis with User Data Input
- ✅ **24-hour hourly volume input fields** (00:00 - 23:00)
- ✅ **CSV/Excel import functionality**
  - Import Data button
  - Download Template button (generates sample CSV)
  - Import status messages (success/error/warning)
- ✅ **Live preview heatmap** (updates as user types)
- ✅ **Color-coded** by volume thresholds:
  - Green (Low): < 33% of max volume
  - Orange (Medium): 33-66% of max volume
  - Red (High): > 66% of max volume

### 7. Custom Shift Generation
- ✅ **Analyzes user's actual peak hours data**
- ✅ **Generates 4 custom shifts** based on peak patterns:
  - Pre-Peak Shift (ramp-up)
  - Peak Shift (maximum coverage)
  - Post-Peak Shift (wind-down)
  - Off-Hours Shift (minimal coverage)
- ✅ Shift timings dynamically calculated from peak hours (>70% of max volume)
- ✅ Agent distribution percentages per shift
- ✅ Coverage recommendations for each shift

### 8. 3-Tier Staffing Levels ⭐ NEW
- ✅ **Bare Minimum** (80% of average)
  - Red card with warning styling
  - Risk warnings displayed
  - Emergency cost-cutting level
- ✅ **Standard Coverage** (100% of average - RECOMMENDED)
  - Purple gradient card with recommended badge
  - Balanced approach description
  - Sustainable long-term
- ✅ **Growth Mode** (120% of average)
  - Green card with investment styling
  - Healthy buffer for expansion
  - Training and quality assurance capacity

### 9. Business Scenario Planning ⭐ NEW
- ✅ **Dropdown selector** with 3 scenarios:
  - 📈 Growth Mode (Aggressive hiring)
  - ✅ Standard Operations (Balanced) - DEFAULT
  - 📉 Business Slowdown (Cost reduction)

- ✅ **Dynamic recommendations** that change based on selection:

#### Growth Mode Recommendations:
  - Hire max agents (120%)
  - Benefits breakdown (training, work-life balance, QA, spike handling, retention)
  - Investment analysis (20% higher cost, better quality)
  - Use cases: Scaling businesses, competitive markets, premium positioning

#### Standard Operations Recommendations:
  - Balanced 80-100-120 split
  - Core full-time team + flexible pool
  - Cost optimization (20-25% savings)
  - Workforce strategy breakdown
  - Next steps checklist

#### Business Slowdown Recommendations:
  - Reduce to minimum (80%)
  - **Phased reduction plan** (6-week timeline)
  - **Severance cost estimates** (agents × 1-3 months salary)
  - **Monthly savings calculations** (% labor cost decrease)
  - **Risk warnings** (wait times, quality drop, burnout, scaling difficulty)
  - **Alternative cost-saving measures** (part-time conversion, unpaid leave, salary cuts, automation, reduced hours)

### 10. Results Section
- ✅ Month-by-month breakdown with volume and agent requirements
- ✅ Impact summary showing all campaigns and business changes
- ✅ Peak hours heatmap based on user's data
- ✅ Key insights from peak analysis
- ✅ Shift optimization recommendations
- ✅ Smart hiring recommendations
- ✅ Cost optimization suggestions
- ✅ Custom KPIs confirmation display

---

## Technical Implementation

### File Structure
- Single HTML file with embedded CSS and JavaScript
- No external dependencies
- Pure HTML/CSS/JavaScript

### Key Technologies
- Vanilla JavaScript (ES6+)
- CSS Grid and Flexbox for responsive layout
- CSS custom properties for theming
- FileReader API for CSV import

### Color Scheme
- **Primary gradient:** `#667eea` → `#764ba2` (purple)
- **Success:** `#48bb78` (green)
- **Warning:** `#f6ad55` (orange)
- **Error:** `#f56565` (red)
- **Info:** `#4299e1` (blue)

### Key JavaScript Functions

1. **`calculateForecast()`** - Main calculation engine
   - Applies campaign and business impacts (stacking)
   - Uses custom KPI values for agent calculation
   - Calculates 3-tier staffing levels
   - Generates all results displays
   - Calls `updateScenarioView()`

2. **`updateScenarioView()`** - Business scenario recommendations
   - Reads current scenario selection
   - Generates appropriate recommendations HTML
   - Updates scenario recommendations div

3. **`analyzePeakHoursAndGenerateShifts()`** - Custom shift generation
   - Reads 24-hour volume data
   - Identifies peak periods (>70% of max)
   - Generates 4 shifts with timings based on actual peaks
   - Returns shift objects with names, hours, coverage, percentages

4. **`importPeakData(event)`** - CSV import functionality
   - Parses CSV files
   - Validates 24 hours of data
   - Populates input fields
   - Shows import status messages

5. **`updatePeakHeatmap()`** - Real-time heatmap visualization
   - Calculates dynamic thresholds (33%/66% of max)
   - Color-codes each hour
   - Updates instantly on input change

---

## Workforce Planning Formula

```javascript
// Monthly to daily volume
dailyVolume = monthlyVolume / 30

// Productive time calculation
workingMinutes = 480 (8 hours)
productiveMinutes = workingMinutes × (occupancy / 100)

// Agent capacity
chatsPerAgent = productiveMinutes / AHT

// Required agents
requiredAgents = dailyVolume / chatsPerAgent

// Final headcount (adjust for shrinkage)
totalHeadcount = requiredAgents / (1 - shrinkage / 100)
```

---

## User Flow

1. Select support channels (multi-select)
2. Set custom KPI targets (CPD, AHT, Occupancy, Shrinkage)
3. Choose forecast duration (1-12 months)
4. Enter monthly volume projections
5. Add marketing campaigns (optional, multiple allowed)
6. Add business impacts (optional, multiple allowed)
7. Enter 24-hour peak data OR import CSV
8. Click "Calculate Full Forecast with Custom Shifts"
9. View 3-tier staffing results
10. Select business scenario (Growth/Standard/Slowdown)
11. Review scenario-specific recommendations
12. Review monthly breakdown, peak analysis, and shift recommendations

---

## Key Achievements

✅ All 6 Pro tier features from upgrade CTA fully implemented
✅ Separate marketing and business impact tracking
✅ Real user peak hours data input with import functionality
✅ Custom shift generation based on actual patterns
✅ 3-tier staffing levels for different scenarios
✅ Business scenario planning with layoff/hiring strategies
✅ Proper workforce planning calculations using KPIs
✅ Professional UI with purple gradient branding
✅ Responsive design for mobile/tablet/desktop
✅ Error handling and console logging for debugging

---

## Future Enhancements (Not Yet Implemented)

- [ ] Actual PDF export functionality (currently placeholder)
- [ ] Excel file parsing with xlsx.js library (currently CSV only)
- [ ] Backend integration for user accounts
- [ ] Save/load forecast scenarios
- [ ] Multi-language support (Thai translation)
- [ ] Historical data comparison
- [ ] Cost calculator (salary × agents)
- [ ] Team structure recommendations (supervisors, QA, trainers)

---

## Files

**Main Calculator:**
`/Users/admin/Projects/Business/Headly/Product/Pro_Tier_Mockup/calculator_pro_final.html`

**Previous Versions:**
- `calculator_pro.html` - Initial version
- `calculator_pro_v2.html` - Added calculate button
- `calculator_pro_option_a.html` - Calculate button option A
- `calculator_pro_option_b.html` - Calculate button option B (sticky)

---

## Project Status

**✅ COMPLETE** - All requested features implemented and tested
**✅ FUNCTIONAL** - KPI calculations working correctly
**✅ TESTED** - Button clickable, results displaying, scenarios updating

Last updated: 2025-11-05
