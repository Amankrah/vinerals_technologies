import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooperative Model | Vinerals Technologies · A Solidarity Cooperative Bringing Software Inside Reach',
  description: 'Why a solidarity cooperative? Mission over profit, funded accessibility (not discount rates), and worker ownership. We don&apos;t undercut professional rates ($100 to $200 per hour blended in Montréal). What we have done is line up government subsidies and impact funding to close the accessibility gap. Part of Québec&apos;s 11,000-plus social economy enterprises.',
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
    description: 'Built differently, on purpose. A solidarity cooperative owned by workers and community, not by investors hunting maximum returns. Enables enterprise-calibre work for SMEs through mission-aligned funding.',
    url: 'https://vineralstechnologies.com/about/cooperative',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-cooperative.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Cooperative Model · Built Differently, On Purpose',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperative Model | Vinerals Technologies',
    description: 'A solidarity cooperative structure puts mission ahead of profit. Same calibre of work as Spiria or Stradigi AI, brought inside reach through funded programmes.',
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
