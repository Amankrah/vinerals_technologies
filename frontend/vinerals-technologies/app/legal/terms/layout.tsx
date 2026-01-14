import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Legal | Vinerals Technologies',
  description: 'Terms of Service for Vinerals Technologies website and services. Understand your rights and obligations when using our custom software development, AI integration, and technology consulting services.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'service agreement',
    'legal terms',
    'software development terms',
  ],
  openGraph: {
    title: 'Terms of Service | Vinerals Technologies',
    description: 'Terms of Service for Vinerals Technologies website and professional services.',
    type: 'website',
    url: 'https://vineralstechnologies.com/legal/terms',
  },
  twitter: {
    title: 'Terms of Service | Vinerals Technologies',
    description: 'Terms of Service for our website and professional services.',
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/legal/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.NodeNode;
}) {
  return children;
}
