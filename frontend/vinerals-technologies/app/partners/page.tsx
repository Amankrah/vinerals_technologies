import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import PartnersHero from '@/components/sections/PartnersHero';
import CTA from '@/components/sections/CTA';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Handshake, Coins, Building, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PARTNERS_FAQS = [
  {
    question: 'What types of partnerships does Vinerals Technologies offer?',
    answer: 'We partner with funders and foundations (CIHR, ISED, SDTC, MAPAQ), government agencies (federal, provincial, municipal), and technology consortiums. Our cooperative model enables mission-aligned partnerships focused on accessible technology, social innovation, and measurable impact.',
  },
  {
    question: 'How does partnering with a solidarity cooperative differ from traditional vendors?',
    answer: 'As a solidarity cooperative, we prioritize social impact alongside financial sustainability. Partnerships support job creation, accessible technology development, and community benefit. We offer transparent governance, democratic decision-making, and alignment with social economy objectives.',
  },
  {
    question: 'What reporting and impact measurement do you provide to partners?',
    answer: 'We provide comprehensive impact reporting including jobs created, technology accessibility metrics, social enterprise outcomes, environmental impact (for cleantech), and program-specific KPIs. Reports align with funder requirements and social economy evaluation frameworks.',
  },
  {
    question: 'Can government agencies procure services from your cooperative?',
    answer: 'Yes. As a registered solidarity cooperative, we are eligible for cooperative procurement programs, social enterprise procurement policies, and standard government technology contracts. We support federal, provincial, and municipal digital service needs.',
  },
  {
    question: 'How do I explore partnership opportunities with Vinerals Technologies?',
    answer: 'Contact us to discuss partnership opportunities. We work with organizations aligned with our mission of accessible technology and social innovation. Whether you are a funder, government agency, or consortium, we welcome mission-aligned collaborations.',
  },
];

export default function PartnersPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
  ]);
  const faqSchema = createFAQSchema(PARTNERS_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <PartnersHero
          badge="Partnership Opportunities"
          title="Building Quebec's Accessible Tech Infrastructure"
          highlightedWord="Accessible Tech"
          description="Vinerals Technologies is a solidarity cooperative contributing to Quebec's social economy and digital transformation objectives. We welcome partnerships with government, funders, and industry consortiums."
          icon={<Handshake className="w-8 h-8" />}
          stats={[
            { value: 'Funded', label: 'Subsidized Programs' },
            { value: '10+', label: 'Quality Jobs Created' },
          ]}
          primaryCTA={{ label: 'Explore Partnerships', href: '#partnership-opportunities' }}
          secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
        />

        {/* Partnership Opportunities */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-headline mb-12 text-center">
              Partnership Opportunities
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Funders Card */}
              <Link
                href="/partners/funders"
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-700 hover:shadow-xl transition-all"
              >
                <div className="text-primary-700 mb-4">
                  <Coins className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  For Funders
                </h3>
                <p className="text-gray-700 mb-4">
                  Patient capital opportunity in Quebec&apos;s social economy. Invest in accessible
                  technology infrastructure with measurable social returns.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Social ROI metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Sustainable business model</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Transparent governance</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-primary-700 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Government Card */}
              <Link
                href="/partners/government"
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-700 hover:shadow-xl transition-all"
              >
                <div className="text-primary-700 mb-4">
                  <Building className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  For Government
                </h3>
                <p className="text-gray-700 mb-4">
                  Supporting Quebec&apos;s digital transformation and SME ecosystem. Aligned with
                  provincial digital economy strategy and job creation goals.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Digital economy alignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Job creation & skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>SME support capacity</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-primary-700 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              {/* Consortiums Card */}
              <Link
                href="/partners/consortiums"
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-700 hover:shadow-xl transition-all"
              >
                <div className="text-primary-700 mb-4">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  For Consortiums
                </h3>
                <p className="text-gray-700 mb-4">
                  Collaborative technology development for industry associations, networks,
                  and social economy organizations with collective impact goals.
                </p>
                <div className="text-sm text-gray-600 space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Flexible engagement models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Sector expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-600">✓</span>
                    <span>Scalable solutions</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-primary-700 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </Section>

        {/* Our Impact */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-12 text-center">
              Our Impact Model
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">Funded</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Access Programs</div>
                <p className="text-sm text-gray-700">
                  Mission-aligned funding making technology accessible to SMEs
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Quality Jobs</div>
                <p className="text-sm text-gray-700">
                  Creating well-paid technology jobs in Quebec&apos;s social economy
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">4</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Priority Sectors</div>
                <p className="text-sm text-gray-700">
                  Healthcare, food systems, sustainability, and social enterprise
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Partner With Us */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Why Partner With Vinerals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Social Economy Enterprise</h3>
                <p className="text-gray-700 text-sm">
                  As a solidarity cooperative, we are part of Quebec&apos;s vibrant social economy
                  ecosystem with democratic governance and transparent operations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Measurable Impact</h3>
                <p className="text-gray-700 text-sm">
                  We track client cost savings, job creation, and sector-specific outcomes
                  to demonstrate clear social return on investment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Experienced Team</h3>
                <p className="text-gray-700 text-sm">
                  Senior developers with 5+ years experience and deep domain expertise in
                  healthcare, sustainability, and food systems.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Sustainable Model</h3>
                <p className="text-gray-700 text-sm">
                  Hybrid revenue model (earned revenue + mission-aligned funding) creates
                  path to long-term financial sustainability.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Strategic Alignment</h3>
                <p className="text-gray-700 text-sm">
                  Our work advances Quebec&apos;s digital economy goals, SME support objectives,
                  and social economy development priorities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Ecosystem Connections</h3>
                <p className="text-gray-700 text-sm">
                  Strong relationships with CQCM, Chantier, PME MTL, RISQ, and other key
                  social economy and economic development actors.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-headline mb-6">Let&apos;s Discuss a Partnership</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Interested in partnering with Vinerals Technologies? We would love to explore
              how we can work together to advance accessible technology, job creation, and
              social impact in Quebec.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@vineralstechnologies.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                Email Partnerships Team
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 border-2 border-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                General Contact
              </Link>
            </div>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
