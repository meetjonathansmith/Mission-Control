# Deal Pipeline Tracker - Instructions

## Purpose
Track every ratified deal from ratification to close (or failure). This is NOT a daily update - only update when deal status changes.

## How to Import to Google Sheets
1. Open your KPI sheet: https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/edit
2. Create new tab: "Deal Pipeline"
3. File → Import → Upload → Select `deal-pipeline-tracker.csv`
4. Import to new sheet

## Column Definitions

**Deal Name:** Property identifier (street name, city, or nickname)  
**Income Source:** Assignment | Marketing fee | Retail | Wholesale  
**Income Amount:** Gross income expected (before splits/costs)  
**Ratified Date:** Date offer was accepted by agent/seller  
**Expected Close:** Target closing date  
**Status:** Pending | Inspections | Under Contract | Closed | Couldn't Sell | Fell Through  
**Actual Close Date:** Date deal actually closed (if closed)  
**Net Profit:** Final profit after splits/costs  
**Notes:** Any relevant context (why it fell through, operator paid, etc.)

## When to Update

**Deal gets ratified:**
- Add new row
- Fill: Deal Name, Income Source, Income Amount, Ratified Date, Status (set to "Pending")

**Status changes:**
- Update Status column (Pending → Inspections → Under Contract → Closed)
- Update Expected Close if timeline changes

**Deal closes:**
- Update: Status = "Closed", Actual Close Date, Net Profit
- Add any notes about operators paid, splits, lessons learned

**Deal falls through:**
- Update: Status = "Couldn't Sell" or "Fell Through"
- REQUIRED: Add note explaining WHY (financing, inspection, cold feet, etc.)

## Status Definitions

**Pending:** Ratified, waiting for next step  
**Inspections:** In inspection period  
**Under Contract:** Past inspections, moving to close  
**Closed:** Deal completed, money received  
**Couldn't Sell:** Deal fell through (note reason in Notes column)  
**Fell Through:** Same as couldn't sell (use either term)

## Reporting Cadence

**Daily:** No update needed (use KPI sheet for daily volume)  
**When status changes:** Update this sheet (takes 30 seconds)  
**Weekly review:** Jonathan + Alfred review pipeline on Fridays

## Pre-Populated Deals

The sheet is pre-populated with February 2026 deals from your financials:
- 4 closed deals (Jefferson, School, Anderson, Newbourne)
- 6 pending/in-progress deals (Poplar, Kayak, Gunther, Lake, Bosun, Lusby)

## Who Updates

**Primary:** LM or you (whoever knows deal status)  
**Backup:** Alfred will flag missing updates in weekly review  
**Frequency:** Update within 24 hours of status change

## Why This Matters

This sheet answers:
- How many deals are in pipeline right now?
- What's our close rate? (Closed / Total ratified)
- What's average time from ratified to closed?
- Why do deals fall through? (pattern analysis)
- What's our monthly revenue projection?

Without this, we're flying blind on deal outcomes.

---

**File location:** `/Users/alfred/.openclaw/workspace/data/deal-pipeline-tracker.csv`  
**Import this file to create the Deal Pipeline tab in your KPI Google Sheet.**
