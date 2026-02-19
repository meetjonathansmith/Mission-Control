# Campaign Log Monitoring Tab Specification
**Created:** February 17, 2026, 12:06 PM EST  
**Purpose:** Weekly KPI tracking with automated warning thresholds from SC Operations Manual Section 9

---

## Overview

**Location:** Add new tab to existing SC Campaign Log Google Sheet  
**Sheet URL:** https://docs.google.com/spreadsheets/d/1CktoY4AGF7IS2UipUx1qllpVLttZwCoGq_yaRDig_wQ/edit

**Tab Name:** "Weekly Monitoring"

**Purpose:**
- Track response rate, delivery rate, conversations-to-off-market % by market
- Apply automated color-coding based on Section 9 warning thresholds
- Flag issues before they become crises
- Weekly VA update (5-10 minutes every Friday)

---

## Tab Structure

### Column Layout

| Column | Header | Description | Formula/Source |
|--------|--------|-------------|----------------|
| A | Week | Week number (e.g., "W08 2026") | Manual entry |
| B | Week Start Date | Monday of that week | Manual entry |
| C | Market | MD, NOVA, Richmond, VA Beach | Manual entry |
| D | Texts Sent | Total texts sent this week in this market | From Campaign Log tab |
| E | Delivered % | Delivery rate | From SC or Campaign Log |
| F | Response Rate | Texts replied ÷ Texts sent | From SC or Campaign Log |
| G | Conversations | Total replies received | From SC or Campaign Log |
| H | Off-Markets | Off-market deals received | From Campaign Log |
| I | Conv → Off-Market % | Off-markets ÷ Conversations | =H/G (formula) |
| J | Opt-Outs | Number of opt-outs this week | From SC |
| K | Status | Health indicator | Formula (see below) |
| L | Notes | Context, actions taken, observations | Manual entry |

---

## Warning Threshold Formulas

### Column K: Status (Automated Color-Coding)

**Formula Logic:**

```
=IF(
  AND(F2>=3%, E2>=95%, J2/D2<1%), "✅ Healthy",
  IF(
    AND(F2>=2%, F2<3%, E2>=90%, E2<95%, J2/D2>=1%, J2/D2<2%), "⚠️ Watch",
    IF(
      OR(F2<2%, E2<90%, J2/D2>=2%), "🚨 Fatigue",
      "❌ Exhausted"
    )
  )
)
```

**Where:**
- F2 = Response Rate (column F, row 2)
- E2 = Delivered % (column E, row 2)
- J2 = Opt-Outs (column J, row 2)
- D2 = Texts Sent (column D, row 2)

**Status Definitions (from Section 9):**

| Status | Response Rate | Delivery Rate | Opt-Out Rate | Color |
|--------|---------------|---------------|--------------|-------|
| ✅ Healthy | >3% | >95% | <1% | Green |
| ⚠️ Watch | 2-3% | 90-95% | 1-2% | Yellow |
| 🚨 Fatigue | <2% | <90% | >2% | Orange |
| ❌ Exhausted | <1% | <85% | >5% | Red |

**Conditional Formatting:**
- Green background if "Healthy"
- Yellow background if "Watch"
- Orange background if "Fatigue"
- Red background if "Exhausted"

---

## Market-Specific Thresholds (from Section 9)

### Maryland (MD) Thresholds

| Metric | Healthy | Acceptable | Warning | Exhausted |
|--------|---------|------------|---------|-----------|
| Response Rate | >3.5% | 2.5-3.5% | 1.5-2.5% | <1.5% |
| Delivery Rate | >95% | 90-95% | 85-90% | <85% |
| Opt-Out Rate | <1% | 1-2% | 2-5% | >5% |

**Current (Feb 16):** 4.09% response ✅ Healthy

---

### Northern Virginia (NOVA) Thresholds

| Metric | Healthy | Acceptable | Warning | Exhausted |
|--------|---------|------------|---------|-----------|
| Response Rate | >3% | 2-3% | 1-2% | <1% |
| Delivery Rate | >95% | 90-95% | 85-90% | <85% |
| Opt-Out Rate | <1% | 1-2% | 2-5% | >5% |

**Current (Feb 16):** 3.81% response ✅ Acceptable

---

### Richmond/VA Beach Thresholds

| Metric | Healthy | Acceptable | Warning | Exhausted |
|--------|---------|------------|---------|-----------|
| Response Rate | >5% | 3-5% | 2-3% | <2% |
| Delivery Rate | >95% | 90-95% | 85-90% | <85% |
| Opt-Out Rate | <1% | 1-2% | 2-5% | >5% |

**Current (Feb 16):** 9.28% response ✅ Exceptional (VA Beach outlier)

**Note:** Richmond/VA Beach has higher threshold due to VA Beach's 9.28% performance. Adjust if VA Beach proves to be unsustainable outlier.

---

## Conversations → Off-Market % Tracking

