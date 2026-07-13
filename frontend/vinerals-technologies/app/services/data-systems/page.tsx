import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import StructuredData, { createServiceSchema } from '@/components/shared/StructuredData';
import { Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Systems & Analytics | Business Intelligence | Vinerals Technologies',
  description: 'Databases, ETL pipelines, and dashboards that turn scattered records into numbers your team can trust. Built for SMEs.',
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/data-systems',
  },
};

const serviceSchema = createServiceSchema({
  name: 'Data Systems & Analytics',
  description: 'Database design, ETL pipelines, analytics dashboards, and reporting. Built so your team can answer questions without a half-day spreadsheet hunt.',
});

export default function DataSystemsPage() {
  const serviceDetails = {
    whatWeOffer: {
      title: 'Data Solutions',
      items: [
        'Database design and optimization',
        'ETL pipelines and data integration',
        'Real-time analytics dashboards',
        'Business intelligence (BI) systems',
        'Data warehouse architecture',
        'Reporting and visualization',
      ],
    },
    technologies: {
      title: 'Data Technologies',
      items: [
        'PostgreSQL, MySQL, MongoDB',
        'Snowflake, BigQuery, Redshift',
        'Apache Airflow, Prefect',
        'dbt (data build tool)',
        'Tableau, Metabase, Grafana',
        'Python (Pandas, NumPy)',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Clean, normalized data architecture',
        'Automated data pipelines',
        'Interactive dashboards',
        'Scheduled reports',
        'Data quality monitoring',
        'Documentation and training',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Data audit',
      subtitle: 'Assessment',
      description: 'We map your sources, name the quality problems, and write down the questions you need answered.',
    },
    {
      number: 2,
      title: 'Architecture design',
      subtitle: 'Planning',
      description: 'Schema, pipelines, and dashboard sketches lined up against those questions, not a vendor feature list.',
    },
    {
      number: 3,
      title: 'Implementation',
      subtitle: 'Build',
      description: 'Pipelines connected, databases in place, dashboards on real data instead of fake demo rows.',
    },
    {
      number: 4,
      title: 'Tuning',
      subtitle: 'Ongoing',
      description: 'We watch what gets used, add metrics that earn their place, and drop the ones that do not.',
    },
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Data Systems & Analytics"
          title="Turn your data into decisions you can defend."
          description="Pipelines underneath, dashboards on top, and reporting that takes minutes instead of half a day."
          icon={<Database className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">
              The data problems we keep seeing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Data scattered across tools</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Shopify, QuickBooks, a Google Sheet, and three files on someone&apos;s desktop. Nobody can agree on the number.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  What we do: pull it into one source of truth.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Manual reporting</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Someone burns half a day every week copy-pasting numbers into a report nobody reads twice.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  What we do: automate it with live dashboards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Questions that take too long</h3>
                <p className="text-gray-700 text-sm mb-3">
                  &quot;What is our customer acquisition cost?&quot; should take minutes. Right now it takes two days and three apologies.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  What we do: build the view that answers it on the spot.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Data nobody trusts</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Duplicate records, missing fields, three date formats. The numbers always ship with a caveat.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  What we do: clean it at the source so the mess does not return.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />

        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">
              Dashboards we build often
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Sales & revenue</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Revenue trends, day, week, month</li>
                  <li>• Customer acquisition cost and lifetime value</li>
                  <li>• Sales broken down by product, region, or rep</li>
                  <li>• Conversion funnel, end to end</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Operations</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Inventory levels with reorder alerts</li>
                  <li>• Order fulfillment metrics</li>
                  <li>• Team capacity and productivity</li>
                  <li>• Cost per unit and margin tracking</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Marketing</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Campaign performance: ROAS, CPA, conversions</li>
                  <li>• Traffic sources and attribution</li>
                  <li>• Email engagement</li>
                  <li>• Customer cohort analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Engagement models</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidised tracks available</div>
                <div className="text-gray-600">Mission-aligned funding can apply for qualifying data work.</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We run several tracks depending on your stage and eligibility. Government programmes and impact funding can cover part of qualifying builds.
                </p>
                <p>
                  <strong>Start with one clear win.</strong> A focused dashboard that proves value, then pipelines and warehouse work when you are ready.
                </p>
                <p>
                  <strong>Sized to the problem.</strong> One report or a full BI stack. We match the build to the questions you need answered.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Book a consultation. We will tell you within a week if a programme fits.
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
