import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vinerals Technologies | Montreal Software Cooperative Unlocking Technology for Quebec SMEs',
  description: 'Montreal-based solidarity cooperative making enterprise-quality software accessible to Quebec SMEs and Canadian businesses. Not a discount agency—a publicly-supported technology adoption program. Mission-aligned funding bridges the knowledge and cost gap. Same quality as Spiria, Stradigi AI, Konverge—made accessible.',
  keywords: [
    'montreal software development',
    'quebec sme technology',
    'solidarity cooperative montreal',
    'custom software quebec',
    'ai integration canada',
    'social enterprise technology',
    'digital transformation small business',
    'technology adoption program',
    'subsidized software development',
    'montreal software cooperative',
    'social economy technology',
    'enterprise software for smes',
  ],
  openGraph: {
    title: 'About Vinerals Technologies | Bridge to Enterprise Software for Quebec SMEs',
    description: 'Quality software costs what it costs—$30K-$250K+ CAD for professional development. We&apos;ve secured mission-aligned funding so cost doesn&apos;t have to be your barrier. We start by helping you understand what&apos;s possible.',
    url: 'https://vineralstechnologies.com/about',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Vinerals Technologies - Montreal Software Cooperative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vinerals Technologies | Montreal Software Cooperative',
    description: 'Not undercutting professionals—bridging accessibility gaps. Enterprise-quality software for Quebec SMEs through mission-aligned funding.',
    images: ['https://vineralstechnologies.com/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about',
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
