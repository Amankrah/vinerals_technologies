import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Technology Partners | Cooperative Procurement & Digital Services Montreal',
  description: 'Technology development partner for federal, provincial, and municipal government agencies across Canada. Vinerals Technologies solidarity cooperative provides accessible digital services, cooperative procurement solutions, and social enterprise technology for government innovation programs. Supporting Quebec digital transformation, federal accessibility initiatives, and municipal technology needs.',
  keywords: [
    'government technology procurement cooperative',
    'solidarity cooperative government contracts',
    'quebec government technology partners',
    'federal government cooperative procurement',
    'accessible technology programs canada',
    'government digital services cooperative',
    'municipal technology partners montreal',
    'social enterprise government contracts',
    'cooperative technology procurement',
    'government innovation partners',
  ],
  openGraph: {
    title: 'Government Technology Partners | Vinerals Technologies',
    description: 'Accessible technology and digital services for government agencies. Solidarity cooperative supporting federal, provincial, and municipal innovation programs across Canada.',
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
    title: 'Government Technology Partners | Vinerals Technologies',
    description: 'Cooperative technology solutions for federal, provincial, and municipal government agencies.',
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
