import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Coins, TrendingUp, Target, DollarSign, CheckCircle2 } from 'lucide-react';

const FUNDERS_FAQS = [
  {
    question: 'Which funding programs does Vinerals Technologies participate in?',
    answer: 'We work with CIHR (Canadian Institutes of Health Research) for digital health technology, ISED (Innovation, Science and Economic Development) for innovation programs, SDTC (Sustainable Development Technology Canada) for cleantech, MAPAQ for agtech initiatives, Community Futures for social enterprise, and various foundation grants focused on accessible technology and social innovation.',
  },
  {
    question: 'How do you ensure accountability and impact measurement for funded projects?',
    answer: 'We provide comprehensive reporting aligned with funder requirements: quantitative metrics (jobs created, clients served, revenue generated), qualitative outcomes (technology accessibility achieved, community impact), financial transparency, and program-specific KPIs. All projects include defined milestones, deliverables, and evaluation frameworks.',
  },
  {
    question: 'What makes Vinerals Technologies a good funding partner for social innovation programs?',
    answer: 'As a solidarity cooperative, social impact is embedded in our governance structure. We create quality jobs, prioritize accessible technology, serve mission-driven clients, and reinvest surpluses into capacity building. Our cooperative model ensures long-term sustainability and community benefit beyond individual projects.',
  },
  {
    question: 'Can foundations and private funders support specific industry verticals?',
    answer: 'Yes. Funders can direct support toward specific sectors: healthcare technology (patient portals, telehealth), food systems (traceability, farm management), sustainability (carbon tracking, ESG reporting), or non-profit technology (donor management, impact measurement). Sector-specific funding aligns with our industry expertise.',
  },
  {
    question: 'What is the typical engagement model for funder partnerships?',
    answer: 'Funder partnerships typically involve: project-based grants for specific technology development, capacity-building support for cooperative infrastructure, collaborative funding with other partners, or multi-year programmatic support. We work with funders to structure engagements that align with their impact goals and reporting requirements.',
  },
];

export default function FundersPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
    { name: 'For Funders', url: 'https://vineralstechnologies.com/partners/funders' },
  ]);
  const faqSchema = createFAQSchema(FUNDERS_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
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
              Patient capital for Québec’s digital economy.
            </h1>

            <p className="lead-text">
              A measurable social return alongside real financial discipline. Back a proven bridge
              model that brings enterprise-calibre software inside reach for Québec SMEs, with 5×
              to 10× cost relief and quality jobs created inside the social economy.
            </p>
          </div>
        </Section>

        {/* Investment Thesis */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">Why Invest in Vinerals Technologies?</h2>
            <div className="bg-white rounded-xl p-8 shadow-md space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>The problem.</strong> Québec SMEs face a $30K to $250K wall on quality software.
                Montréal agencies charge $100 to $200 per hour blended (market rate for enterprise calibre work),
                which prices 90% of businesses out of digital transformation. Agencies aren&apos;t overcharging.
                That&apos;s what good engineering costs. The outcome is a two-tier economy where large corporates
                get innovation while SMEs fall behind.
              </p>
              <p>
                <strong>The model. A bridge, not charity.</strong> We don&apos;t undercut professional rates
                or pretend to do it cheaper. We structured as a solidarity cooperative (no investor profit
                extraction) and lined up government subsidies, grants, and impact funding to cover part of
                qualifying project budgets. The work itself is the same calibre as Spiria, Stradigi AI, or
                Konverge. The mission-aligned funding is what brings it inside reach.
              </p>
              <p>
                <strong>The multiplier effect.</strong> Every dollar invested generates several returns:
              </p>
              <ul className="ml-6 space-y-2 text-sm">
                <li>• <strong>Client impact.</strong> 5× to 10× cost relief vs traditional agencies, around $50K saved per project on average.</li>
                <li>• <strong>Job creation.</strong> Quality, fair-wage technology jobs created inside Montréal&apos;s social economy.</li>
                <li>• <strong>SME competitiveness.</strong> Businesses get the AI and automation that used to be out of reach.</li>
                <li>• <strong>Ecosystem strengthening.</strong> A proven model other tech co-ops can replicate.</li>
              </ul>
              <p>
                <strong>A sustainable business model.</strong> Hybrid revenue (60% to 70% earned income, 30%
                to 40% mission-aligned funding) gives us a credible path to self-sustainability within five
                years. We&apos;re not chasing maximum returns. We&apos;re looking for patient capital (3% to
                5%) that values closing Canada&apos;s digital divide as much as financial sustainability.
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
                    <span><strong>Client services (60-70%):</strong> Earned revenue from custom software, AI integration, mobile apps at market-competitive (but accessible through co-funding) rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Government programs (15-20%):</strong> CIHR (health tech), ISED (innovation), MAPAQ (agtech), Community Futures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-0.5">•</span>
                    <span><strong>Impact funding (10-20%):</strong> Foundations, social finance (RISQ, Filaction), patient capital for capacity building</span>
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
                  <strong>Seeking:</strong> Patient capital (loans, solidarity shares, grants, or
                  hybrid structures) to scale from 1-2 senior developers to 6-8 person team over
                  18-24 months. This enables us to serve 20-30 SMEs vs 5-10, creating $1M+ in
                  client cost savings and 5-7 quality jobs.
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
              <h3 className="font-bold text-gray-900 mb-4">Ideal Funding Partners</h3>
              <p className="text-sm text-gray-700 mb-4">
                We seek patient, mission-aligned capital partners who understand:
              </p>
              <ul className="text-left text-sm text-gray-700 space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span><strong>Social ROI matters:</strong> Closing digital divide, job creation, ecosystem building alongside financial sustainability (3-5% target)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span><strong>Cooperative economics:</strong> We reinvest surpluses in mission, not maximizing investor returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span><strong>Patient timeline:</strong> 3-5 year horizon minimum for scale and self-sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 mt-0.5">✓</span>
                  <span><strong>Strategic value-add:</strong> Connections to Quebec SME ecosystem, social economy network, or sector expertise (health, food, sustainability)</span>
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
