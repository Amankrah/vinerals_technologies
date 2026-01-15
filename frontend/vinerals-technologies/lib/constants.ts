// Site-wide constants for Vinerals Technologies

export const SITE_CONFIG = {
  name: 'Vinerals Technologies',
  shortName: 'Vinerals Tech',
  tagline: 'AI & Software for Growing Businesses',
  description:
    'Montreal-based social enterprise building custom software and AI solutions for small and medium businesses. Enterprise quality at accessible prices.',
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
      'Build exactly what your business needs: no compromises, no feature bloat, no vendor lock-in.',
    features: ['Web applications', 'Internal tools', 'Client portals'],
    icon: 'Code',
  },
  {
    id: 'ai-integration',
    name: 'AI & Machine Learning Integration',
    slug: 'ai-integration',
    shortName: 'AI Integration',
    description:
      'Put AI to work in your business with practical, ROI-focused implementations: not science projects.',
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

export const TRUST_INDICATORS = [
  {
    label: 'Subsidized programs available',
    value: 'Funded',
  },
  {
    label: '3-week average kickoff',
    value: '3 weeks',
  },
  {
    label: 'You own everything we build',
    value: '100%',
  },
] as const;

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

export const WHY_US_FEATURES = [
  {
    title: 'Cooperative Model',
    description:
      "We're owned by our workers and community - not investors demanding maximum extraction. Your project funds our mission, not yachts.",
    icon: 'Building',
  },
  {
    title: 'Accessible Pricing',
    description:
      'Our social enterprise structure means we can offer 50-70% below market rates without cutting corners on quality.',
    icon: 'DollarSign',
  },
  {
    title: 'True Partnership',
    description:
      "We're not a vendor - we are a partner. You get direct access to senior developers, honest advice, and code you actually own.",
    icon: 'Handshake',
  },
  {
    title: 'Startup Speed',
    description:
      'Small team, no bureaucracy. We move fast, communicate clearly, and ship working software: not decks and timelines.',
    icon: 'Zap',
  },
  {
    title: 'Mission-Driven',
    description:
      'Every project advances our goal: making transformative technology accessible to businesses that need it most.',
    icon: 'Heart',
  },
  {
    title: 'You Own Everything',
    description:
      "No vendor lock-in, no proprietary nonsense: your code, your data, your infrastructure - full documentation included.",
    icon: 'Shield',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Discovery',
    subtitle: 'Free',
    description: 'We learn your business, challenges, and goals. No charge, no obligation.',
  },
  {
    number: 2,
    title: 'Proposal',
    subtitle: 'Transparent',
    description: 'Clear scope, timeline, and fixed or capped pricing. No surprises.',
  },
  {
    number: 3,
    title: 'Build',
    subtitle: 'Iterative',
    description: 'Iterative development with weekly demos. You see progress, not just promises.',
  },
  {
    number: 4,
    title: 'Launch & Support',
    subtitle: 'Ongoing',
    description: 'We deploy, train your team, and stick around for questions.',
  },
] as const;

export const PRICING_TIERS = [
  {
    name: 'Non-Profit / Social Enterprise',
    rate: '$40-60',
    description: 'Mission-aligned organizations',
  },
  {
    name: 'SME',
    rate: '$60-80',
    description: 'Small and medium businesses',
  },
  {
    name: 'Commercial',
    rate: '$80-100',
    description: 'Larger commercial clients',
  },
  {
    name: 'Government / Funded',
    rate: '$100-150',
    description: 'Government contracts and well-funded projects',
  },
] as const;

// Work Page Constants
export const WORK_STATS = [
  {
    value: '10+',
    label: 'Projects Delivered',
  },
  {
    value: '4',
    label: 'Industries Served',
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
  },
  {
    value: '50-70%',
    label: 'Cost Savings vs Agencies',
  },
] as const;

export const CAPABILITIES = [
  {
    title: 'Custom Software',
    description: 'Web apps, internal tools, client portals, and business systems built exactly to your needs',
  },
  {
    title: 'AI Integration',
    description: 'Document processing, chatbots, automation, and predictive analytics with real ROI',
  },
  {
    title: 'Mobile Apps',
    description: 'iOS, Android, and Progressive Web Apps for field work and customer engagement',
  },
  {
    title: 'Data Systems',
    description: 'Dashboards, analytics, ETL pipelines, and data infrastructure for decision-making',
  },
  {
    title: 'Integrations',
    description: 'Connect your systems - EMRs, ERPs, payment processors, and third-party APIs',
  },
  {
    title: 'Compliance',
    description: 'HIPAA/PHIPA, GDPR, food safety, and environmental reporting built-in',
  },
] as const;

// SEO Keywords
export const PRIMARY_KEYWORDS = [
  'software development montreal',
  'ai integration sme',
  'custom software quebec',
  'affordable software development',
  'social enterprise technology',
] as const;

export const SECONDARY_KEYWORDS = [
  'social enterprise technology',
  'healthcare software development',
  'food supply chain software',
  'non-profit technology solutions',
  'digital transformation sme',
] as const;
