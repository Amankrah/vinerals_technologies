import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import { Coins, TrendingUp, Target, DollarSign, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment Opportunity | Social Finance | Vinerals Technologies',
  description: 'Patient capital opportunity in Quebec&apos;s social economy. Invest in accessible technology infrastructure with measurable social returns and sustainable business model.',
};

export default function FundersPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-primary-700">
              <Coins className="w-16 h-16" />
            </div>

            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                For Funders & Investors
              </span>
            </div>

            <h1 className="hero-headline mb-6">
              Investing in Accessible Technology Infrastructure
            </h1>

            <p className="lead-text">
              Patient capital opportunity with measurable social return and sustainable
              business model. Support Quebec&apos;s digital transformation while creating real
              economic impact.
            </p>
          </div>
        </Section>

        {/* Investment Thesis */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">Investment Thesis</h2>
            <div className="bg-white rounded-xl p-8 shadow-md space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>The Problem:</strong> Small and medium enterprises are priced out of
                transformative technology. Quality software development requires significant investment,
                making digital transformation inaccessible to 90% of Quebec businesses.
              </p>
              <p>
                <strong>The Opportunity:</strong> Vinerals Technologies addresses this market
                failure through a solidarity cooperative structure. By eliminating investor
                profit extraction and securing mission-aligned funding, we can offer subsidized
                programs that make enterprise-quality development accessible while maintaining
                sustainability.
              </p>
              <p>
                <strong>The Impact:</strong> Every dollar invested creates multiple returns -
                client cost savings (5-10x over traditional agencies), quality job creation,
                SME productivity gains, and strengthening of Quebec&apos;s social economy ecosystem.
              </p>
              <p>
                <strong>The Model:</strong> Hybrid revenue (earned income + mission-aligned
                funding) creates a path to financial sustainability while maximizing social
                impact. We are not seeking maximum returns - we are seeking patient capital
                that values social ROI alongside financial sustainability.
              </p>
            </div>
          </div>
        </Section>

        {/* Financial Model */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-8 text-center">Our Funding Model</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary-700 mb-3">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Revenue Streams</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Client services (60-70%):</strong> Custom software, AI integration, mobile apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Government contracts (15-20%):</strong> SME support programs, sector initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Grants & funding (10-20%):</strong> Social economy, innovation, R&D</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary-700 mb-3">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Growth Strategy</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Year 1-2:</strong> Build reputation, 4-6 core team, $300K-500K revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Year 3-4:</strong> Scale team to 10+, establish partnerships, $800K-1.2M revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Year 5+:</strong> Self-sustaining operations, reinvestment in mission</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary-700 mb-3">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Use of Funds</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Team growth (60%):</strong> Hiring senior developers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Operations (20%):</strong> Tools, infrastructure, workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Marketing (10%):</strong> Website, positioning, outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Reserves (10%):</strong> Cash flow, contingency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Social Impact Metrics */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Social Impact Metrics
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              We measure success across multiple dimensions - not just revenue growth.
              Here are the impact metrics we track and report to funders:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Economic Impact</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Client cost savings:</strong> Total $ saved vs traditional agencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>SMEs served:</strong> Number of businesses accessing technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Quality jobs created:</strong> Full-time, fair-wage positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Revenue to cooperatives:</strong> Support for social economy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Sector Impact</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Healthcare:</strong> Patients served, care access improved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Food systems:</strong> Farms connected, traceability enabled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Sustainability:</strong> Carbon tracked, ESG reporting enabled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Social enterprises:</strong> Non-profits and co-ops supported</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Organizational Health</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Worker satisfaction:</strong> Democratic participation, fair wages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Client retention:</strong> Long-term partnerships vs one-off</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Financial sustainability:</strong> Path to earned revenue model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ecosystem participation:</strong> Collaboration with other co-ops</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Systems Change</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Market influence:</strong> Pressure on agency pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Model replication:</strong> Other tech co-ops inspired</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Policy influence:</strong> Procurement, innovation programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Knowledge sharing:</strong> Open resources, cooperative network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Current Funding Status */}
        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Current Funding Status</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Stage:</strong> Early-stage social enterprise seeking patient capital
                  to scale operations and maximize social impact.
                </p>
                <p>
                  <strong>Seeking:</strong> $150K-300K in patient capital (combination of loans,
                  equity-like instruments, and grants) to support team growth and operational
                  scale over 18-24 months.
                </p>
                <p>
                  <strong>Structure:</strong> Flexible terms aligned with social finance best
                  practices. We can accommodate various instruments including:
                </p>
                <ul className="ml-6 space-y-2 text-sm">
                  <li>• Patient loans with revenue-based repayment</li>
                  <li>• Solidarity shares (non-voting capital)</li>
                  <li>• Convertible instruments</li>
                  <li>• Grants for innovation/R&D</li>
                  <li>• Hybrid structures</li>
                </ul>
                <p>
                  <strong>Returns:</strong> We target modest financial returns (3-5% for debt)
                  alongside significant social returns. Our primary commitment is to mission,
                  not maximizing investor profits.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Governance & Transparency */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Governance & Transparency
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Democratic Structure</h3>
                <p className="text-sm text-gray-700">
                  As a solidarity cooperative, we operate with democratic governance. Supporting
                  members (which can include funders) have representation on our board alongside
                  worker members, ensuring alignment and accountability.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Regular Reporting</h3>
                <p className="text-sm text-gray-700">
                  Funders receive quarterly financial updates and semi-annual impact reports
                  detailing progress on social metrics, client outcomes, and organizational health.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Mission Lock</h3>
                <p className="text-sm text-gray-700">
                  Our cooperative bylaws ensure mission permanence. We cannot be sold, cannot
                  distribute excessive profits, and must maintain our social purpose even if
                  leadership changes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Independent Audit</h3>
                <p className="text-sm text-gray-700">
                  Annual financial audits and social impact assessments by independent third
                  parties ensure transparency and accountability to all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-headline mb-6">Connect With Us</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Interested in supporting Vinerals Technologies? We would love to discuss how
              your investment can advance accessible technology, job creation, and social
              impact in Quebec.
            </p>
            <div className="bg-primary-50 rounded-xl p-8 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">What We Need From You</h3>
              <p className="text-sm text-gray-700 mb-4">
                We are looking for patient, mission-aligned capital partners who:
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span>Value social ROI alongside financial returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span>Understand social enterprise/cooperative models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span>Have patient capital (3-5 year horizon minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span>Bring strategic connections to Quebec&apos;s SME/social economy ecosystem</span>
                </li>
              </ul>
            </div>
            <a
              href="mailto:contact@vineralstechnologies.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Contact Funding Team
            </a>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
