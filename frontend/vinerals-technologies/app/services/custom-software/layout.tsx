import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Montreal | Web Apps & Business Software',
  description: 'Custom web applications and business software built for how you work. Full-stack development with React, Next.js, Node.js. You own the code. Montréal-based, serving Canada.',
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
    description: 'Software shaped around how your business runs. Senior engineering, clear ownership, made by hand in Montréal.',
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
    description: 'Custom web applications and business software for SMEs. Full-stack development, code you own.',
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
