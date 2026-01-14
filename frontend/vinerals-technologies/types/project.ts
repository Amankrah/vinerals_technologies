export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: 'healthcare' | 'food-systems' | 'sustainability' | 'non-profit' | 'other';
  services: string[];
  year: string;
  thumbnail: string;
  hero: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured: boolean;
}
