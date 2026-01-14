import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Team | Senior Developers | Vinerals Technologies',
  description: 'Meet the experienced developers behind Vinerals Technologies. A small team of senior engineers (5+ years experience) building technology for mission-driven organizations in Montreal, Quebec.',
  keywords: [
    'software development team montreal',
    'senior developers montreal',
    'tech cooperative team',
    'solidarity cooperative developers',
    'experienced software engineers',
    'montreal tech team',
  ],
  openGraph: {
    title: 'Meet Our Team | Vinerals Technologies',
    description: 'Senior developers building technology for mission-driven organizations. No account managers, no junior developers - just experienced engineers who care about your mission.',
    type: 'website',
    url: 'https://vineralstechnologies.com/about/team',
  },
  twitter: {
    title: 'Meet Our Team | Vinerals Technologies',
    description: 'Senior developers building technology for mission-driven organizations in Montreal, Quebec.',
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about/team',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
