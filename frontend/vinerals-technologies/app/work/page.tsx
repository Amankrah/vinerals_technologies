'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WorkHero from '@/components/sections/WorkHero';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import { Briefcase, Heart, Wheat, Leaf } from 'lucide-react';
import { WORK_STATS, CAPABILITIES, PROCESS_STEPS } from '@/lib/constants';

const PLACEHOLDER_PROJECTS = [
  {
    id: 1,
    title: 'Healthcare Innovation',
    industry: 'Healthcare',
    icon: Heart,
    color: 'from-blue-100 to-blue-200',
  },
  {
    id: 2,
    title: 'Food Systems Platform',
    industry: 'Food Systems',
    icon: Wheat,
    color: 'from-green-100 to-green-200',
  },
  {
    id: 3,
    title: 'Sustainability Dashboard',
    industry: 'Sustainability',
    icon: Leaf,
    color: 'from-emerald-100 to-emerald-200',
  },
] as const;

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <WorkHero
          badge="Portfolio & Case Studies"
          title="Real Projects, Real Results"
          highlightedWord="Real Results"
          description="We don't just build software—we solve problems. Here are some of the projects we've delivered for SMEs, non-profits, and social enterprises across Quebec and Canada."
          icon={<Briefcase className="w-8 h-8" />}
          stats={[
            { value: '12+', label: 'Completed Projects' },
            { value: '100%', label: 'Client Satisfaction' },
          ]}
          primaryCTA={{ label: 'Start Your Project', href: '/contact' }}
          secondaryCTA={{ label: 'View All Projects', href: '#projects' }}
        />
        <StatsSection stats={WORK_STATS} />
        <ProjectsGrid projects={PLACEHOLDER_PROJECTS} />
        <CapabilitiesSection capabilities={CAPABILITIES} />
        <ProcessSection
          title="How We Work"
          description="Our transparent, collaborative process ensures you're involved every step of the way."
          steps={PROCESS_STEPS}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
