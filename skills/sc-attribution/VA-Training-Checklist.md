# VA Training Checklist: SC Attribution System

## Pre-Training Setup
- [ ] VA has access to SC Campaign Log Google Sheet
- [ ] VA has access to Smarter Contact account
- [ ] VA has access to Deal Pipeline Tracker or GHL
- [ ] VA has copy of 20 Message Variants (Appendix C)

## Training Session 1: Campaign Naming Convention (30 minutes)

### Exercise 1: Generate Campaign IDs
**VA must correctly name these campaigns:**

1. Maryland market, Week 10 of 2026, Initial send, Message Variant 5
   - **Answer:** MD-2026-W10-Initial-V5

2. Northern Virginia, Week 12, Follow-up 1, Variant 12
   - **Answer:** NOVA-2026-W12-FU1-V12

3. Richmond/VA Beach, Week 15, Follow-up 2, Variant 7
   - **Answer:** RVA-2026-W15-FU2-V7

**Pass criteria:** 3 of 3 correct without assistance

### Exercise 2: Identify Campaign Components
**Given campaign ID, VA must identify:**

`MD-2026-W08-Initial-V1`
- Market: MD
- Year: 2026
- Week: 8
- Type: Initial
- Message Variant: V1 (Direct Ask: "Hey, it's Tom. Looking for a property in [AREA] for a client. Got anything off-market?")

**Pass criteria:** All 5 components identified correctly

## Training Session 2: Campaign Logging (30 minutes)

### Exercise 3: Log New Campaign
**Scenario:** You're launching a new campaign to NOVA market, Week 9, Initial send, using Message Variant 3, sender name is Jenny.

**VA must:**
1. Generate campaign ID: NOVA-2026-W09-Initial-V3
2. Open SC Campaign Log Google Sheet
3. Add new row with:
   - Campaign ID: NOVA-2026-W09-Initial-V3
   - Launch Date: [Today's date]
   - Market: NOVA
   - Campaign Type: Initial
   - Message Variant: V3
   - Sender Name: Jenny
   - Agents Contacted: [Count from SC]
   - Texts Sent: [Count from SC]
4. Save and confirm

**Pass criteria:** All fields filled correctly in <5 minutes

### Exercise 4: Update Campaign Performance
**Scenario:** Campaign MD-2026-W08-Initial-V1 launched 3 days ago. SC shows:
- 22,270 texts sent
- 21,582 delivered (97%)
- 910 conversations (4.09% response rate)
- 5 agents submitted off-market properties

**VA must:**
1. Locate campaign in SC Campaign Log
2. Update columns:
   - Texts Sent: 22,270
   - Delivery Rate %: 97.0
   - Response Rate %: 4.09
   - Conversations Generated: 910
   - Off-Market Deals: 5
3. Save and confirm

**Pass criteria:** All fields updated correctly

## Training Session 3: Deal Attribution (30 minutes)

### Exercise 5: Track Responding Agent
**Scenario:** Agent John Doe (240-555-1234) responds to your text with an off-market property. You launched MD-2026-W08-Initial-V1 campaign 2 days ago.

**VA must:**
1. Identify campaign: MD-2026-W08-Initial-V1
2. Log agent response:
   - Agent: John Doe
   - Phone: (240) 555-1234
   - Campaign: MD-2026-W08-Initial-V1
   - Date responded: [Date]
3. When property enters GHL/Deal Pipeline, add:
   - Source Campaign ID: MD-2026-W08-Initial-V1

**Pass criteria:** Agent tracked and deal attributed correctly

### Exercise 6: Cross-Reference Agent to Campaign
**Scenario:** Agent responds but you're not sure which campaign they came from. Agent phone: (703) 555-8888. Recent campaigns:
- NOVA-2026-W08-Initial-V2 (launched 5 days ago)
- NOVA-2026-W07-FU1-V5 (launched 12 days ago)

**VA must:**
1. Check SC send logs
2. Match phone number to campaign
3. Identify correct campaign
4. Log attribution

**Pass criteria:** Correct campaign identified within 3 minutes

## Training Session 4: Monthly Reporting (15 minutes)

### Exercise 7: Generate Monthly Summary
**Scenario:** End of month. VA must generate summary showing:
- Total texts sent per market
- Response rate per market
- Off-markets generated per market
- Ratified deals per market

**VA must:**
1. Review SC Campaign Log for the month
2. Calculate totals per market
3. Generate simple report (can be spreadsheet or text)

**Pass criteria:** Report generated with accurate totals

## Certification Checklist

VA is certified when:
- [ ] Can generate campaign IDs correctly (3/3 on Exercise 1)
- [ ] Can identify campaign components (Exercise 2)
- [ ] Can log new campaigns (Exercise 3)
- [ ] Can update campaign performance (Exercise 4)
- [ ] Can track responding agents (Exercise 5)
- [ ] Can cross-reference agents to campaigns (Exercise 6)
- [ ] Can generate monthly reports (Exercise 7)
- [ ] Understands why attribution matters
- [ ] Knows where to find help (this document + Alfred)

## Ongoing Requirements

**Weekly (Every Monday at standup):**
- [ ] Update SC Campaign Log with previous week's performance
- [ ] Report any new campaigns launched
- [ ] Report any deals attributed to campaigns

**Monthly (1st Monday of month):**
- [ ] Generate attribution summary report
- [ ] Identify best-performing campaigns
- [ ] Flag any performance degradation

## Common Mistakes to Avoid

1. **Wrong week number** - Use ISO week number (Google "week number 2026")
2. **Forgetting to log campaign** - Log BEFORE launching in SC
3. **No agent tracking** - Track every responding agent immediately
4. **Missing attribution** - Every deal needs Source Campaign ID
5. **Duplicate campaign IDs** - Each campaign is unique, check log before creating

## Questions?

Ask Alfred or Jonathan. This system is critical for optimizing SC budget allocation.

## Success Metrics

Good VA performance:
- 100% of campaigns logged before launch
- 90%+ of deals have source attribution
- Weekly updates completed on time
- Monthly reports generated without prompting

## Resources

- SC Operations Manual Section 8
- Appendix C: 20 Message Variants
- SC Campaign Log Google Sheet
- Alfred (AI Chief of Staff) for troubleshooting
