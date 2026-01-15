import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Consortium & Network Partnerships Montreal | Innovation Ecosystems',
  description: 'Join technology consortiums, innovation networks, and cooperative ecosystems with Vinerals Technologies. Member of Canadian technology consortiums supporting social enterprise, cleantech innovation, healthcare technology, and agtech development. Building collaborative innovation partnerships across Montreal, Quebec, and Canada.',
  keywords: [
    'technology consortium member canada',
    'innovation network partners montreal',
    'cooperative consortium partnerships',
    'technology ecosystem montreal',
    'innovation cluster member quebec',
    'collaborative technology development',
    'consortium partnerships canada',
    'tech ecosystem partners',
    'innovation network membership',
    'technology alliance canada',
  ],
  openGraph: {
    title: 'Technology Consortium Partnerships | Vinerals Technologies',
    description: 'Building innovation ecosystems together. Technology consortium and network partnerships for collaborative development, knowledge sharing, and ecosystem growth across Canada.',
    url: 'https://vineralstechnologies.com/partners/consortiums',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners-consortiums.jpg',
        width: 1200,
        height: 630,
        alt: 'Technology Consortium Partnerships - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Consortium Partnerships | Vinerals Technologies',
    description: 'Innovation network and consortium partnerships for collaborative technology development.',
    images: ['https://vineralstechnologies.com/og-partners-consortiums.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners/consortiums',
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

export default function ConsortiumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
