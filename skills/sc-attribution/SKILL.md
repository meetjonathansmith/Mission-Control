# SC Attribution System Skill

## Purpose
Track Smarter Contact campaigns from text send → response → off-market → ratified → closed to identify which campaigns, messages, and markets produce deals.

## Campaign Naming Convention

**Format:** `[MARKET]-[YEAR]-W[WEEK#]-[TYPE]-V[MESSAGE_VARIANT]`

**Examples:**
- `MD-2026-W08-Initial-V1` (Maryland, Week 8 of 2026, initial send, message variant 1)
- `NOVA-2026-W08-FU1-V3` (Northern Virginia, Week 8, follow-up 1, message variant 3)
- `RVA-2026-W08-FU2-V12` (Richmond/VA Beach, Week 8, follow-up 2, variant 12)

**Components:**
- **MARKET:** MD, NOVA, RVA (or specific: Richmond, VABeach)
- **YEAR:** 2026
- **WEEK:** W01-W52 (week of year)
- **TYPE:** Initial, FU1, FU2, FU3
- **MESSAGE_VARIANT:** V1-V20 (from Appendix C message library)

## Implementation Steps

### Step 1: Create SC Campaign Log (Google Sheet)

**Columns:**
1. Campaign ID (naming convention above)
2. Launch Date
3. Market
4. Campaign Type (Initial/FU1/FU2)
5. Message Variant Used (V1-V20)
6. Sender Name (Tom, Jenny, Stan, etc.)
7. Agents Contacted (count)
8. Texts Sent
9. Delivery Rate (%)
10. Response Rate (%)
11. Conversations Generated
12. Off-Market Deals Received
13. Offers Sent
14. Ratified Deals
15. Closed Deals
16. Revenue Generated
17. Notes

**Update weekly** after each campaign launch.

### Step 2: Train VA on Campaign Naming

**VA must:**
1. Name every new SC campaign using convention
2. Log campaign details in SC Campaign Log sheet
3. Track responding agents (phone number + campaign ID)
4. Update log when deals progress through pipeline

**Training checklist:**
- [ ] Can correctly generate campaign ID
- [ ] Knows where to log campaign details
- [ ] Can identify which message variant was used
- [ ] Updates log weekly with performance data
- [ ] Cross-references responding agents to campaigns

### Step 3: Deal-Level Attribution Tagging

**In GHL or Deal Pipeline Tracker, add custom field:**
- **Field name:** `Source Campaign ID`
- **Format:** MARKET-YEAR-W##-TYPE-V#
- **Populate:** When agent responds and submits off-market

**Example flow:**
1. Agent John Doe receives text from MD-2026-W08-Initial-V1
2. Agent responds 2 days later with off-market property
3. VA logs: John Doe, (240) 555-1234, MD-2026-W08-Initial-V1
4. Property enters GHL pipeline with Source Campaign ID = MD-2026-W08-Initial-V1
5. Deal closes → attribute revenue to MD-2026-W08-Initial-V1 campaign

### Step 4: Monthly Attribution Report

**Generate report showing:**

**Campaign Performance by Market:**
```
Market | Texts | Response % | Off-Market | Ratified | Closed | Cost per Ratified
MD     | 22K   | 4.09%      | 68         | 4        | 2      | $223
NOVA   | 25K   | 3.81%      | 72         | 3        | 1      | $334
RVA    | 7K    | 9.28%      | 52         | 5        | 2      | $147
```

**Message Variant Performance:**
```
Variant | Texts | Response % | Ratified | Win Rate
V1      | 18K   | 3.2%       | 3        | 10%
V2      | 18K   | 4.1%       | 5        | 14%
V3      | 19K   | 3.8%       | 4        | 12%
```

**Campaign Type Performance:**
```
Type    | Response % | Off-Market % | Ratified %
Initial | 4.2%       | 16%          | 8%
FU1     | 2.8%       | 22%          | 12%
FU2     | 1.9%       | 28%          | 15%
```

### Step 5: Optimize Based on Data

**Decisions attribution enables:**
- Which market to scale (lowest cost per ratified)
- Which message variants to use more (highest win rate)
- When to follow up (FU1 vs FU2 conversion rates)
- Budget allocation (ROI by market)
- When to rest lists (response rate decay)

## Files & Tools

**SC Campaign Log:** Google Sheet (create from template)
**Deal Pipeline Tracker:** Add "Source Campaign ID" column
**Weekly Update:** Every Monday at standup, VA updates log with previous week's campaign performance

## Success Metrics

- [ ] 100% of campaigns use naming convention
- [ ] 90%+ of deals have source attribution
- [ ] Monthly report generated showing ROI by market/variant
- [ ] Data-driven decisions on budget allocation

## Troubleshooting

**Problem:** Agent responds but can't identify which campaign  
**Solution:** VA cross-references agent phone number to SC send log, identifies campaign by date range

**Problem:** Deal closes but no source campaign in GHL  
**Solution:** Backfill attribution by reviewing agent contact history in SC

**Problem:** Response rate drops but don't know why  
**Solution:** Attribution data shows which market/variant/timing degraded, isolate and fix

## Reference

See SC Operations Manual Section 8 for full attribution framework.
