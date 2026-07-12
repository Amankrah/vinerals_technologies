// Site-wide constants for Vinerals Technologies

export const SITE_CONFIG = {
  name: 'Vinerals Technologies',
  shortName: 'Vinerals Tech',
  tagline: 'Software, made by hand, for SMEs.',
  description:
    'A Montréal solidarity cooperative. Custom software and AI, made by hand. Senior engineering, code you own, at terms growing businesses can plan around.',
  url: 'https://vineralstechnologies.com',
  email: 'contact@vineralstechnologies.com',
  phone: '+1 (514) 961-9754',
  location: 'Montreal, Quebec, Canada',
  foundingYear: 2026,
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/vinerals-technologies',
  github: 'https://github.com/vinerals-tech',
  twitter: 'https://twitter.com/vineralstech',
} as const;

export const NAVIGATION = {
  main: [
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Custom Software Development', href: '/services/custom-software' },
        { name: 'AI & Machine Learning Integration', href: '/services/ai-integration' },
        { name: 'Mobile Applications', href: '/services/mobile-apps' },
        { name: 'Data Systems & Analytics', href: '/services/data-systems' },
      ],
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Food & Agriculture', href: '/industries/food-systems' },
        { name: 'Sustainability & Cleantech', href: '/industries/sustainability' },
        { name: 'Non-Profits & Social Enterprise', href: '/industries/non-profits' },
      ],
    },
    {
      name: 'Work',
      href: '/work',
    },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Our Mission', href: '/about/mission' },
        { name: 'Team', href: '/about/team' },
        { name: 'Cooperative Model', href: '/about/cooperative' },
        { name: 'Partners', href: '/partners' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
    },
  ],
  footer: {
    services: [
      { name: 'Custom Software', href: '/services/custom-software' },
      { name: 'AI Integration', href: '/services/ai-integration' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'Data Systems', href: '/services/data-systems' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Mission & Values', href: '/about/mission' },
      { name: 'Cooperative Model', href: '/about/cooperative' },
    ],
    resources: [
      { name: 'All notes', href: '/resources' },
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Case Studies', href: '/work' },
    ],
    connect: [
      { name: 'Contact', href: '/contact' },
      { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true },
      { name: 'GitHub', href: SOCIAL_LINKS.github, external: true },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
    ],
  },
} as const;

export const SERVICES = [
  {
    id: 'custom-software',
    name: 'Custom Software Development',
    slug: 'custom-software',
    shortName: 'Custom Software',
    description:
      'Software shaped around the way your business already runs, not bent around someone else’s product. No feature bloat, no vendor lock-in, and the code is yours.',
    features: ['Web applications', 'Internal tools', 'Client portals'],
    icon: 'Code',
    image: '/service-software.jpg',
    imageAlt: 'Hands typing on a laptop at a wooden workshop desk',
  },
  {
    id: 'ai-integration',
    name: 'AI & Machine Learning Integration',
    slug: 'ai-integration',
    shortName: 'AI Integration',
    description:
      'The kind of AI work that pays back. Automating the report you write every Friday, the inbox you triage every morning, the data trapped inside your PDFs. Nothing dressed up as a science project.',
    features: ['Automation', 'Analytics', 'LLM integration'],
    icon: 'Brain',
    image: '/service-ai.jpg',
    imageAlt: 'Notebook diagrams beside a laptop with soft abstract AI nodes',
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Applications',
    slug: 'mobile-apps',
    shortName: 'Mobile Apps',
    description:
      'Apps your team actually opens in the field, and apps your customers keep on the home screen. One codebase across iOS, Android and the web, built to outlast its launch week.',
    features: ['iOS', 'Android', 'Progressive Web Apps'],
    icon: 'Smartphone',
    image: '/service-mobile.jpg',
    imageAlt: 'Hands holding a phone near a greenhouse doorway',
  },
  {
    id: 'data-systems',
    name: 'Data Systems & Analytics',
    slug: 'data-systems',
    shortName: 'Data Systems',
    description:
      'Pipelines that move your data without breaking. Dashboards that point to the next decision. Reporting that takes minutes, not half a day.',
    features: ['Databases', 'Dashboards', 'ETL pipelines'],
    icon: 'Database',
    image: '/service-data.jpg',
    imageAlt: 'Hands reviewing a dashboard on a laptop with printed charts',
  },
] as const;

