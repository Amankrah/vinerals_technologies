import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vineralstechnologies.com'),
  title: {
    default: 'Vinerals Technologies | Enterprise AI & Software Made Accessible',
    template: '%s | Vinerals Technologies'
  },
  description: 'Montreal-based solidarity cooperative building custom software and AI solutions for small and medium businesses. Mission-aligned funding makes quality development accessible.',
  keywords: ['software development montreal', 'ai integration sme', 'custom software quebec', 'subsidized software development', 'social enterprise technology', 'solidarity cooperative'],
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
    title: 'Vinerals Technologies | Enterprise AI & Software Made Accessible',
    description: 'Montreal-based solidarity cooperative building custom software and AI solutions. Mission-aligned funding makes quality development accessible to growing businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinerals Technologies - Enterprise AI & Software Made Accessible',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinerals Technologies | Enterprise AI & Software Made Accessible',
    description: 'Montreal-based solidarity cooperative building custom software and AI solutions. Mission-aligned funding makes quality development accessible.',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
