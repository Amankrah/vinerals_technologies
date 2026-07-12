'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface PartnersHeroProps {
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

const PartnersHero: React.FC<PartnersHeroProps> = ({
  badge = 'Partnership Opportunities',
  ...rest
}) => <AboutHero badge={badge} kicker="Alliance" {...rest} />;

export default PartnersHero;
