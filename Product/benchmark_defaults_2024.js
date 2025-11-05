/**
 * Headly 2024 Asia-Pacific Benchmarks
 * Version: 1.1
 * Date: November 5, 2025
 * 
 * Usage: Include this in Pro and Pro Max calculators
 * Copy the relevant sections into your calculator's <script> tag
 */

// ============================================
// INDUSTRY DEFAULTS (2024 Asia-Pacific Data)
// ============================================

const industryDefaults = {
    bpo: { 
        cpd: { phone: 40, chat: 45, email: 50, line: 38, telegram: 38, facebook: 33 },
        shrinkage: 0.19, 
        occupancy: 0.90 
    },
    banking: { 
        cpd: { phone: 28, chat: 33, email: 38, line: 33, telegram: 33, facebook: 33 },
        shrinkage: 0.15, 
        occupancy: 0.85 
    },
    fintech: { 
        cpd: { phone: 32, chat: 34, email: 40, line: 34, telegram: 33, facebook: 33 },
        shrinkage: 0.19, 
        occupancy: 0.90 
    },
    ecommerce: { 
        cpd: { phone: 42, chat: 50, email: 55, line: 45, telegram: 38, facebook: 35 },
        shrinkage: 0.20, 
        occupancy: 0.85 
    },
    hospitality: { 
        cpd: { phone: 36, chat: 40, email: 45, line: 38, telegram: 35, facebook: 33 },
        shrinkage: 0.22, 
        occupancy: 0.85 
    },
    healthcare: { 
        cpd: { phone: 28, chat: 35, email: 35, line: 35, telegram: 33, facebook: 33 },
        shrinkage: 0.18, 
        occupancy: 0.85 
    },
    government: { 
        cpd: { phone: 24, chat: 30, email: 30, line: 30, telegram: 30, facebook: 30 },
        shrinkage: 0.15, 
        occupancy: 0.80 
    },
    logistics: { 
        cpd: { phone: 46, chat: 55, email: 55, line: 50, telegram: 40, facebook: 35 },
        shrinkage: 0.20, 
        occupancy: 0.90 
    },
    b2b: { 
        cpd: { phone: 32, chat: 35, email: 35, line: 35, telegram: 35, facebook: 33 },
        shrinkage: 0.15, 
        occupancy: 0.85 
    },
    other: { 
        cpd: { phone: 35, chat: 40, email: 45, line: 38, telegram: 38, facebook: 33 },
        shrinkage: 0.19, 
        occupancy: 0.90 
    }
};

// ============================================
// SMART VOLUME DEFAULTS
// ============================================

