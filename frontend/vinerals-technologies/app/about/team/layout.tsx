import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Worker Members of the Cooperative',
  description:
    'Meet the worker members on the board of Vinerals Technologies: Etornam Celestine Tsyawo, Emmanuel Amankrah Kwofie, and Joël Mongeon — project direction, AI & software engineering, and data protection.',
  keywords: [
    'vinerals technologies team',
    'etornam celestine tsyawo',
    'emmanuel amankrah kwofie',
    'joël mongeon',
    'software cooperative montreal',
    'food systems software team',
    'senior engineers montreal',
  ],
  openGraph: {
    title: 'Our Team | Vinerals Technologies',
    description:
      'Worker members on the board — project direction, engineering, and compliance. Named people, hand-made software.',
    url: 'https://vineralstechnologies.com/about/team',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies — cooperative worker members on the board',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Vinerals Technologies',
    description:
      'Etornam Celestine Tsyawo, Emmanuel Amankrah Kwofie, and Joël Mongeon — worker members on the board.',
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
