'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface CooperativeHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon: React.ReactNode;
  stats?: { value: string; label: string }[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const CooperativeHero: React.FC<CooperativeHeroProps> = ({
  badge = 'Our Cooperative Model',
  ...rest
}) => <AboutHero badge={badge} kicker="Coopérative" {...rest} />;

export default CooperativeHero;
