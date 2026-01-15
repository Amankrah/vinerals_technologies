import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Montreal | Web Apps & Business Software',
  description: 'Bespoke web applications and business software built for your exact needs. Full-stack development with React, Next.js, Node.js. Subsidized programs available for SMEs in Montreal and across Canada.',
  keywords: [
    'custom software development montreal',
    'bespoke software development',
    'web application development',
    'business software montreal',
    'full-stack development canada',
    'custom web apps',
    'internal tools development',
    'client portal development',
    'erp systems',
    'cms development',
  ],
  openGraph: {
    title: 'Custom Software Development | Vinerals Technologies',
    description: 'Build exactly what your business needs with our custom software development services. No compromises, no vendor lock-in. Montreal-based, serving all of Canada.',
    url: 'https://vineralstechnologies.com/services/custom-software',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-custom-software.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Software Development Services - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development | Vinerals Technologies',
    description: 'Bespoke web applications and business software built for your exact needs. Full-stack development for SMEs.',
    images: ['https://vineralstechnologies.com/og-custom-software.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/custom-software',
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

export default function CustomSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
