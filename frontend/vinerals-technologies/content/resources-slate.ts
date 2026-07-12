/**
 * Editorial slate for /resources.
 * Articles are planned — not published until researched and written one at a time.
 * Old drafts in blog-posts.ts are superseded by this slate (fake authors / old voice).
 */

export type ArticleStatus = 'planned' | 'draft' | 'published';

export type ArticleCluster =
  | 'Decisions'
  | 'Craft & ownership'
  | 'AI honesty'
  | 'Québec & Canada'
  | 'Sector'
  | 'Working together';

export interface PlannedArticle {
  id: string;
  number: string;
  cluster: ArticleCluster;
  title: string;
  /** Working title for SEO / slug when published */
  workingSlug: string;
  /** What the piece must deliver for the reader */
  job: string;
  /** Angle / thesis in one line */
  angle: string;
  /** Outline skeleton for Opus research & write pass */
  outline: string[];
  /** Primary audience */
  audience: string;
  status: ArticleStatus;
  /** Suggested first-publish order (1 = first) */
  priority: number;
}

export const RESOURCES_SLATE: PlannedArticle[] = [
  {
    id: 'custom-software-cost',
    number: '01',
    cluster: 'Decisions',
    title: 'What custom software actually costs for an SME',
    workingSlug: 'what-custom-software-actually-costs-sme',
    job: 'Replace sticker shock with a usable budget frame — ranges, drivers, and what to ignore.',
    angle:
      'Price is a function of scope, risk, and ownership — not a secret agency formula.',
    outline: [
      'What moves cost (scope, integrations, compliance, data, polish)',
      'Realistic ranges by project shape (internal tool → regulated system)',
      'Ongoing cost: maintenance, hosting, change',
      'How to read a quote (and when a low bid is a warning)',
      'How to shrink cost without gutting craft',
    ],
    audience: 'SME owners and ops leads comparing quotes',
    status: 'published',
    priority: 1,
  },
  {
    id: 'build-vs-buy',
    number: '02',
    cluster: 'Decisions',
    title: 'Build, buy, or hybrid: a decision framework that holds',
    workingSlug: 'build-buy-or-hybrid-software-decision',
    job: 'Give a clear framework so “custom” is not the default ego answer.',
    angle:
      'Commodity work belongs in SaaS; the craft belongs where your process is the advantage.',
    outline: [
      'When SaaS wins (and why that is fine)',
      'When custom earns its keep',
      'The hybrid pattern most SMEs should use',
      'Five-year TCO sketch (without fake precision)',
      'A short decision checklist',
    ],
    audience: 'Founders / COOs deciding where to spend',
    status: 'published',
    priority: 2,
  },
  {
    id: 'ai-or-better-software',
    number: '03',
    cluster: 'AI honesty',
    title: 'Do you need AI — or better software?',
    workingSlug: 'do-you-need-ai-or-better-software',
    job: 'Kill AI theatre; redirect energy to the real bottleneck.',
    angle:
      'Half of “we need AI” is a workflow, data, or product-clarity problem in costume.',
    outline: [
      'Hype vs narrow, useful AI for SMEs',
      'Symptoms that look like AI but are not',
      'First projects that usually pay (and ones that do not)',
      'Data you actually need before you start',
      'A one-quarter starting plan',
    ],
    audience: 'Operators under pressure to “do AI”',
    status: 'planned',
    priority: 3,
  },
  {
    id: 'you-own-the-code',
    number: '04',
    cluster: 'Craft & ownership',
    title: 'What “you own the code” actually means',
    workingSlug: 'what-you-own-the-code-actually-means',
    job: 'Make IP, credentials, docs, and exit rights concrete — not marketing language.',
    angle:
      'Ownership is a package: source, infra access, docs, and a path to leave without hostage fees.',
    outline: [
      'Source code vs hosted product vs “license to use”',
      'Credentials, domains, and third-party accounts',
      'Documentation that makes ownership real',
      'Red flags in contracts and SOWs',
      'How we structure handover at Vinerals',
    ],
    audience: 'Anyone who has been burned by vendor lock-in',
    status: 'planned',
    priority: 4,
  },
  {
    id: 'brief-a-shop',
    number: '05',
    cluster: 'Working together',
    title: 'How to brief a software shop so quotes mean something',
    workingSlug: 'how-to-brief-a-software-shop',
    job: 'Teach clients to write a brief that produces comparable, honest quotes.',
    angle:
      'Vague briefs produce theatre quotes; a clear brief produces craft estimates.',
    outline: [
      'What belongs in a one-page brief',
      'Users, jobs, constraints, and non-goals',
      'Integrations and data realities',
      'Success metrics that are not vanity',
      'Template outline readers can copy',
    ],
    audience: 'First-time buyers of custom work',
    status: 'planned',
    priority: 5,
  },
  {
    id: 'mvp-without-corner',
    number: '06',
    cluster: 'Craft & ownership',
    title: 'Scoping an MVP without painting yourself into a corner',
    workingSlug: 'scoping-mvp-without-painting-into-corner',
    job: 'Show how to ship a first useful slice that still leaves room to grow.',
    angle:
      'MVP is not “cheap and disposable” — it is the smallest honest version of the real system.',
    outline: [
      'MVP vs prototype vs pilot',
      'What to cut vs what to protect (architecture, data model)',
      'Phasing without rewrites',
      'Acceptance criteria that prevent scope fog',
      'When “phase 2” is a lie',
    ],
    audience: 'Product / ops leads with limited budget',
    status: 'planned',
    priority: 6,
  },
  {
    id: 'quebec-digital-funding',
    number: '07',
    cluster: 'Québec & Canada',
    title: 'Québec and Canadian programmes that can fund digital work',
    workingSlug: 'quebec-canada-programmes-fund-digital-work',
    job: 'Map real programme families with caveats — not a guarantee of awards.',
    angle:
      'Funding can change the math; it never replaces a clear project and a credible delivery partner.',
    outline: [
      'How to think about programmes (eligibility, match, timeline)',
      'Provincial / federal families worth knowing (research at write time)',
      'What applications need that tech shops often forget',
      'How we help without pretending we control approvals',
      'Honesty about timelines and rejection',
    ],
    audience: 'Québec SMEs and social enterprises exploring funding',
    status: 'planned',
    priority: 7,
  },
  {
    id: 'cooperative-vs-agency',
    number: '08',
    cluster: 'Working together',
    title: 'Why a solidarity cooperative is a different kind of tech partner',
    workingSlug: 'solidarity-cooperative-vs-agency',
    job: 'Explain governance and incentives without co-op romanticism.',
    angle:
      'Structure shapes behaviour: who gets the surplus, who decides, and what “success” means.',
    outline: [
      'Agency incentives vs cooperative incentives',
      'Transparency and surplus (mission, workers, community)',
      'What changes for the client day to day',
      'What does not change (you still need craft and delivery)',
      'Who this model is a poor fit for',
    ],
    audience: 'Values-aligned buyers and partners',
    status: 'planned',
    priority: 8,
  },
  {
    id: 'food-traceability',
    number: '09',
    cluster: 'Sector',
    title: 'Food systems software: traceability without the enterprise theatre',
    workingSlug: 'food-systems-traceability-software-sme',
    job: 'Ground food-sector buyers in practical systems — from farm to processor to buyer.',
    angle:
      'Traceability fails when it is bolted on; it works when it matches how the value chain actually moves.',
    outline: [
      'What “traceability” means in practice for SMEs',
      'Data you already have vs data you invent',
      'Common failure modes (spreadsheets, one-off portals)',
      'Where AI helps later — not first',
      'How we approach food-systems work (without overclaiming)',
    ],
    audience: 'Food processors, co-ops, agrifood SMEs',
    status: 'planned',
    priority: 9,
  },
  {
    id: 'data-ready-for-ai',
    number: '10',
    cluster: 'AI honesty',
    title: 'Is your data ready for AI? A pre-flight checklist',
    workingSlug: 'is-your-data-ready-for-ai-checklist',
    job: 'Give a concrete pre-flight before anyone buys models or hype retainers.',
    angle:
      'Models amplify whatever mess you feed them — readiness is mostly boring operational work.',
    outline: [
      'Sources, ownership, and access',
      'Quality, labels, and volume (without fake thresholds)',
      'Privacy, consent, and sector rules',
      'Pipelines vs one-off exports',
      'A go / no-go checklist',
    ],
    audience: 'Ops and data-curious founders',
    status: 'planned',
    priority: 10,
  },
  {
    id: 'saas-vs-custom-tco',
    number: '11',
    cluster: 'Decisions',
    title: 'Five-year cost: SaaS vs custom (without the spreadsheet fantasy)',
    workingSlug: 'five-year-cost-saas-vs-custom',
    job: 'Teach TCO thinking with honest uncertainty bands.',
    angle:
      'Monthly feels cheap until workarounds, seats, and lock-in show up on the bill.',
    outline: [
      'What to count (and what people forget)',
      'SaaS cost creep patterns',
      'Custom cost after launch',
      'A worked example with ranges, not false precision',
      'When the “expensive” option is cheaper',
    ],
    audience: 'Finance-aware operators',
    status: 'planned',
    priority: 11,
  },
  {
    id: 'when-not-to-build',
    number: '12',
    cluster: 'Craft & ownership',
    title: 'When we will tell you not to build custom',
    workingSlug: 'when-not-to-build-custom-software',
    job: 'Prove craft includes refusal — builds trust and filters bad fits.',
    angle:
      'A shop that always says yes is selling hours, not counsel.',
    outline: [
      'Situations where SaaS or process change wins',
      'Projects that are really org problems',
      'Budget / timeline / ownership mismatches',
      'How we say no (and what we offer instead)',
      'What good clients do after a no',
    ],
    audience: 'Buyers who want an honest partner',
    status: 'planned',
    priority: 12,
  },
];

export function getSlateByPriority(): PlannedArticle[] {
  return [...RESOURCES_SLATE].sort((a, b) => a.priority - b.priority);
}

export function getNextArticleToWrite(): PlannedArticle | undefined {
  return getSlateByPriority().find((a) => a.status === 'planned');
}
