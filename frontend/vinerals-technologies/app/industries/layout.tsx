import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Expertise | Healthcare, Food Systems, Sustainability & Social Impact',
  description: 'Software development expertise across healthcare, food & agriculture, sustainability, and non-profit sectors. HIPAA/PHIPA compliant, supply chain traceability, ESG reporting, and impact-driven technology solutions serving Montreal, Quebec, and Canada.',
  keywords: [
    'industry software development',
    'healthcare technology montreal',
    'food systems software',
    'sustainability technology',
    'non-profit software solutions',
    'social enterprise technology',
    'impact-driven software development',
    'mission-aligned technology',
    'cleantech software',
    'agriculture technology canada',
  ],
  openGraph: {
    title: 'Industry Expertise | Vinerals Technologies',
    description: 'Deep expertise in healthcare, food systems, sustainability, and social impact. Technology solutions built by developers who understand your industry challenges and opportunities.',
    url: 'https://vineralstechnologies.com/industries',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry Expertise - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Expertise | Vinerals Technologies',
    description: 'Deep expertise in healthcare, food systems, sustainability, and social impact technology.',
    images: ['https://vineralstechnologies.com/og-industries.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
