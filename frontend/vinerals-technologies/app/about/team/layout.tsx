import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Vinerals Technologies · Senior Developers Solving Real Problems for Québec SMEs',
  description: 'Meet the developers behind Vinerals Technologies. No account managers, no sales team, no junior devs being trained on your project. Everyone you work with has at least five years of production experience. Same calibre of talent as Spiria, Stradigi AI, or Konverge. Direct access to senior engineers who understand healthcare, food systems, sustainability, and social enterprise.',
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
    description: 'At least five years in production. No juniors learning on your dime. Real working experience in healthcare, food systems, and sustainability. We translate technology into decisions Québec SMEs can actually act on.',
    url: 'https://vineralstechnologies.com/about/team',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Team · Senior Developers Behind Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Vinerals Technologies',
    description: 'Senior developers only. Direct access. Domain understanding beyond code. Same calibre as larger Montréal agencies, brought inside reach.',
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
