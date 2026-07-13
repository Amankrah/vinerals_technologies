import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import dynamic from 'next/dynamic';

const FaqAccordion = dynamic(() => import('@/components/sections/FaqAccordion'));
import CTA from '@/components/sections/CTA';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { PROCESS_STEPS, ENGAGEMENT_MODELS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Software Development Services | Made by Hand',
  description:
    'Custom software, AI, mobile, and data systems made by hand in Montréal. Senior engineering for SMEs. You own the code. Terms you can plan around.',
  keywords: [
    'software made by hand',
    'custom software development montreal',
    'handcrafted software',
    'ai integration services',
    'mobile app development',
    'data systems',
    'software development canada',
    'senior software engineers montreal',
  ],
  openGraph: {
    title: 'Software Development Services | Vinerals Technologies',
    description:
      'Custom software, AI, mobile, and data systems made by hand. Senior engineering, clear ownership, and honest counsel for SMEs.',
    url: 'https://vineralstechnologies.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vineralstechnologies.com/services',
  },
};

const SERVICE_FAQS = [
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A focused web application usually lands in 4 to 8 weeks. A heavier system runs 3 to 6 months. You leave discovery with a real timeline, not a guess.',
  },
  {
    question: 'Do you work with clients outside Montréal?',
    answer:
      'Yes. We are based in Montréal and work with clients across Canada and beyond. Remote collaboration is normal for us, and we have the rhythms that make it work.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'A modern stack we know well: React, Next.js, Node.js, Python, PostgreSQL, and the major clouds (AWS, GCP, Vercel). We pick the tool for the job, not for our résumé.',
  },
  {
    question: 'Will I own the code you write?',
    answer:
      'Yes. You own the code, the designs, and the IP we produce for the project. Full source, documentation, and handover. No proprietary platform sitting between you and your system.',
  },
  {
    question: 'What is your minimum project size?',
    answer:
      'Projects usually start around CAD $5,000. We can also phase larger work into smaller commitments. Tell us the scope and we will say plainly whether it fits.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. After launch we can handle bug fixes, updates, and new features. We can also train your team to take ownership once they are ready.',
  },
];

export default function ServicesPage() {
  // Breadcrumb schema for SEO
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Services', url: 'https://vineralstechnologies.com/services' },
  ]);

  // FAQ schema for rich results
  const faqSchema = createFAQSchema(SERVICE_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Our Services"
          title="Software you can plan around."
          highlightedWord="plan around."
          description="Custom software, AI, mobile, and data systems. Senior people, clear scope, and code you own when the work is done."
          image="/service-software.jpg"
          imageAlt="Hands typing on a laptop at a wooden workshop desk"
          primaryCTA={{ label: 'Book a consultation', href: '/contact' }}
          secondaryCTA={{ label: 'See our work', href: '/work' }}
        />
        <ServicesGrid />
        <ProcessSection
          title="How we work"
          description="Four steps from first conversation to handover. You stay in the loop without drowning in status updates."
          steps={PROCESS_STEPS}
        />
        <PricingSection
          title="Engagement models"
          description="A few tracks, so the shape of the work matches your stage and how you buy."
          tiers={ENGAGEMENT_MODELS}
        />
        <FaqAccordion
          title="Questions that come up first."
          description="The ones people ask on the first call, answered here."
          faqs={SERVICE_FAQS}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
