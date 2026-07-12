export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  expertise: string[];
  languages?: string[];
  bio: string;
  note: string;
  linkedin?: string;
  github?: string;
  email?: string;
  site?: string;
}

/**
 * Worker members of the Vinerals Technologies solidarity cooperative.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Etornam Celestine Tsyawo',
    role: 'Project Director',
    initials: 'ET',
    expertise: [
      'Food systems',
      'Stakeholder co-design',
      'Regulatory engagement',
      'Digital decision support',
    ],
    languages: ['English', 'French'],
    bio: 'Food systems research engineer with over a decade across the African food value chain — from rural sustainable production and processor-level product development to household and micro-enterprise research across nine regions of Ghana. BSc (Hons) Chemical Engineering and MSc Food Science & Technology (KNUST); PhD candidate in Bioresource Engineering at McGill, focused on consumer food systems and digital decision-support tools. Founded and operated L&J Foods, a food-processing SME in Ghana. Published on non-destructive food adulteration detection (Journal of Meat Science, 2023). Built FoodPulse, a food research and education platform. Resolution Fellow, Leading African Women in Food Fellow, and Resolution Council member — with an active network across Ghana, Nigeria, Kenya, Tanzania, and Cameroon.',
    note: 'Leads stakeholder co-design, regulator engagement, and in-country partner coordination — founder-level fluency in the compliance, quality-assurance, and market-access pressures food SMEs actually live with.',
  },
  {
    name: 'Emmanuel Amankrah Kwofie',
    role: 'AI & Software Engineering Lead',
    initials: 'EK',
    expertise: [
      'Full-stack engineering',
      'AI / ML systems',
      'Food systems platforms',
      'Cloud & DevOps',
    ],
    languages: ['English'],
    bio: 'Translates scientific concepts into high-performance production systems, with a focus on sustainable food systems. IBM AI Engineering Professional; MPhil Human Nutrition & Dietetics; PhD candidate in Bioresource Engineering. Built AI-driven platforms for food security research and government decision-making — including the Food System Financial Intelligence Platform (Rwanda); EcoDish365, a unified environmental nutrition platform with AI subsystems for analysis and policy evaluation; and ProteinProcessIO, a multistage digital twin for plant-based protein extraction with Canada’s National Research Council. Stack spans Next.js, React, Django, FastAPI, Python, AWS, Rust, ML and AI.',
    note: 'Leads engineering delivery and technical validation — the same craft behind the SASEL platforms that already ship with partners across Canada, Europe, and Africa.',
    linkedin: 'https://www.linkedin.com/in/eakwofie/',
    github: 'https://github.com/Amankrah',
    email: 'contact@vineralstechnologies.com',
    site: 'https://www.eakwofie.com/',
  },
  {
    name: 'Joël Mongeon',
    role: 'Data Protection & Compliance Lead',
    initials: 'JM',
    expertise: [
      'Data protection / DPIA',
      'Explainable optimisation',
      'MCDA under uncertainty',
      'Food quality & sustainability standards',
    ],
    languages: ['French', 'English'],
    bio: 'Researcher specialising in explainable optimisation and decision logic under deep uncertainty. Bachelor’s in Chemical Engineering; Master’s in Integrated Food and Bioprocess Engineering. Expertise in data-light modelling and robust multi-criteria decision analysis under competing objectives — including cognitive networks, complex systems theory, and federated learning architectures for decision contexts under disruption. Hands-on proprietary data work with Québec companies on food logistics, predictive inventory, and sustainability modelling. Strong domain knowledge across the African food value chain.',
    note: 'Leads Data Protection Impact Assessments, federated-storage architecture, and alignment with NDPA, DPA, and GDPR — plus food quality (e.g. aflatoxin) and sustainability (e.g. deforestation) standards.',
  },
];
