'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full">
              <Shield className="w-8 h-8 text-primary-700" />
            </div>
            <h1 className="hero-headline mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last Updated: January 14, 2025</p>
            <p className="lead-text max-w-3xl mx-auto">
              At Vinerals Technologies, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </Section>

        {/* Information Collection */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Fill out our contact form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or phone</li>
                  <li>Use our website (through cookies and analytics)</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and role</li>
                  <li>Project details and budget information</li>
                  <li>Website usage data (pages visited, time spent, device information)</li>
                  <li>IP address and browser type</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* How We Use Your Information */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver services you&apos;ve requested</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Information Sharing & Data Security */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Information Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, rent, or share your personal information with third parties except:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To service providers who assist in our operations (e.g., email services, analytics tools)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer (merger, acquisition, etc.)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>SSL encryption for data transmission</li>
                <li>Secure storage of contact information</li>
                <li>Limited access to personal data</li>
                <li>Regular security assessments</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </Section>

        {/* Cookies & Third-Party Services */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve website performance</li>
                <li>Analyze traffic patterns</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use third-party services such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Google Analytics:</strong> For website analytics and usage statistics</li>
                <li><strong>Email service providers:</strong> For sending newsletters and transactional emails</li>
                <li><strong>Hosting providers:</strong> For website hosting and data storage</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These services have their own privacy policies and may collect information about your use of our website.
              </p>
            </div>
          </div>
        </Section>

        {/* Your Rights & Data Retention */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:contact@vineralstechnologies.com" className="text-primary-700 hover:underline font-semibold">
                  contact@vineralstechnologies.com
                </a>
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law. Contact form submissions and email communications are typically retained for 3 years.
              </p>
            </div>
          </div>
        </Section>

        {/* Additional Policies */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than Canada. These countries may have different data protection laws. By using our services, you consent to such transfers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email. The &quot;Last Updated&quot; date at the top of this page indicates when the policy was last revised.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact Information */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                12. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions or concerns about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <p className="text-gray-900 font-bold mb-3">
                  Vinerals Technologies
                </p>
                <p className="text-gray-700 mb-2">
                  Email:{' '}
                  <a href="mailto:contact@vineralstechnologies.com" className="text-primary-700 hover:text-primary-800 font-semibold hover:underline">
                    contact@vineralstechnologies.com
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  General inquiries:{' '}
                  <a href="mailto:contact@vineralstechnologies.com" className="text-primary-700 hover:text-primary-800 font-semibold hover:underline">
                    contact@vineralstechnologies.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Location: Montreal, Quebec, Canada
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600">
                  This privacy policy is governed by the laws of Quebec and Canada, including compliance with PIPEDA (Personal Information Protection and Electronic Documents Act).
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Bottom Navigation */}
        <Section background="gray" paddingY="sm">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-primary-700 hover:text-primary-800 font-semibold">
              ← Back to Home
            </Link>
            <Link href="/legal/terms" className="text-primary-700 hover:text-primary-800 font-semibold">
              View Terms of Service →
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
