// Site-wide constants for Vinerals Technologies

export const SITE_CONFIG = {
  name: 'Vinerals Technologies',
  shortName: 'Vinerals Tech',
  tagline: 'Technology for Everyone',
  description:
    'Montreal-based solidarity cooperative helping small and medium businesses navigate digital transformation. Enterprise-quality software and AI solutions, made accessible through mission-aligned funding.',
  url: 'https://vineralstechnologies.com',
  email: 'contact@vineralstechnologies.com',
  phone: '+1 (514) 961-9754',
  location: 'Montreal, Quebec, Canada',
  foundingYear: 2025,
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
        { name: 'For Partners & Funders', href: '/partners' },
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
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Guides', href: '/resources/guides' },
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
      'Build exactly what your business needs—no compromises, no feature bloat, no vendor lock-in.',
    features: ['Web applications', 'Internal tools', 'Client portals'],
    icon: 'Code',
  },
  {
    id: 'ai-integration',
    name: 'AI & Machine Learning Integration',
    slug: 'ai-integration',
    shortName: 'AI Integration',
    description:
      'Put AI to work in your business with practical, ROI-focused implementations—not science projects.',
    features: ['Automation', 'Analytics', 'LLM integration'],
    icon: 'Brain',
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Applications',
    slug: 'mobile-apps',
    shortName: 'Mobile Apps',
    description:
      'Reach your customers and team wherever they are with cross-platform mobile solutions.',
    features: ['iOS', 'Android', 'Progressive Web Apps'],
    icon: 'Smartphone',
  },
  {
    id: 'data-systems',
    name: 'Data Systems & Analytics',
    slug: 'data-systems',
    shortName: 'Data Systems',
    description:
      'Turn your data into decisions with modern infrastructure and visualization.',
    features: ['Databases', 'Dashboards', 'ETL pipelines'],
    icon: 'Database',
  },
] as const;

export const INDUSTRIES = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Patient portals, telehealth, health data systems',
    icon: 'Heart',
  },
  {
    id: 'food-systems',
    name: 'Food & Agriculture',
    slug: 'food-systems',
    description: 'Supply chain, traceability, nutrition platforms',
    icon: 'Wheat',
  },
  {
    id: 'sustainability',
    name: 'Sustainability & Cleantech',
    slug: 'sustainability',
    description: 'Carbon tracking, ESG reporting, circular economy',
    icon: 'Leaf',
  },
  {
    id: 'non-profits',
    name: 'Non-Profits & Social Enterprise',
    slug: 'non-profits',
    description: 'Non-profit tech, cooperative systems, impact tools',
    icon: 'Users',
  },
] as const;

// Trust indicators - focus on value, not price
export const TRUST_INDICATORS = [
  {
    label: 'Subsidized programs available',
    value: 'Funded',
  },
  {
    label: 'Average project kickoff',
    value: '3 weeks',
  },
  {
    label: 'You own everything we build',
    value: '100%',
  },
] as const;

// Stats for Problem/Solution section - no rates, focus on model
export const STATS = [
  {
    value: '100%',
    label: 'Code ownership',
    description: 'You own everything we build—no vendor lock-in',
  },
  {
    value: 'Funded',
    label: 'Accessibility programs',
    description: 'Mission-aligned funding for qualifying businesses',
  },
  {
    value: 'Enterprise',
    label: 'Quality engineering',
    description: 'Same caliber as larger organizations receive',
  },
] as const;

// The three barriers SMEs face - knowledge gap is primary
export const BARRIERS = [
  {
    title: "You Don't Know What You Don't Know",
    description:
      "AI is transforming industries. But what does that actually mean for your business? Which solutions are real and which are hype? Without a technical partner, it's impossible to tell.",
    icon: 'HelpCircle',
  },
  {
    title: 'Quality Development Is Expensive',
    description:
      "Custom software costs $50,000–150,000+ CAD. That's not agencies overcharging—that's what quality engineering requires. For most SMEs, this investment is simply out of reach.",
    icon: 'Lock',
  },
  {
    title: 'The Right Expertise Is Hard to Access',
    description:
      "Experienced developers work at funded startups or enterprise companies. SMEs often end up with junior freelancers or distant offshore teams who don't understand their context.",
    icon: 'Users',
  },
] as const;

// How the subsidy model works
export const HOW_IT_WORKS = [
  {
    title: 'Backed by Mission-Aligned Funding',
    description:
      "Government programs, foundations, and donors invest in Canada's digital economy. We channel these resources to reduce barriers for businesses that need technology most.",
    icon: 'Building',
  },
  {
    title: 'We Start With What You Need to Know',
    description:
      "Before any code is written, we help you understand what's possible, what's practical, and what's actually worth building. No jargon. No pressure. Just clarity.",
    icon: 'Lightbulb',
  },
  {
    title: 'Enterprise-Quality, Accessible Programs',
    description:
      'Through subsidized engagements and special programs, we deliver the same caliber of work that larger companies receive—at terms designed for growing businesses.',
    icon: 'Sparkles',
  },
] as const;

