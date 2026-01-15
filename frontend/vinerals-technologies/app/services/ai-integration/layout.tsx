import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Integration Services Montreal | Machine Learning for SMEs',
  description: 'Practical AI and machine learning integration for businesses. Document processing, chatbots, automation, and predictive analytics with real ROI. Serving Montreal, Quebec, and all of Canada.',
  keywords: [
    'ai integration montreal',
    'machine learning services',
    'ai for sme',
    'business automation ai',
    'chatbot development',
    'document processing ai',
    'predictive analytics',
    'llm integration',
    'artificial intelligence consulting',
    'ai transformation canada',
  ],
  openGraph: {
    title: 'AI & Machine Learning Integration | Vinerals Technologies',
    description: 'Put AI to work in your business with practical, ROI-focused implementations. From automation to analytics, we make AI accessible for SMEs.',
    url: 'https://vineralstechnologies.com/services/ai-integration',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-ai-integration.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Integration Services - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integration Services | Vinerals Technologies',
    description: 'Practical AI and machine learning integration for businesses. Document processing, chatbots, automation with real ROI.',
    images: ['https://vineralstechnologies.com/og-ai-integration.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/ai-integration',
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

export default function AIIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
