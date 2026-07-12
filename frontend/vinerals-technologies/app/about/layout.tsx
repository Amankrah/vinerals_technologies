import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vinerals Technologies | Software Made by Hand in Montréal',
  description:
    'A Montréal solidarity cooperative. Custom software and AI, made by hand — senior engineering, owned code, and terms Québec SMEs can plan around. Craft first. Not a discount agency.',
  keywords: [
    'software made by hand montreal',
    'montreal software cooperative',
    'custom software quebec',
    'handcrafted software development',
    'solidarity cooperative montreal',
    'ai integration canada',
    'senior software engineers montreal',
    'social enterprise technology',
    'enterprise software for smes',
  ],
  openGraph: {
    title: 'About Vinerals Technologies | Software Made by Hand',
    description:
      'Senior engineering shaped around how SMEs actually work. Craft, ownership, and honest counsel — from a Montréal solidarity cooperative.',
    url: 'https://vineralstechnologies.com/about',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies — Software made by hand in Montréal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vinerals Technologies | Software Made by Hand',
    description:
      'Custom software made by hand in Montréal. Senior engineering for Québec SMEs — craft, ownership, terms you can plan around.',
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
