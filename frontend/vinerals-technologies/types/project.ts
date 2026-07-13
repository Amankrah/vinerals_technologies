export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: 'healthcare' | 'food-systems' | 'sustainability' | 'non-profit' | 'other';
  services: string[];
  year: string;
  status?: 'live' | 'beta' | 'in-development';
  partner?: string;
  partnerUrl?: string;
  externalUrl?: string;
  image?: string;
  imageAlt?: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies?: string[];
  features?: string[];
  tags?: string[];
  featured: boolean;
}
