import { Project } from '@/types/project';

/**
 * Portfolio: platforms built at McGill’s SASEL Lab by Vinerals founder
 * and CTO Emmanuel Amankrah Kwofie, with academic and industry partners
 * across Canada, Europe, and Africa.
 * Source: https://www.sasellab.com/technologies
 * Founder: https://www.eakwofie.com/
 */
export const projects: Project[] = [
  {
    slug: 'ecodish365',
    title: 'EcoDish365',
    client: 'SASEL Lab, McGill University',
    industry: 'food-systems',
    services: ['Custom Software', 'Data Systems', 'AI Integration'],
    year: '2024',
    status: 'live',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/ecodish365',
    image: '/work-ecodish365.jpg',
    imageAlt:
      'A plated meal beside a tablet scoring nutrition and environmental impact',
    description:
      'A decision platform that scores meals on nutrition and environmental impact. Canada’s Nutrient File, Health Star Rating, Food Compass, HEFI, HENI, and ReCiPe 2016 LCA in one place.',
    challenge:
      'Nutrition tools rarely account for environmental cost. Researchers and policymakers needed one frame for health outcomes and life-cycle impact.',
    solution:
      'Built at McGill’s SASEL Lab as a research-grade platform covering 5,000+ CNF foods, 150+ nutrition metrics, and 18 environmental impact categories, with Canadian regionalization and CAD monetization.',
    tags: ['Life Cycle Assessment', 'Nutrition Science', 'Environmental Impact'],
    features: [
      '5,000+ foods from Canada’s Nutrient File',
      'HSR, Food Compass, HEFI, and HENI scoring',
      'ReCiPe 2016 midpoint LCA with Canadian factors',
      'Custom meal planning with multi-dimension scores',
    ],
    featured: true,
  },
  {
    slug: 'proteinprocessio',
    title: 'ProteinProcessIO',
    client: 'SASEL Lab · NRC Canada partnership',
    industry: 'food-systems',
    services: ['Custom Software', 'Data Systems'],
    year: '2025',
    status: 'live',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/proteinprocess',
    image: '/work-proteinprocess.jpg',
    imageAlt:
      'Yellow peas and fine protein flour on a research workbench for dry fractionation',
    description:
      'A physics-based desktop simulator for plant-protein dry fractionation. RF pretreatment, hammer milling, and air classification, validated against NRC Canada experimental data.',
    challenge:
      'Physical fractionation trials are slow and expensive. Researchers needed virtual experiments they could trust against real equipment measurements.',
    solution:
      'A GPU-accelerated multiphysics pipeline (NVIDIA Warp) with material presets for yellow pea, faba bean, and red lentil. Developed at McGill and checked against NRC Canada measurements (for example, D50 23.6 µm simulated vs 23.7 µm measured).',
    tags: ['Process Simulation', 'Plant Protein', 'Dry Fractionation'],
    features: [
      'Coupled RF, milling, and air-classification stages',
      'GPU-accelerated Lagrangian particle tracking',
      'Mass-balance tracking with multi-pass recirculation',
      'Available for research and academic use',
    ],
    featured: true,
  },
  {
    slug: 'soyaflow',
    title: 'SoyaFlow',
    client: 'SASEL Lab · Soya Excel',
    industry: 'food-systems',
    services: ['AI Integration', 'Custom Software', 'Data Systems'],
    year: '2024',
    status: 'live',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/soyaflow',
    image: '/work-soyaflow.jpg',
    imageAlt:
      'Soybean meal sacks on a loading dock with a delivery truck and route tablet',
    description:
      'A distribution platform for Soya Excel across Canada, the US, and Spain. Reorder forecasts, clustered delivery routes, and fleet KPIs without putting IoT sensors on every farm bin.',
    challenge:
      'Installing bin sensors at every client site is prohibitive. Planners still needed a week of forward visibility on farmer reorders and efficient multi-stop routes.',
    solution:
      'An XGBoost model on 62 operational features (about 95% reorder accuracy) plus DBSCAN/KMeans routing and Google Maps. Forecasts replace per-site sensor hardware.',
    tags: ['Supply Chain', 'Machine Learning', 'Logistics'],
    features: [
      'Reorder prediction without per-site IoT sensors',
      'Clustered multi-stop route planning',
      'Inventory control across product types',
      'Scope 3 emissions tracking for the fleet',
    ],
    featured: true,
  },
  {
    slug: 'fsfi-rwanda',
    title: 'FSFI (Rwanda)',
    client: 'Government of Rwanda · AKADEMIYA2063 · IFPRI · McGill',
    industry: 'food-systems',
    services: ['Data Systems', 'Custom Software'],
    year: '2024',
    status: 'live',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/fsfi-rwanda',
    image: '/work-fsfi-rwanda.jpg',
    imageAlt:
      'Terraced East African farmland with planning maps and a financing dashboard',
    description:
      'Food Systems Financing Intelligence for Rwanda’s Ministry of Agriculture. Thirty-seven PSTA 5-aligned indicators show where public and partner funds relieve stress across the food system.',
    challenge:
      'Food-system budgets span many priorities at once. Leaders needed clear answers on where money does the most good and how to explain trade-offs to partners.',
    solution:
      'A decision-support platform that computes the Food System Financing Stress Index across eight components: crop, animal systems, post-harvest, markets, nutrition, finance, research, and environment. Scenario stress-testing included.',
    tags: ['Public Finance', 'Food Systems', 'Decision Support'],
    features: [
      '37 national indicators across 8 components',
      'Programme-linked multi-year budget tracing',
      'Scenario stress-testing for policy trade-offs',
      'Role-scoped government dashboards',
    ],
    featured: true,
  },
  {
    slug: 'fsvc',
    title: 'Food System Value Analytics',
    client: 'SASEL Lab, McGill University',
    industry: 'food-systems',
    services: ['Mobile Apps', 'Data Systems', 'Custom Software'],
    year: '2024',
    status: 'live',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/fsvc',
    image: '/work-fsvc.jpg',
    imageAlt:
      'Field researcher capturing survey data on a tablet in an agricultural field',
    description:
      'An offline-first survey and analytics platform for food-system research. Design studies, collect on tablets without connectivity, sync cleanly, then run statistics in one tool.',
    challenge:
      'Field surveys break when connectivity does. Research teams needed offline capture, GPS and image questions, and analytics without stitching three separate tools.',
    solution:
      'A React Native field client with background sync and conflict resolution, plus a FastAPI analytics microservice for descriptive, inferential, and qualitative analysis.',
    tags: ['Research Tool', 'Data Collection', 'Value Chain Analysis'],
    features: [
      'Offline-first tablet capture with background sync',
      '12+ question types including GPS and images',
      'Drag-and-drop form builder with conditional logic',
      'Built-in analytics microservice',
    ],
    featured: true,
  },
  {
    slug: 'defensefood',
    title: 'DefenseFood',
    client: 'SASEL Lab, McGill University',
    industry: 'food-systems',
    services: ['Data Systems', 'AI Integration', 'Custom Software'],
    year: '2025',
    status: 'live',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/defensefood',
    image: '/work-defensefood.jpg',
    imageAlt:
      'European food trade corridor with crates and a network risk dashboard',
    description:
      'EU food-fraud vulnerability intelligence. Forty-three quantitative formulas score trade corridors using UN Comtrade, RASFF hazards, FAOSTAT, and Eurostat.',
    challenge:
      'Food fraud hides in trade networks and hazard patterns that spreadsheets cannot surface. Regulators needed defensible, reproducible risk scores.',
    solution:
      'A Rust computational core with PyO3 bindings scoring 638 corridors across 60 nodes on commodity dependency, hazard intensity, trade anomalies, and network exposure, with live parameter reconfiguration.',
    tags: ['Food Fraud', 'Risk Intelligence', 'Trade Analytics'],
    features: [
      '43 formulas across 7 model groups',
      'RASFF, Comtrade, FAOSTAT, and Eurostat ingestion',
      'Corridor and network vulnerability scoring',
      'Unit-tested against worked calculation examples',
    ],
    featured: true,
  },
  {
    slug: 'green-means-go',
    title: 'Green Means Go',
    client: 'SASEL Lab, McGill University',
    industry: 'sustainability',
    services: ['Data Systems', 'Custom Software'],
    year: '2025',
    status: 'beta',
    partner: 'SASEL Lab',
    partnerUrl: 'https://www.sasellab.com/technologies',
    externalUrl: 'https://www.sasellab.com/technologies/green-means-go',
    image: '/work-green-means-go.jpg',
    imageAlt:
      'West African farm assessment with tablet for life-cycle sustainability scoring',
    description:
      'Life Cycle Assessment for African agri-food value chains. Farm and processor footprints in minutes, aligned with ISO 14040/14044 and export requirements such as EU CBAM and EUDR.',
    challenge:
      'Most LCA tools assume European industrial contexts. African farms and processors needed assessments that fit their realities and unlock global markets.',
    solution:
      'Country-specific factors for Ghana and Nigeria (with continental expansion planned), eight midpoint and three endpoint impact categories, and a Rust core delivering sub-100 ms calculations.',
    tags: ['Life Cycle Assessment', 'Sustainability', 'Agricultural Technology'],
    features: [
      'Farm assessments in 15 to 20 minutes',
      'Processing assessments in 10 to 15 minutes',
      'Africa-specific impact factors with global fallbacks',
      'Designed for EU CBAM, EUDR, and AfCFTA alignment',
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByIndustry(industry: Project['industry']): Project[] {
  return projects.filter((project) => project.industry === industry);
}
