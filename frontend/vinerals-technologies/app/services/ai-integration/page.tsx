import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import { Brain, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Integration for Small Business | Practical AI Solutions | Vinerals Technologies',
  description: 'Implement AI in your business without the hype. Automation, analytics, LLM integration, and machine learning solutions designed for SME budgets and real ROI.',
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
      number: '1',
      title: 'Use Case Discovery',
      description: 'We identify where AI can actually save time or money - not where it is just trendy.',
    },
    {
      number: '2',
      title: 'Proof of Concept',
      description: 'Quick prototype to validate feasibility and ROI before full investment.',
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Production-ready AI integration with proper error handling and fallbacks.',
    },
    {
      number: '4',
      title: 'Optimization',
      description: 'Monitor performance, reduce costs, and iterate based on real usage data.',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="AI & Machine Learning Integration"
          title="AI That Actually Works for Your Business"
          description="Cut through the hype. We implement AI solutions with clear ROI - not science projects."
          icon={<Brain className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Our AI Philosophy</h3>
                  <p className="text-gray-700">
                    We do not believe in AI for AI sake. Every implementation must pass the ROI test:
                    Will this save time, reduce costs, or improve outcomes in a measurable way? If not, we will tell you.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="section-headline mb-6 text-center">
              Real-World AI Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Document Processing</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Extract data from invoices, contracts, or forms - automatically.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  ROI: 80% reduction in manual data entry
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Customer Support Automation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  AI chatbots that actually understand context and provide helpful answers.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  ROI: Handle 60% of tier-1 support tickets
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Content Generation</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Product descriptions, email drafts, or report summaries - in seconds.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  ROI: 5x faster content creation
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Forecast demand, detect anomalies, or identify patterns in your data.
                </p>
                <p className="text-sm text-secondary-700 font-medium">
                  ROI: Better inventory planning, less waste
                </p>
              </div>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />
        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Pricing</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary-900 mb-2">$50-150/hour</div>
                <div className="text-gray-600">Based on AI complexity and integration scope</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Proof of Concept:</strong> $2,500 - $7,500 (1-2 weeks) to validate feasibility
                </p>
                <p>
                  <strong>Full Implementation:</strong> $10,000 - $50,000 depending on complexity
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> AI API costs (OpenAI, etc.) are separate and typically $100-500/month based on usage.
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