### Target Benchmark (from Feb data)

**January 2026:** 16.9% (812 conversations → 137 off-markets)  
**February 2026:** 24.5% (530 conversations → 130 off-markets)

**Trend:** Improving (+45%)

### Warning Thresholds

| Status | Conv → Off-Market % | Action |
|--------|---------------------|--------|
| ✅ Excellent | >25% | Document what's working, replicate |
| ✅ Good | 20-25% | Maintain current process |
| ⚠️ Watch | 15-20% | Review message quality, LM response time |
| 🚨 Poor | 10-15% | Diagnosis required (wrong agents? weak messaging?) |
| ❌ Critical | <10% | Stop campaigns, fix targeting |

**Conditional formatting for Column I (Conv → Off-Market %):**
- Dark green if >25%
- Green if 20-25%
- Yellow if 15-20%
- Orange if 10-15%
- Red if <10%

---

## Weekly Update Protocol

### Who Updates: VA (Tom)
### When: Every Friday, 5:00 PM EST
### Time Required: 5-10 minutes

### Step-by-Step Process

**Step 1: Pull Data from SmartContact (3 minutes)**
- Log into SC
- Navigate to each market's active campaigns
- Note for this week:
  - Texts sent
  - Delivery rate %
  - Reply count (conversations)
  - Opt-outs

**Step 2: Pull Data from Campaign Log Tab (2 minutes)**
- Check Campaign Log tab for this week's entries
- Count off-markets received (column "Off-Market Deals")

**Step 3: Enter Data in Monitoring Tab (2 minutes)**
- Add new row for this week
- Fill columns A-J with data collected
- Column K (Status) auto-calculates via formula
- Column I (Conv → Off-Market %) auto-calculates via formula

**Step 4: Add Notes (2 minutes)**
- Column L: Note any context
  - "MD 4-week rest announced"
  - "New message variant V12 deployed"
  - "NOVA send rate increased to 5/min"
  - "Dormant agent purge completed (5,000 excluded)"

**Step 5: Alert Jonathan if Red/Orange (1 minute)**
- If ANY market shows 🚨 Fatigue or ❌ Exhausted
- Text Jonathan immediately
- Include market, metric, and recommended action

---

## Alert Protocol (from Section 9)

### When Status = ⚠️ Watch (Yellow)
**VA Action:**
- Note in Column L
- Monitor next week closely
- Alert Jonathan if drops to Orange

**Recommended Actions (from Section 9):**
- Refresh message variants (introduce 2-3 new templates)
- Extend rest period by 2 weeks
- Test different send times
- Reduce send rate by 25%

---

### When Status = 🚨 Fatigue (Orange)
**VA Action:**
- Text Jonathan immediately
- Include: Market name, response rate, delivery rate, opt-out rate
- Recommend: "MD showing fatigue - response rate 1.8%. Recommend 4-week rest per Section 9."

**Required Actions (from Section 9):**
- Pause campaign for 4-6 weeks (mandatory rest)
- Complete message overhaul (retire old templates, write fresh angles)
- Segment list: Remove agents with 20+ touches
- Test small batch (500 agents) before full relaunch
- Slower cadence when relaunching (2-touch instead of 3-touch)

---

### When Status = ❌ Exhausted (Red)
**VA Action:**
- STOP all campaigns in that market immediately
- Text Jonathan + Alfred
- Schedule emergency meeting to review Section 9 recovery protocol

**Required Actions (from Section 9):**
- STOP all campaigns immediately (12-week rest minimum)
- Audit for spam flagging
- Re-scrape list (add fresh agents, remove bad data)
- Overhaul entire strategy
- Consider market replacement

---

## Sample Data (First 3 Weeks Feb 2026)

| Week | Start Date | Market | Texts | Delivered % | Response % | Convos | Off-Mkts | Conv→Off % | Opt-Outs | Status | Notes |
|------|------------|--------|-------|-------------|------------|--------|----------|------------|----------|--------|-------|
| W06 | 2/2/2026 | MD | 33,146 | 97.0% | 0.78% | 258 | 72 | 27.9% | 15 | ⚠️ Watch | High volume week, low response |
| W06 | 2/2/2026 | NOVA | 15,000 | 96.5% | 1.20% | 180 | 40 | 22.2% | 8 | ⚠️ Watch | Initial wave |
| W06 | 2/2/2026 | RVA | 5,000 | 98.0% | 1.00% | 50 | 12 | 24.0% | 2 | ⚠️ Watch | Small sample |
| W07 | 2/9/2026 | MD | 14,000 | 97.0% | 1.13% | 157 | 28 | 17.8% | 6 | ⚠️ Watch | Follow-up 1 |
| W07 | 2/9/2026 | NOVA | 5,888 | 96.5% | 1.13% | 67 | 14 | 20.9% | 3 | ⚠️ Watch | Follow-up 1 |
| W08 | 2/16/2026 | MD | 5,192 | 97.0% | 0.92% | 48 | 16 | 33.3% | 2 | ⚠️ Watch | Week 3 slowdown |
| W08 | 2/16/2026 | NOVA | 3,000 | 96.0% | 0.85% | 26 | 8 | 30.8% | 1 | ⚠️ Watch | Week 3 low volume |

