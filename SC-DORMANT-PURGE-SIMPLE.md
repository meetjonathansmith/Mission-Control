# SC DORMANT PURGE - SIMPLE INSTRUCTIONS FOR VA

**Goal:** Stop wasting texts on agents who never respond.

---

## STEP 1: Run the Analysis (Find the Right Number)

**What we need to know:**
Of all the agents who DID respond, what message number did they first reply on?

**Instructions for VA:**

1. Open SmartContact
2. Go to **Contacts** → **Advanced Filter**
3. Set filter:
   - **Replies Received:** ≥ 1 (one or more)
   - **Date Range:** All time
4. Export this list to CSV
5. Open the CSV in Excel/Google Sheets
6. Create a report showing:
   - Touch 1: How many first replied here?
   - Touch 2: How many first replied here?
   - Touch 3: How many first replied here?
   - Touch 4: How many first replied here?
   - Touch 5: How many first replied here?
   - Touch 6: How many first replied here?
   - Touch 7: How many first replied here?
   - Touch 8: How many first replied here?
   - Touch 9: How many first replied here?
   - Touch 10+: How many first replied here?

**Report format:**
```
Total Contacts Who Replied: [NUMBER]

Touch 1: [#] replies ([%])
Touch 2: [#] replies ([%])
Touch 3: [#] replies ([%])
Touch 4: [#] replies ([%])
Touch 5: [#] replies ([%])
Touch 6: [#] replies ([%])
Touch 7: [#] replies ([%])
Touch 8: [#] replies ([%])
Touch 9+: [#] replies ([%])

CUMULATIVE:
By Touch 5: [%] of all replies received
By Touch 8: [%] of all replies received
By Touch 10: [%] of all replies received
```

**Send this report to Jonathan. STOP and WAIT for next instructions.**

---

## STEP 2: Execute the Purge (After Jonathan Approves)

**Jonathan will tell you the cutoff number based on Step 1 data.**

Let's say the number is **8 messages**. Here's what to do:

1. Open SmartContact
2. Go to **Contacts** → **Advanced Filter**
3. Set filter:
   - **Messages Sent:** ≥ 8
   - **Date Range:** Last 90 days
   - **Replies Received:** = 0 (zero)
   - **Status:** Active
4. Export to CSV: Save as `SC-Dormant-Purge-Feb18-2026.csv`
5. Note the total count
6. **SANITY CHECK:** Open CSV, spot-check 10-15 contacts. Verify they have 8+ sends and 0 replies.
7. If anything looks wrong, STOP and text Jonathan.
8. If everything looks good, continue:

**Move them to Dormant:**
- Select all contacts from the filter
- Click **Bulk Action** → **Move to List**
- List name: **"Dormant - 8+ No Reply"** (or whatever cutoff Jonathan approved)
- Confirm

**Exclude from all campaigns:**
- Go to **Campaigns** → **Active Campaigns**
- For each campaign (MD, NOVA, Richmond, VA Beach):
  - Click **Edit**
  - Find **Exclude List** setting
  - Add "Dormant - 8+ No Reply"
  - Save

---

## STEP 3: Report Results to Jonathan

**Text Jonathan:**

```
SC Dormant Purge Complete - Feb 18, 2026

Cutoff Used: [8] messages, [90] days, 0 replies

Total Contacts Moved: [NUMBER]
% of Total List: [%]

By Market:
- MD: [#] moved
- NOVA: [#] moved  
- Richmond: [#] moved
- VA Beach: [#] moved

Send Capacity Freed: Approximately [NUMBER] texts/week

CSV saved: SC-Dormant-Purge-Feb18-2026.csv
```

---

## Timeline

**Step 1 (Analysis):** Run TODAY and send report to Jonathan  
**Step 2 (Purge):** Execute after Jonathan approves the cutoff number  
**Step 3 (Report):** Send immediately after purge complete

---

**Questions? Text Jonathan before doing anything.**
