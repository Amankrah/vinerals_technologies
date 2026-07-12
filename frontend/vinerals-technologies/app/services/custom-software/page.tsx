import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import StructuredData, { createServiceSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Software Development Montreal | Vinerals Technologies',
  description: 'Bespoke web applications and business software made by hand for your exact needs. Full-stack development, full code ownership. Montréal-based, serving Canada.',
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/custom-software',
  },
};

export default function CustomSoftwarePage() {
  const serviceDetails = {
    whatWeOffer: {
      title: 'What We Build',
      items: [
        'Custom web applications tailored to your workflow',
        'Internal business tools and dashboards',
        'Client portals and customer-facing platforms',
        'Enterprise resource planning (ERP) systems',
        'Content management systems (CMS)',
        'API development and integrations',
      ],
    },
    technologies: {
      title: 'Technologies We Use',
      items: [
        'React, Next.js, TypeScript',
        'Node.js, Python, Go',
        'PostgreSQL, MongoDB, Redis',
        'AWS, Google Cloud, Vercel',
        'Docker, Kubernetes',
        'GraphQL, REST APIs',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Full source code ownership',
        'Comprehensive documentation',
        'Automated testing suite',
        'CI/CD pipeline setup',
        'Training for your team',
        'Ongoing support options',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      subtitle: 'Free',
      description: 'We sit with your team, walk the process end to end, and map the system that solves it. You leave with clarity, regardless of whether you hire us.',
    },
    {
      number: 2,
      title: 'Design & Planning',
      subtitle: 'Transparent',
      description: 'Wireframes, a technical spec, and a timeline with the milestones drawn in. Nothing hidden, nothing waved off as “we’ll figure it out later.”',
    },
    {
      number: 3,
      title: 'Development',
      subtitle: 'Iterative',
      description: 'Two-week sprints with a working demo at the end of each one. You see software, not slides.',
    },
    {
      number: 4,
      title: 'Deployment',
      subtitle: 'Ongoing',
      description: 'Hosting set up, the launch shipped, your team trained, the docs handed over. We stay reachable for the questions that show up at week three.',
    },
  ];

  const serviceSchema = createServiceSchema({
    name: 'Custom Software Development',
    description: 'Bespoke web applications and business software built for your exact needs. Full-stack development with full code ownership.',
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Services', url: 'https://vineralstechnologies.com/services' },
    { name: 'Custom Software Development', url: 'https://vineralstechnologies.com/services/custom-software' },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Custom Software Development"
          title="Software shaped around how you actually work."
          description="No compromises. No feature bloat. No vendor lock-in. We build the thing your business needs and hand you the keys when it’s done."
          icon={<Code2 className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline mb-6">
              Why custom, instead of off the shelf?
            </h2>
            <div className="space-y-4 text-left">
              <p className="text-gray-700 leading-relaxed">
                Off-the-shelf software makes your business bend around someone else’s product. Custom software bends around you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A specialised CRM, an inventory system that finally matches reality, a client portal with the workflow your team has been hacking around in spreadsheets. We build it the way you actually need it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>And the part nobody else offers:</strong> you own everything. No monthly SaaS fees that creep up every renewal. No vendor sitting on top of your data. No forced upgrade you didn’t ask for.
              </p>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />
        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Engagement models</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidised tracks available</div>
                <div className="text-gray-600">Mission-aligned funding brings quality development inside reach.</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We run several tracks depending on your stage and eligibility. Government programmes, foundations, and donor support fund subsidised engagements for qualifying businesses.
                </p>
                <p>
                  <strong>Pick the shape that fits.</strong> Fixed-price commissions with milestone payments, or time and materials with fully transparent tracking. Whatever lines up with how your team buys software.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Book a consultation. We&apos;ll tell you within a week which track applies, or that none does.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