export const INDUSTRIES = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Patient portals, telehealth, and the small data systems clinics actually run on.',
    features: ['EMR & EHR integrations', 'Telehealth platforms', 'Clinical workflow tools'],
    icon: 'Heart',
    image: '/sector-healthcare.jpg',
    imageAlt: 'Clinician reviewing a tablet beside a paper chart in a quiet clinic',
  },
  {
    id: 'food-systems',
    name: 'Food & Agriculture',
    slug: 'food-systems',
    description: 'Supply chain, traceability, and nutrition platforms for growers, co-ops, and processors.',
    features: ['Traceability systems', 'Farm management', 'Online marketplaces'],
    icon: 'Wheat',
    image: '/sector-food.jpg',
    imageAlt: 'Hands holding freshly harvested greens at a farm packing table',
  },
  {
    id: 'sustainability',
    name: 'Sustainability & Cleantech',
    slug: 'sustainability',
    description: 'Carbon tracking, ESG reporting, and the systems behind a circular economy.',
    features: ['Carbon accounting', 'ESG dashboards', 'Circular economy tools'],
    icon: 'Leaf',
    image: '/sector-sustainability.jpg',
    imageAlt: 'Hands adjusting a field tablet beside solar panels at golden hour',
  },
  {
    id: 'non-profits',
    name: 'Non-Profits & Social Enterprise',
    slug: 'non-profits',
    description: 'Non-profit tech, cooperative back-offices, and impact tools that don’t bleed your budget.',
    features: ['Donor & member CRMs', 'Impact measurement', 'Cooperative platforms'],
    icon: 'Users',
    image: '/sector-nonprofits.jpg',
    imageAlt: 'Hands gathered around a wooden table in a cooperative meeting',
  },
] as const;

// Trust indicators - focus on value, not price
export const TRUST_INDICATORS = [
  {
    label: 'Tracks for qualifying SMEs',
    value: 'Funded',
  },
  {
    label: 'Contract to kickoff',
    value: '3 weeks',
  },
  {
    label: 'Your code, data, infra',
    value: '100%',
  },
] as const;

// Stats for Problem/Solution section - no rates, focus on model
export const STATS = [
  {
    value: 'Craft',
    label: 'Made by hand',
    description: 'Senior engineers shape every system around how you work. No template with your logo slapped on.',
  },
  {
    value: '100%',
    label: 'Code ownership',
    description: 'Every line, every credential, every doc. Yours from day one.',
  },
  {
    value: 'Senior',
    label: 'On every project',
    description: 'You talk to the developer doing the work, not an account manager standing between you.',
  },
] as const;

// The three barriers SMEs face - knowledge gap is primary
export const BARRIERS = [
  {
    title: 'You can’t tell the hype from the signal.',
    description:
      "Everyone’s pitching AI. Most of it doesn’t fit your business. Without someone technical in your corner who has no quota, it’s nearly impossible to sort the real from the dressed-up.",
    icon: 'HelpCircle',
  },
  {
    title: 'Custom software costs real money.',
    description:
      "Quotes land between $50,000 and $150,000 CAD, sometimes higher. Agencies aren’t overcharging. That’s simply what good engineering costs. For most SMEs, the cheque just isn’t there.",
    icon: 'Lock',
  },
  {
    title: 'Senior developers are gated behind tech salaries.',
    description:
      "Experienced engineers work at funded startups and big enterprise shops. SMEs end up with juniors learning on the job, or offshore teams who never quite get the business context.",
    icon: 'Users',
  },
] as const;

