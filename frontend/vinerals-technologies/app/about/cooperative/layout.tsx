import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooperative Model | How Ownership Shapes the Work',
  description:
    'Vinerals is a Québec solidarity cooperative. Worker ownership, one member one vote, and surpluses that stay in the mission. Software made by hand for growing businesses.',
  keywords: [
    'solidarity cooperative montreal',
    'worker cooperative technology',
    'social economy quebec',
    'cooperative software development',
    'software made by hand',
    'worker ownership tech',
    'quebec cooperative network',
  ],
  openGraph: {
    title: 'Cooperative Model | Vinerals Technologies',
    description:
      'A Québec solidarity cooperative: worker and community ownership, democratic governance, and craft that stays with the people doing the work.',
    url: 'https://vineralstechnologies.com/about/cooperative',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-cooperative.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies solidarity cooperative model',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperative Model | Vinerals Technologies',
    description:
      'Worker ownership. One member, one vote. Surpluses stay in the mission.',
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
