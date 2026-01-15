import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Users, Network, Zap, Target, CheckCircle2 } from 'lucide-react';

const CONSORTIUMS_FAQS = [
  {
    question: 'What types of consortiums and networks does Vinerals Technologies partner with?',
    answer: 'We partner with technology consortiums, innovation clusters, industry associations (healthcare, food systems, cleantech), social economy networks, cooperative federations, research networks, and sector-specific alliances. Our cooperative structure makes us natural partners for collaborative, mission-aligned ecosystems.',
  },
  {
    question: 'How can consortium members benefit from partnership with Vinerals Technologies?',
    answer: 'Consortium members gain access to affordable technology development, shared cooperative expertise, collaborative learning opportunities, joint innovation projects, and strengthened ecosystem capacity. We offer consortium-wide services, member discounts, knowledge sharing, and collective technology infrastructure development.',
  },
  {
    question: 'Can Vinerals Technologies contribute to consortium research and innovation projects?',
    answer: 'Yes. We actively participate in collaborative research on technology adoption, cooperative business models, sector-specific innovation, and social enterprise development. We contribute technical expertise, real-world implementation experience, and our networks of clients and partners across healthcare, food, sustainability, and social sectors.',
  },
  {
    question: 'What is your approach to knowledge sharing within consortium partnerships?',
    answer: 'We believe in open knowledge sharing. Through consortiums, we share learnings on technology implementation, cooperative governance, impact measurement, sector-specific challenges, and successful approaches. We participate in working groups, present at events, contribute to shared resources, and mentor emerging organizations.',
  },
  {
    question: 'How do consortium partnerships align with cooperative values?',
    answer: 'Consortiums embody cooperative principles: collaboration over competition, shared resources, democratic participation, and collective benefit. As a solidarity cooperative, we prioritize ecosystem strengthening over individual gain. Consortium partnerships allow us to build collective capacity, support peer organizations, and advance shared mission objectives.',
  },
];