// How the subsidy model works
export const HOW_IT_WORKS = [
  {
    title: 'Backed by mission-aligned funding.',
    description:
      "Government programmes, foundations, and impact funders already invest in Canada’s digital economy. We channel those resources toward the businesses that need the work most.",
    icon: 'Building',
  },
  {
    title: 'We start with what you actually need to know.',
    description:
      "Before any code, we sit down and explain what’s possible, what’s practical, and what isn’t worth building. No jargon. No pressure. Often, the honest answer is don’t build it.",
    icon: 'Lightbulb',
  },
  {
    title: 'Enterprise-quality work at SME-accessible terms.',
    description:
      "Through subsidised engagements and special programmes, you get the same calibre of work larger companies pay full freight for, at numbers a growing business can plan around.",
    icon: 'Sparkles',
  },
] as const;

// Why Us section - updated to remove rate comparisons
export const WHY_US_FEATURES = [
  {
    title: 'Made by hand.',
    description:
      'Senior engineers shape every system around how you actually work. Craft you can feel in the details. The result belongs to you.',
    icon: 'Zap',
  },
  {
    title: 'Cooperative model.',
    description:
      "We’re owned by the people doing the work and the community we serve. Your project funds the mission, not someone’s exit payday.",
    icon: 'Building',
  },
  {
    title: 'A real partnership.',
    description:
      'You talk to the senior developer doing the work. You hear the truth when something is a bad idea. And you own every line of code we write.',
    icon: 'Handshake',
  },
  {
    title: 'Translation before code.',
    description:
      'Before anyone opens an editor, we explain what software and AI can do for your business, and what they cannot. Often the honest answer is “don’t build that yet,” and you get it either way.',
    icon: 'MessageCircle',
  },
  {
    title: 'Terms you can plan around.',
    description:
      'Mission-aligned funding and clear engagement tracks bring serious engineering into reach for clinics, food co-ops, climate startups, and charities. The craft stays intact.',
    icon: 'Landmark',
  },
  {
    title: 'You own everything we ship.',
    description:
      'No vendor lock-in. No proprietary platform. Your code, your data, your infrastructure, with the documentation that lets a future team pick it up.',
    icon: 'Shield',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Discovery',
    subtitle: 'Free',
    description:
      "We learn your business, your bottlenecks, and what you’re actually trying to make happen. You leave with a realistic read on what tech can and can’t do for you. No charge, no obligation.",
  },
  {
    number: 2,
    title: 'Proposal',
    subtitle: 'Transparent',
    description:
      "Clear scope, clear timeline, clear money. We flag which subsidy or programme might apply, and we tell you when we don’t think you should build at all.",
  },
  {
    number: 3,
    title: 'Build',
    subtitle: 'Iterative',
    description:
      'Two-week cycles with a working demo at the end of each one. You see software, not slides.',
  },
  {
    number: 4,
    title: 'Launch & Support',
    subtitle: 'Ongoing',
    description:
      'We deploy, train your team, hand over the keys, and stay reachable for the questions that always come three weeks later.',
  },
] as const;

// Engagement models - not pricing tiers (removed specific rates)
export const ENGAGEMENT_MODELS = [
  {
    name: 'Subsidised Track',
    eligibility: 'Non-profits, social enterprises, underserved SMEs',
    description:
      'Funded through grants and donor support. The cost reduction is substantial, often the difference between building the thing and not.',
    icon: 'Heart',
  },
  {
    name: 'Accessible Engagement',
    eligibility: 'Growth-stage SMEs',
    description:
      'Partial subsidy with the rest priced for real businesses, not enterprise procurement departments. Same calibre of work, numbers you can defend to a board.',
    icon: 'TrendingUp',
  },
  {
    name: 'Partnership Projects',
    eligibility: 'Established organisations, government',
    description:
      'Market-rate engagements that pay full freight. These projects keep the subsidised side of the house funded.',
    icon: 'Building2',
  },
] as const;

