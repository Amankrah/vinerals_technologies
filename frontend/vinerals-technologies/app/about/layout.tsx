import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vinerals Technologies | Montréal Software Cooperative for Québec SMEs',
  description: 'A Montréal solidarity cooperative bringing enterprise-calibre software inside reach for Québec SMEs and Canadian businesses. Not a discount agency. A publicly-supported technology adoption programme. Mission-aligned funding closes the knowledge and cost gap. Same calibre of work as Spiria, Stradigi AI, or Konverge.',
  keywords: [
    'montreal software development',
    'quebec sme technology',
    'solidarity cooperative montreal',
    'custom software quebec',
    'ai integration canada',
    'social enterprise technology',
    'digital transformation small business',
    'technology adoption program',
    'subsidized software development',
    'montreal software cooperative',
    'social economy technology',
    'enterprise software for smes',
  ],
  openGraph: {
    title: 'About Vinerals Technologies | A Bridge to Enterprise Software for Québec SMEs',
    description: 'Good engineering costs what it costs, between $30K and $250K CAD for a professional build. We have lined up mission-aligned funding so the cheque doesn&apos;t have to be the wall. We start by walking you through what&apos;s possible.',
    url: 'https://vineralstechnologies.com/about',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Vinerals Technologies - Montreal Software Cooperative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vinerals Technologies | Montréal Software Cooperative',
    description: 'Not undercutting professionals. Bridging the accessibility gap. Enterprise-calibre software for Québec SMEs through mission-aligned funding.',
    images: ['https://vineralstechnologies.com/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about',
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
