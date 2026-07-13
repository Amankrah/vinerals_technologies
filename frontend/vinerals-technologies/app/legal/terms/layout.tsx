import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Website and Engagement Terms',
  description:
    'Terms governing use of the Vinerals Technologies website and how professional engagements work. Québec solidarity cooperative. Client work product ownership on full payment.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'vinerals technologies terms',
    'software development agreement',
    'quebec cooperative terms',
  ],
  openGraph: {
    title: 'Terms of Service | Vinerals Technologies',
    description:
      'Website use and engagement terms for Vinerals Technologies, a Montréal solidarity cooperative.',
    type: 'website',
    url: 'https://vineralstechnologies.com/legal/terms',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Vinerals Technologies',
    description: 'Website and professional engagement terms.',
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
  children: React.ReactNode;
}) {
  return children;
}