// Work Page Constants - updated to remove rate comparisons
export const WORK_STATS = [
  {
    value: '100%',
    label: 'Code Ownership',
  },
  {
    value: '4',
    label: 'Industries Served',
  },
  {
    value: 'Direct',
    label: 'Developer Access',
  },
  {
    value: 'Funded',
    label: 'Programs Available',
  },
] as const;

export const CAPABILITIES = [
  {
    title: 'Custom software',
    description:
      'Web apps, internal tools, client portals, and the back-office systems your team actually has to live inside every day.',
  },
  {
    title: 'AI integration',
    description:
      'Document processing, chatbots that don’t embarrass you, automation, and forecasting with a payback you can point to.',
  },
  {
    title: 'Mobile apps',
    description:
      'iOS, Android, and Progressive Web Apps for field crews, customers, and anyone who needs the work to follow them around.',
  },
  {
    title: 'Data systems',
    description:
      'Dashboards, analytics, ETL pipelines, and the warehouse underneath. The plumbing that turns spreadsheets into decisions.',
  },
  {
    title: 'Integrations',
    description:
      'Stitching together your EMR, ERP, payment processor, and the half-dozen SaaS tools nobody quite knows how to connect.',
  },
  {
    title: 'Compliance',
    description:
      'HIPAA, PHIPA, GDPR, food safety, environmental reporting. Built in from the start instead of bolted on the week before audit.',
  },
] as const;

// Value propositions by audience
export const VALUE_PROPS = {
  sme: {
    headline: 'Software made by hand — for the way your business actually runs.',
    subhead:
      'Senior engineering, shaped around your work, not bent around someone else’s product. We translate what’s possible, build what earns its keep, and structure terms a growing business can plan around.',
    points: [
      'Craft first. Systems fit how you operate — no template bloat.',
      'Honest counsel before code. Trade-offs, not sales decks.',
      'Every line of code, every credential, every doc, yours.',
    ],
  },
  funders: {
    headline: "Patient capital, with measurable social returns.",
    subhead:
      'A cooperative that builds technology infrastructure for the Canadian SMEs your mandate is already aimed at. Earned revenue keeps the lights on, your capital extends the reach.',
    points: [
      'Hybrid revenue model anchored in earned client work.',
      'A credible path to operating sustainability.',
      'Experienced technical team, not a freshly minted agency.',
      'Plugged into CDRQ, PME MTL, CESIM, and the broader social economy network.',
    ],
  },
  partners: {
    headline: 'Technical capacity for the work no single SME could fund alone.',
    subhead:
      'Collaborative development capacity for industry associations, networks, and social economy organisations that want to ship something together.',
    points: [
      'Flexible engagement models. Fixed price, retainer, or hybrid.',
      'Working experience across healthcare, food systems, and sustainability.',
      'Cooperative structure that lines up with partnership values, instead of working against them.',
    ],
  },
} as const;

// SEO Keywords — craft + quality lead; accessibility supports
export const PRIMARY_KEYWORDS = [
  'software made by hand montreal',
  'custom software montreal',
  'handcrafted software development',
  'ai integration sme canada',
  'custom software quebec',
] as const;

export const SECONDARY_KEYWORDS = [
  'senior software engineers montreal',
  'solidarity cooperative technology',
  'healthcare software development montreal',
  'food supply chain software canada',
  'non-profit technology solutions quebec',
] as const;

// Ecosystem partners for credibility
export const ECOSYSTEM_PARTNERS = [
  { name: 'CDRQ', description: 'Cooperative development', url: 'https://cdrq.coop' },
  { name: 'PME MTL', description: 'SME support', url: 'https://pmemtl.com' },
  { name: 'CESIM', description: 'Social economy network', url: 'https://esmtl.ca' },
  {
    name: 'Chantier de l\'économie sociale',
    description: 'Social economy',
    url: 'https://chantier.qc.ca',
  },
] as const;
