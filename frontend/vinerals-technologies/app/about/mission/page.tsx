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
          title="Bringing serious software inside reach for every business."
          highlightedWord="inside reach"
          description="We exist to make enterprise-calibre software a realistic option for small and mid-sized businesses, regardless of budget."
          icon={<Heart className="w-8 h-8" />}
          primaryCTA={{ label: 'Our values', href: '#core-values' }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
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
              Closing Québec’s digital divide, one SME at a time.
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-xl text-gray-900 font-medium leading-relaxed mb-6">
                We exist to bring enterprise-calibre software and AI inside reach for small and mid-sized
                businesses across Canada, with particular weight in Québec, where we sit inside one of the
                most developed social economy ecosystems in the world.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The honest part.</strong> Good software engineering costs what it costs. Professional
                builds in Montréal run $100 to $200 per hour blended, with projects landing between $30,000 and
                $250,000 CAD. Agencies aren&apos;t overcharging. That&apos;s what skilled developers, proper
                architecture, security, and testing actually require.
              </p>
              <blockquote className="pullquote my-8">
                We&apos;re not pretending to do it cheaper. We&apos;re building a bridge.
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-6">
                What we&apos;ve done is line up subsidies, grants, and donor funding specifically aimed
                at SMEs. Same expertise, brought inside reach, without undercutting the people doing
                the work.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The piece that often matters more than the budget? <strong>We start by helping you understand
                what&apos;s actually possible</strong> with AI and modern software, before any code is written.
                Operating as a solidarity cooperative with mission-aligned funding behind us lets us ship the
                same calibre of work larger organisations receive, on fair wages, at honest terms.
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
              Our vision
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 leading-relaxed">
              A future where the size of your business isn’t the size of the software you’re allowed to have.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-700 mt-6 leading-relaxed">
              Cost stops being the wall. A community health clinic runs the same calibre of patient portal as the
              hospital network down the street. A family farm gets the traceability platform agribusiness takes
              for granted. A non-profit ships the impact tool its mandate has been begging for.
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
              Why we exist
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Three walls SMEs keep hitting</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>1. The knowledge gap.</strong> AI is everywhere. What actually fits your business is
                  a much shorter list. Without someone technical in your corner, sorting real from hype is
                  nearly impossible.<br /><br />
                  <strong>2. The cost reality.</strong> Quality custom software runs $30,000 to $250,000 CAD,
                  sometimes higher. Agencies aren&apos;t overcharging. That&apos;s what good engineering takes.
                  For most SMEs, the cheque just isn&apos;t there.<br /><br />
                  <strong>3. The expertise gap.</strong> Senior developers work at funded startups and enterprise
                  shops. SMEs end up with junior freelancers, or offshore teams who don&apos;t know the local
                  business context. Both leave scar tissue.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Why the existing options don’t solve it</h3>
                <p className="text-gray-700 leading-relaxed">
                  Established Montréal shops like Spiria, Stradigi AI, Konverge, and SDLC Corp do excellent work,
                  at the rates mid-market and enterprise buyers expect. Offshore options trade quality, communication,
                  and Canadian business context for a lower invoice. Off-the-shelf SaaS forces compromises that
                  rarely fit the actual work.
                </p>
                <blockquote className="pullquote mt-6">
                  The organisations that need custom software the most can afford it the least.
                </blockquote>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Our model: a bridge programme</h3>
                <p className="text-gray-700 leading-relaxed">
                  We&apos;re not a discount agency. We&apos;re a publicly-supported technology adoption programme.
                  Structuring as a solidarity cooperative and lining up government subsidies, grants, and impact
                  funding means we can ship the same enterprise-calibre work at terms a growing business can
                  defend on a board agenda. We start with what you need to know, walk you through what&apos;s
                  possible, and deliver with senior people, without the investor pressure to extract every last
                  dollar.
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
              Our core values
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Accessibility first.</h3>
                  <p className="text-gray-700">
                    Software shouldn’t be a luxury good. We price the work so SMEs, non-profits, and
                    social enterprises can actually buy it, on fair wages, without compromising quality.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Radical transparency.</h3>
                  <p className="text-gray-700">
                    No hidden fees, no scope-creep surprises, no vendor lock-in tactics. We publish rates
                    openly, explain trade-offs in plain language, and hand over everything we build. You
                    know exactly what you’re paying for.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">A real partnership.</h3>
                  <p className="text-gray-700">
                    We’re not a vendor squeezing every dollar out of an account. We’re partners with
                    skin in your outcome. We give honest advice when it costs us revenue, walk away from
                    bad fits, and build relationships, not just code.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Always learning.</h3>
                  <p className="text-gray-700">
                    Software moves fast, and so do we. We invest in learning, refine the process between
                    projects, and bring the latest tools to the next client without the consultant markup.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Impact over revenue.</h3>
                  <p className="text-gray-700">
                    Success is measured in time saved, costs cut, and communities served, not just in
                    invoices sent. If a project doesn’t move that needle, we’ll say so before you sign.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">In the social economy, for real.</h3>
                  <p className="text-gray-700">
                    As a solidarity cooperative, we’re part of the social economy and we act like it. We
                    prioritise mission-driven clients, offer subsidised tracks for non-profits and co-ops,
                    and contribute back to the ecosystem that makes us possible.
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
              Our impact goals
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">50+</div>
                <h3 className="font-semibold text-gray-900 mb-2">SMEs unlocked</h3>
                <p className="text-sm text-gray-700">
                  50-plus small and mid-sized businesses given access to serious software by 2027.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">$2M+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Saved off the cheque</h3>
                <p className="text-sm text-gray-700">
                  More than $2M in development costs absorbed by funding instead of by our clients.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">10+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality jobs created</h3>
                <p className="text-sm text-gray-700">
                  10-plus well-paid technology jobs inside Montréal’s social economy by 2027.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">20+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Mission-driven projects shipped</h3>
                <p className="text-sm text-gray-700">
                  20-plus completed projects across healthcare, sustainability, food systems, and
                  social enterprise.
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
              How we measure success
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Most agencies optimise for revenue growth. We watch a wider set of numbers:
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Client impact.</strong> Time saved, costs cut, revenue lifted, communities
                  better served by the software we shipped.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Accessibility.</strong> How many SMEs and mission-driven organisations we
                  helped get real software in their hands.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Cost relieved.</strong> What the funding side absorbed so the client side
                  could still ship at the same calibre.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Worker wellbeing.</strong> Fair wages, sustainable workload, room to learn,
                  and democratic governance that actually shows up in decisions.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Contribution back to the ecosystem.</strong> Partnerships with other co-ops,
                  active support for local social economy work, and knowledge passed forward.</span>
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
