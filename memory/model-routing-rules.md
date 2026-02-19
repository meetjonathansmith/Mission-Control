# Model Routing Rules - Brains & Muscles Architecture

**Updated:** February 19, 2026, 6:55 AM EST  
**Status:** ACTIVE - Migrated from Anthropic to OpenAI

## Migration Notice

**Date:** Feb 19, 2026  
**Reason:** Anthropic enforcement concerns - proactive migration to protect account  
**Action:** Switched brain model from Claude Sonnet 4.5 to GPT-4o

## Current Model Configuration

### BRAIN (GPT-4o)
**Primary strategic model for:**
- Strategic analysis and recommendations
- Financial calculations and decisions
- Complex problem-solving
- Content strategy and planning
- **CODE GENERATION** (non-negotiable - "broken code costs more than tokens")
- Business logic and workflows
- Council digest generation
- Mission-critical decisions

**Alias:** `brain`  
**Cost:** ~$5-10 per 1M tokens (input), ~$15-30 per 1M tokens (output)

### MUSCLE 1 (GPT-4o-mini)
**High-volume operational tasks:**
- Daily briefings
- Content drafts (first pass)
- Data extraction and formatting
- Routine updates and summaries
- Task list management
- Email drafting
- Simple data analysis

**Cost:** ~$0.15 per 1M tokens (input), ~$0.60 per 1M tokens (output)

### MUSCLE 2 (Brave Search)
**All web searches:**
- Market research
- News gathering
- Competitive analysis
- Fact-checking
- External data lookups

**Cost:** $5/month flat rate (unlimited searches)

### BACKUP (Claude Sonnet 4.5)
**Status:** Inactive, available as fallback  
**Alias:** `sonnet-backup`  
**Use only if:** OpenAI experiences outages or issues  
**Anthropic API key:** Remains configured but not actively used

## Routing Logic

### When to use BRAIN (GPT-4o):
1. **All code generation** - No exceptions
2. Financial analysis (Ledger, Profit First, deal math)
3. Strategic recommendations (Hawk, Shield, Scout)
4. Council digest generation (all 9 advisors)
5. Complex multi-step workflows
6. Mission Control updates
7. Content strategy (not drafts - strategy only)
8. When accuracy matters more than speed/cost

### When to use MUSCLE 1 (GPT-4o-mini):
1. Daily morning briefings (Mon-Fri 7 AM)
2. Content first drafts (Quill)
3. Data extraction from files
4. CSV/JSON parsing and formatting
5. Routine task updates
6. Simple summaries
7. Email composition
8. When speed/cost matters and complexity is low

### When to use MUSCLE 2 (Brave Search):
1. **All web searches** - No LLM web search
2. Market research queries
3. News article gathering
4. Competitive intel
5. External fact lookups

### When to use BACKUP (Sonnet):
1. OpenAI API outage
2. Rate limit issues with GPT-4o
3. Manual override if GPT-4o quality degrades
4. Cost spike emergency (switch back temporarily)

## Cost Optimization Target

**Previous (Anthropic-only):** ~$266/month  
**Target (Brains & Muscles):** ~$105/month (61% reduction)

**Breakdown:**
- BRAIN (GPT-4o): ~$60-80/month (strategic work only)
- MUSCLE 1 (GPT-4o-mini): ~$20-25/month (high volume)
- MUSCLE 2 (Brave): $5/month (flat)
- **Total target:** $85-110/month

## Cron Job Optimization

**Daily briefings:** MUSCLE 1 (GPT-4o-mini)  
**Council digests:** BRAIN (GPT-4o)  
**Friday Board Meeting:** BRAIN (GPT-4o)  
**Sunday Week Ahead:** BRAIN (GPT-4o)

## Non-Negotiable Rules

1. **Code generation stays on BRAIN** - "Broken code costs more than tokens"
2. **Never use MUSCLE for financial calculations** - Accuracy matters
3. **All web searches use Brave** - No LLM web search
4. **Council output uses BRAIN** - Quality over cost
5. **Default to BRAIN when uncertain** - Better to overspend than break things

## Performance Monitoring

Track monthly:
- Total API spend per model
- Cost per task type
- Quality degradation incidents
- Routing optimization opportunities

Report in Friday Board Meeting (Shield + Ledger).

---

**Emergency Fallback:**
If OpenAI has issues, update config to revert primary model to `anthropic/claude-sonnet-4-5` via:
```
openclaw config patch --model anthropic/claude-sonnet-4-5
```

**Current primary:** `openai/gpt-4o` (as of Feb 19, 2026)
