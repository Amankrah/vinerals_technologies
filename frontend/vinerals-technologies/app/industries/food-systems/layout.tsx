import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food & Agriculture Technology Montreal | Supply Chain, Traceability & Farm Tech',
  description: 'Food systems and agriculture technology solutions serving Montreal, Quebec, and Canadian farmers, food processors, and distributors. Supply chain traceability, farm management software, food safety compliance, nutrition platforms, and sustainable agriculture technology. Funded by ISED, MAPAQ, and agriculture innovation programs.',
  keywords: [
    'food technology montreal',
    'agriculture software canada',
    'farm management software',
    'food supply chain traceability',
    'food safety software',
    'farm to table technology',
    'agriculture innovation',
    'food processing software',
    'sustainable agriculture technology',
    'agtech canada',
    'food systems innovation',
    'agricultural cooperative software',
  ],
  openGraph: {
    title: 'Food & Agriculture Technology | Vinerals Technologies',
    description: 'Build food systems technology that connects farms to tables. Supply chain traceability, farm management, food safety compliance, and sustainable agriculture solutions serving Canadian producers and processors.',
    url: 'https://vineralstechnologies.com/industries/food-systems',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-food-systems.jpg',
        width: 1200,
        height: 630,
        alt: 'Food & Agriculture Technology Solutions - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food & Agriculture Technology | Vinerals Technologies',
    description: 'Supply chain traceability, farm management, food safety compliance, and sustainable agriculture technology for Canadian food systems.',
    images: ['https://vineralstechnologies.com/og-food-systems.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries/food-systems',
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

export default function FoodSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
