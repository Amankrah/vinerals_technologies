'use client';

import React from 'react';
import ServiceHero from './ServiceHero';

interface IndustryHeroProps {
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

/**
 * IndustryHero — sector masthead. Shares the photographic ServiceHero
 * so /industries matches /services visually.
 */
const IndustryHero: React.FC<IndustryHeroProps> = ({
  badge = 'Industries We Serve',
  ...rest
}) => <ServiceHero badge={badge} {...rest} />;

export default IndustryHero;
