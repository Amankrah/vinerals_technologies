'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import MissionHero from '@/components/sections/MissionHero';
import CTA from '@/components/sections/CTA';
import { Heart, Target, Compass, Users, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <MissionHero
          badge="Our Mission & Values"
          title="Making Technology Accessible to Every Business"
          highlightedWord="Accessible"
          description="We exist to make transformative technology accessible to every business, regardless of size or budget."
          icon={<Heart className="w-8 h-8" />}
          primaryCTA={{ label: 'Our Values', href: '#core-values' }}
          secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
        />

        {/* Mission Statement */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Our Mission
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-xl text-gray-900 font-medium leading-relaxed mb-6">
                We build high-quality software and AI solutions for small and medium enterprises
                who deserve the same technology as large corporations - at prices they can afford.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By operating as a solidarity cooperative rather than a traditional for-profit agency,
                we can reinvest in our mission instead of maximizing shareholder returns. Combined with
                mission-aligned funding from government programs and impact funders, we can offer
                subsidized programs that make enterprise-quality development accessible while maintaining
                fair wages and high standards.
              </p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Vision */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              Our Vision
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 leading-relaxed">
              A future where every business, regardless of size, has access to transformative technology.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-700 mt-6 leading-relaxed">
              We envision a world where cost is no longer a barrier to digital transformation.
              Where a community health clinic can have the same quality patient portal as a
              hospital network. Where a family farm can compete with agribusiness through
              technology. Where social enterprises have the tools to maximize their impact.
            </motion.p>
          </motion.div>
        </Section>

        {/* Why We Exist */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              Why We Exist
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">The Problem We Saw</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quality custom software requires significant investment—often $50,000-150,000+ for
                  basic applications. For most growing businesses, this level of investment is simply
                  out of reach. This creates a two-tier economy where large corporations get efficiency
                  and innovation, while SMEs are stuck with inadequate off-the-shelf solutions or manual
                  processes.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">The Gap in the Market</h3>
                <p className="text-gray-700 leading-relaxed">
                  We noticed that mission-driven organizations - healthcare clinics, sustainable food
                  producers, environmental groups, social enterprises - needed custom technology the
                  most but could afford it the least. Meanwhile, skilled developers wanted to work on
                  meaningful projects but were stuck building vanity apps for startups or optimizing
                  ad revenue for tech giants.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  By structuring as a solidarity cooperative, we eliminate the pressure to maximize
                  profits for external investors. We can charge what is fair rather than what the
                  market will bear. We can work with clients who are mission-aligned rather than
                  chasing the highest bidder. And we can build technology that genuinely solves
                  problems rather than just checking feature boxes.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Core Values */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-12 text-center">
              Our Core Values
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Accessibility First</h3>
                  <p className="text-gray-700">
                    Technology should be accessible to everyone, not just those with Fortune 500
                    budgets. We price our services to be within reach of SMEs, non-profits, and
                    social enterprises while maintaining quality and fair wages.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Radical Transparency</h3>
                  <p className="text-gray-700">
                    No hidden fees, no scope creep surprises, no vendor lock-in tactics. We publish
                    our rates openly, explain our decisions clearly, and ensure you own everything
                    we build. You deserve to know exactly what you are paying for.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">True Partnership</h3>
                  <p className="text-gray-700">
                    We are not a vendor extracting maximum value - we are partners invested in your
                    success. We provide honest advice even when it costs us revenue. We say no to
                    projects that are not a good fit. We build relationships, not just software.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    Technology evolves rapidly and so do we. We invest in learning, adopt best
                    practices, and constantly refine our processes. We bring the latest tools and
                    techniques to every project without the consultant markup.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Impact Over Revenue</h3>
                  <p className="text-gray-700">
                    We measure success by the impact our technology creates - time saved, costs
                    reduced, communities served - not just revenue generated. If a project does not
                    create real value for you, we will tell you.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Social Economy Commitment</h3>
                  <p className="text-gray-700">
                    As a solidarity cooperative, we are committed to the social economy ecosystem.
                    We prioritize working with mission-driven organizations, offer subsidized programs
                    for non-profits and co-ops, and contribute to building a more equitable economy.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Impact Goals */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              Our Impact Goals
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">50+</div>
                <h3 className="font-semibold text-gray-900 mb-2">SMEs Empowered</h3>
                <p className="text-sm text-gray-700">
                  Help 50+ small and medium enterprises access transformative technology by 2027
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">$2M+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Client Savings</h3>
                <p className="text-sm text-gray-700">
                  Save clients $2M+ in development costs vs traditional agencies through our
                  cooperative model
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">10+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Jobs Created</h3>
                <p className="text-sm text-gray-700">
                  Create 10+ well-paid technology jobs in Montreal&apos;s social economy by 2027
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">20+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Impact Projects</h3>
                <p className="text-sm text-gray-700">
                  Complete 20+ projects for healthcare, sustainability, food systems, and social
                  enterprise sectors
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* How We Measure Success */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              How We Measure Success
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Unlike traditional agencies that optimize for revenue growth, we measure success
                across multiple dimensions:
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Client Impact:</strong> Time saved, costs reduced, revenue increased,
                  communities served by the technology we build</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Accessibility:</strong> Number of SMEs and mission-driven organizations
                  we make technology accessible to</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Cost Savings:</strong> Total amount clients save vs traditional agency
                  pricing while getting the same quality</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Worker Well-being:</strong> Fair wages, sustainable workload, professional
                  development, and democratic governance</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Social Economy Contribution:</strong> Partnerships with other co-ops,
                  support for local social economy, knowledge sharing</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
