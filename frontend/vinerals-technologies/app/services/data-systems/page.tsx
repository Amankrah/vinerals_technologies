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
  description: 'Turn your data into decisions. Database design, ETL pipelines, analytics dashboards, and business intelligence solutions for SMEs.',
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/data-systems',
  },
};

const serviceSchema = createServiceSchema({
  name: 'Data Systems & Analytics',
  description: 'Database design, ETL pipelines, analytics dashboards, and business intelligence solutions. Turn your data into actionable insights.',
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
      title: 'Data Audit',
      subtitle: 'Assessment',
      description: 'We assess your current data sources, quality issues, and reporting needs.',
    },
    {
      number: 2,
      title: 'Architecture Design',
      subtitle: 'Planning',
      description: 'Design schema, ETL flows, and dashboard mockups aligned with your business questions.',
    },
    {
      number: 3,
      title: 'Implementation',
      subtitle: 'Build',
      description: 'Build pipelines, set up databases, and create dashboards with real data.',
    },
    {
      number: 4,
      title: 'Optimization',
      subtitle: 'Continuous',
      description: 'Monitor performance, add new metrics, and iterate based on usage.',
    },
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Data Systems & Analytics"
          title="Turn Your Data Into Decisions"
          description="Stop drowning in spreadsheets. Get real-time insights with proper data infrastructure and beautiful dashboards."
          icon={<Database className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">
              Common Data Challenges We Solve
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Scattered Data Sources</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Your data lives in Shopify, QuickBooks, Google Sheets, and three different spreadsheets.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  → We centralize it into one source of truth
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Manual Reporting</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Someone spends hours every week copying data into reports.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  → We automate it with real-time dashboards
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Can&apos;t Answer Business Questions</h3>
                <p className="text-gray-700 text-sm mb-3">
                  &quot;What&apos;s our customer acquisition cost?&quot; takes days to figure out.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  → We build dashboards that answer them instantly
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Data Quality Issues</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Duplicate records, missing fields, inconsistent formatting.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  → We clean it up and prevent future issues
                </p>
              </div>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />

        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">
              Example Dashboards We Build
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Sales & Revenue Dashboard</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Daily/weekly/monthly revenue trends</li>
                  <li>• Customer acquisition cost (CAC) and lifetime value (LTV)</li>
                  <li>• Sales by product, region, or sales rep</li>
                  <li>• Conversion funnel visualization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Operations Dashboard</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Inventory levels and reorder alerts</li>
                  <li>• Order fulfillment metrics</li>
                  <li>• Staff productivity and capacity</li>
                  <li>• Cost per unit and margin tracking</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Marketing Dashboard</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Campaign performance (ROAS, CPA, conversions)</li>
                  <li>• Traffic sources and attribution</li>
                  <li>• Email engagement metrics</li>
                  <li>• Customer cohort analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Engagement Models</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidized Programs Available</div>
                <div className="text-gray-600">Mission-aligned funding makes data infrastructure accessible</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We offer different program tracks based on your organization&apos;s stage and eligibility. Through government programs and impact funding, we can provide subsidized data systems and analytics implementations for qualifying businesses.
                </p>
                <p>
                  <strong>Scalable approach:</strong> Start with a focused dashboard to prove value, then expand with ETL pipelines and data infrastructure as your needs grow.
                </p>
                <p>
                  <strong>Right-sized solutions:</strong> From simple dashboards to full BI systems—we match the solution to your actual needs and budget.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Contact us to discuss your data project and determine program eligibility.
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