const volumeDefaults = {
    bpo: { phone: 9000, chat: 10000, email: 11000, line: 8500, telegram: 8500, facebook: 7500 },
    banking: { phone: 6000, chat: 7000, email: 8500, line: 7000, telegram: 7000, facebook: 7000 },
    fintech: { phone: 7000, chat: 7500, email: 9000, line: 7500, telegram: 7500, facebook: 7000 },
    ecommerce: { phone: 9500, chat: 11000, email: 12500, line: 10000, telegram: 8500, facebook: 8000 },
    hospitality: { phone: 8000, chat: 9000, email: 10000, line: 8500, telegram: 8000, facebook: 7500 },
    healthcare: { phone: 6000, chat: 7500, email: 8000, line: 7500, telegram: 7000, facebook: 7000 },
    government: { phone: 5500, chat: 6500, email: 7000, line: 6500, telegram: 6500, facebook: 6500 },
    logistics: { phone: 10500, chat: 12500, email: 12500, line: 11000, telegram: 9000, facebook: 8000 },
    b2b: { phone: 7000, chat: 7500, email: 8000, line: 7500, telegram: 7500, facebook: 7000 },
    other: { phone: 8000, chat: 9000, email: 10000, line: 8500, telegram: 8500, facebook: 7500 }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get channel-specific CPD for an industry
 * @param {string} industry - Industry code (bpo, banking, fintech, etc.)
 * @param {string} channel - Channel code (phone, chat, email, line, telegram, facebook)
 * @returns {number} CPD (Contacts Per Day)
 */
function getChannelCPD(industry, channel) {
    if (!industryDefaults[industry]) return 35;
    return industryDefaults[industry].cpd[channel] || industryDefaults[industry].cpd.phone || 35;
}

/**
 * Get industry shrinkage rate
 * @param {string} industry - Industry code
 * @returns {number} Shrinkage rate (0-1)
 */
function getShrinkage(industry) {
    if (!industryDefaults[industry]) return 0.19;
    return industryDefaults[industry].shrinkage;
}

/**
 * Get industry occupancy rate
 * @param {string} industry - Industry code
 * @returns {number} Occupancy rate (0-1)
 */
function getOccupancy(industry) {
    if (!industryDefaults[industry]) return 0.85;
    return industryDefaults[industry].occupancy;
}

/**
 * Get smart default volume for industry + channel
 * @param {string} industry - Industry code
 * @param {string} channel - Channel code
 * @returns {number} Default monthly volume
 */
function getDefaultVolume(industry, channel) {
    if (!volumeDefaults[industry]) return 8000;
    return volumeDefaults[industry][channel] || 8000;
}

/**
 * Calculate estimated team size based on volume and CPD
 * @param {number} monthlyVolume - Monthly interaction volume
 * @param {number} cpd - Contacts Per Day
 * @param {number} workingDays - Working days per month (default 22)
 * @returns {number} Estimated team size
 */
function estimateTeamSize(monthlyVolume, cpd, workingDays = 22) {
    return Math.max(5, Math.round(monthlyVolume / (cpd * workingDays)));
}

/**
 * Auto-populate volume inputs with smart defaults
 * @param {string} industry - Selected industry
 * @param {string} channel - Selected channel (or primary channel for multi-channel)
 * @param {number} monthCount - Number of months to populate (default 3)
 */
function populateSmartDefaults(industry, channel, monthCount = 3) {
    const baseVolume = getDefaultVolume(industry, channel);
    
    // Generate volumes with natural variation
    const volumes = [];
    volumes.push(baseVolume); // Month 1: 100%
    volumes.push(Math.round(baseVolume * 0.95)); // Month 2: 95%
    volumes.push(Math.round(baseVolume * 1.05)); // Month 3: 105%
    
    // If more than 3 months, continue pattern
    for (let i = 3; i < monthCount; i++) {
        const variation = 0.95 + (Math.random() * 0.1); // Random 95-105%
        volumes.push(Math.round(baseVolume * variation));
    }
    
    return volumes;
}

/**
 * Get blended CPD for multiple channels
 * @param {Array} channels - Array of {channel, percentage} objects
 * @param {string} industry - Industry code
 * @returns {number} Blended CPD
 * 
 * Example usage:
 * const channels = [
 *   {channel: 'chat', percentage: 50},
 *   {channel: 'phone', percentage: 30},
 *   {channel: 'email', percentage: 20}
 * ];
 * const blendedCPD = getBlendedCPD(channels, 'fintech');
 */
function getBlendedCPD(channels, industry) {
    let totalWeightedCPD = 0;
    let totalPercentage = 0;
    
    channels.forEach(ch => {
        const cpd = getChannelCPD(industry, ch.channel);
        totalWeightedCPD += (cpd * ch.percentage);
        totalPercentage += ch.percentage;
    });
    
    return Math.round(totalWeightedCPD / totalPercentage);
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// Example 1: Get channel-specific CPD
const fintech_telegram_cpd = getChannelCPD('fintech', 'telegram'); // Returns 33

// Example 2: Auto-populate volume fields
const volumes = populateSmartDefaults('ecommerce', 'email', 12); // 12 months
// Returns: [12500, 11875, 13125, ...]

// Example 3: Estimate team size
const teamSize = estimateTeamSize(9000, 40, 22); // 9k volume, 40 CPD, 22 days
// Returns: ~10 agents

// Example 4: Get blended CPD for multi-channel
const channels = [
    {channel: 'chat', percentage: 50},
    {channel: 'phone', percentage: 30},
    {channel: 'email', percentage: 20}
];
const blendedCPD = getBlendedCPD(channels, 'bpo');
// Returns weighted average: (45*50 + 40*30 + 50*20) / 100 = 45

// Example 5: Get all metrics for an industry
const bpo_metrics = {
    phone_cpd: getChannelCPD('bpo', 'phone'),
    chat_cpd: getChannelCPD('bpo', 'chat'),
    shrinkage: getShrinkage('bpo'),
    occupancy: getOccupancy('bpo')
};
*/

// ============================================
// INTEGRATION NOTES
// ============================================

/**
 * To integrate into your calculator:
 * 
 * 1. Copy the industryDefaults and volumeDefaults objects
 * 2. Copy the helper functions you need
 * 3. Call populateSmartDefaults() when user selects industry + channel
 * 4. Use getChannelCPD() instead of hardcoded CPD values
 * 5. Use getShrinkage() and getOccupancy() for calculations
 * 
 * For Pro calculators with custom KPI inputs:
 * - Pre-fill KPI inputs with benchmark defaults
 * - Allow users to override
 * - Show "Industry Default" label/hint
 * 
 * For Pro Max with multi-channel:
 * - Use getBlendedCPD() for weighted average
 * - Calculate blended AHT similarly
 */
