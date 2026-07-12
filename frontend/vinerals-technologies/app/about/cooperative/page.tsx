'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CooperativeHero from '@/components/sections/CooperativeHero';
import CTA from '@/components/sections/CTA';
import { Building2, Users, Heart, Scale, Lightbulb, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function CooperativePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <CooperativeHero
          badge="Our Cooperative Model"
          title="Built differently, on purpose."
          highlightedWord="on purpose"
          description="Vinerals Technologies is a solidarity cooperative. A social enterprise owned by the people doing the work and the community we serve, not by investors hunting an exit."
          icon={<Building2 className="w-8 h-8" />}
          stats={[
            { value: '7', label: 'Cooperative Principles' },
            { value: '1 = 1', label: 'Member Votes' },
          ]}
          primaryCTA={{ label: 'Read on', href: '#what-is-cooperative' }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
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
              So what is a solidarity cooperative?
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 leading-relaxed mb-4">
                A solidarity cooperative (<em>coopérative de solidarité</em> in French) is a Québec
                business structure that brings three kinds of member into the same room:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Worker members.</strong> The developers and staff doing the actual work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>User members.</strong> Clients who choose to join (optional).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Supporting members.</strong> Community stakeholders who believe in the mission.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Each member gets one vote, no matter what they put in. Surpluses go back into the mission,
                to worker-members, or to a community fund. Nothing flows out to external shareholders, because
                there are none.
              </p>
              <blockquote className="pullquote mt-8">
                Mission over profit. Built differently, on purpose.
              </blockquote>
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
              The seven cooperative principles
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Cooperatives around the world run on seven shared principles set by the International
              Cooperative Alliance. Here’s what each one looks like in our daily work.
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
                      approved by our members - like offering subsidized programs to non-profits
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
                  <h3 className="font-bold text-gray-900">Mission over profit.</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Traditional corporations are legally bound to maximise shareholder value. A cooperative
                  is bound to its members and its mission. We choose to put bringing serious software
                  inside reach ahead of profit extraction. That isn’t about being cheaper. It’s about
                  reinvesting in the purpose instead of paying outside shareholders.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Scale className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">Funded accessibility, not discount rates.</h3>
                </div>
                <p className="text-sm text-gray-700">
                  We don’t undercut professional rates. Good engineering costs what it costs ($100 to
                  $200 per hour blended in Montréal). What we’ve done is line up government subsidies,
                  grants, and impact funding to cover part of qualifying SME budgets. The accessibility
                  gap closes without anyone’s wages or quality taking the hit.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">Worker ownership.</h3>
                </div>
                <p className="text-sm text-gray-700">
                  The people writing the code have a say in how the company is run. That’s how you end up
                  with better decisions, higher-quality work, and workloads that don’t burn out the team
                  shipping your project.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="flex gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-primary-700 flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">A longer time horizon.</h3>
                </div>
                <p className="text-sm text-gray-700">
                  No investors demanding a quick exit or endless quarter-on-quarter growth. We can focus on
                  client relationships that last and operations we can sustain.
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
              What you get out of it
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p variants={fadeInUp}>
                Our structure isn’t a feel-good story. It shows up in the work, in concrete ways:
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Software made by hand.</strong> Same senior developers and standards
                  you’d expect from Spiria, Stradigi AI, or Konverge — craft first, with terms a growing
                  business can plan around, not corner-cutting.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>The knowledge gap closed.</strong> We start by walking you through what
                  AI and software can and can’t do for your business before anyone writes a line of code.
                  That conversation alone tends to be worth thousands in mistakes you didn’t make.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Aligned incentives.</strong> We win when you win, not when we run up
                  billable hours or stretch the scope.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>The team that starts is the team that finishes.</strong> Worker ownership
                  means low turnover. No juniors learning on your dime mid-project.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Mission-fit clients.</strong> We choose engagements that match our values,
                  and turn down the ones that don’t. Outcomes improve on both sides.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>You own everything.</strong> No vendor lock-in, no proprietary systems.
                  100% of the code, ready to leave with you the day you want it to.</span>
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
              How we’re governed
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6">
                Democratic, but built to move quickly:
              </p>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">General Assembly</h3>
                  <p className="text-sm">
                    All members meet quarterly to review the books, approve big decisions, and elect
                    the board. One member, one vote.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Board of Directors</h3>
                  <p className="text-sm">
                    An elected board of worker and community representatives provides strategic oversight
                    and keeps us honest about the mission.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Day-to-day operations</h3>
                  <p className="text-sm">
                    Worker-members make operational decisions by consensus when we can, by vote when
                    we have to. Technical calls live with the people closest to the work.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Profit distribution</h3>
                  <p className="text-sm">
                    After reserves and reinvestment, surpluses are split based on hours worked
                    (patronage) instead of capital invested. A portion goes to community development.
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
              Part of Québec’s social economy
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <motion.p variants={fadeInUp}>
                Vinerals Technologies sits inside Québec’s social economy ecosystem, a network of more
                than 11,000 enterprises that take social and environmental goals as seriously as the
                P&L.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Among the organisations we work with and lean on:
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
