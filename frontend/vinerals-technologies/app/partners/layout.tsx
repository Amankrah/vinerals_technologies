import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Partnership Opportunities Montreal | Cooperative Software Development Partners',
  description: 'Partner with Vinerals Technologies solidarity cooperative for technology development, social innovation, and digital transformation. Serving funders, government agencies, and industry consortiums across Canada. Mission-aligned partnerships for accessible technology, cooperative development, and social enterprise innovation.',
  keywords: [
    'technology cooperative partnerships',
    'solidarity cooperative technology',
    'social enterprise tech partners',
    'mission-aligned technology development',
    'cooperative software partnerships canada',
    'social innovation technology partners',
    'accessible technology programs',
    'worker cooperative technology montreal',
    'technology partnership opportunities',
    'cooperative digital transformation',
  ],
  openGraph: {
    title: 'Partnership Opportunities | Vinerals Technologies Cooperative',
    description: 'Build accessible technology infrastructure together. Partnership opportunities with a solidarity cooperative serving funders, government, and industry consortiums across Canada.',
    url: 'https://vineralstechnologies.com/partners',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners.jpg',
        width: 1200,
        height: 630,
        alt: 'Partnership Opportunities - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership Opportunities | Vinerals Technologies',
    description: 'Technology cooperative partnerships for social innovation and accessible development.',
    images: ['https://vineralstechnologies.com/og-partners.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners',
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

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
