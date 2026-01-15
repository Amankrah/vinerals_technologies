import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mission & Vision | Vinerals Technologies - Unlocking Digital Transformation for Quebec SMEs',
  description: 'Our mission: Making enterprise-quality software accessible to Quebec SMEs through mission-aligned funding. Not a discount agency—a publicly-supported technology adoption program bridging the knowledge and cost gap. Quality software costs what it costs ($100-200/hr CAD in Montreal). We&apos;ve secured subsidies and grants so cost doesn&apos;t have to be your barrier.',
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
    title: 'Unlocking Technology for Quebec SMEs | Vinerals Mission',
    description: 'The three barriers: Knowledge gap (what&apos;s possible with AI?), Cost reality ($30K-$250K+ CAD), Expertise gap (senior vs junior devs). Our solution: Bridge program with mission-aligned funding and technology translation.',
    url: 'https://vineralstechnologies.com/about/mission',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-mission.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Mission - Unlocking Technology for Quebec SMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission & Vision | Vinerals Technologies',
    description: 'Closing Canada&apos;s digital divide by helping SMEs understand what&apos;s possible with AI and making professional implementation accessible.',
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
