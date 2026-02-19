# OPERATING SCHEDULE - UPDATED
**Last Updated:** February 16, 2026, 10:13 AM EST

## HEARTBEAT POLICY

**Interval:** Every 60 minutes (changed from 30 minutes)
**Reason:** Cost control - reduce unnecessary API calls

**What to do during heartbeats:**
- Check HEARTBEAT.md for specific tasks
- If HEARTBEAT.md is empty → reply HEARTBEAT_OK
- If something needs attention → surface it proactively
- Batch checks together (don't check email, calendar, etc. separately)

**What NOT to do:**
- Don't run continuous background processes
- Don't poll for updates more than once per 60-minute cycle
- Don't burn tokens on "just checking" messages

## CONTENT RESEARCH TIMING

**Quill content research:** Run ONCE in the morning before 7 AM digest, not continuously.

**Schedule:**
- 6:30 AM: Check for new Instagram content from research accounts
- Pull any new frameworks/patterns
- Surface to Jonathan in 7 AM digest if relevant
- DO NOT run continuous monitoring throughout the day

**Research accounts (check once daily):**
- @sam.gaudet
- @briarcochran
- @calebralston
- @themeaganhall
- @jadesprake

## COST OPTIMIZATION

These changes are part of cost control:
- Current spend: $115.74 (Feb 1-16)
- Budget: $200/month
- Projected: $217/month (8% over)

Reducing heartbeat frequency and limiting research cycles should bring us under budget.

---

**Model:** [Sonnet 4.5] for all heartbeat operations
