import type { Metadata } from "next";
import { Cormorant_Garamond, Spectral, DM_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  preload: true,
  adjustFontFallback: true,
});

const spectral = Spectral({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  preload: true,
  adjustFontFallback: true,
});

const dmMono = DM_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vineralstechnologies.com'),
  title: {
    default: 'Vinerals Technologies | Software Made by Hand for SMEs',
    template: '%s | Vinerals Technologies'
  },
  description: 'Montréal cooperative crafting custom software and AI by hand for SMEs. Senior engineering, owned code, honest counsel — at terms you can plan around.',
  keywords: [
    'software made by hand',
    'custom software montreal',
    'handcrafted software development',
    'software development montreal',
    'ai integration sme',
    'custom software quebec',
    'solidarity cooperative software',
    'senior software engineers montreal',
  ],
  authors: [{ name: 'Vinerals Technologies' }],
  creator: 'Vinerals Technologies',
  publisher: 'Vinerals Technologies',
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
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: 'fr_CA',
    url: 'https://vineralstechnologies.com',
    siteName: 'Vinerals Technologies',
    title: 'Vinerals Technologies | Software Made by Hand for SMEs',
    description: 'Custom software and AI, made by hand in Montréal. Senior engineering for growing businesses — craft, ownership, and terms you can plan around.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies — Software, made by hand, for SMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinerals Technologies | Software Made by Hand for SMEs',
    description: 'Custom software and AI, made by hand in Montréal. Senior engineering for growing businesses.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spectral.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
