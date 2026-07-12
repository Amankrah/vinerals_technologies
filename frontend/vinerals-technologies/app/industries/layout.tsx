import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Expertise | Software Made by Hand for Your Sector',
  description:
    'Custom software made by hand for healthcare, food & agriculture, sustainability, and non-profits. Sector fluency, compliance built in, serving Montréal, Québec, and Canada.',
  keywords: [
    'software made by hand',
    'industry software development',
    'healthcare technology montreal',
    'food systems software',
    'sustainability technology',
    'non-profit software solutions',
    'custom software quebec',
    'cleantech software',
    'agriculture technology canada',
  ],
  openGraph: {
    title: 'Industry Expertise | Vinerals Technologies',
    description:
      'Software made by hand for healthcare, food systems, sustainability, and social impact — by developers who know the sector.',
    url: 'https://vineralstechnologies.com/industries',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry expertise — software made by hand | Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Expertise | Vinerals Technologies',
    description:
      'Sector software made by hand — healthcare, food systems, sustainability, and social impact.',
    images: ['https://vineralstechnologies.com/og-industries.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries',
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

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