// Why Us section - updated to remove rate comparisons
export const WHY_US_FEATURES = [
  {
    title: 'Cooperative Model',
    description:
      "We're owned by our workers and community—not investors demanding maximum returns. Your project funds our mission, not someone's exit.",
    icon: 'Building',
  },
  {
    title: 'Funded Accessibility',
    description:
      'Through government programs, foundations, and donor support, we offer subsidized engagements that make quality development possible for growing businesses.',
    icon: 'Landmark',
  },
  {
    title: 'True Partnership',
    description:
      "We're not a vendor—we're a partner. You get direct access to senior developers, honest advice, and code you actually own.",
    icon: 'Handshake',
  },
  {
    title: 'Technology Translation',
    description:
      "We help you understand what's possible with AI and modern software—separating hype from practical solutions that deliver real ROI.",
    icon: 'MessageCircle',
  },
  {
    title: 'Mission-Driven',
    description:
      "Every project advances our goal: closing Canada's digital divide by making transformative technology accessible to businesses that need it most.",
    icon: 'Heart',
  },
  {
    title: 'You Own Everything',
    description:
      'No vendor lock-in, no proprietary systems. Your code, your data, your infrastructure—full documentation included.',
    icon: 'Shield',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Discovery',
    subtitle: 'Free',
    description:
      "We learn your business, challenges, and goals. We'll help you understand what technology can realistically achieve. No charge, no obligation.",
  },
  {
    number: 2,
    title: 'Proposal',
    subtitle: 'Transparent',
    description:
      "Clear scope, timeline, and funding options. We'll identify if subsidized programs apply to your situation.",
  },
  {
    number: 3,
    title: 'Build',
    subtitle: 'Iterative',
    description:
      'Iterative development with weekly demos. You see progress, not just promises.',
  },
  {
    number: 4,
    title: 'Launch & Support',
    subtitle: 'Ongoing',
    description:
      'We deploy, train your team, and stick around for questions.',
  },
] as const;

// Engagement models - not pricing tiers (removed specific rates)
export const ENGAGEMENT_MODELS = [
  {
    name: 'Subsidized Program',
    eligibility: 'Non-profits, social enterprises, underserved SMEs',
    description:
      'Funded through grants and donor support. Significant cost reduction for qualifying organizations.',
    icon: 'Heart',
  },
  {
    name: 'Accessible Engagement',
    eligibility: 'Growth-stage SMEs',
    description:
      'Balanced model with partial subsidy support. Quality development at terms that work for real businesses.',
    icon: 'TrendingUp',
  },
  {
    name: 'Partnership Projects',
    eligibility: 'Established organizations, government',
    description:
      'Market-rate engagements that help fund our subsidized programs for others.',
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
    title: 'Custom Software',
    description:
      'Web apps, internal tools, client portals, and business systems built exactly to your needs',
  },
  {
    title: 'AI Integration',
    description:
      'Document processing, chatbots, automation, and predictive analytics with real ROI',
  },
  {
    title: 'Mobile Apps',
    description:
      'iOS, Android, and Progressive Web Apps for field work and customer engagement',
  },
  {
    title: 'Data Systems',
    description:
      'Dashboards, analytics, ETL pipelines, and data infrastructure for decision-making',
  },
  {
    title: 'Integrations',
    description:
      'Connect your systems—EMRs, ERPs, payment processors, and third-party APIs',
  },
  {
    title: 'Compliance',
    description:
      'HIPAA/PHIPA, GDPR, food safety, and environmental reporting built-in',
  },
] as const;

// Value propositions by audience
export const VALUE_PROPS = {
  sme: {
    headline: "Technology That Was Out of Reach, Now Isn't",
    subhead:
      "You know your business needs modern software and AI. We help you understand what's possible and make it accessible through funded programs.",
    points: [
      'We explain options in plain language, not jargon',
      'Subsidized programs for qualifying businesses',
      'You own everything we build',
    ],
  },
  funders: {
    headline: 'Investing in Accessible Technology Infrastructure',
    subhead:
      'Patient capital opportunity with measurable social return and sustainable business model.',
    points: [
      'Hybrid revenue model with earned revenue',
      'Clear path to sustainability',
      'Experienced technical team',
      'Strong ecosystem connections (CDRQ, PME MTL, CESIM)',
    ],
  },
  partners: {
    headline: 'Your Technology Partner for Collective Impact',
    subhead:
      'Collaborative development capacity for industry associations, networks, and social economy organizations.',
    points: [
      'Flexible engagement models',
      'Experience across healthcare, food systems, sustainability',
      'Cooperative structure aligns with partnership values',
    ],
  },
} as const;

// SEO Keywords - updated to reflect mission
export const PRIMARY_KEYWORDS = [
  'software development montreal',
  'ai integration sme canada',
  'custom software quebec',
  'social enterprise technology',
  'digital transformation small business',
] as const;

export const SECONDARY_KEYWORDS = [
  'solidarity cooperative technology',
  'healthcare software development montreal',
  'food supply chain software canada',
  'non-profit technology solutions quebec',
  'subsidized software development sme',
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
