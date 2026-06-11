'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface MissionHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon: React.ReactNode;
  stats?: { value: string; label: string }[];
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const MissionHero: React.FC<MissionHeroProps> = ({
  badge = 'Our Mission & Values',
  ...rest
}) => <AboutHero badge={badge} kicker="Manifeste" {...rest} />;

export default MissionHero;
