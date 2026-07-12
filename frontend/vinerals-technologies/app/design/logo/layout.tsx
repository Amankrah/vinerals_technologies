import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logo concepts (internal)',
  description: 'Internal review of craft monogram logo concepts. Not for public indexing.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DesignLogoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
