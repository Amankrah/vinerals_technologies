'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ServiceHero from '@/components/sections/ServiceHero';
import CTA from '@/components/sections/CTA';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Resources & Learning"
          title="Knowledge for SMEs & Non-Profits"
          description="Practical guides, honest insights, and real-world advice on custom software development, AI integration, and digital transformation."
          icon={<BookOpen className="w-16 h-16" />}
        />

        {/* Coming Soon Section */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-primary-100 rounded-full">
                <BookOpen className="w-12 h-12 text-primary-700" />
              </div>
              <h2 className="section-headline mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We are working on creating valuable resources to help you navigate custom software
                development, AI integration, and digital transformation for your organization.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="bg-gray-50 rounded-xl p-8 mb-8">
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-gray-900 mb-6">
                What We're Planning
              </motion.h3>
              <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 text-left">
                <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Blog & Insights</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>Transparent pricing insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>Build vs buy analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>Real project case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>AI implementation reality</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Step-by-Step Guides</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>Project planning frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>AI implementation roadmaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>Technology selection criteria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary-600 mt-1">•</span>
                      <span>Maintenance best practices</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Topics We'll Cover */}
            <motion.div variants={staggerContainer} className="mb-8">
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-gray-900 mb-6">
                Topics We'll Cover
              </motion.h3>
              <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 text-left">
                <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Custom Software</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Project planning & requirements</li>
                    <li>• Pricing & budget strategies</li>
                    <li>• Build vs buy decisions</li>
                    <li>• Technology stack selection</li>
                    <li>• Maintenance & support</li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">AI & Automation</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• AI implementation for SMEs</li>
                    <li>• Use case identification</li>
                    <li>• Data preparation & quality</li>
                    <li>• Realistic cost expectations</li>
                    <li>• Measuring AI ROI</li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Business Strategy</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Digital transformation</li>
                    <li>• Quebec funding programs</li>
                    <li>• Cooperative model benefits</li>
                    <li>• Social economy insights</li>
                    <li>• Technology partnerships</li>
                  </ul>
                </motion.div>
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
