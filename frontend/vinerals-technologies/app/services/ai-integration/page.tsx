import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import StructuredData, { createServiceSchema } from '@/components/shared/StructuredData';
import { Brain, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Integration for Small Business | Practical AI Solutions | Vinerals Technologies',
  description: 'Implement AI in your business without the hype. Automation, analytics, LLM integration, and machine learning pointed at real jobs, with measurable ROI.',
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/ai-integration',
  },
};

export default function AIIntegrationPage() {
  const serviceDetails = {
    whatWeOffer: {
      title: 'Practical AI Applications',
      items: [
        'Document processing and data extraction',
        'Customer support chatbots with LLMs',
        'Predictive analytics and forecasting',
        'Content generation and summarization',
        'Workflow automation with AI decision-making',
        'Custom AI model development',
      ],
    },
    technologies: {
      title: 'AI Technologies',
      items: [
        'OpenAI GPT-4, Claude, Gemini',
        'LangChain, LlamaIndex',
        'TensorFlow, PyTorch',
        'Hugging Face models',
        'Vector databases (Pinecone, Weaviate)',
        'Fine-tuning and RAG systems',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'ROI-focused implementation',
        'Custom AI workflows',
        'API integrations',
        'Usage monitoring dashboard',
        'Cost optimization strategies',
        'Training and documentation',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Use case discovery',
      subtitle: 'Honest first',
      description: 'We find where AI can save time or money in your work, and we name the places where it will not.',
    },
    {
      number: 2,
      title: 'Proof of concept',
      subtitle: 'Validate first',
      description: 'A small prototype on your real data before anyone commits to a full build.',
    },
    {
      number: 3,
      title: 'Implementation',
      subtitle: 'Production-ready',
      description: 'Error handling, fallbacks when the model fails, and a clear line of sight on API usage costs.',
    },
    {
      number: 4,
      title: 'Tuning',
      subtitle: 'Ongoing',
      description: 'We watch how the team uses it, trim waste, and improve based on what actually happens in production.',
    },
  ];

  const serviceSchema = createServiceSchema({
    name: 'AI & Machine Learning Integration',
    description: 'Practical AI solutions for business automation, analytics, and intelligent workflows. ROI-focused implementations sized to the job, not the hype.',
  });

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="AI & Machine Learning Integration"
          title="AI that earns its keep in your business."
          description="We pick the few jobs where a model saves time or money, build those properly, and say so when AI is the wrong tool."
          icon={<Brain className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Our take on AI</h3>
                  <p className="text-gray-700">
                    We do not build AI for its own sake. Every project has to answer a plain question: will this save time, cut costs, or improve outcomes you can measure? If the answer is no, we say so upfront.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="section-headline mb-6 text-center">
              Jobs where AI usually pays back
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Document processing</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Pull fields from invoices, contracts, and forms so nobody re-types them row by row. A person still checks the uncertain ones.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Typical win: hours back each week on intake work
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Support triage</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Sort and draft replies for common questions, then hand off to a human when the answer is unclear or high-stakes.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Typical win: fewer repetitive tickets on the team&apos;s plate
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">First drafts</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Product descriptions, email drafts, report summaries. The model starts; a person edits before anything ships.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Typical win: faster path from blank page to a usable draft
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Forecasting and flags</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Demand signals, anomaly alerts, and patterns in data you already collect, when the history is clean enough to trust.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Typical win: fewer surprises in inventory and planning
                </p>
              </div>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />
        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Engagement models</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidised tracks available</div>
                <div className="text-gray-600">Mission-aligned funding can apply for qualifying AI work.</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We run several tracks depending on your stage and eligibility. Government programmes and impact funding can cover part of qualifying engagements.
                </p>
                <p>
                  <strong>Phase the work.</strong> Start with a small proof of concept on your data, then expand only if the results hold. Scope follows the job, not a platform pitch.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>One note on costs.</strong> Model API usage (OpenAI, Anthropic, and the rest) is billed at usage and stays separate from project fees.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Book a consultation. We will tell you within a week if a programme fits.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
