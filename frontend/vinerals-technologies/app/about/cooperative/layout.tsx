import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooperative Model | Built Differently, On Purpose',
  description:
    'Vinerals is a Québec solidarity cooperative. Craft over extraction, worker ownership, one member one vote — software made by hand for SMEs.',
  keywords: [
    'solidarity cooperative montreal',
    'worker cooperative technology',
    'social economy quebec',
    'cooperative software development',
    'software made by hand',
    'worker ownership tech',
    'quebec cooperative network',
  ],
  openGraph: {
    title: 'Cooperative Model | Vinerals Technologies',
    description:
      'Built differently, on purpose. A solidarity cooperative — craft, ownership, and honest counsel without investor extraction.',
    url: 'https://vineralstechnologies.com/about/cooperative',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-cooperative.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies — solidarity cooperative model',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperative Model | Vinerals Technologies',
    description:
      'Craft over extraction. Worker ownership. One member, one vote.',
    images: ['https://vineralstechnologies.com/og-cooperative.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/about/cooperative',
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

export default function CooperativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
