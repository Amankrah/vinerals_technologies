'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface ResourcesHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  stats?: { value: string; label: string }[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const ResourcesHero: React.FC<ResourcesHeroProps> = ({
  badge = 'Resources & Learning',
  ...rest
}) => <AboutHero badge={badge} kicker="Notes" {...rest} />;

export default ResourcesHero;
