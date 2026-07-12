'use client';

import React from 'react';
import ServiceHero from './ServiceHero';

interface WorkHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const WorkHero: React.FC<WorkHeroProps> = ({
  badge = 'Portfolio & Case Studies',
  ...rest
}) => <ServiceHero badge={badge} {...rest} />;

export default WorkHero;
