# Cost Reduction Implementation - Feb 17, 2026

**Started**: 12:40 PM EST  
**Target**: 61% reduction ($271→$105/month)  
**Reality check at 1:05 PM**: Sub-agent model routing not configurable via standard config

---

## ✅ IMPLEMENTED (30-45% savings)

### 1. Cron Jobs - Skip Weekends
- Daily briefing: 7 days → Mon-Fri only
- Daily council digest: 7 days → Mon-Fri only  
- **Savings**: ~$40-53/month (15-20%)

### 2. Context Discipline (Active)
- Load only what's needed per task
- Memory files > live context
- **Savings**: ~$27-40/month (10-15%)

### 3. Thinking Mode
- User controls via `/thinking off`
- **Savings**: ~$13-27/month (5-10%)

**Total achievable today**: 30-45% reduction (~$80-120/month savings)
**New monthly cost**: ~$151-191/month (vs $266 current pace)

---

## ⚠️ BLOCKED - BRAINS & MUSCLES (40% additional savings)

**What we tried**:
- Add OpenAI API key for GPT-4o-mini
- Configure model routing for sub-agents (Haiku for drafts, GPT-4o-mini for research)

**Why it failed**:
- OpenClaw's sub-agent model allowlist is NOT exposed in standard config
- Requires either:
  a) Code-level changes to OpenClaw (not accessible via config)
  b) OpenClaw team adding this feature in a future release
  
**Evidence**:
- `sessions_spawn` returned "model not allowed: anthropic/claude-haiku-3-5"
- `agents_list` shows `allowAny: false` with no way to modify via config
- Config schema has no `agents.*.subagents.allowModels` or equivalent field

**Recommendation**:
- Accept 30-45% savings today
- Monitor OpenClaw releases for sub-agent model routing feature
- OR use local models (Mac Studio) once OpenClaw supports it

---

## APPROVED CHANGES APPLIED

1. **Daily briefing cron**: Updated to `0 6 * * 1-5` (Mon-Fri)
2. **Council digest cron**: Updated to `0 7 * * 1-5` (Mon-Fri)
3. **Daily KPI cron**: Disabled (using 8:45 AM standup instead)

**Friday Board Meeting** + **Sunday Week Ahead** still run (weekends covered).

---

## PROJECTED MONTHLY COST

| Scenario | Monthly Cost | vs Current |
|----------|--------------|------------|
| Current pace | $266 | baseline |
| With 30% savings | $186 | -$80 |
| With 45% savings | $146 | -$120 |

**Most likely**: ~$150-170/month after natural usage optimization + weekend skip

---

## NEXT STEPS

1. Monitor March spending to confirm savings
2. Check OpenClaw GitHub for sub-agent model routing feature requests
3. If still hitting budget, reduce cron frequency further (heartbeats 60min instead of 30min)
