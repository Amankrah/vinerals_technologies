import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Funders & Foundations | Patient Capital for Craft Software | Vinerals',
  description:
    'Patient capital and foundation partnerships with Vinerals Technologies, a Montréal solidarity cooperative. Back hand-made software for growing businesses with social return and financial discipline.',
  keywords: [
    'patient capital cooperative',
    'foundation technology partner canada',
    'solidarity cooperative funding',
    'social innovation software grants',
    'CIHR ISED SDTC MAPAQ partners',
    'impact funding craft software',
    'montreal cooperative funders',
  ],
  openGraph: {
    title: 'For Funders & Foundations | Vinerals Technologies',
    description:
      'Patient capital for hand-made software. Back a solidarity cooperative that keeps quality intact for Québec SMEs.',
    url: 'https://vineralstechnologies.com/partners/funders',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners-funders.jpg',
        width: 1200,
        height: 630,
        alt: 'For Funders & Foundations - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Funders & Foundations | Vinerals Technologies',
    description:
      'Patient capital for craft software. Solidarity cooperative governance, transparent reporting.',
    images: ['https://vineralstechnologies.com/og-partners-funders.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners/funders',
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

export default function FundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
