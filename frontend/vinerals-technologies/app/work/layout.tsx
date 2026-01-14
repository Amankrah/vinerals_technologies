import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | Software Projects Portfolio | Vinerals Technologies',
  description: 'Real projects, real results. Explore our portfolio of custom software, AI integration, and mobile app projects delivered for SMEs, non-profits, and social enterprises across Quebec and Canada.',
  keywords: [
    'software development portfolio',
    'case studies montreal',
    'tech project examples',
    'software success stories',
    'healthcare software projects',
    'food systems technology',
    'sustainability software',
    'non-profit technology',
    'SME digital transformation',
  ],
  openGraph: {
    title: 'Our Work & Case Studies | Vinerals Technologies',
    description: 'We do not just build software - we solve problems. See the projects we have delivered for SMEs, non-profits, and social enterprises.',
    type: 'website',
    url: 'https://vineralstechnologies.com/work',
  },
  twitter: {
    title: 'Our Work & Case Studies | Vinerals Technologies',
    description: 'Real projects, real results. Software development case studies for SMEs and non-profits.',
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