**Observations from sample data:**
- All markets in "Watch" status (yellow) due to response rate 2-3%
- Conv → Off-Market % improving (27.9% MD Week 1, 33.3% Week 3)
- Opt-out rates healthy (<1%)
- Week 3 shows volume drop (expected pattern)

---

## Dashboard Summary Section

**Add at top of tab above data table:**

### Current Week Summary (Week 8, Feb 16-22)

**Markets Status:**
- ✅ Healthy: 0
- ⚠️ Watch: 3 (MD, NOVA, Richmond)
- 🚨 Fatigue: 0
- ❌ Exhausted: 0

**Actions Taken This Week:**
- MD 4-week rest announced
- Spam audit complete (18 of 20 variants clean)
- Attribution system deployed

**Actions Needed Next Week:**
- Deploy message variants V7-V20 (fresh copy)
- Dormant agent purge (20+ touches, zero response)
- Increase NOVA send rate to 5/min

**Overall List Health:** ⚠️ CAUTION — Response rates below 1.5% require attention. Execute Week 1 plan (message refresh, list segmentation, MD rest).

---

## Automated Alerts (Future Enhancement)

**If Google Sheets supports scripting:**

**Daily Alert (8 AM EST):**
- Check yesterday's response rate
- If drops below 0.5% for any market → Email Jonathan + Alfred
- Subject: "🚨 ALERT: [Market] response rate dropped to [X%]"

**Weekly Alert (Friday 6 PM EST):**
- Summary of all markets status
- Flag any markets that moved from Green → Yellow or Yellow → Orange
- Include recommended actions from Section 9

**Monthly Alert (1st of month):**
- Compare current month vs prior month
- Calculate trend: improving, stable, or declining
- Forecast: At current trajectory, when will each market hit exhaustion?

---

## Implementation Steps

### Step 1: Create New Tab (5 minutes)
- [ ] Open SC Campaign Log Google Sheet
- [ ] Add new tab: "Weekly Monitoring"
- [ ] Set up column headers (A-L)

### Step 2: Build Formulas (15 minutes)
- [ ] Column I: Conv → Off-Market % formula `=H2/G2`
- [ ] Column K: Status formula (see above)
- [ ] Apply conditional formatting rules (Green/Yellow/Orange/Red)

### Step 3: Add Dashboard Summary (10 minutes)
- [ ] Create summary section at top
- [ ] Add current week status counters
- [ ] Add "Actions Taken" and "Actions Needed" text boxes

### Step 4: Populate Historical Data (30 minutes)
- [ ] Backfill Week 6-8 Feb 2026 data (from existing Campaign Log)
- [ ] Verify formulas working correctly
- [ ] Test conditional formatting

### Step 5: Train VA (15 minutes)
- [ ] Show Tom where to pull data (SC dashboard)
- [ ] Show where to enter data (columns A-J)
- [ ] Show how to read Status column (K)
- [ ] Explain alert protocol (when to text Jonathan)

### Step 6: Schedule Weekly Updates (5 minutes)
- [ ] Add to VA's Friday checklist
- [ ] Set calendar reminder (Friday 5 PM EST)
- [ ] Create alert template for Jonathan

**Total setup time:** 1.5 hours

---

## Success Metrics

**Track over 4 weeks:**
1. **Early warning caught:** Did monitoring tab catch fatigue before crisis?
2. **Response time:** How fast did VA alert Jonathan when status changed?
3. **Action effectiveness:** After implementing Section 9 actions, did status improve?
4. **Trend visibility:** Can Jonathan see trajectory at a glance?

**Goal:** Never hit ❌ Exhausted status. Catch all issues at ⚠️ Watch or 🚨 Fatigue stage.

---

## Next Steps

**Today (Feb 17):**
- [ ] Alfred creates Weekly Monitoring tab
- [ ] Alfred builds formulas and conditional formatting
- [ ] Alfred backfills Week 6-8 Feb 2026 data

**Tomorrow (Feb 18):**
- [ ] Train Tom on weekly update protocol (15 minutes)
- [ ] Tom completes first live update (Week 8 data)
- [ ] Verify formulas working correctly

**Friday Feb 21:**
- [ ] Tom completes Week 9 update
- [ ] Jonathan reviews dashboard
- [ ] Adjust thresholds if needed based on first 3 weeks of data

---

**Owner:** Alfred (build) + Tom (weekly updates) + Jonathan (review/action)  
**Deadline:** Tab live and backfilled by end of day Feb 17, Tom trained Feb 18
