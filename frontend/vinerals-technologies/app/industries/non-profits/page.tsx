'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function NonProfitsPage() {
  const serviceDetails = {
    whatWeOffer: {
      title: 'Social Sector Solutions',
      items: [
        'Cooperative management systems',
        'Impact measurement and reporting',
        'Donor and volunteer management',
        'Grant application and tracking',
        'Membership and governance platforms',
        'Community engagement tools',
      ],
    },
    technologies: {
      title: 'Non-Profit Tech Stack',
      items: [
        'Member portal and authentication',
        'Payment processing (donations, fees)',
        'CRM integration (Salesforce, HubSpot)',
        'Email automation and communications',
        'Voting and decision-making tools',
        'Impact data visualization',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Member self-service portals',
        'Impact reporting dashboards',
        'Automated workflows',
        'Stakeholder communications',
        'Governance documentation',
        'Training for staff and volunteers',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Mission Alignment',
      subtitle: 'Week 1',
      description: 'We start by understanding your mission, governance structure, and how technology can amplify your impact.',
    },
    {
      number: 2,
      title: 'Stakeholder Co-Design',
      subtitle: 'Weeks 2-3',
      description: 'Involve staff, board members, volunteers, and beneficiaries in designing solutions that work for everyone.',
    },
    {
      number: 3,
      title: 'Phased Implementation',
      subtitle: 'Weeks 4-10',
      description: 'Build in stages to respect budget constraints and allow for learning and iteration.',
    },
    {
      number: 4,
      title: 'Capacity Building',
      subtitle: 'Final Phase',
      description: 'Train your team to manage and evolve the system, reducing long-term dependency on consultants.',
    },
  ] as const;

  return (
    <>
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Non-Profit & Social Enterprise"
          title="Technology for Mission-Driven Organizations"
          description="Built by a cooperative, for cooperatives. We understand governance, impact measurement, and building technology that serves communities - not shareholders."
          icon={<Users className="w-16 h-16" />}
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
              The Non-Profit Technology Gap
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Non-profits and social enterprises are expected to operate with the same efficiency
                as for-profit companies, but without the budget. Off-the-shelf software does not
                fit cooperative governance models. SaaS subscriptions eat into mission budgets.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                We are a solidarity cooperative ourselves. We know what it is like to balance democratic
                decision-making with operational efficiency. We understand that your technology needs to
                serve your mission - not create new administrative burdens.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                <strong>We build tools that amplify your impact</strong> - not just software that
                checks a box. And we do it at rates that make sense for social sector budgets.
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
              Real-World Social Sector Use Cases
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Cooperative Management Systems</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Member portals, democratic voting, profit-sharing calculations, governance
                  documentation, and meeting management for worker and multi-stakeholder co-ops.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Worker cooperative governance and member portal
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Impact Measurement Tools</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Theory of change tracking, outcome measurement, stakeholder surveys,
                  social return on investment (SROI) calculations, and funder reporting.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Social enterprise impact dashboard for investors
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Donor & Volunteer Management</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Donation processing, recurring giving, tax receipts, volunteer scheduling,
                  hour tracking, and communications for community-based organizations.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Community center volunteer and donor CRM
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Grant Management Systems</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Grant opportunity tracking, application workflows, budget management,
                  milestone reporting, and multi-funder compliance for non-profits.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Non-profit grant portfolio management system
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
              Built for Democratic Governance
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">We Understand Co-op Principles</h3>
              <p className="text-sm text-gray-700">
                As a solidarity cooperative, we design technology that respects the seven
                cooperative principles and supports democratic decision-making:
              </p>
            </motion.div>
            <motion.ul variants={staggerContainer} className="space-y-3 text-gray-700">
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Democratic Member Control:</strong> Voting systems, proposal workflows, consensus tools</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Member Economic Participation:</strong> Patronage tracking, profit distribution calculators</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Education & Training:</strong> Member onboarding, knowledge management, training tracking</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Cooperation Among Cooperatives:</strong> Inter-cooperative platforms and networks</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Concern for Community:</strong> Impact tracking and stakeholder engagement tools</span>
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
                <div className="text-4xl font-bold text-primary-900 mb-2">$40-100/hour</div>
                <div className="text-gray-600">Discounted rates for non-profits and cooperatives</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Member Portal:</strong> $8,000 - $20,000 (authentication, profiles, communications, document access)
                </p>
                <p>
                  <strong>Cooperative Management System:</strong> $15,000 - $40,000 (voting, governance, profit-sharing, reporting)
                </p>
                <p>
                  <strong>Impact Measurement Platform:</strong> $12,000 - $35,000 (data collection, dashboards, funder reports)
                </p>
                <p>
                  <strong>Donor/Volunteer CRM:</strong> $10,000 - $30,000 (donations, tax receipts, scheduling, communications)
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  <strong>Special pricing for cooperatives:</strong> We offer 20-30% discounts for certified cooperatives
                  and can structure deferred payment for organizations with grant-based revenue cycles.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              Built by a Cooperative, For Cooperatives
            </motion.h2>
            <motion.p variants={fadeInUp} className="lead-text mb-8">
              Vinerals Technologies is a solidarity cooperative. We are owned by our workers,
              governed democratically, and committed to serving the social economy. When you work
              with us, you are supporting the cooperative movement.
            </motion.p>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 text-primary-700 rounded-lg">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Member of the Quebec Cooperative Network</span>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
