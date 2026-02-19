# SC → GHL Zap Specification
**Created:** February 17, 2026  
**Purpose:** Automate deal flow from SmartContact to GoHighLevel when Tom tags a conversation as 'deal received'

---

## Overview

**Workflow:**
1. Tom receives off-market property from agent via SmartContact
2. Tom tags conversation in SC with "deal received" (or custom tag)
3. Zapier trigger fires
4. New GHL contact created (or updated if exists)
5. Campaign ID from SC Campaign Log tagged in GHL
6. LM receives notification

**Goal:** Eliminate manual data entry, ensure 100% attribution tracking, notify LM within 60 seconds.

---

## Zap Structure

### Trigger: SmartContact Tag Added
**App:** SmartContact (via Webhooks if no native Zapier integration)

**Trigger Event:** Tag Added to Conversation  
**Tag Name:** "deal received" (or custom tag Tom uses)

**Data Captured:**
- Agent name
- Agent phone number
- Conversation ID
- Tag added timestamp
- Property address (if in conversation text)
- Message history (last 10 messages)

**Alternative if SC doesn't support tags:** Use keyword trigger ("PROPERTY:" or "ADDRESS:" in message text)

---

### Action 1: Lookup Campaign ID
**App:** Google Sheets (SC Campaign Log)

**Action:** Lookup Spreadsheet Row

**Lookup Column:** Agent Phone Number  
**Return Column:** Campaign ID (most recent campaign agent was contacted in)

**Sheet:** SC Campaign Log (created Feb 17)  
**Sheet URL:** https://docs.google.com/spreadsheets/d/1CktoY4AGF7IS2UipUx1qllpVLttZwCoGq_yaRDig_wQ/edit

**Fallback:** If phone not found in Campaign Log, use "Unknown-Source" as Campaign ID

---

### Action 2: Create or Update GHL Contact
**App:** GoHighLevel

**Action:** Create/Update Contact

**Contact Fields:**
- **First Name:** Agent first name (from SC)
- **Last Name:** Agent last name (from SC)
- **Phone:** Agent phone number (from SC)
- **Email:** (if available in SC conversation)
- **Source:** "SmartContact"
- **Tags:** 
  - Campaign ID (from Step 1 lookup)
  - "Off-Market-Lead"
  - Geographic priority tag:
    - If DC area → "DC-Wholesale"
    - If Delaware → "DE-Acquisition" or "DE-Wholesale"
    - If MD (non-DC, non-DE) → "MD-Acquisition"
    - If Richmond → "RVA-Acquisition"
    - If NOVA (non-DC) → "NOVA-Acquisition"
- **Custom Field: "Property Address":** (extracted from conversation text if present)
- **Custom Field: "SC Conversation ID":** (from trigger data)
- **Custom Field: "Deal Received Date":** (timestamp from trigger)
- **Pipeline:** "Off-Market Deals"
- **Stage:** "Property Submitted"

**Update Logic:** If contact already exists (matching phone), update tags and custom fields, move to "Property Submitted" stage.

---

### Action 3: Send Slack/SMS Notification to LM
**App:** Slack (or SMS via Twilio)

**Action:** Send Channel Message

**Channel:** #deal-pipeline (or LM's direct message)

**Message Template:**
```
🚨 NEW OFF-MARKET DEAL RECEIVED

Agent: [Agent Name]
Phone: [Agent Phone]
Campaign: [Campaign ID]
Area: [Property Address or "Not provided"]
Priority Zone: [DC/DE/MD/Richmond/NOVA]

SC Conversation: [Link to SC conversation]
GHL Contact: [Link to GHL contact]

Next Step: LM review within 2 hours
```

**Alternative:** SMS to LM's phone if Slack not in use

---

## Implementation Steps

### Step 1: Test SmartContact Integration
- [ ] Confirm SC has tagging feature (or use keyword trigger)
- [ ] Test tag applied to conversation
- [ ] Capture webhook payload (if using webhooks)

### Step 2: Set Up Google Sheets Lookup
- [ ] Ensure SC Campaign Log has "Agent Phone" column
- [ ] Test lookup with sample phone number
- [ ] Handle "not found" case (default to "Unknown-Source")

### Step 3: Configure GoHighLevel
- [ ] Create custom fields in GHL:
  - Property Address (text field)
  - SC Conversation ID (text field)
  - Deal Received Date (date field)
- [ ] Create "Off-Market Deals" pipeline (if doesn't exist)
- [ ] Set up stages: Property Submitted → Under Review → Offer Sent → Ratified → Closed/Killed
- [ ] Test contact creation with sample data

### Step 4: Build Zap
- [ ] Connect SmartContact (or Webhooks) as trigger
- [ ] Add Google Sheets lookup action
- [ ] Add GoHighLevel create/update contact action
- [ ] Add Slack (or SMS) notification action
- [ ] Test with live data (1 test conversation)

### Step 5: Train Tom
- [ ] Show Tom how to tag conversations in SC
- [ ] Confirm tag name: "deal received"
- [ ] Test end-to-end: Tom tags conversation → GHL contact created → LM notified
- [ ] Document in Tom's training materials

---

## Error Handling

### If SC Campaign Log lookup fails:
- Use "Unknown-Source" as Campaign ID
- Tag GHL contact with "Needs-Attribution"
- VA manually looks up campaign within 24 hours

### If GHL contact creation fails:
- Retry up to 3 times (Zapier setting)
- Send error notification to Alfred/Jonathan
- VA manually creates contact from SC data

### If LM notification fails:
- Log error in Zapier history
- Jonathan receives backup notification
- LM checks GHL pipeline manually

---

## Success Metrics

**Track weekly:**
- Number of deals tagged in SC
- GHL contacts created
- Attribution success rate (% with Campaign ID)
- LM response time (tag → LM review)

**Goal:**
- 100% of deals tagged flow to GHL
- 95%+ attribution rate (Campaign ID captured)
- <2 hour LM response time

---

## Alternative: No-Code Manual Process (If Zap Blocked)

**If Zapier integration unavailable:**

**Tom's workflow:**
1. Agent sends off-market property in SC
2. Tom copies agent phone number
3. Tom opens GHL, searches for phone number
4. Tom creates/updates contact with:
   - Campaign ID (looks up in SC Campaign Log sheet)
   - Tags: Campaign ID + priority zone tag
   - Property address in notes
5. Tom texts LM: "New deal in GHL from [Agent Name]"

**Time: 3-5 minutes per deal (vs 30 seconds with Zap)**

---

## Next Steps

1. Confirm SmartContact tagging capability (or keyword trigger)
2. Test Google Sheets lookup with SC Campaign Log
3. Build Zap in Zapier (30-45 minutes)
4. Test with 3 sample conversations
5. Train Tom on tagging workflow (15 minutes)
6. Go live Monday Feb 24

**Owner:** Alfred (Zap build) + Tom (testing) + LM (notification testing)  
**Deadline:** Deploy by Monday Feb 24, 2026
