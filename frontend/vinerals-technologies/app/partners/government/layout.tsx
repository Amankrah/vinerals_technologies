import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Government | Craft Delivery for Digital & SME Mandates | Vinerals',
  description:
    'Government technology partner: Vinerals Technologies delivers craft software for Québec and Canadian digital-economy and SME programmes — social procurement fit, clear milestones, reporting you can stand behind.',
  keywords: [
    'government technology partner quebec',
    'solidarity cooperative procurement',
    'SME digital programme delivery',
    'social procurement software canada',
    'montreal cooperative government partner',
    'digital economy implementation partner',
  ],
  openGraph: {
    title: 'For Government | Vinerals Technologies',
    description:
      'Craft delivery for public mandates — implementation capacity for digital-economy and SME programmes across Québec and Canada.',
    url: 'https://vineralstechnologies.com/partners/government',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners-government.jpg',
        width: 1200,
        height: 630,
        alt: 'Government Technology Partners - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Government | Vinerals Technologies',
    description:
      'Craft delivery for digital-economy and SME mandates — solidarity cooperative partner.',
    images: ['https://vineralstechnologies.com/og-partners-government.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners/government',
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

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
