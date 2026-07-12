import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Consortiums & Networks | Shared Platforms & Craft Capacity | Vinerals',
  description:
    'Technical partner for associations and sector networks. Shared platforms, member programmes, and sector initiatives — systems no single member could fund alone, built by a Montréal solidarity cooperative.',
  keywords: [
    'technology consortium partner canada',
    'shared platform development associations',
    'industry network software cooperative',
    'innovation cluster implementation',
    'cooperative federation technology',
    'sector alliance digital infrastructure',
  ],
  openGraph: {
    title: 'For Consortiums & Networks | Vinerals Technologies',
    description:
      'Shared platforms and craft capacity for associations and sector networks — owned by the network.',
    url: 'https://vineralstechnologies.com/partners/consortiums',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners-consortiums.jpg',
        width: 1200,
        height: 630,
        alt: 'Technology Consortium Partnerships - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Consortiums & Networks | Vinerals Technologies',
    description:
      'Shared platforms. Shared craft. Technical partner for associations and sector networks.',
    images: ['https://vineralstechnologies.com/og-partners-consortiums.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners/consortiums',
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

export default function ConsortiumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
