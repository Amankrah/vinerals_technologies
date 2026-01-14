import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Technology Solutions | HIPAA/PHIPA Compliant | Vinerals Technologies',
  description: 'HIPAA and PHIPA compliant healthcare software development in Montreal. Patient portals, telehealth platforms, clinical workflow automation, and health data systems built by developers with healthcare experience.',
  keywords: [
    'healthcare software development montreal',
    'HIPAA compliant software',
    'PHIPA compliant software',
    'patient portal development',
    'telehealth platform',
    'clinical workflow software',
    'health data systems',
    'healthcare technology quebec',
    'EMR integration',
    'health tech developers',
  ],
  openGraph: {
    title: 'Healthcare Technology Solutions | Vinerals Technologies',
    description: 'Build healthcare technology that clinicians actually want to use. HIPAA/PHIPA compliant from day one. Patient portals, telehealth, clinical workflow automation.',
    type: 'website',
    url: 'https://vineralstechnologies.com/industries/healthcare',
  },
  twitter: {
    title: 'Healthcare Technology Solutions | Vinerals Technologies',
    description: 'HIPAA/PHIPA compliant healthcare software. Patient portals, telehealth platforms, clinical workflow automation.',
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/industries/healthcare',
  },
};

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
