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
  description: 'Bespoke web applications and business software built for your exact needs. Full-stack development from $40/hour. Montreal-based, serving all of Canada.',
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
      description: 'Deep dive into your business processes, pain points, and requirements. We map out the complete system architecture.',
    },
    {
      number: 2,
      title: 'Design & Planning',
      subtitle: 'Transparent',
      description: 'UI/UX wireframes, technical specification, and project timeline with clear milestones.',
    },
    {
      number: 3,
      title: 'Development',
      subtitle: 'Iterative',
      description: 'Agile sprints with weekly demos. You see working features, not just code.',
    },
    {
      number: 4,
      title: 'Deployment',
      subtitle: 'Ongoing',
      description: 'We handle hosting setup, deployment, team training, and documentation handoff.',
    },
  ];

  const serviceSchema = createServiceSchema({
    name: 'Custom Software Development',
    description: 'Bespoke web applications and business software built for your exact needs. Full-stack development with full code ownership.',
    price: '40.00',
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
          title="Software Built for Your Business"
          description="No compromises, no feature bloat, no vendor lock-in. Build exactly what your business needs with full code ownership."
          icon={<Code2 className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline mb-6">
              Why Custom Software?
            </h2>
            <div className="space-y-4 text-left">
              <p className="text-gray-700 leading-relaxed">
                Off-the-shelf software forces you to adapt your business to the tool. Custom software adapts to your business.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you need a specialized CRM, a unique inventory system, or a customer portal with specific workflows - we build it exactly as you envision it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>And the best part?</strong> You own everything. No monthly SaaS fees that increase every year. No vendor controlling your data. No forced upgrades.
              </p>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />
        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Pricing</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-900 mb-2">$40-100/hour</div>
                <div className="text-gray-600">Based on project complexity and scope</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Fixed-price projects:</strong> For well-defined scopes, we offer fixed pricing with milestone-based payments.
                </p>
                <p>
                  <strong>Time & materials:</strong> For evolving requirements, we work hourly with weekly caps and transparent tracking.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Average project: $15,000 - $75,000 | Timeline: 6-16 weeks
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
