import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import { projects, getProjectBySlug } from '@/content/projects';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Vinerals Technologies',
    };
  }

  return {
    title: `${project.title} | Case Study | Vinerals Technologies`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const industryColors = {
    healthcare: 'text-blue-700 bg-blue-100',
    'food-systems': 'text-green-700 bg-green-100',
    sustainability: 'text-emerald-700 bg-emerald-100',
    'non-profit': 'text-purple-700 bg-purple-100',
    other: 'text-gray-700 bg-gray-100',
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${industryColors[project.industry]}`}>
                {project.industry.charAt(0).toUpperCase() + project.industry.slice(1).replace('-', ' ')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-700 mb-8">
              <div>
                <span className="font-semibold">Client:</span> {project.client}
              </div>
              <div>
                <span className="font-semibold">Year:</span> {project.year}
              </div>
              <div>
                <span className="font-semibold">Services:</span> {project.services.join(', ')}
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </Section>

        {/* Hero Image Placeholder */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-6xl mx-auto">
            <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-3xl font-bold text-primary-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-primary-700 text-lg">{project.client}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Results Section */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-8 text-center">Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary-900 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">
                    {result.value}
                  </div>
                  <p className="text-gray-700">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Challenge & Solution */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section background="white" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technologies */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-headline mb-8 text-center">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonial */}
        {project.testimonial && (
          <Section background="white" paddingY="lg">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-50 rounded-xl p-8 md:p-12">
                <div className="text-4xl text-primary-700 mb-4">&ldquo;</div>
                <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-6 leading-relaxed">
                  {project.testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center text-primary-900 font-bold text-xl">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                    <div className="text-gray-700">
                      {project.testimonial.role}, {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* More Projects */}
        <Section background="gray" paddingY="lg">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-headline mb-6">Explore More Projects</h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
