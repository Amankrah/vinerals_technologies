import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection | Vinerals Technologies',
  description: 'Learn how Vinerals Technologies collects, uses, and protects your personal information. Our privacy policy complies with PIPEDA and Quebec data protection laws.',
  keywords: [
    'privacy policy',
    'data protection',
    'PIPEDA compliance',
    'personal information protection',
    'data privacy quebec',
  ],
  openGraph: {
    title: 'Privacy Policy | Vinerals Technologies',
    description: 'How we collect, use, and protect your personal information. PIPEDA compliant privacy practices.',
    type: 'website',
    url: 'https://vineralstechnologies.com/legal/privacy',
  },
  twitter: {
    title: 'Privacy Policy | Vinerals Technologies',
    description: 'Our privacy policy and data protection practices.',
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