export default function ConsortiumsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
    { name: 'Consortiums', url: 'https://vineralstechnologies.com/partners/consortiums' },
  ]);
  const faqSchema = createFAQSchema(CONSORTIUMS_FAQS);

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
              <Users className="w-16 h-16" />
            </div>

            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                For Consortiums & Networks
              </span>
            </div>

            <h1 className="hero-headline mb-6">
              Your Technology Partner for Collective Impact
            </h1>

            <p className="lead-text">
              Collaborative development capacity for industry associations, networks, and social
              economy organizations. Building technology that serves your entire ecosystem.
            </p>
          </div>
        </Section>

        {/* Why Consortiums Choose Us */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Why Consortiums Choose Vinerals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Network className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Aligned Values</h3>
                </div>
                <p className="text-sm text-gray-700">
                  As a solidarity cooperative, our structure aligns with your collaborative and
                  mission-driven values. We understand governance, consensus-building, and working
                  across multiple stakeholders.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Sector Expertise</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Deep experience in healthcare, food systems, sustainability, and social economy.
                  We speak the language of your industry and understand the unique challenges your
                  members face.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Flexible Engagement</h3>
                </div>
                <p className="text-sm text-gray-700">
                  From initial consulting to full implementation, we adapt to your consortium&apos;s
                  needs, timeline, and budget. Fixed-price, retainer, or project-based - whatever
                  works for you.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-700" />
                  <h3 className="font-bold text-gray-900">Funded Accessibility</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Subsidized programs backed by mission-aligned funding mean your consortium can afford
                  to build the technology infrastructure your members need without exhausting budgets.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Partnership Models */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Partnership Models
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Shared Platform Development</h3>
                <p className="text-gray-700 mb-4">
                  Build technology infrastructure that serves your entire network - a platform
                  all members can access, reducing individual costs while improving collective capacity.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Shared data collection and reporting system</li>
                      <li>• Member directory and collaboration tools</li>
                      <li>• Industry-specific SaaS for member use</li>
                      <li>• Supply chain coordination platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cost-sharing across membership</li>
                      <li>• Network effects and data aggregation</li>
                      <li>• Standardization and best practices</li>
                      <li>• Collective bargaining power</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Member Services Program</h3>
                <p className="text-gray-700 mb-4">
                  Establish Vinerals as your consortium&apos;s preferred technology partner. Members get
                  pre-negotiated rates, priority access, and support tailored to your sector.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Consortium negotiates subsidized program access</li>
                      <li>• Members access services individually</li>
                      <li>• Consortium provides oversight and support</li>
                      <li>• Aggregate reporting on member outcomes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Member Benefits:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Vetted, trusted technology partner</li>
                      <li>• Additional cost savings (10-20% off)</li>
                      <li>• Sector-specific expertise</li>
                      <li>• Peer learning from other members</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Sector Initiative Partnership</h3>
                <p className="text-gray-700 mb-4">
                  Collaborate on industry-wide technology initiatives - research projects, pilot
                  programs, or innovation challenges that advance your sector.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Project Types:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Industry standards and protocols</li>
                      <li>• Open-source tools for sector</li>
                      <li>• Research and feasibility studies</li>
                      <li>• Innovation pilots and demos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcomes:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Shared intellectual property</li>
                      <li>• White papers and case studies</li>
                      <li>• Proof-of-concept demonstrations</li>
                      <li>• Policy recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Technology Advisory Retainer</h3>
                <p className="text-gray-700 mb-4">
                  Ongoing technology advisory services for your consortium - strategic planning,
                  vendor evaluation, member support, and technical guidance.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Technology strategy development</li>
                      <li>• RFP creation and vendor evaluation</li>
                      <li>• Member technology needs assessment</li>
                      <li>• Ad-hoc technical consultation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Monthly Retainer:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• $2,000-5,000/month depending on scope</li>
                      <li>• Guaranteed availability and response time</li>
                      <li>• Quarterly strategy sessions</li>
                      <li>• Priority project access when needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Sector Experience */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-headline mb-8 text-center">
              Sector Experience
            </h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              We bring deep expertise working with industry associations, networks, and
              consortiums across multiple sectors:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Healthcare Associations</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Technology for clinic networks, professional associations, and health service
                  organizations.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shared EMR/patient portal infrastructure</li>
                  <li>• Continuing education platforms</li>
                  <li>• Quality metrics and reporting systems</li>
                  <li>• Member communication and collaboration</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Food & Agriculture Networks</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Technology for food hubs, farmer cooperatives, and sustainable agriculture
                  networks.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Supply chain coordination platforms</li>
                  <li>• Traceability and certification systems</li>
                  <li>• Farm-to-institution ordering</li>
                  <li>• Data aggregation for sector research</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Environmental & Sustainability</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Technology for environmental organizations, green building networks, and
                  climate action collaboratives.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shared carbon accounting tools</li>
                  <li>• Environmental data collection networks</li>
                  <li>• Impact measurement platforms</li>
                  <li>• Green certification management</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Social Economy Networks</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Technology for cooperative federations, social enterprise networks, and
                  community economic development organizations.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Member management and governance</li>
                  <li>• Resource sharing platforms</li>
                  <li>• Impact reporting and aggregation</li>
                  <li>• Peer learning and knowledge management</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Case Example */}
        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">
              Example: Regional Food Hub Network
            </h2>
            <div className="bg-primary-50 rounded-xl p-8">
              <p className="text-gray-700 mb-4">
                <strong>The Challenge:</strong> A network of 5 regional food hubs needed
                coordinated technology for sourcing, logistics, and sales but could not afford
                individual custom solutions.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Our Solution:</strong> Built a shared platform for farm-to-institution
                ordering with multi-hub support. Each hub maintained autonomy while benefiting
                from shared infrastructure and data.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The Results:</strong>
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600">•</span>
                  <span>70% cost savings vs individual solutions ($120K vs $400K+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600">•</span>
                  <span>200+ farms connected to institutional buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600">•</span>
                  <span>Aggregated data enabled sector-wide insights and advocacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600">•</span>
                  <span>Platform now available to additional hubs joining network</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                &quot;Vinerals understood our cooperative structure and built technology that
                strengthened our network rather than competing with it. The collaborative
                approach made all the difference.&quot;
              </p>
            </div>
          </div>
        </Section>

        {/* Pricing */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Consortium Pricing</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-gray-700 mb-6">
                Consortiums receive special pricing recognizing the collective nature of projects
                and alignment with social economy values:
              </p>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Advisory Retainer</div>
                  <p className="text-sm">$2,000-5,000/month - Ongoing strategy, member support, technical guidance</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Platform Development</div>
                  <p className="text-sm">$30,000-100,000 - Shared infrastructure serving entire network (cost per organization: $5K-20K)</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Member Services Program</div>
                  <p className="text-sm">Standard rates minus 10-20% for consortium members + no setup fees</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Research & Innovation</div>
                  <p className="text-sm">Grant-funded or consortium-funded - flexible pricing models available</p>
                </div>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  All pricing is flexible and can be structured for multi-year partnerships,
                  phased implementation, or grant-funded projects.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-headline mb-6">Let&apos;s Explore a Partnership</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Interested in partnering with Vinerals Technologies? Whether you are exploring a
              shared platform, member services program, or sector initiative, we would love to
              discuss how technology can advance your consortium&apos;s mission.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">First Steps</h3>
              <ol className="text-left text-sm text-gray-700 space-y-2 max-w-2xl mx-auto">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary-700">1.</span>
                  <span>Schedule a free discovery call to discuss your consortium&apos;s needs and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary-700">2.</span>
                  <span>We present partnership models and preliminary cost estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary-700">3.</span>
                  <span>If aligned, we develop a detailed proposal with member input</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-primary-700">4.</span>
                  <span>Pilot or phased rollout with clear milestones and evaluation</span>
                </li>
              </ol>
            </div>
            <a
              href="mailto:contact@vineralstechnologies.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Contact Consortium Partnership Team
            </a>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
