import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import { Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile App Development Montreal | iOS & Android | Vinerals Technologies',
  description: 'Cross-platform mobile applications for iOS and Android. React Native, Progressive Web Apps, and native development. Montreal-based mobile app developers.',
};

export default function MobileAppsPage() {
  const serviceDetails = {
    whatWeOffer: {
      title: 'Mobile Solutions',
      items: [
        'Cross-platform apps (iOS + Android)',
        'Progressive Web Apps (PWAs)',
        'Native iOS and Android development',
        'Mobile-first web applications',
        'App Store submission and support',
        'Backend API development',
      ],
    },
    technologies: {
      title: 'Mobile Technologies',
      items: [
        'React Native, Expo',
        'Flutter (Dart)',
        'Swift, SwiftUI (iOS)',
        'Kotlin (Android)',
        'Progressive Web App (PWA)',
        'Firebase, Supabase',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Fully functional iOS and Android apps',
        'App Store and Play Store presence',
        'Push notification setup',
        'Offline functionality',
        'Analytics integration',
        'Maintenance and update support',
      ],
    },
  };

  const processSteps = [
    {
      number: '1',
      title: 'Platform Strategy',
      description: 'We help you decide: cross-platform, native, or PWA based on your users and budget.',
    },
    {
      number: '2',
      title: 'Design & Prototype',
      description: 'Mobile-specific UX/UI design with interactive prototypes for validation.',
    },
    {
      number: '3',
      title: 'Development',
      description: 'Agile sprints with TestFlight/beta builds for early feedback.',
    },
    {
      number: '4',
      title: 'Launch',
      description: 'App Store submission, approval support, and post-launch monitoring.',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Mobile Application Development"
          title="Apps Your Customers Will Actually Use"
          description="Reach your customers and team wherever they are with fast, intuitive mobile applications."
          icon={<Smartphone className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline mb-6">
              Which Mobile Platform?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Cross-Platform</h3>
                <p className="text-sm text-gray-700 mb-4">
                  One codebase, iOS and Android apps. Fast and cost-effective.
                </p>
                <div className="text-sm">
                  <div className="text-secondary-700 font-medium mb-1">Best for:</div>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• Standard app functionality</li>
                    <li>• Limited budget</li>
                    <li>• Faster time to market</li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-primary-900">~$25K-60K</div>
                  <div className="text-xs text-gray-600">Typical project cost</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Progressive Web App</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Web app that feels native. No app store required.
                </p>
                <div className="text-sm">
                  <div className="text-secondary-700 font-medium mb-1">Best for:</div>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• Content-heavy apps</li>
                    <li>• Frequent updates</li>
                    <li>• SEO important</li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-primary-900">~$15K-40K</div>
                  <div className="text-xs text-gray-600">Typical project cost</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Native Apps</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Separate iOS and Android codebases. Maximum performance.
                </p>
                <div className="text-sm">
                  <div className="text-secondary-700 font-medium mb-1">Best for:</div>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• Complex animations</li>
                    <li>• Hardware integration</li>
                    <li>• Performance-critical apps</li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-primary-900">~$50K-120K</div>
                  <div className="text-xs text-gray-600">Typical project cost</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />
        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Common Features We Build</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>User authentication (email, social, biometric)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Push notifications and in-app messaging</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Payment processing (Stripe, Apple Pay, etc.)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Real-time data sync and offline mode</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Camera, location, and sensor access</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Social sharing and deep linking</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Analytics and crash reporting</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-secondary-600">✓</span>
                  <span>Admin dashboards and content management</span>
                </div>
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
