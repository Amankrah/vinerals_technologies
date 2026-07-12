import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Software Made by Hand | Vinerals Technologies',
  description:
    'Platforms made by hand at McGill’s SASEL Lab by founder & CTO Emmanuel Amankrah Kwofie — EcoDish365, ProteinProcessIO, SoyaFlow, FSFI Rwanda, and more — with partners across Canada, Europe, and Africa.',
  keywords: [
    'software made by hand',
    'SASEL Lab',
    'McGill software',
    'Emmanuel Amankrah Kwofie',
    'food systems technology',
    'custom software montreal',
    'research software portfolio',
    'EcoDish365',
  ],
  openGraph: {
    title: 'Our Work | Vinerals Technologies',
    description:
      'Real platforms made by hand at McGill by our founder — food systems, sustainability, and research software that ships.',
    type: 'website',
    url: 'https://vineralstechnologies.com/work',
  },
  twitter: {
    title: 'Our Work | Vinerals Technologies',
    description:
      'Software made by hand — McGill SASEL platforms by Vinerals founder Emmanuel Amankrah Kwofie.',
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
