'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import IndustryHero from '@/components/sections/IndustryHero';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { Users } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Industries We Serve"
          title="Deep Industry Expertise That Makes a Difference"
          highlightedWord="Makes a Difference"
          description="We don't just build software—we understand your industry's challenges, regulations, and workflows. Our team brings real-world experience to every project."
          icon={<Users className="w-8 h-8" />}
          primaryCTA={{ label: 'Find Your Industry', href: '#industries' }}
          secondaryCTA={{ label: 'See Case Studies', href: '/work' }}
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
              Why Industry Expertise Matters
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Generic software agencies treat every project the same. They learn your industry
                on your dime, make assumptions that don&apos;t fit your reality, and deliver solutions
                that miss the mark.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                We&apos;re different. Our team includes developers who have worked in healthcare clinics,
                food production facilities, environmental research labs, and cooperative organizations.
                We speak your language. We understand your regulations. We anticipate your edge cases.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                <strong>The result?</strong> Faster development, fewer revisions, and software that
                actually solves the problems you face every day.
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
              Cross-Industry Technical Capabilities
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Compliance & Security</h3>
                <p className="text-sm text-gray-700">
                  HIPAA/PHIPA, GDPR, SOC 2, food safety regulations, environmental reporting standards
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Data Integration</h3>
                <p className="text-sm text-gray-700">
                  EMR systems, ERP platforms, IoT sensors, supply chain APIs, environmental databases
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Mobile & Field Work</h3>
                <p className="text-sm text-gray-700">
                  Offline-first apps for healthcare workers, field technicians, and remote teams
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
