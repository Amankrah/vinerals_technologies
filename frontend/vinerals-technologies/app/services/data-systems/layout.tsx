import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Systems & Analytics Montreal | Dashboards, ETL & Data Infrastructure',
  description: 'Transform data into decisions with modern data infrastructure, analytics dashboards, ETL pipelines, and business intelligence. PostgreSQL, cloud data warehouses, and visualization tools for SMEs.',
  keywords: [
    'data systems montreal',
    'business analytics',
    'dashboard development',
    'etl pipelines',
    'data infrastructure',
    'business intelligence',
    'data visualization',
    'database development',
    'data analytics canada',
    'data warehouse',
  ],
  openGraph: {
    title: 'Data Systems & Analytics | Vinerals Technologies',
    description: 'Turn your data into decisions with modern infrastructure and visualization. Databases, dashboards, ETL pipelines, and analytics.',
    url: 'https://vineralstechnologies.com/services/data-systems',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-data-systems.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Systems & Analytics Services - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Systems & Analytics | Vinerals Technologies',
    description: 'Modern data infrastructure and analytics for SMEs. Databases, dashboards, ETL pipelines.',
    images: ['https://vineralstechnologies.com/og-data-systems.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/data-systems',
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

export default function DataSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
