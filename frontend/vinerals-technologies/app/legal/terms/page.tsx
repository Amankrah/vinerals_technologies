'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full">
              <FileText className="w-8 h-8 text-primary-700" />
            </div>
            <h1 className="hero-headline mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-4">Last Updated: January 14, 2025</p>
            <p className="lead-text max-w-3xl mx-auto">
              These Terms of Service govern your use of the Vinerals Technologies website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>
        </Section>

        {/* Acceptance & About */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website (vinerals.tech) and our services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. About Vinerals Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vinerals Technologies is a solidarity cooperative incorporated under the laws of Quebec, Canada. We provide custom software development, AI integration, mobile application development, and data systems services to businesses and organizations.
              </p>
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Custom software development</li>
                <li>AI and machine learning integration</li>
                <li>Mobile application development</li>
                <li>Data systems and analytics</li>
                <li>Technology consulting and advisory services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Specific terms for professional services will be outlined in individual service agreements or statements of work.
              </p>
            </div>
          </div>
        </Section>

        {/* Website Use */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Website Use
              </h2>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  4.1 Permitted Use
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may use our website to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Learn about our services</li>
                  <li>Contact us for inquiries</li>
                  <li>Access resources and content we provide</li>
                  <li>Submit project requests</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  4.2 Prohibited Use
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use our website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our website or services</li>
                  <li>Scrape, harvest, or collect data from our website without permission</li>
                  <li>Impersonate any person or entity</li>
                  <li>Transmit malware, viruses, or harmful code</li>
                  <li>Use our website to spam or send unsolicited communications</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Intellectual Property */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Intellectual Property
              </h2>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5.1 Website Content
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Vinerals Technologies or its content suppliers and is protected by Canadian and international copyright laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5.2 Client Work Product
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unless otherwise agreed in writing, clients retain full ownership of custom software, code, and deliverables we create for them upon full payment. This is a core principle of our cooperative model.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5.3 Pre-existing Materials
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We retain ownership of our pre-existing tools, frameworks, and methodologies. Clients receive a license to use these materials as incorporated into their deliverables.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Professional Services Terms */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Professional Services Terms
              </h2>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  6.1 Service Agreements
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Professional services will be provided under separate written agreements that detail scope, timeline, pricing, and deliverables. These agreements will take precedence over these general terms for specific projects.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  6.2 Pricing and Payment
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pricing is provided in service agreements. Payment terms are typically net 15-30 days from invoice date unless otherwise agreed. Late payments may incur interest charges at the rate of 1.5% per month or the maximum allowed by law, whichever is less.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  6.3 Changes to Scope
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Changes to project scope must be agreed upon in writing through a change order process. Additional work beyond the original scope may result in additional fees.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Warranties & Disclaimers */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Warranties and Disclaimers
              </h2>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  7.1 Service Warranties
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We warrant that services will be performed in a professional and workmanlike manner. Specific warranties for deliverables will be outlined in service agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  7.2 Website Disclaimer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Legal Terms */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, Vinerals Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim related to our services shall not exceed the amount paid by you for those services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Vinerals Technologies, its members, employees, and contractors from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our website or services or your violation of these terms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. Confidentiality
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We will maintain the confidentiality of information you share with us during the course of our relationship. Specific confidentiality terms will be outlined in service agreements or non-disclosure agreements as appropriate.
              </p>
            </div>
          </div>
        </Section>

        {/* Termination & Third-Party Links */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                11. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to our website at any time, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Service agreements may be terminated as outlined in those specific agreements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                12. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party websites is at your own risk.
              </p>
            </div>
          </div>
        </Section>

        {/* Administrative Terms */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                13. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website after changes are posted constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                14. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts of Quebec.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                15. Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                16. Entire Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Vinerals Technologies regarding your use of our website and services.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact Information */}
        <Section background="white" paddingY="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                17. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <p className="text-gray-900 font-bold mb-3">
                  Vinerals Technologies
                </p>
                <p className="text-gray-700 mb-2">
                  Email:{' '}
                  <a href="mailto:contact@vinerals.ca" className="text-primary-700 hover:text-primary-800 font-semibold hover:underline">
                    contact@vinerals.ca
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  Legal inquiries:{' '}
                  <a href="mailto:contact@vinerals.ca" className="text-primary-700 hover:text-primary-800 font-semibold hover:underline">
                    contact@vinerals.ca
                  </a>
                </p>
                <p className="text-gray-700">
                  Location: Montreal, Quebec, Canada
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
            <Link href="/legal/privacy" className="text-primary-700 hover:text-primary-800 font-semibold">
              View Privacy Policy →
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
