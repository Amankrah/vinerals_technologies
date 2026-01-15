import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Technology Solutions Montreal | HIPAA/PHIPA Compliant | Patient Portals & Telehealth',
  description: 'HIPAA and PHIPA compliant healthcare software development serving Montreal, Quebec, and Canadian healthcare providers. Patient portals, telehealth platforms, clinical workflow automation, EMR integration, and health data systems built by developers with real healthcare experience. Funded by CIHR, ISED Health Innovation, and provincial health ministries.',
  keywords: [
    'healthcare software development montreal',
    'HIPAA compliant software',
    'PHIPA compliant software',
    'patient portal development',
    'telehealth platform canada',
    'clinical workflow software',
    'health data systems',
    'healthcare technology quebec',
    'EMR integration',
    'health tech developers',
    'digital health innovation',
    'healthcare it solutions',
  ],
  openGraph: {
    title: 'Healthcare Technology Solutions | Vinerals Technologies',
    description: 'Build healthcare technology that clinicians actually want to use. HIPAA/PHIPA compliant from day one. Patient portals, telehealth, clinical workflow automation serving Canadian healthcare providers and clinics.',
    url: 'https://vineralstechnologies.com/industries/healthcare',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-healthcare.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare Technology Solutions - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Technology Solutions | Vinerals Technologies',
    description: 'HIPAA/PHIPA compliant healthcare software. Patient portals, telehealth platforms, clinical workflow automation.',
    images: ['https://vineralstechnologies.com/og-healthcare.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries/healthcare',
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

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
