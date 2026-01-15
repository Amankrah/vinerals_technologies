import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Funders & Foundations | Technology Cooperative Funding Partners | CIHR, ISED, SDTC',
  description: 'Technology development partner for funders, foundations, and grant programs across Canada. Vinerals Technologies solidarity cooperative delivers accessible technology through CIHR digital health funding, ISED innovation programs, SDTC cleantech grants, MAPAQ agtech initiatives, and social innovation funds. Track impact, create quality jobs, and support social enterprise through mission-aligned technology partnerships.',
  keywords: [
    'CIHR technology funding partners',
    'ISED innovation program participants',
    'SDTC funded cooperative',
    'MAPAQ agtech funding recipients',
    'technology funding programs canada',
    'social innovation fund technology',
    'foundation technology grants',
    'cooperative funding opportunities',
    'accessible technology funding',
    'impact investment technology',
    'social enterprise technology grants',
    'community futures technology',
  ],
  openGraph: {
    title: 'For Funders & Foundations | Vinerals Technologies',
    description: 'Partner with a technology cooperative that delivers measurable social impact. Supporting CIHR, ISED, SDTC, MAPAQ, and foundation-funded accessible technology development across Canada.',
    url: 'https://vineralstechnologies.com/partners/funders',
    type: 'website',
    images: [
      {
        url: 'https://vineralstechnologies.com/og-partners-funders.jpg',
        width: 1200,
        height: 630,
        alt: 'For Funders & Foundations - Vinerals Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Funders & Foundations | Vinerals Technologies',
    description: 'Technology cooperative delivering accessible innovation through CIHR, ISED, SDTC, MAPAQ, and foundation partnerships.',
    images: ['https://vineralstechnologies.com/og-partners-funders.jpg'],
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/partners/funders',
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

export default function FundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
