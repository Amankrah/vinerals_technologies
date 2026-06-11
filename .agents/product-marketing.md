# Vinerals Technologies — Product Marketing Context

> Single source of truth for positioning, audience, and voice. All marketing skills (copywriting, ads, emails, etc.) should read this before writing.

## Product
**Vinerals Technologies** is a Montréal-based solidarity cooperative that builds custom software and AI systems for small and medium businesses. Founded 2025. Bilingual EN/FR. Worker- and community-owned, not investor-owned.

The core offer: **enterprise-quality custom development at SME-accessible terms, made possible by mission-aligned funding** (government programs, foundations, impact funders) that subsidizes qualifying engagements.

### Service lines
1. Custom software (web apps, internal tools, client portals)
2. AI & ML integration (automation, analytics, LLM integration)
3. Mobile apps (iOS, Android, PWA)
4. Data systems (databases, dashboards, ETL pipelines)

### Industries served
Healthcare · Food & Agriculture · Sustainability & Cleantech · Non-profits & Social Enterprise. Concentrated in mission-aligned sectors.

## Ideal Customer Profile (ICP)
**Primary:** Canadian (Québec-leaning) SME founder or director — 5 to 200 employees — in healthcare, food, sustainability, or non-profit work. They have a real software or AI problem worth $50K–150K to solve, but that quote is out of reach right now. They want a serious engineering partner, not a freelancer or an offshore team.

**Secondary:** Government and impact-funder programme managers evaluating where to direct digital-economy or social-enterprise capital. They show up on `/partners`.

## Top three customer pains (in their language)
1. **"I don't know what's actually possible with AI for my business."** Everyone's pitching AI; nothing concrete fits their context. They need a translator, not a sales deck.
2. **"Custom software costs $50K–150K. I can't justify that."** The number is real and they've gotten the quotes. The barrier is dollars, not desire.
3. **"The good developers are at funded startups. I get juniors or offshore teams who don't get my business."** Quality engineering feels gated behind tech-co payrolls.

## Top three objections
1. **"Is this real or too good to be true?"** Subsidized enterprise-quality work sounds suspicious. Counter: cooperative model + named funders + transparent qualification process.
2. **"Will I qualify?"** Worry about wasting time on a pitch they can't access. Counter: free discovery call up front, honest "yes/no" within a week.
3. **"Will I get a junior team because it's subsidized?"** Counter: senior developers run every project; the subsidy comes from the funding side, not the talent side.

## Value propositions (in order of importance)
1. **Enterprise-quality engineering at SME-accessible terms.** The headline benefit.
2. **A technical partner who explains before they sell.** Discovery is free; we advise against building when it's the honest answer.
3. **You own everything we build.** No vendor lock-in, no proprietary platform, full docs.
4. **Cooperative ethics with engineering rigor.** Worker-owned, mission-driven, not investor-pressured.

## Voice & tone (the Atelier brand)
- **Editorial, not SaaS.** Magazine-style — French phrasing (*sommaire, dossier, édition*), italic display headlines, mono small-caps labels.
- **Confident and plain.** No "innovative," "streamline," "synergy." Don't qualify with "almost," "very," or exclamation points.
- **Bilingual, not translated.** Weave French phrasings where natural, not as parallel duplicate.
- **Specific over general.** Name dollar figures, weeks, percentages. Avoid "growing businesses" → name the segment.
- **Customer-first framing.** Lead with their problem before our solution. The lede starts with what they're stuck on, not who we are.

## Primary CTA
**"Book a free consultation."** Single primary action across the site. Discovery call is free, ~45 min, no obligation, ends with honest go/no-go and qualification check. Secondary CTAs route to `/work` (proof) and `/partners` (institutional buyers).

## Proof points worth surfacing
- Cooperative model — verifiable structure
- Government and impact-funder backing — named programs when possible (NSERC, MITACS-aligned, Coop d'investissement)
- $50K–150K market quote — real industry number, validates the pain
- Bilingual EN/FR — Québec context
- Code ownership 100% — concrete, falsifiable claim

## Things to NOT say
- Don't claim specific customer counts or revenue (founded 2025; numbers don't exist yet)
- Don't fabricate testimonials (legal liability + trust)
- Don't promise "guaranteed funding" — qualification is real and not automatic
- Don't use "AI-powered" as filler — say what the AI does
- Don't say "serious software" or "modern software" — those mean nothing
- Don't use "growing businesses" as the audience — too vague

## Source of truth for copy
Service descriptions, industry descriptions, trust indicators, stats, barriers, and feature claims live in `frontend/vinerals-technologies/lib/constants.ts`. Editing copy means editing that file (for most reused strings) plus the section components (`components/sections/*`) for one-off headers and ledes.
