import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Co-Founders You Will Actually Meet',
  description:
    'Meet the co-founders of Vinerals Technologies: Etornam Celestine Tsyawo, Emmanuel Amankrah Kwofie, and Joël Mongeon. Project direction, engineering, and data protection. Book a consultation.',
  keywords: [
    'vinerals technologies team',
    'vinerals technologies co-founders',
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
      'Three co-founders on the board: project direction, engineering, and compliance. You talk to the people who ship.',
    url: 'https://vineralstechnologies.com/about/team',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies co-founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Vinerals Technologies',
    description:
      'Etornam Celestine Tsyawo, Emmanuel Amankrah Kwofie, and Joël Mongeon. Co-founders you will actually meet.',
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
