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
    'Custom software, AI, mobile, and data systems — made by hand in Montréal. Senior engineering for SMEs, code you own, at terms you can plan around.',
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
      'Custom apps, AI, mobile, and data systems — made by hand. Senior engineering for SMEs who want craft, ownership, and clarity.',
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
    answer: 'It depends on scope. A focused web application usually lands in 4 to 8 weeks. A heavier system runs 3 to 6 months. You leave the discovery call with a real timeline, not a guess.',
  },
  {
    question: 'Do you work with clients outside Montréal?',
    answer: 'Yes. We’re based in Montréal but work with clients across Canada and beyond. Remote collaboration is normal for us, and we’ve built the communication rhythms that make it work.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'A modern, boring-on-purpose stack. React, Next.js, Node.js, Python, PostgreSQL, and the major clouds (AWS, GCP, Vercel). The right tool gets chosen for the job, not for our resume.',
  },
  {
    question: 'Will I own the code you write?',
    answer: 'Yes. You own 100% of the code, the designs, and any IP we produce for the project. No vendor lock-in, no proprietary systems. Full source, full documentation, full handover.',
  },
  {
    question: 'What’s your minimum project size?',
    answer: 'Projects usually start around $5,000. We’re also happy to phase larger work into smaller commitments. Talk to us about scope and we’ll be straight about whether it fits.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes. We offer maintenance and support after launch: bug fixes, updates, new features. We can also train your team to take it on themselves once they’re ready.',
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
          description="Custom software, AI, mobile, and data systems — made by hand. Same calibre larger firms pay full freight for, at terms a growing business can plan around."
          image="/service-software.jpg"
          imageAlt="Hands typing on a laptop at a wooden workshop desk"
          primaryCTA={{ label: 'Book a consultation', href: '/contact' }}
          secondaryCTA={{ label: 'See our work', href: '/work' }}
        />
        <ServicesGrid />
        <ProcessSection
          title="How we work"
          description="A transparent process that keeps you in the loop without burying you in status updates."
          steps={PROCESS_STEPS}
        />
        <PricingSection
          title="Engagement models"
          description="A few tracks to choose from, so the shape of the engagement matches your stage."
          tiers={ENGAGEMENT_MODELS}
        />
        <FaqAccordion
          title="Questions you’re probably already asking."
          description="The ones that come up on the first call, answered here so you don’t have to."
          faqs={SERVICE_FAQS}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
