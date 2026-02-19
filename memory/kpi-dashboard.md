# Daily KPI Dashboard
## Updated by VA and LM Daily

**Google Sheet URL:**
https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/edit?usp=sharing

**Feb 2026 Tab URL:**
https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/edit?gid=1000356364#gid=1000356364

**CSV Export URLs:**
- All sheets: https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/export?format=csv
- Feb 2026 only: https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/export?format=csv&gid=1000356364

**Usage:**
- Fetch as CSV anytime for current performance data
- Use for all performance analysis, reporting, trend tracking
- Updated daily by VA and LM team
- Primary source of truth for operational metrics

**Commands:**
```bash
# Fetch current KPI data
curl -sL "https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/export?format=csv" > /tmp/kpi-current.csv

# Quick summary
curl -sL "https://docs.google.com/spreadsheets/d/1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE/export?format=csv" | head -20
```

---

**KPI Metrics Tracked (Daily):**
- New texts (outbound volume from SC campaigns)
- Conversations (response count)
- # of New Properties (deals entered pipeline)
- # of Off-Market Properties (actual off-market deal submissions)
- # of Offers Sent
- # of Offers Ratified (in later weeks)
- # of Deals Closed (in later weeks)

**Data Structure:**
- Organized by week (Week 1, Week 2, etc.)
- Daily breakdown (Mon-Sun)
- Weekly totals in rightmost column
- Most recent data: August 2025 (as of Feb 13, 2026 check)

**Key Conversion Funnel:**
New texts → Conversations → Off-Market Properties → Offers Sent → Offers Ratified → Deals Closed

**Example Week (Week 12 - August 11-15, 2025):**
- New texts: 8,852
- Conversations: 121
- Off-Market Properties: 46
- Offers Sent: 8

**Conversion rates (based on Week 12):**
- Texts → Conversations: 1.37%
- Conversations → Off-Market: 38%
- Off-Market → Offers: 17%

---

**Last accessed:** 2026-02-13  
**Note:** Sheet may need updating for 2026 data
