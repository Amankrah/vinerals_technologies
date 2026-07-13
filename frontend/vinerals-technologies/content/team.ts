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
 * Co-founders and worker members of the Vinerals Technologies solidarity cooperative.
 * Bios should build client confidence: specific proof, clear roles, easy contact.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Etornam Celestine Tsyawo',
    role: 'Co-Founder · Project Director',
    initials: 'ET',
    expertise: [
      'Food systems',
      'Stakeholder co-design',
      'Regulatory engagement',
      'Digital decision support',
    ],
    languages: ['English', 'French'],
    bio: 'Co-founder of Vinerals Technologies and Project Director. Food systems research engineer with more than a decade across the African food value chain: rural production, processor product development, and household and micro-enterprise research across nine regions of Ghana. She founded and ran L&J Foods, a food-processing SME in Ghana, so she knows compliance, quality assurance, and market access from the operator side. BSc (Hons) Chemical Engineering and MSc Food Science & Technology (KNUST); PhD candidate in Bioresource Engineering at McGill. She also built FoodPulse, a food research and education platform, and works with partners across Ghana, Nigeria, Kenya, Tanzania, and Cameroon.',
    note: 'On your project, she leads stakeholder co-design, regulator conversations, and partner coordination. You get someone who has lived food-SME pressure, not only studied it.',
    linkedin: 'https://www.linkedin.com/in/etornam-c-tsyawo/',
  },
  {
    name: 'Emmanuel Amankrah Kwofie',
    role: 'Co-Founder & CTO · AI & Software Engineering',
    initials: 'EK',
    expertise: [
      'Full-stack engineering',
      'AI / ML systems',
      'Food systems platforms',
      'Cloud & DevOps',
    ],
    languages: ['English'],
    bio: 'Co-founder and CTO of Vinerals Technologies. He turns research into production software, with a focus on sustainable food systems. IBM AI Engineering Professional; MPhil Human Nutrition & Dietetics; PhD candidate in Bioresource Engineering at McGill. Platforms he designed and engineered at SASEL Lab include EcoDish365, ProteinProcessIO (with NRC Canada), and the Food System Financing Intelligence platform for Rwanda, with partners across Canada, Europe, and Africa. Day-to-day stack: Next.js, React, Python, FastAPI, Django, Rust, AWS, and ML.',
    note: 'On your project, he leads engineering delivery and technical validation. The same person who ships the system is the person you can reach when something needs to change.',
    linkedin: 'https://www.linkedin.com/in/eakwofie/',
    github: 'https://github.com/Amankrah',
    email: 'contact@vineralstechnologies.com',
    site: 'https://www.eakwofie.com/',
  },
  {
    name: 'Joël Mongeon',
    role: 'Co-Founder · Data Protection & Compliance Lead',
    initials: 'JM',
    expertise: [
      'Data protection / DPIA',
      'Decision modelling',
      'Food quality & sustainability',
      'Federated architectures',
    ],
    languages: ['French', 'English'],
    bio: 'Co-founder of Vinerals Technologies and Data Protection & Compliance Lead. Researcher focused on explainable optimisation and decision-making under uncertainty. Bachelor’s in Chemical Engineering (Laurentian, Cum Laude); Master’s in Integrated Food and Bioprocess Engineering at McGill (3.9/4.0); PhD candidate in Bioresource Engineering at McGill’s SASEL Lab. He has done hands-on proprietary data work with Québec companies on food logistics, predictive inventory, and sustainability modelling, and brings strong domain knowledge across African food value chains.',
    note: 'On your project, he leads Data Protection Impact Assessments, storage architecture, and alignment with NDPA, DPA, and GDPR, plus food quality and sustainability standards. Privacy and compliance are designed in, not bolted on before launch.',
    linkedin: 'https://www.linkedin.com/in/jo%C3%ABl-mongeon-393294195/',
  },
];
