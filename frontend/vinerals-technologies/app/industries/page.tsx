'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import IndustryHero from '@/components/sections/IndustryHero';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { Users } from 'lucide-react';

const INDUSTRIES_FAQS = [
  {
    question: 'Why does industry expertise matter for software development?',
    answer: 'Because we know your regulations, your workflows, and your edge cases from day one. That means less ramp-up, fewer revisions, and software that solves the problem you actually have. A generic shop learns your industry on your dime. We come in with real working experience from clinics, food production sites, environmental research labs, and cooperative organisations.',
  },
  {
    question: 'Do you only work with the industries listed on this site?',
    answer: 'We specialise in healthcare, food systems, sustainability, and non-profits, but we also work with other mission-driven organisations. If your sector has heavy compliance, complex workflows, or social impact goals, our experience usually carries over. Talk to us about your specifics.',
  },
  {
    question: 'Can you handle industry-specific compliance and regulations?',
    answer: 'Yes. Compliance gets built in on day one, not bolted on the week before audit. HIPAA and PHIPA for healthcare. HACCP and food safety for agriculture. Environmental reporting for cleantech. Grant reporting for non-profits. It’s foundational to the way we work in these sectors.',
  },
  {
    question: 'What makes your team qualified for these industries?',
    answer: 'Our developers have worked inside these industries, not just on software for them. We have team members with healthcare experience, food systems background, sustainability research credentials, and cooperative governance under their belt. That working knowledge shapes every technical call we make.',
  },
  {
    question: 'Are there subsidised tracks for industry-specific projects?',
    answer: 'Yes. Through government programmes (CIHR, ISED, SDTC, MAPAQ), foundation funding, and social innovation grants, we offer subsidised builds for qualifying organisations in our focus sectors. The track depends on your stage, mission alignment, and project scope.',
  },
];

export default function IndustriesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Industries', url: 'https://vineralstechnologies.com/industries' },
  ]);
  const faqSchema = createFAQSchema(INDUSTRIES_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Industries We Serve"
          title="Sector experience that makes the work land."
          highlightedWord="land."
          description="We don’t just write software. We know your regulations, the shape of your data, and the workflows your team actually runs. Real working experience, baked into every project."
          icon={<Users className="w-8 h-8" />}
          primaryCTA={{ label: 'Find your sector', href: '#industries' }}
          secondaryCTA={{ label: 'See case studies', href: '/work' }}
        />

        {/* Why Industry Expertise Matters */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Why sector experience matters
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                A generic shop treats every project the same. They learn your industry on your dime,
                make assumptions that don’t fit your reality, and hand over software that misses the
                point.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Our team includes developers who have worked inside clinics, food production sites,
                environmental research labs, and cooperative organisations. We know the vocabulary.
                We know the regulations. We see the edge cases before they bite.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                <strong>The result.</strong> Less ramp-up, fewer revisions, and software that actually
                solves the problem you face every day.
              </motion.p>
            </div>
          </motion.div>
        </Section>

        {/* Industries Grid */}
        <IndustriesGrid />

        {/* Cross-Industry Capabilities */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-12 text-center">
              The cross-sector muscles
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Compliance & security</h3>
                <p className="text-sm text-gray-700">
                  HIPAA, PHIPA, GDPR, SOC 2, food safety regulations, and environmental reporting standards.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Data integration</h3>
                <p className="text-sm text-gray-700">
                  EMRs, ERPs, IoT sensors, supply-chain APIs, and the environmental databases nobody else wants to touch.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Mobile & field work</h3>
                <p className="text-sm text-gray-700">
                  Offline-first apps for healthcare workers, field technicians, and any team that doesn’t live at a desk.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
