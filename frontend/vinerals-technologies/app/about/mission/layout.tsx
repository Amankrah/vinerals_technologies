import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mission & Values | Software Made by Hand',
  description:
    'Craft without compromise. Senior engineering for SMEs: owned code, honest counsel, terms you can plan around. A Montréal solidarity cooperative.',
  keywords: [
    'software made by hand',
    'mission driven software montreal',
    'custom software quebec sme',
    'solidarity cooperative technology',
    'senior software engineers montreal',
    'social enterprise software quebec',
    'craft software development',
  ],
  openGraph: {
    title: 'Mission & Values | Vinerals Technologies',
    description:
      'Craft without compromise. Senior engineering for growing businesses, from a Montréal solidarity cooperative.',
    url: 'https://vineralstechnologies.com/about/mission',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-mission.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies. Mission: craft without compromise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission & Values | Vinerals Technologies',
    description:
      'Craft without compromise. Senior engineering, owned code, terms you can plan around.',
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
