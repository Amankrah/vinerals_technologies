import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Book a Free Consultation | Vinerals Technologies',
  description: 'Book a free consultation for your software or AI project. A Montréal development team, ready to talk. No deck, no pressure, no obligation.',
};

export default function ContactPage() {

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let&apos;s talk about<br />
              your project.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A free first conversation. Honest advice. No pressure.
            </p>
          </div>
        </Section>

        {/* Contact Info Section */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-lg text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-2xl mb-6">
                <Mail className="w-10 h-10 text-primary-700" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Email
              </h2>

              <a
                href={`mailto:contact@vineralstechnologies.com?subject=${encodeURIComponent('Project Inquiry - Vinerals Technologies')}&body=${encodeURIComponent(`Hello Vinerals Technologies Team,

I am reaching out to discuss a potential project opportunity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT INQUIRY

Name:           [Your Name]
Company:        [Your Company]
Email:          [Your Email]

Service Type:   [Custom Software / AI Integration / Mobile App / Data Systems]
Budget Range:   [<$10K / $10-25K / $25-50K / $50K+ / Not sure]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT DESCRIPTION

[Please describe your project needs, goals, and timeline here...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This inquiry was submitted via https://vineralstechnologies.com/contact

I look forward to hearing from you.

Best regards`)}`}
                className="text-2xl text-primary-700 hover:text-primary-800 hover:underline font-medium"
              >
                contact@vineralstechnologies.com
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                A few quick questions, answered.
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What happens after I get in touch?
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Send us an email. We&apos;ll get back to you within 24 hours to ask a few questions and set up a free consultation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Do you work with clients outside Montréal?
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Most of our work is with clients across Canada and beyond, conducted remotely. We&apos;ve built the rhythms that make that work well.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What&apos;s your minimum project size?
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Projects usually start around $10K. We&apos;re flexible with non-profits and social enterprises, and we&apos;ll be straight about whether a smaller scope makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
