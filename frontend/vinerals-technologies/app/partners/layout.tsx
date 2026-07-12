import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | Patient Capital, Government & Consortiums | Vinerals Technologies',
  description:
    'Partner with Vinerals Technologies — a Montréal solidarity cooperative building software made by hand. Doors for funders, government agencies, and industry consortiums across Québec and Canada.',
  keywords: [
    'technology cooperative partnerships',
    'solidarity cooperative montreal',
    'patient capital software',
    'government technology partners quebec',
    'consortium shared platforms',
    'mission-aligned software cooperative',
    'SME craft software partners',
  ],
  openGraph: {
    title: 'Partners | Vinerals Technologies',
    description:
      'Three doors: patient capital, government mandates, and consortium shared platforms — craft delivery from a Montréal solidarity cooperative.',
    url: 'https://vineralstechnologies.com/partners',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners.jpg',
        width: 1200,
        height: 630,
        alt: 'Partnership Opportunities - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners | Vinerals Technologies',
    description:
      'Funders, government, and consortiums — craft software partnerships with a Montréal solidarity cooperative.',
    images: ['https://vineralstechnologies.com/og-partners.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners',
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

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
