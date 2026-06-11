'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface WorkHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon: React.ReactNode;
  stats?: { value: string; label: string }[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const WorkHero: React.FC<WorkHeroProps> = ({
  badge = 'Portfolio & Case Studies',
  ...rest
}) => <AboutHero badge={badge} kicker="Dossier" {...rest} />;

export default WorkHero;
