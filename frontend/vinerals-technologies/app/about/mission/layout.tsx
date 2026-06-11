import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mission & Vision | Vinerals Technologies · Closing the Digital Divide for Québec SMEs',
  description: 'Our mission: bringing enterprise-calibre software inside reach for Québec SMEs through mission-aligned funding. Not a discount agency. A publicly-supported technology adoption programme that closes the knowledge and cost gap. Good engineering costs what it costs ($100 to $200 per hour blended in Montréal). We have lined up subsidies and grants so the cheque doesn&apos;t have to be the wall.',
  keywords: [
    'digital transformation quebec sme',
    'ai integration small business canada',
    'technology adoption program',
    'social enterprise software quebec',
    'mission-driven software development',
    'accessible technology montreal',
    'software engineering costs montreal',
    'technology knowledge gap',
    'subsidized software programs',
    'social economy technology',
  ],
  openGraph: {
    title: 'Closing the Digital Divide for Québec SMEs | Vinerals Mission',
    description: 'The three walls SMEs keep hitting: the knowledge gap (what can AI actually do?), the cost reality ($30K to $250K CAD), and the expertise gap (senior vs junior developers). Our model: a bridge programme of mission-aligned funding and honest translation.',
    url: 'https://vineralstechnologies.com/about/mission',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-mission.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Mission · Closing the Digital Divide for Québec SMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission & Vision | Vinerals Technologies',
    description: 'Closing Canada&apos;s digital divide by helping SMEs see what&apos;s possible with AI and bringing the professional implementation inside reach.',
    images: ['https://vineralstechnologies.com/og-mission.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about/mission',
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

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
