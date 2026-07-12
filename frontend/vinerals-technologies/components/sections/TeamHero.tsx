'use client';

import React from 'react';
import AboutHero from './AboutHero';

interface TeamHeroProps {
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

const TeamHero: React.FC<TeamHeroProps> = ({
  badge = 'Meet the Team',
  ...rest
}) => <AboutHero badge={badge} kicker="L'atelier" {...rest} />;

export default TeamHero;
