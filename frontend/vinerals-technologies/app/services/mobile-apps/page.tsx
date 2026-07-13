import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import StructuredData, { createServiceSchema } from '@/components/shared/StructuredData';
import { Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile App Development Montreal | iOS & Android | Vinerals Technologies',
  description: 'Cross-platform mobile applications for iOS and Android. React Native, Progressive Web Apps, and native development. Montreal-based mobile app developers.',
  alternates: {
    canonical: 'https://vineralstechnologies.com/services/mobile-apps',
  },
};

const serviceSchema = createServiceSchema({
  name: 'Mobile Application Development',
  description: 'Cross-platform mobile applications for iOS and Android. React Native development and Progressive Web Apps for business needs.',
});

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
      number: 1,
      title: 'Platform strategy',
      subtitle: 'Clear choice',
      description: 'Cross-platform, native, or a PWA. We pick based on your users, timeline, and what the build can carry.',
    },
    {
      number: 2,
      title: 'Design & prototype',
      subtitle: 'On a real phone',
      description: 'Mobile-first screens and interactive prototypes you can tap through before production code starts.',
    },
    {
      number: 3,
      title: 'Development',
      subtitle: 'Visible progress',
      description: 'Two-week sprints with TestFlight and beta builds early, so feedback starts before launch.',
    },
    {
      number: 4,
      title: 'Launch',
      subtitle: 'Supported',
      description: 'Store submission, help with review notes when they come, and monitoring once you are live.',
    },
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Mobile Application Development"
          title="Apps your customers will actually keep on the home screen."
          description="Field tools and customer apps for iOS, Android, and the web. Fast to load, clear to use, built to last past launch week."
          icon={<Smartphone className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-headline mb-6">
              Which platform makes sense for you?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Cross-platform</h3>
                <p className="text-sm text-gray-700 mb-4">
                  One codebase, two apps. The practical way to ship on iOS and Android from a single build.
                </p>
                <div className="text-sm">
                  <div className="text-secondary-700 font-medium mb-1">Best for:</div>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• Standard app functionality</li>
                    <li>• Most business use cases</li>
                    <li>• Getting to market quickly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Progressive Web App</h3>
                <p className="text-sm text-gray-700 mb-4">
                  A web app that behaves like a native one. No App Store review cycle, no install step for many users.
                </p>
                <div className="text-sm">
                  <div className="text-secondary-700 font-medium mb-1">Best for:</div>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• Content-heavy apps</li>
                    <li>• Frequent updates</li>
                    <li>• When search visibility matters</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-3">Native apps</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Separate iOS and Android codebases when you need the deepest hardware access or the tightest performance.
                </p>
                <div className="text-sm">
                  <div className="text-secondary-700 font-medium mb-1">Best for:</div>
                  <ul className="text-gray-600 space-y-1 text-xs">
                    <li>• Complex animations</li>
                    <li>• Deep hardware integration</li>
                    <li>• Performance-critical apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <ServiceDetails {...serviceDetails} />
        <ProcessSection steps={processSteps} />

        <Section background="white" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Engagement models</h2>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidised tracks available</div>
                <div className="text-gray-600">Mission-aligned funding can apply for qualifying mobile builds.</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We run several tracks depending on your stage and eligibility. Government programmes and impact funding can cover part of qualifying work.
                </p>
                <p>
                  <strong>Platform choice comes first.</strong> Cross-platform, PWA, or native. We help you pick for your users and your constraints, instead of pushing whatever is easiest for us.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  Book a consultation. We will tell you within a week if a programme fits.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section background="gray" paddingY="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-headline mb-6 text-center">Features we build often</h2>
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
