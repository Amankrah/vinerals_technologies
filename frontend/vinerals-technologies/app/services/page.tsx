import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import CTA from '@/components/sections/CTA';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Code2 } from 'lucide-react';
import { PROCESS_STEPS, ENGAGEMENT_MODELS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Software Development Services | Custom Apps, AI, Mobile',
  description: 'Full-stack software development services for SMEs. Custom applications, AI integration, mobile apps, and data systems. Made accessible through mission-aligned funding.',
  keywords: [
    'software development montreal',
    'custom software development',
    'ai integration services',
    'mobile app development',
    'data systems',
    'software development canada',
    'enterprise software sme',
    'affordable software development',
  ],
  openGraph: {
    title: 'Software Development Services | Vinerals Technologies',
    description: 'Enterprise-quality software development made accessible for SMEs. Custom apps, AI integration, mobile development, and data systems.',
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
    answer: 'Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while more complex systems can take 3-6 months. We provide detailed timeline estimates during the discovery phase.',
  },
  {
    question: 'Do you work with clients outside Montreal?',
    answer: 'Yes! While we\'re based in Montreal, we work with clients across Canada and internationally. We\'re experienced with remote collaboration and have systems in place for effective communication.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the right stack for each project based on your specific needs.',
  },
  {
    question: 'Will I own the code you write?',
    answer: 'Absolutely. You own 100% of the code, designs, and all intellectual property we create for your project. No vendor lock-in, no proprietary systems. We provide full documentation and source code.',
  },
  {
    question: 'What\'s your minimum project size?',
    answer: 'We typically work on projects starting around $5,000, though this can vary. We\'re happy to discuss smaller scopes or phase projects to fit your budget. Contact us to discuss your specific needs.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer maintenance and support packages for all projects. This includes bug fixes, updates, and new feature development. We can also train your team to manage the system themselves.',
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
          title="Software Development That Fits Your Budget"
          highlightedWord="Fits Your Budget"
          description="Enterprise-quality custom software, AI integration, and digital transformation—priced for growing businesses."
          icon={<Code2 className="w-8 h-8" />}
          primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
          secondaryCTA={{ label: 'See Our Work', href: '/work' }}
        />
        <ServicesGrid />
        <ProcessSection
          title="How We Work"
          description="Our transparent, collaborative process ensures you're involved every step of the way."
          steps={PROCESS_STEPS}
        />
        <PricingSection
          title="Engagement Models"
          description="We offer different program tracks to ensure quality development is accessible to organizations at all stages."
          tiers={ENGAGEMENT_MODELS}
        />
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about our services, process, and engagement models."
          faqs={SERVICE_FAQS}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
