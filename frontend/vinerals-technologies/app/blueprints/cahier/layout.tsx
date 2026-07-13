import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cahier | The Supply Chain Records App for Canadian SMEs',
  description:
    'Cahier is the supply chain records app from Vinerals Technologies. One place to write down what you buy, make, and ship, and send out the reports FSMA 204, Bill S-211, EUDR, CBAM, and CFIA SFCR each ask for. In development, with early access open.',
  keywords: [
    'cahier vinerals',
    'cahier supply chain app',
    'supply chain records canada',
    'sme supply chain quebec',
    'food supply chain software canada',
    'scm framework sme',
    'traceability app canada',
    'FSMA 204 canada',
    'bill s-211 supply chain',
    'EUDR compliance sme',
    'CBAM canada sme',
    'cooperative supply chain',
  ],
  alternates: {
    canonical: 'https://vineralstechnologies.com/blueprints/cahier',
  },
  openGraph: {
    title: 'Cahier | Vinerals Technologies',
    description:
      'The supply chain records app from Vinerals. One set of records, six sets of regulator paperwork, and a Québec funding rollout for growing SMEs. In development.',
    url: 'https://vineralstechnologies.com/blueprints/cahier',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-supply-chain-blueprint.jpg',
        width: 1200,
        height: 630,
        alt: 'Cahier by Vinerals Technologies. Supply chain records for Canadian SMEs.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cahier | Vinerals Technologies',
    description:
      'The supply chain records app from Vinerals. One set of records, six sets of regulator paperwork, for growing Canadian SMEs. In development.',
    images: ['https://vineralstechnologies.com/og-supply-chain-blueprint.jpg'],
  },
};

export default function CahierLayout({ children }: { children: React.ReactNode }) {
  return children;
}
