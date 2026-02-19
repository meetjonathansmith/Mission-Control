# SC Attribution System - Deploy Today (Feb 17, 2026)

## Timeline: 11:00 AM - 12:30 PM (90 minutes)

### 11:00-11:15 AM: Create SC Campaign Log (15 min)

**Action:** Create Google Sheet named "SC Campaign Log"

**Option A: Alfred creates it**
- Share Google Drive access with Alfred
- Alfred creates sheet with template structure
- Sets up formulas for calculations

**Option B: You/VA creates it**
- Copy template from: `/Users/alfred/.openclaw/workspace/skills/sc-attribution/SC-Campaign-Log-Template.csv`
- Create new Google Sheet
- Import CSV or manually create columns:
  1. Campaign ID
  2. Launch Date
  3. Market
  4. Campaign Type
  5. Message Variant
  6. Sender Name
  7. Agents Contacted
  8. Texts Sent
  9. Delivery Rate %
  10. Response Rate %
  11. Conversations Generated
  12. Off-Market Deals
  13. Offers Sent
  14. Ratified Deals
  15. Closed Deals
  16. Revenue Generated
  17. Notes

**Output:** Google Sheet URL shared with Jonathan + VA

---

### 11:15-11:45 AM: Train VA on Campaign Naming (30 min)

**Action:** Schedule 30-min Zoom/call with VA

**Training agenda:**
1. Explain why attribution matters (5 min)
2. Teach campaign naming convention (10 min)
   - Format: MARKET-YEAR-W##-TYPE-V#
   - Practice exercises (VA generates 3 campaign IDs)
3. Show how to log campaigns in sheet (10 min)
   - Walk through adding new campaign
   - Show where to find data in SC
4. Q&A (5 min)

**Training materials:**
- VA Training Checklist: `/Users/alfred/.openclaw/workspace/skills/sc-attribution/VA-Training-Checklist.md`
- SC Campaign Log Google Sheet

**Pass criteria:**
- VA can generate campaign ID correctly
- VA can add campaign to log
- VA knows when to update log (weekly at standup)

**Output:** VA certified on campaign naming, ready to tag campaigns

---

### 11:45 AM - 12:00 PM: Backfill Current Campaigns (15 min)

**Action:** Log all active/recent campaigns with best available data

**Current campaigns to log (from KPI sheet):**
1. MD Week 1-3 campaigns
2. NOVA Week 1-3 campaigns
3. RVA Week 1-3 campaigns

**Data available:**
- From KPI sheet: texts sent, conversations, off-markets, ratifications
- **Missing:** Exact message variant used, sender names
- **Estimate:** Use "V1-UNKNOWN" for variant if unknown, document in Notes

**Example backfill entries:**
```
MD-2026-W01-Initial-V1-UNKNOWN,2026-02-02,MD,Initial,V1-UNKNOWN,Tom,22270,33146,97.0,4.09,258,72,20,3,1,$17000,"Backfilled - exact variant unknown"
```

**Output:** Last 2-3 weeks of campaigns logged with available data

---

### 12:00-12:15 PM: Tag Next Campaign Launch (15 min)

**Action:** Apply naming convention to NEXT SC campaign launch

**Scenario:** You're launching a new campaign today or this week

**Steps:**
1. Determine campaign details:
   - Market: Which market? (MD, NOVA, RVA)
   - Week: Current week number (Week 8 of 2026)
   - Type: Initial, FU1, FU2?
   - Message Variant: Which of 20 variants?
2. Generate campaign ID: `MARKET-2026-W08-TYPE-V#`
3. Name campaign in SC with this ID
4. Log in SC Campaign Log BEFORE launching
5. Launch campaign

**Example:**
- Market: NOVA
- Week: 8
- Type: FU1 (follow-up to Week 6 initial)
- Variant: V3 (Problem Solver)
- Campaign ID: `NOVA-2026-W08-FU1-V3`
- Campaign name in SC: NOVA-2026-W08-FU1-V3
- Launch

**Output:** First properly-tagged campaign launched

---

### 12:15-12:30 PM: Set Up Weekly Update Routine (15 min)

**Action:** Add "Update SC Campaign Log" to Monday standup routine

**What happens every Monday 8:45 AM:**
1. Jonathan updates KPI sheet (already doing this)
2. VA updates SC Campaign Log with:
   - Previous week's campaign performance
   - New campaigns launched
   - Any deals attributed to campaigns
3. Alfred pulls data and updates Mission Control

**Automate reminder:**
- Alfred reminds VA at standup to update log
- Takes 5-10 minutes
- Becomes routine within 2 weeks

**Output:** Weekly update routine established

---

## Success Criteria for Today

By end of day Feb 17:
- [ ] SC Campaign Log created and shared
- [ ] VA trained on campaign naming (30 min session complete)
- [ ] Last 2-3 weeks of campaigns backfilled in log
- [ ] Next campaign launch uses proper naming convention
- [ ] Weekly update routine added to standup

## What This Unlocks

**By end of Week 1:**
- Every new campaign properly tagged
- Attribution data flowing into log
- Can identify which campaigns produce deals

**By end of Month 1:**
- First monthly attribution report
- Data on market performance (MD vs NOVA vs RVA)
- Data on message variant performance (V1-V20)
- ROI calculation per market
- Informed budget allocation decisions

**By end of Month 3:**
- Clear patterns on what works
- Optimize budget to highest-ROI markets
- Retire low-performing message variants
- Scale winners
- Predictable deal flow based on campaign data

## Next Steps After Today

**Tomorrow (Feb 18):**
- VA logs any responding agents from yesterday's campaigns
- VA tracks which campaign produced each response

**Weekly (Every Monday):**
- VA updates SC Campaign Log at standup
- Alfred generates attribution insights

**Monthly (1st Monday):**
- Alfred generates attribution report
- Review ROI by market/variant
- Make budget allocation decisions

## Questions?

Alfred is standing by to help with:
- Creating Google Sheet
- Training VA
- Troubleshooting attribution
- Generating reports

Let's deploy this system TODAY so we can start making data-driven SC decisions.
