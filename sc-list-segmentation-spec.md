# SC List Segmentation Specification
**Created:** February 17, 2026, 12:01 PM EST  
**Purpose:** Tag agents by engagement level, identify over-contacted agents, improve targeting efficiency

---

## Overview

**Goal:** Segment 54,132 active agents into 4 categories based on response history and contact frequency.

**Categories:**
1. **Cold** — Never responded, <15 total touches
2. **Warm** — Responded at least once, not yet converted to off-market
3. **Converted** — Sent off-market property (moved to DPV)
4. **Dormant** — 15+ touches, zero response (exclude from future campaigns)

**Primary question:** How many agents have been contacted 15+ times with zero response?

---

## Segmentation Criteria

### Segment 1: COLD
**Definition:** Agent has never responded to any SC campaign AND has <15 lifetime touches.

**Characteristics:**
- Zero replies to any message
- Contact count: 1-14 touches
- Still worth targeting (haven't hit fatigue threshold)

**Campaign strategy:** Continue normal rotation, test different message variants

**Tag in SC:** "Cold"

**Estimated count:** ~35,000-40,000 agents (65-75% of list)

---

### Segment 2: WARM
**Definition:** Agent has responded at least once BUT has not yet sent an off-market property.

**Characteristics:**
- 1+ replies (e.g., "Not interested," "Tell me more," "What are you looking for?")
- Has NOT sent property address or off-market deal
- May be interested but needs nurturing

**Campaign strategy:** 
- Use softer messaging (Market Intel, Referral Request variants)
- Reduce frequency (every 21 days vs 14 days)
- Personalize follow-ups referencing prior conversation

**Tag in SC:** "Warm"

**Estimated count:** ~8,000-10,000 agents (15-18% of list)

---

### Segment 3: CONVERTED
**Definition:** Agent has sent at least one off-market property (regardless of deal outcome).

**Characteristics:**
- Sent property address, listing link, or off-market details
- Moved to DPV (14-day nurture in GHL)
- Removed from SC cold rotation

**Campaign strategy:** 
- NO SC campaigns (handled in DPV via GHL)
- Do NOT text via SC again (relationship nurture only)

**Tag in SC:** "Converted" (or remove from SC entirely)

**Count:** 4,200 agents in DPV (from prior data)

---

### Segment 4: DORMANT
**Definition:** Agent has been contacted 15+ times with ZERO response.

**Characteristics:**
- 15+ lifetime touches across all campaigns
- Zero replies ever
- Likely uninterested, phone disconnected, or blocking number

**Campaign strategy:** 
- EXCLUDE from all future campaigns
- Frees up send volume for higher-quality contacts
- Reassess in 6 months (consider re-engagement campaign)

**Tag in SC:** "Dormant"

**Critical question:** How many agents fall into this segment?

**Estimated count:** 5,000-10,000 agents (10-18% of list)

---

## Data Required from SmartContact

### What We Need to Pull

1. **Agent phone number** (unique ID)
2. **Total lifetime touches** (count of texts sent to this agent across all campaigns)
3. **Total replies** (count of responses from this agent)
4. **Last contact date** (most recent text sent)
5. **Last response date** (most recent reply received)
6. **Campaigns contacted** (list of campaign IDs agent was included in)
7. **Response status** (replied vs not replied)

### Questions for SmartContact Platform

**Can SC export this data?**
- If yes: Export CSV with columns above
- If no: Manual review required (time-intensive)

**Does SC track lifetime touch count per contact?**
- If yes: Use this field directly
- If no: Calculate from campaign participation logs

**Does SC support custom tags?**
- If yes: Apply Cold/Warm/Converted/Dormant tags in SC
- If no: Maintain segmentation in external spreadsheet

---

## Implementation Steps

### Step 1: Export SC Contact Data (30 minutes)
- [ ] Log into SmartContact
- [ ] Navigate to Contacts or Campaigns section
- [ ] Export ALL contacts with fields:
  - Phone number
  - Lifetime touches (if available)
  - Reply count (if available)
  - Last contact date
  - Last response date
- [ ] Save as `sc-contact-export-feb17.csv`

**If SC doesn't have "lifetime touches" field:**
- [ ] Export campaign participation logs
- [ ] Count how many campaigns each phone number appears in
- [ ] Use campaign count as proxy for lifetime touches

---

### Step 2: Analyze Data in Google Sheets (45 minutes)
- [ ] Upload `sc-contact-export-feb17.csv` to Google Sheets
- [ ] Create new sheet: "SC Segmentation Analysis"
- [ ] Add calculated columns:
  - **Reply Status:** IF(Reply Count > 0, "Replied", "Never Replied")
  - **Converted Status:** Check if phone number exists in DPV list
  - **Segment:** 
    - IF Converted = YES → "Converted"
    - ELSE IF Lifetime Touches ≥ 15 AND Reply Count = 0 → "Dormant"
    - ELSE IF Reply Count > 0 → "Warm"
    - ELSE → "Cold"

**Formula for Segment Column (Google Sheets):**
```
=IF(C2="YES", "Converted", IF(AND(B2>=15, D2=0), "Dormant", IF(D2>0, "Warm", "Cold")))
```
Where:
- B2 = Lifetime Touches
- C2 = Converted Status (YES/NO)
- D2 = Reply Count

---

### Step 3: Count by Segment (5 minutes)
- [ ] Create summary table:

| Segment | Count | % of Total | Strategy |
|---------|-------|------------|----------|
| Cold | | | Continue rotation |
| Warm | | | Nurture messaging |
| Converted | 4,200 | 7.8% | DPV only |
| Dormant | **???** | **???** | Exclude |
| **TOTAL** | 54,132 | 100% | |

**Critical output:** How many Dormant agents (15+ touches, zero response)?

---

### Step 4: Create Exclusion List (15 minutes)
- [ ] Filter for Dormant segment
- [ ] Export phone numbers to `sc-dormant-agents-exclude.csv`
- [ ] Upload to SmartContact as exclusion list
- [ ] Apply to all future campaigns

**Benefit:** If 10,000 agents are Dormant, excluding them frees up 10,000 slots for fresh contacts.

---

### Step 5: Apply Tags in SmartContact (30 minutes)
**If SC supports custom tags:**
- [ ] Import Cold segment → Tag as "Cold"
- [ ] Import Warm segment → Tag as "Warm"
- [ ] Import Dormant segment → Tag as "Dormant"

**If SC does NOT support tags:**
- [ ] Maintain segmentation in Google Sheet
- [ ] Reference sheet when building campaigns (manually exclude Dormant)

---

### Step 6: Build Campaign Targeting Rules (15 minutes)

**For Cold Agents:**
- Normal rotation (3 texts over 6 weeks)
- Full message variant library (V1-V20)
- Standard send rates (MD 6/min, NOVA 5/min, Richmond 4/min)

**For Warm Agents:**
- Reduced frequency (2 texts over 8 weeks)
- Softer messaging (V13-V20: Market Intel + Referral Request)
- Personalized follow-ups referencing prior conversation

**For Converted Agents:**
- Remove from SC entirely
- Handle in DPV (GHL 14-day nurture)

**For Dormant Agents:**
- EXCLUDE from all campaigns
- Reassess in 6 months (optional re-engagement test)

---

## Expected Results

### Scenario 1: 5,000 Dormant Agents (9% of list)
**Impact:**
- Frees up 5,000 × 3 texts/cycle = 15,000 texts/cycle
- At 12-week cycle = 1,250 texts/month capacity freed
- Redirected to fresh contacts or higher-quality segments

**ROI:** 1,250 texts × 1.5% response rate = 19 extra conversations/month

---

### Scenario 2: 10,000 Dormant Agents (18% of list)
**Impact:**
- Frees up 10,000 × 3 texts/cycle = 30,000 texts/cycle
- At 12-week cycle = 2,500 texts/month capacity freed
- Significant efficiency gain

**ROI:** 2,500 texts × 1.5% response rate = 38 extra conversations/month

---

### Scenario 3: 15,000 Dormant Agents (28% of list)
**Impact:**
- Frees up 15,000 × 3 texts/cycle = 45,000 texts/cycle
- At 12-week cycle = 3,750 texts/month capacity freed
- Major list health issue (over-contacting non-responders)

**Signal:** If >25% of list is Dormant, need fresh list acquisition or complete message/targeting overhaul.

---

## Key Questions to Answer

1. **How many agents have 15+ touches?**
   - Expected: 5,000-15,000 (10-25% of list)
   - If >20,000: Major list fatigue issue

2. **What's the average touch count across all agents?**
   - Expected: 5-8 touches average
   - If >10: Over-contacting agents

3. **What's the reply rate by touch count?**
   - Touch 1-3: Expect 1.5-2% response
   - Touch 4-6: Expect 1.0-1.5% response
   - Touch 7-10: Expect 0.5-1.0% response
   - Touch 11-15: Expect <0.5% response
   - Touch 16+: Expect <0.2% response (not worth continuing)

4. **How many Warm agents (replied but no deal)?**
   - Expected: 8,000-10,000 (15-18% of list)
   - Opportunity for targeted nurture campaigns

5. **How many Converted agents still in SC?**
   - Should be zero (all should be in DPV)
   - If >0: Need cleanup (remove from SC, add to DPV)

---

## Deliverables

### Primary Output
**`sc-segmentation-report-feb17.md`** including:
- Total agents by segment (Cold, Warm, Converted, Dormant)
- Count of agents with 15+ touches
- Average touch count across list
- Response rate by touch count bracket
- Exclusion list size and impact projection

### Supporting Files
1. **`sc-contact-export-feb17.csv`** — Raw SC export
2. **`sc-segmentation-analysis.xlsx`** — Google Sheet with formulas
3. **`sc-dormant-agents-exclude.csv`** — Exclusion list for SC upload
4. **`sc-warm-agents-nurture.csv`** — Warm segment for targeted campaigns

---

## Timeline

**Day 1 (Today - Feb 17):**
- Export SC contact data (30 min)
- Upload to Google Sheets (5 min)
- Build segmentation formulas (45 min)
- Generate summary report (15 min)

**Day 2 (Tomorrow - Feb 18):**
- Create exclusion list (15 min)
- Upload to SmartContact (15 min)
- Apply tags (if supported) (30 min)
- Update campaign targeting rules (15 min)

**Total time:** ~3 hours over 2 days

---

## Success Metrics

**Track over next 4 weeks:**
1. **Response rate improvement:** Excluding Dormant agents should increase response rate 0.2-0.5%
2. **Cost efficiency:** Texts per conversation should decrease 10-20%
3. **Warm agent conversion:** Nurture campaigns should convert 5-10% of Warm to Converted
4. **List health score:** % of Dormant agents should decrease month-over-month as fresh contacts added

---

## Next Steps

**Immediate (Today):**
1. Alfred attempts SC contact export (if has access)
2. If blocked: Jonathan exports SC data, sends to Alfred
3. Alfred builds segmentation analysis in Google Sheets
4. Alfred delivers segmentation report by end of day

**Tomorrow:**
5. Upload Dormant exclusion list to SC
6. Adjust campaign targeting rules
7. Monitor first campaigns with new segmentation (Week 4 Feb data)

---

**Owner:** Alfred (analysis) + Tom (SC export if needed) + Jonathan (approval)  
**Deadline:** Segmentation report by end of day Feb 17, implementation complete Feb 18
