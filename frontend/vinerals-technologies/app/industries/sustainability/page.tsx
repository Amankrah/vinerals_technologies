'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const SUSTAINABILITY_FAQS = [
  {
    question: 'What is carbon footprint tracking and how does it work?',
    answer: 'Carbon footprint tracking measures greenhouse gas emissions from your operations, including direct emissions (Scope 1), energy use (Scope 2), and supply chain activities (Scope 3). Our software automates data collection from utility bills, fleet tracking, and supplier data to calculate emissions using standard methodologies like the GHG Protocol.',
  },
  {
    question: 'Can you help with ESG reporting for investors and stakeholders?',
    answer: 'Yes. We build ESG dashboards that track environmental, social, and governance metrics aligned with frameworks like GRI, SASB, and TCFD. Our systems generate reports for investors, annual sustainability reports, and CDP disclosures with audit-ready data trails.',
  },
  {
    question: 'Do you work with small businesses or only large corporations?',
    answer: 'We work with organizations of all sizes committed to sustainability. Through programs funded by Sustainable Development Technology Canada (SDTC) and Environment Canada, we make cleantech accessible to SMEs, startups, and social enterprises pursuing environmental goals.',
  },
  {
    question: 'How do circular economy platforms reduce waste?',
    answer: 'Circular economy platforms track material flows, identify reuse opportunities, connect waste streams to users who need those materials, and measure waste reduction impact. This helps businesses move from linear "take-make-dispose" models to circular systems where materials maintain value.',
  },
  {
    question: 'Can you integrate with renewable energy systems and IoT sensors?',
    answer: 'Absolutely. We integrate with solar monitoring systems, smart meters, environmental sensors, and building management systems to provide real-time tracking of energy generation, consumption, emissions, and environmental conditions for comprehensive sustainability monitoring.',
  },
];

export default function SustainabilityPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Industries', url: 'https://vineralstechnologies.com/industries' },
    { name: 'Sustainability & Cleantech', url: 'https://vineralstechnologies.com/industries/sustainability' },
  ]);
  const faqSchema = createFAQSchema(SUSTAINABILITY_FAQS);
  const serviceDetails = {
    whatWeOffer: {
      title: 'Sustainability Solutions',
      items: [
        'Carbon footprint tracking and reporting',
        'ESG (Environmental, Social, Governance) dashboards',
        'Circular economy and waste reduction platforms',
        'Environmental impact measurement',
        'Renewable energy monitoring',
        'Sustainability reporting automation',
      ],
    },
    technologies: {
      title: 'CleanTech Stack',
      items: [
        'IoT sensor integration (energy, waste, emissions)',
        'Geospatial data and mapping',
        'API integrations (utility data, emissions databases)',
        'Real-time monitoring dashboards',
        'Machine learning for predictions',
        'GHG Protocol and CDP reporting standards',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Automated data collection',
        'Real-time sustainability dashboards',
        'ESG reports for stakeholders',
        'Carbon accounting audit trail',
        'Public-facing impact pages',
        'Integration with existing systems',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Impact Assessment',
      subtitle: 'Week 1',
      description: 'We identify your key environmental metrics, data sources, and reporting requirements (GRI, CDP, TCFD, B Corp).',
    },
    {
      number: 2,
      title: 'Data Architecture',
      subtitle: 'Weeks 2-3',
      description: 'Design systems to collect, validate, and aggregate sustainability data from operations, supply chain, and third parties.',
    },
    {
      number: 3,
      title: 'Dashboard Development',
      subtitle: 'Weeks 4-8',
      description: 'Build real-time dashboards for internal teams and stakeholder-facing reports with visualization and storytelling.',
    },
    {
      number: 4,
      title: 'Continuous Improvement',
      subtitle: 'Ongoing',
      description: 'Set up automated reporting, anomaly detection, and goal tracking to drive ongoing sustainability improvements.',
    },
  ] as const;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Sustainability & CleanTech"
          title="Measure, Reduce, Report"
          description="Build climate accountability into your operations with real-time carbon tracking, ESG reporting, and environmental impact measurement."
          icon={<Leaf className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              The Sustainability Data Problem
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Organizations commit to net-zero targets, but most struggle to actually measure
                their carbon footprint. Data lives in spreadsheets, utility bills, and supplier
                estimates. Annual sustainability reports take months of manual work.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Investors, customers, and regulators are demanding real ESG data - not just
                greenwashing marketing. But existing sustainability software is either too expensive
                ($50K+ per year) or too generic to fit your operations.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                <strong>We build custom sustainability systems that fit your reality</strong> -
                whether you are a manufacturer tracking Scope 1-3 emissions, a real estate company
                monitoring building energy, or a retailer measuring supply chain impact.
              </motion.p>
            </div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              Real-World Sustainability Use Cases
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Carbon Footprint Tracking</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Automated carbon accounting across Scope 1, 2, and 3 emissions with energy data
                  imports, supplier emission factors, and GHG Protocol compliance.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Manufacturing company carbon accounting system
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">ESG Reporting Dashboards</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Centralized ESG data collection and reporting aligned with GRI, SASB, TCFD,
                  or B Corp standards for investors and stakeholders.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: B Corp ESG data management platform
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Circular Economy Platforms</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Material flow tracking, waste diversion measurement, product lifecycle
                  management, and reuse/recycling marketplaces.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Electronics refurbishment lifecycle tracker
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Renewable Energy Monitoring</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Real-time solar/wind production monitoring, energy storage optimization,
                  grid integration, and renewable energy credit (REC) tracking.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Community solar farm monitoring dashboard
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        <ServiceDetails {...serviceDetails} />

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Standards & Frameworks We Support
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Built for Climate Accountability</h3>
              <p className="text-sm text-gray-700">
                We understand sustainability reporting standards and can build systems aligned with:
              </p>
            </motion.div>
            <motion.ul variants={staggerContainer} className="space-y-3 text-gray-700">
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>GHG Protocol:</strong> Scope 1, 2, and 3 carbon accounting methodology</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>GRI Standards:</strong> Global Reporting Initiative sustainability reporting</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>CDP:</strong> Climate, water, and forests disclosure platform reporting</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>TCFD:</strong> Task Force on Climate-related Financial Disclosures</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>B Corp:</strong> B Impact Assessment tracking and evidence collection</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>SASB:</strong> Sustainability Accounting Standards Board materiality framework</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </Section>

        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">Engagement Models</motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidized Programs Available</div>
                <div className="text-gray-600">Mission-aligned funding for sustainability and ESG initiatives</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We offer different program tracks based on your organization&apos;s stage and eligibility. Through government programs and impact funding, we can provide subsidized sustainability technology development for qualifying organizations.
                </p>
                <p>
                  <strong>Common sustainability projects:</strong> Carbon tracking dashboards, ESG reporting platforms, circular economy systems, and environmental compliance tools—helping organizations measure and reduce their environmental impact.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Special eligibility for B Corps, certified social enterprises, and climate-focused non-profits. Contact us to discuss your project and determine program eligibility.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
