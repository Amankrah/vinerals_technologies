import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Montreal | iOS, Android & PWA Development',
  description: 'Cross-platform mobile application development for iOS, Android, and Progressive Web Apps. React Native and modern frameworks. Affordable mobile development for SMEs across Canada.',
  keywords: [
    'mobile app development montreal',
    'ios app development',
    'android app development',
    'pwa development',
    'cross-platform mobile apps',
    'react native development',
    'mobile application services',
    'app development canada',
    'business mobile apps',
    'field service apps',
  ],
  openGraph: {
    title: 'Mobile App Development | Vinerals Technologies',
    description: 'Reach your customers and team wherever they are with cross-platform mobile solutions. iOS, Android, and Progressive Web Apps.',
    url: 'https://vineralstechnologies.com/services/mobile-apps',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-mobile-apps.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Services - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development | Vinerals Technologies',
    description: 'Cross-platform mobile development for iOS, Android, and Progressive Web Apps. Built for SMEs.',
    images: ['https://vineralstechnologies.com/og-mobile-apps.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/mobile-apps',
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

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
