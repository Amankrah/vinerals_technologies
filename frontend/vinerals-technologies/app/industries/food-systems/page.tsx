'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import { Wheat } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function FoodSystemsPage() {
  const serviceDetails = {
    whatWeOffer: {
      title: 'Food Systems Solutions',
      items: [
        'Supply chain traceability platforms',
        'Farm management systems',
        'Nutrition and recipe platforms',
        'Food safety compliance tools',
        'Inventory and ordering systems',
        'Farmer marketplace platforms',
      ],
    },
    technologies: {
      title: 'AgTech & FoodTech Stack',
      items: [
        'IoT sensor integration (temperature, humidity)',
        'Blockchain for traceability (optional)',
        'GIS mapping and geospatial data',
        'Mobile-first for field work',
        'Barcode/QR code scanning',
        'API integrations (distributors, retailers)',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Real-time tracking dashboards',
        'Mobile apps for field use',
        'Compliance reporting',
        'Data export for audits',
        'Farmer/supplier training',
        'Integration with existing systems',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Supply Chain Mapping',
      subtitle: 'Week 1-2',
      description: 'We map your current supply chain, from farm to fork, identifying data gaps and traceability requirements.',
    },
    {
      number: 2,
      title: 'System Design',
      subtitle: 'Week 3',
      description: 'Design data models for crops, batches, suppliers, and logistics that match your operational reality.',
    },
    {
      number: 3,
      title: 'Field Testing',
      subtitle: 'Weeks 4-6',
      description: 'Pilot with a subset of farmers or suppliers to validate usability in real-world conditions.',
    },
    {
      number: 4,
      title: 'Scale & Support',
      subtitle: 'Ongoing',
      description: 'Roll out to full network with ongoing support for farmers, distributors, and end customers.',
    },
  ] as const;

  return (
    <>
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Food & Agriculture Technology"
          title="Farm to Fork Visibility"
          description="Build supply chain transparency, support local food systems, and give farmers the tools they deserve."
          icon={<Wheat className="w-16 h-16" />}
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
              The Food Systems Challenge
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                The food industry runs on spreadsheets, phone calls, and paper invoices. When a
                food safety issue happens, tracing products back to the source takes days or weeks.
                Small farmers lack the tools to compete with industrial agriculture.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                We are building technology to fix this. Our team has worked with organic farms,
                food hubs, community kitchens, and sustainable food distributors. We understand
                the challenges of seasonality, perishability, and the complexity of agricultural supply chains.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                <strong>We believe technology should help small-scale food producers thrive</strong> -
                not just make big agribusiness more efficient.
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
              Real-World Food Systems Use Cases
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Supply Chain Traceability</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Track products from farm to consumer with batch codes, origin data, handling
                  records, and recall management for food safety compliance.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Regional organic vegetable cooperative traceability system
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Farm Management Software</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Crop planning, planting schedules, harvest tracking, labor management, and
                  field-level data collection for small to mid-size farms.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Multi-farm CSA management platform
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Farmer Marketplace Platforms</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Online ordering for wholesale buyers, direct-to-consumer sales, payment
                  processing, and logistics coordination for local food networks.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Regional food hub online marketplace
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Nutrition & Recipe Platforms</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Recipe databases, nutritional analysis, meal planning, allergen tracking,
                  and ingredient sourcing for food producers and institutions.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: School cafeteria nutrition tracking system
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
              Food Safety & Compliance
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Built for HACCP, GAP, and Organic Certification</h3>
              <p className="text-sm text-gray-700">
                We understand food safety standards and certification requirements. Our systems help you:
              </p>
            </motion.div>
            <motion.ul variants={staggerContainer} className="space-y-3 text-gray-700">
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>HACCP Compliance:</strong> Critical control points tracking, temperature logs, corrective actions</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Organic Certification:</strong> Input tracking, buffer zone management, audit trail documentation</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>GAP (Good Agricultural Practices):</strong> Worker hygiene, water testing, harvest protocols</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Recall Management:</strong> Rapid product location, batch isolation, customer notification</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Allergen Tracking:</strong> Ingredient sourcing, cross-contamination risk, labeling compliance</span>
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
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">Pricing</motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-900 mb-2">$45-120/hour</div>
                <div className="text-gray-600">AgTech and FoodTech projects</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Traceability System:</strong> $15,000 - $40,000 (batch tracking, QR codes, supplier portal)
                </p>
                <p>
                  <strong>Farm Management Platform:</strong> $25,000 - $60,000 (crop planning, harvest tracking, multi-farm)
                </p>
                <p>
                  <strong>Online Marketplace:</strong> $30,000 - $75,000 (ordering, payments, logistics, multi-vendor)
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  We offer discounted rates for cooperatives, non-profits, and small family farms.
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
