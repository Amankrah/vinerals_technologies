import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooperative Model | Vinerals Technologies - Solidarity Cooperative Making Technology Accessible',
  description: 'Why solidarity cooperative? Mission over profit, funded accessibility (not discount rates), and worker ownership. We don&apos;t undercut professional rates ($100-200/hr CAD in Montreal). Instead, we&apos;ve secured government subsidies and impact funding to bridge accessibility gaps. Part of Quebec&apos;s 11,000+ social economy enterprises.',
  keywords: [
    'solidarity cooperative montreal',
    'worker cooperative technology',
    'social economy quebec',
    'cooperative software development',
    'mission-driven technology',
    'social enterprise montreal',
    'cooperative governance',
    'worker ownership tech',
    'social economy technology',
    'quebec cooperative network',
    'CDRQ cooperative',
    'PME MTL technology',
  ],
  openGraph: {
    title: 'Cooperative Model | Vinerals Technologies',
    description: 'Built different, on purpose. Solidarity cooperative owned by workers and community—not investors demanding maximum returns. Enables enterprise-quality work for SMEs through mission-aligned funding.',
    url: 'https://vineralstechnologies.com/about/cooperative',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-cooperative.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Cooperative Model - Built Different, On Purpose',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperative Model | Vinerals Technologies',
    description: 'Solidarity cooperative structure enables mission over profit. Same quality as Spiria/Stradigi AI—made accessible through funded programs.',
    images: ['https://vineralstechnologies.com/og-cooperative.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about/cooperative',
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

export default function CooperativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
