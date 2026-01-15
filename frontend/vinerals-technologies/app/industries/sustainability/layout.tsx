import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability & Cleantech Software Montreal | ESG, Carbon Tracking & Circular Economy',
  description: 'Cleantech and sustainability technology solutions for environmental organizations, green businesses, and sustainable enterprises in Montreal, Quebec, and Canada. Carbon tracking systems, ESG reporting platforms, circular economy software, renewable energy monitoring, and climate action technology. Funded by Sustainable Development Technology Canada (SDTC), Environment Canada, and clean technology innovation programs.',
  keywords: [
    'cleantech software montreal',
    'sustainability technology canada',
    'carbon tracking software',
    'esg reporting platform',
    'circular economy technology',
    'environmental software solutions',
    'climate technology',
    'renewable energy software',
    'green technology development',
    'sustainability reporting',
    'environmental compliance software',
    'climate action technology',
  ],
  openGraph: {
    title: 'Sustainability & Cleantech Technology | Vinerals Technologies',
    description: 'Build technology that drives climate action and sustainability. Carbon tracking, ESG reporting, circular economy platforms, and environmental monitoring solutions for Canadian cleantech and green businesses.',
    url: 'https://vineralstechnologies.com/industries/sustainability',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-sustainability.jpg',
        width: 1200,
        height: 630,
        alt: 'Sustainability & Cleantech Technology Solutions - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability & Cleantech Technology | Vinerals Technologies',
    description: 'Carbon tracking, ESG reporting, circular economy platforms, and climate action technology for Canadian sustainability organizations.',
    images: ['https://vineralstechnologies.com/og-sustainability.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries/sustainability',
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

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
