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
  description: 'Implement AI in your business without the hype. Automation, analytics, LLM integration, and machine learning solutions designed for SME budgets and real ROI.',
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
      subtitle: 'ROI-focused',
      description: 'We find the corners of your work where AI actually saves money or time, and we’re honest about the corners where it doesn’t.',
    },
    {
      number: 2,
      title: 'Proof of concept',
      subtitle: 'Validate first',
      description: 'A small, fast prototype that proves the idea works in your data before anyone signs a six-figure cheque.',
    },
    {
      number: 3,
      title: 'Implementation',
      subtitle: 'Production-ready',
      description: 'Built for the real world. Proper error handling, sensible fallbacks for when the model fails, and a clear budget for every API call.',
    },
    {
      number: 4,
      title: 'Optimisation',
      subtitle: 'Continuous',
      description: 'We watch usage, cut costs where we can, and iterate based on what your team actually does with it.',
    },
  ];

  const serviceSchema = createServiceSchema({
    name: 'AI & Machine Learning Integration',
    description: 'Practical AI solutions for business automation, analytics, and intelligent workflows. ROI-focused implementations designed for SME budgets.',
  });

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="AI & Machine Learning Integration"
          title="AI that earns its keep in your business."
          description="No hype, no science projects. We pick the few use cases where AI actually saves you money or time, and we build those properly."
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
                    We don&apos;t do AI for its own sake. Every project has to pass the same question:
                    will this measurably save time, cut costs, or improve outcomes? If the answer is no, we&apos;ll say so and save you the budget.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="section-headline mb-6 text-center">
              Use cases where AI actually pays back
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Document processing</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Pulling data out of invoices, contracts, and forms automatically, so a person isn&apos;t doing it row by row.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Payback: roughly 80% less manual data entry
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Customer support automation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Chatbots that understand context, hand off when they should, and stop sending people in circles.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Payback: about 60% of tier-1 tickets resolved without a human
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Content generation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Product descriptions, email drafts, report summaries. Drafted by AI, polished by a human in a fraction of the time.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Payback: 5× faster from blank page to publish
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Predictive analytics</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Forecasting demand, flagging anomalies, surfacing the pattern hiding in the data you already collect.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  Payback: better inventory planning, less waste, fewer fire drills
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
                <div className="text-gray-600">Mission-aligned funding brings AI work inside reach for more businesses.</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We run several tracks depending on your stage and eligibility. Government programmes and impact funding cover part of qualifying AI engagements.
                </p>
                <p>
                  <strong>Phase the work.</strong> Start with a proof of concept that pressure-tests ROI, then scale to the full build. Structured around your budget and your timeline, not ours.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>One footnote.</strong> AI API costs (OpenAI, Anthropic, and the rest) are billed at usage and stay separate from project fees.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Book a free consultation. We&apos;ll tell you within a week if a programme fits.
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
