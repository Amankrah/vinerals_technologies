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
    question: 'What kinds of partnerships do you offer?',
    answer: 'We partner with funders and foundations (CIHR, ISED, SDTC, MAPAQ), government agencies (federal, provincial, municipal), and technology consortiums. Our cooperative structure is built for mission-aligned partnerships focused on accessibility, social innovation, and measurable impact.',
  },
  {
    question: 'How is partnering with a cooperative different from working with a regular vendor?',
    answer: 'A solidarity cooperative is built to weigh social impact alongside financial sustainability. Partnerships support job creation, accessible technology, and community benefit. The governance is transparent, decision-making is democratic, and our work lines up with the broader social economy.',
  },
  {
    question: 'What reporting and impact measurement do partners get?',
    answer: 'Full impact reporting: jobs created, technology accessibility metrics, social enterprise outcomes, environmental impact for cleantech work, and the programme-specific KPIs you need. The reports line up with funder requirements and standard social economy evaluation frameworks.',
  },
  {
    question: 'Can government agencies procure services from a cooperative?',
    answer: 'Yes. As a registered solidarity cooperative, we’re eligible for cooperative procurement programmes, social enterprise procurement policies, and standard government technology contracts. We work with federal, provincial, and municipal digital service teams.',
  },
  {
    question: 'How do we get the conversation started?',
    answer: 'Reach out. We work with funders, government agencies, and consortiums whose mandate lines up with ours: accessible technology and social innovation. If that’s you, we’d like to hear what you’re trying to make happen.',
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
          title="Building Québec’s accessible tech infrastructure."
          highlightedWord="accessible tech"
          description="Vinerals Technologies is a solidarity cooperative working inside Québec’s social economy and digital transformation agenda. We welcome partnerships with government, funders, and industry consortiums."
          icon={<Handshake className="w-8 h-8" />}
          stats={[
            { value: 'Funded', label: 'Subsidised Programmes' },
            { value: '10+', label: 'Quality Jobs Created' },
          ]}
          primaryCTA={{ label: 'See the options', href: '#partnership-opportunities' }}
          secondaryCTA={{ label: 'Get in touch', href: '/contact' }}
        />

        {/* Partnership Opportunities */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-headline mb-12 text-center">
              Where a partnership can land
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
                  For funders
                </h3>
                <p className="text-gray-700 mb-4">
                  Patient capital, inside Québec’s social economy. Back accessible technology
                  infrastructure with measurable social return, not just a sentiment.
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
                  For government
                </h3>
                <p className="text-gray-700 mb-4">
                  Capacity that lines up with Québec’s digital economy strategy and SME support
                  agenda, with job creation built in.
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
                  For consortiums
                </h3>
                <p className="text-gray-700 mb-4">
                  Shared technical capacity for industry associations, sector networks, and
                  social economy organisations chasing collective impact.
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
              Our impact model
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">Funded</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Access tracks</div>
                <p className="text-sm text-gray-700">
                  Mission-aligned funding that brings real software inside reach for SMEs.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Quality jobs</div>
                <p className="text-sm text-gray-700">
                  Well-paid technology jobs created inside Québec’s social economy.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">4</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Priority sectors</div>
                <p className="text-sm text-gray-700">
                  Healthcare, food systems, sustainability, and social enterprise.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Partner With Us */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Why partner with us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">A social economy enterprise.</h3>
                <p className="text-gray-700 text-sm">
                  We sit inside Québec’s social economy network as a solidarity cooperative,
                  with democratic governance and transparent operations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Measurable impact.</h3>
                <p className="text-gray-700 text-sm">
                  We track client cost relief, job creation, and sector-specific outcomes so the
                  social return on investment is more than a story.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">An experienced team.</h3>
                <p className="text-gray-700 text-sm">
                  Senior developers with five-plus years in production, and real working knowledge
                  of healthcare, sustainability, and food systems.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">A sustainable model.</h3>
                <p className="text-gray-700 text-sm">
                  Hybrid revenue (earned client work plus mission-aligned funding) gives us a credible
                  path to long-term financial sustainability.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Strategic alignment.</h3>
                <p className="text-gray-700 text-sm">
                  Our work directly advances Québec’s digital economy goals, SME support objectives,
                  and social economy development priorities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Plugged into the ecosystem.</h3>
                <p className="text-gray-700 text-sm">
                  Working relationships with CQCM, Chantier, PME MTL, RISQ, and the other actors
                  carrying Québec’s social economy.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-headline mb-6">Let’s talk about a partnership.</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              If your mandate touches accessible technology, job creation, or social impact in Québec,
              we’d like to find out what we can build together. The first call is free, and we’ll be
              straight with you about fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@vineralstechnologies.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                Email the partnerships team
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 border-2 border-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                General contact
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
