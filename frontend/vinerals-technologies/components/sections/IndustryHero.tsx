'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface IndustryHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon: React.ReactNode;
  stats?: { value: string; label: string }[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const IndustryHero: React.FC<IndustryHeroProps> = ({
  badge = 'Industries We Serve',
  ...rest
}) => <AboutHero badge={badge} kicker="Secteur" {...rest} />;

export default IndustryHero;
