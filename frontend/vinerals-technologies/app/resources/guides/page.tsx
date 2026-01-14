'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ServiceHero from '@/components/sections/ServiceHero';
import CTA from '@/components/sections/CTA';
import { FileText, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Step-by-Step Guides"
          title="Coming Soon"
          description="Comprehensive guides walking you through planning, implementing, and maintaining custom software and AI solutions for your organization."
          icon={<FileText className="w-16 h-16" />}
        />

        {/* Coming Soon Content */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            <motion.div variants={staggerContainer} className="text-center mb-12">
              <motion.h2 variants={fadeInUp} className="section-headline mb-6">
                Guides Coming Soon
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 leading-relaxed">
                We are creating comprehensive, actionable guides to help you successfully plan and
                implement technology projects in your organization.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="bg-gray-50 rounded-xl p-8">
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What to Expect
              </motion.h3>
              <motion.div variants={staggerContainer} className="space-y-4 text-gray-700">
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Project Planning Frameworks:</strong> Step-by-step processes for
                    scoping and planning custom software projects
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>AI Implementation Roadmaps:</strong> Practical guides for identifying
                    AI opportunities and implementing solutions
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Technology Selection Criteria:</strong> How to choose the right tech
                    stack for your organization's needs
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Maintenance Best Practices:</strong> Strategies for keeping your software
                    running smoothly after launch
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1 text-xl">✓</span>
                  <div>
                    <strong>Vendor Selection Guides:</strong> Questions to ask and red flags to watch
                    for when choosing a development partner
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Get Help Now */}
        <Section background="gray" paddingY="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-gray-900 mb-3">
              Need Help Now?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-700 mb-6">
              While we're working on these guides, we're available to help you directly with your
              custom software or AI project.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                Talk to an Expert
              </Link>
            </motion.div>
          </motion.div>
        </Section>

        {/* Newsletter Sign-up */}
        <Section background="primary" paddingY="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Notified When We Launch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-100 mb-8 leading-relaxed">
              Be the first to access new guides and resources. No spam, unsubscribe anytime.
            </motion.p>
            <motion.form variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-500 text-gray-900 rounded-lg font-semibold hover:bg-accent-400 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-5 h-5" />
                Notify Me
              </button>
            </motion.form>
            <motion.p variants={fadeInUp} className="text-xs text-primary-100">
              We respect your privacy. Read our{' '}
              <a href="/legal/privacy" className="underline hover:text-white transition-colors">
                privacy policy
              </a>
              .
            </motion.p>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
