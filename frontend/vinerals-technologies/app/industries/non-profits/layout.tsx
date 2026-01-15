import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Profit & Social Enterprise Technology Montreal | Cooperative & Impact-Driven Software',
  description: 'Technology solutions for non-profits, cooperatives, social enterprises, and mission-driven organizations in Montreal, Quebec, and Canada. Donor management systems, volunteer platforms, impact tracking, member management for cooperatives, grant reporting tools, and community engagement technology. Funded by foundations, Community Futures, and social innovation programs.',
  keywords: [
    'non-profit software montreal',
    'social enterprise technology',
    'cooperative software canada',
    'donor management system',
    'volunteer management platform',
    'impact measurement software',
    'charity technology solutions',
    'community organization software',
    'social impact technology',
    'non-profit crm',
    'cooperative management software',
    'foundation grant management',
  ],
  openGraph: {
    title: 'Non-Profit & Social Enterprise Technology | Vinerals Technologies',
    description: 'Build technology that amplifies social impact. Donor management, volunteer coordination, impact tracking, cooperative platforms, and community engagement tools for Canadian non-profits and social enterprises.',
    url: 'https://vineralstechnologies.com/industries/non-profits',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-non-profits.jpg',
        width: 1200,
        height: 630,
        alt: 'Non-Profit & Social Enterprise Technology Solutions - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Non-Profit & Social Enterprise Technology | Vinerals Technologies',
    description: 'Donor management, volunteer platforms, impact tracking, and cooperative software for Canadian non-profits and social enterprises.',
    images: ['https://vineralstechnologies.com/og-non-profits.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries/non-profits',
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

export default function NonProfitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
