---
name: ghl-api
description: Access GoHighLevel CRM data via REST API using web_fetch
version: 1.0.0
---

# GoHighLevel API Skill

You have access to GoHighLevel (GHL) CRM data for DOXA Property Ventures.

## Authentication

Credentials are stored at `~/.openclaw/workspace/skills/ghl-api/.env`

Before making any GHL API call, read the credentials:
```bash
source ~/.openclaw/workspace/skills/ghl-api/.env
echo "TOKEN: $GHL_TOKEN"
echo "LOCATION: $GHL_LOCATION"
```

## Base URL

All API calls go to: `https://services.leadconnectorhq.com`

## Required Headers (every request)

```
Authorization: Bearer {GHL_TOKEN}
Content-Type: application/json
Version: 2021-07-28
```

## Core Endpoints

### Contacts (Leads)
- **List contacts**: `GET /contacts/?locationId={GHL_LOCATION}&limit=20`
- **Search contacts**: `GET /contacts/search?locationId={GHL_LOCATION}&query={search_term}`
- **Get single contact**: `GET /contacts/{contactId}`
- **Get contact tasks**: `GET /contacts/{contactId}/tasks`
- **Get contact notes**: `GET /contacts/{contactId}/notes`

### Conversations (Messages)
- **List conversations**: `GET /conversations/search?locationId={GHL_LOCATION}&limit=20`
- **Get messages in conversation**: `GET /conversations/{conversationId}/messages`

### Opportunities (Pipeline / Deals)
- **List pipelines**: `GET /opportunities/pipelines?locationId={GHL_LOCATION}`
- **Search opportunities**: `GET /opportunities/search?locationId={GHL_LOCATION}&pipelineId={pipelineId}`
- **Get single opportunity**: `GET /opportunities/{opportunityId}`

### Calendars
- **List calendars**: `GET /calendars/?locationId={GHL_LOCATION}`
- **Get calendar events**: `GET /calendars/events?locationId={GHL_LOCATION}&startTime={ISO_DATE}&endTime={ISO_DATE}`

### Campaigns
- **List campaigns**: `GET /campaigns/?locationId={GHL_LOCATION}`

## How To Make API Calls

Use `web_fetch` with the full URL and headers. Example to list contacts:

```
web_fetch("https://services.leadconnectorhq.com/contacts/?locationId={GHL_LOCATION}&limit=20", headers={"Authorization": "Bearer {GHL_TOKEN}", "Content-Type": "application/json", "Version": "2021-07-28"})
```

## Rules

1. **READ ONLY** — Never create, update, or delete any GHL records. You are an analyst, not an operator.
2. **No credentials in chat** — Never display the API token in Telegram or any message.
3. **Rate limits** — GHL allows 100 requests per 10 seconds. Space out bulk queries.
4. **Ask before bulk pulls** — If Jonathan asks for "all contacts" or similar large queries, confirm scope first.

## Common Analysis Tasks

When Jonathan asks about top-of-funnel analysis:
1. Pull recent contacts (last 30 days)
2. Check pipeline stages — where are leads getting stuck?
3. Look at conversation response times — how fast are leads being contacted?
4. Check appointment set rates vs lead volume
5. Identify drop-off points in the pipeline

When Jonathan asks about marketing performance:
1. Pull campaign data
2. Cross-reference with contact creation dates
3. Identify which sources produce the most pipeline movement
4. Flag any leads that went cold without follow-up
