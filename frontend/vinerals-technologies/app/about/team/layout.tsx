import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Vinerals Technologies - Senior Developers Solving Real Problems for Quebec SMEs',
  description: 'Meet the experienced developers behind Vinerals Technologies. No account managers, no sales team, no junior devs. Every person you work with has 5+ years professional experience—same caliber as Spiria, Stradigi AI, Konverge. Direct access to senior engineers who understand healthcare, food systems, sustainability, and social enterprise.',
  keywords: [
    'senior software developers montreal',
    'experienced software engineers quebec',
    'full-stack developers montreal',
    'ai integration specialists',
    'healthcare software developers',
    'social enterprise technology team',
    'cooperative software team',
    'direct developer access',
    'senior engineering team',
    'mission-driven developers',
  ],
  openGraph: {
    title: 'Our Team | Vinerals Technologies',
    description: '5+ years experience. No junior devs learning on your dime. Domain expertise in healthcare, food systems, sustainability. We translate technology into strategic advantage for Quebec SMEs.',
    url: 'https://vineralstechnologies.com/about/team',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Team - Senior Developers Behind Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Vinerals Technologies',
    description: 'Senior developers only. Direct access. Domain expertise beyond code. Same quality as larger Montreal agencies—made accessible.',
    images: ['https://vineralstechnologies.com/og-team.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about/team',
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

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
