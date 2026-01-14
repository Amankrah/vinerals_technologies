import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import { Building, Target, Briefcase, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Government Partnership | Digital Economy Alignment | Vinerals Technologies',
  description: 'Supporting Quebec\'s digital transformation and SME ecosystem. Explore partnership opportunities with Vinerals Technologies solidarity cooperative.',
};

export default function GovernmentPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-primary-700">
              <Building className="w-16 h-16" />
            </div>

            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                For Government Partners
              </span>
            </div>

            <h1 className="hero-headline mb-6">
              Accelerating Digital Transformation Across Quebec&apos;s SME Ecosystem
            </h1>

            <p className="lead-text">
              A solidarity cooperative delivering measurable economic impact through accessible
              technology services. Aligned with Quebec&apos;s digital economy objectives and SME
              support priorities.
            </p>
          </div>
        </Section>

        {/* Strategic Alignment */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Strategic Alignment with Quebec&apos;s Priorities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Digital Economy Strategy</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Our mission directly advances Quebec&apos;s digital economy goals by:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Increasing SME adoption of digital technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Democratizing access to AI and advanced tech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Building local technology capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Reducing dependency on foreign tech services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">SME Support</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  We complement existing SME support programs by:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Offering affordable technology implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Providing technical expertise for grant recipients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Helping SMEs leverage government programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Extending reach beyond traditional tech hubs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Social Economy Development</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  As a solidarity cooperative, we strengthen Quebec&apos;s social economy:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Creating quality jobs with democratic governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Reinvesting profits in community and mission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Collaborating with other social economy actors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Demonstrating viable alternative business model</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Skills Development</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  We contribute to technology workforce development through:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Hiring and training local technology talent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Mentoring junior developers and students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Building domain expertise in priority sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Knowledge sharing through open resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Economic Impact */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-12 text-center">
              Measurable Economic Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">$2M+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Client Savings Target</div>
                <p className="text-sm text-gray-700">
                  Cumulative cost savings for Quebec SMEs vs traditional agency pricing by 2027
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">50+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">SMEs Empowered</div>
                <p className="text-sm text-gray-700">
                  Small and medium businesses gaining access to transformative technology
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Quality Jobs</div>
                <p className="text-sm text-gray-700">
                  Well-paid technology positions created in Quebec&apos;s social economy
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-bold text-gray-900 mb-4 text-center">Reporting & Accountability</h3>
              <p className="text-gray-700 text-center mb-6">
                We provide government partners with detailed impact reporting including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span>Number of SMEs served by region and sector</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span>Cost savings achieved vs market rates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span>Jobs created (FTE, wages, benefits)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span>Technology adoption rates by SME category</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span>Revenue reinvested in social economy</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span>Sector-specific outcomes (health, food, environment)</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Partnership Opportunities */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Partnership Opportunities
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Technology Implementation Partner</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Work with us to deliver technology solutions to SMEs participating in government
                  digital transformation programs. We can:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Provide implementation services at accessible rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Serve as approved vendor for grant recipients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Deliver on sector-specific technology initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Support regional economic development through technology</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Procurement & Contracting</h3>
                <p className="text-gray-700 text-sm mb-4">
                  As a certified solidarity cooperative, we are eligible for social procurement
                  programs. Potential collaborations include:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Technology modernization for government services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Digital platforms for economic development initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Innovation pilots in healthcare, environment, or food systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Data infrastructure for policy research and reporting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Research & Innovation Collaboration</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Partner with us on research and innovation initiatives exploring:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>AI adoption barriers and enablers for Quebec SMEs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Alternative business models for technology sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Sector-specific technology needs and solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Social economy technology development capacity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Policy & Program Development</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Leverage our on-the-ground experience to inform policy and program design:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>SME technology adoption challenges and solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Effective support mechanisms for digital transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Social procurement frameworks for technology services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600">•</span>
                    <span>Cooperative models in technology sector</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Priority Sectors */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-6 text-center">
              Priority Sector Expertise
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              We bring deep expertise in sectors aligned with Quebec&apos;s economic development
              and social policy priorities:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Healthcare & Social Services</h3>
                <p className="text-sm text-gray-700">
                  Digital health solutions, patient portals, telehealth platforms, and health
                  data systems supporting Quebec&apos;s healthcare modernization objectives.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Food Systems & Agriculture</h3>
                <p className="text-sm text-gray-700">
                  Supply chain traceability, farm management systems, and food safety compliance
                  tools supporting local and sustainable food production.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Sustainability & Environment</h3>
                <p className="text-sm text-gray-700">
                  Carbon tracking, ESG reporting, circular economy platforms, and environmental
                  data systems advancing Quebec&apos;s climate action goals.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Social Economy & Non-Profits</h3>
                <p className="text-sm text-gray-700">
                  Cooperative management systems, impact measurement tools, and mission-driven
                  technology supporting Quebec&apos;s social economy ecosystem.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-headline mb-6">Connect With Us</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Interested in partnering with Vinerals Technologies to advance Quebec&apos;s digital
              economy and social economy objectives? We would welcome the opportunity to discuss
              collaboration.
            </p>
            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@vineralstechnologies.com" className="text-primary-700 hover:text-primary-800">
                    contact@vineralstechnologies.com
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  For government partnership inquiries
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  We respond to government partnership inquiries within 24-48 hours.
                </p>
              </div>
            </div>
            <a
              href="mailto:contact@vineralstechnologies.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Contact Government Relations
            </a>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
