import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | How We Handle Personal Information',
  description:
    'How Vinerals Technologies collects, uses, and protects personal information under PIPEDA and Québec Law 25. Contact us to exercise your privacy rights.',
  keywords: [
    'privacy policy',
    'data protection',
    'PIPEDA',
    'Law 25 Quebec',
    'personal information protection',
    'vinerals technologies privacy',
  ],
  openGraph: {
    title: 'Privacy Policy | Vinerals Technologies',
    description:
      'How we collect, use, and protect personal information under Canadian and Québec privacy law.',
    type: 'website',
    url: 'https://vineralstechnologies.com/legal/privacy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Vinerals Technologies',
    description: 'Personal information practices under PIPEDA and Québec Law 25.',
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/legal/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
