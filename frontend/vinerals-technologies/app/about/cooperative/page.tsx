'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ServiceHero from '@/components/sections/ServiceHero';
import CTA from '@/components/sections/CTA';
import { Building2, Users, Heart, Scale, Lightbulb, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function CooperativePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Our Cooperative Model"
          title="Built Different, On Purpose"
          description="Vinerals Technologies is a solidarity cooperative - a social enterprise owned by workers and community, not investors seeking maximum returns."
          icon={<Building2 className="w-16 h-16" />}
        />

        {/* What is a Solidarity Cooperative */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              What is a Solidarity Cooperative?
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 leading-relaxed mb-4">
                A solidarity cooperative (coopérative de solidarité in French) is a unique Quebec
                business structure that brings together three types of members:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Worker members:</strong> Developers and staff who work in the co-op</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>User members:</strong> Clients who use our services (optional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Supporting members:</strong> Community stakeholders who believe in our mission</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Each member has one vote, regardless of their investment. Profits are reinvested
                in the mission, distributed fairly to worker-members, or allocated to a community
                fund - not extracted for external shareholders.
              </p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Seven Cooperative Principles */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              The Seven Cooperative Principles
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Cooperatives worldwide operate according to seven principles established by the
              International Cooperative Alliance. Here is how we live them:
            </motion.p>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Voluntary & Open Membership</h3>
                    <p className="text-sm text-gray-700">
                      Anyone who can use our services and accepts membership responsibilities
                      can join. We do not discriminate.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Democratic Member Control</h3>
                    <p className="text-sm text-gray-700">
                      One member, one vote. Major decisions are made collectively through
                      democratic processes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Member Economic Participation</h3>
                    <p className="text-sm text-gray-700">
                      Members contribute equitably and control capital democratically. Surpluses
                      are reinvested or distributed fairly.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Autonomy & Independence</h3>
                    <p className="text-sm text-gray-700">
                      We are self-governed by our members. No external investors control
                      our direction or extract profits.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Education, Training & Information</h3>
                    <p className="text-sm text-gray-700">
                      We invest in member development and educate the public about the
                      cooperative model.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cooperation Among Cooperatives</h3>
                    <p className="text-sm text-gray-700">
                      We work with other co-ops, share resources, and strengthen the cooperative
                      movement.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6 md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                    7
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Concern for Community</h3>
                    <p className="text-sm text-gray-700">
                      We work for the sustainable development of our communities through policies
                      approved by our members - like offering discounted rates to non-profits
                      and social enterprises.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Why This Structure */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              Why We Chose This Structure
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Heart className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">Mission Over Profit</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Traditional corporations are legally required to maximize shareholder value.
                  As a cooperative, we can prioritize our mission - making technology accessible
                  - over profit extraction.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Scale className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">Fair Pricing</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Without pressure to deliver 30-40% margins to investors, we can charge
                  what is fair rather than what the market will bear. This means 50-70%
                  cost savings for our clients.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">Worker Ownership</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Developers who build the software have a say in how the company runs.
                  This leads to better decisions, higher quality work, and sustainable
                  workloads.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">Long-Term Thinking</h3>
                </div>
                <p className="text-sm text-gray-700">
                  No investors demanding quick exits or endless growth. We can focus on
                  building lasting client relationships and sustainable operations.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* How It Benefits Clients */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              How This Benefits You
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p variants={fadeInUp}>
                Our cooperative structure is not just good for us - it creates direct benefits
                for our clients:
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>50-70% cost savings:</strong> Without investor profit margins,
                  we charge $40-150/hour vs traditional agencies at $150-300/hour</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Aligned incentives:</strong> We succeed when you succeed, not when
                  we maximize billable hours</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Stable team:</strong> Worker ownership means low turnover. The
                  developers who start your project finish it</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Mission-aligned work:</strong> We choose clients whose missions we
                  believe in, leading to better outcomes</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Transparent governance:</strong> You can see how decisions are made
                  and trust there are no hidden agendas</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </Section>

        {/* Governance */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              How We Are Governed
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6">
                We operate with democratic governance while maintaining the ability to move quickly:
              </p>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General Assembly</h3>
                  <p className="text-sm">
                    All members meet quarterly to review financials, approve major decisions,
                    and elect the board of directors. One member, one vote.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Board of Directors</h3>
                  <p className="text-sm">
                    Elected board (worker and community representatives) provides strategic
                    oversight and ensures we stay true to our mission.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Day-to-Day Operations</h3>
                  <p className="text-sm">
                    Worker-members make operational decisions collaboratively using consensus
                    when possible, voting when needed. Technical decisions are made by those
                    closest to the work.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Profit Distribution</h3>
                  <p className="text-sm">
                    After reserves and reinvestment, surpluses are distributed based on hours
                    worked (patronage) rather than capital invested. A portion goes to community
                    development.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Quebec Social Economy */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Part of Quebec&apos;s Social Economy
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <motion.p variants={fadeInUp}>
                Vinerals Technologies is proud to be part of Quebec&apos;s vibrant social economy
                ecosystem - a network of 11,000+ enterprises that prioritize social and
                environmental goals alongside financial sustainability.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We work with and are supported by organizations including:
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Conseil québécois de la coopération et de la mutualité (CQCM)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Quebec&apos;s cooperative network providing support, advocacy, and connections.
                </p>
                <a
                  href="https://www.coopquebec.coop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-700 hover:text-primary-800 inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Chantier de l&apos;économie sociale</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Network promoting and supporting Quebec&apos;s social economy enterprises.
                </p>
                <a
                  href="https://chantier.qc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-700 hover:text-primary-800 inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">PME MTL</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Montreal&apos;s network supporting SME and social economy development.
                </p>
                <a
                  href="https://pmemtl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-700 hover:text-primary-800 inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">RISQ (Réseau d&apos;investissement social du Québec)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Social finance network providing patient capital to social enterprises.
                </p>
                <a
                  href="https://risq.qc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-700 hover:text-primary-800 inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="w-3 h-3" />
                </a>
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
