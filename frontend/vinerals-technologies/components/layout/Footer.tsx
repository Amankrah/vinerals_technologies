'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import Button from '@/components/ui/Button';
import { NAVIGATION, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

/**
 * Footer — closing colophon. Forest block holding the call-to-action,
 * then an ink-deep masthead reprise with sitemap columns and a magazine
 * imprint line at the foot.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* ============================================================
          DERNIÈRE PAGE — invitation block
          ============================================================ */}
      <section className="relative bg-[var(--primary-700)] text-[var(--cream)] overflow-hidden grain">
        {/* Hand-drawn arc ornament */}
        <svg
          aria-hidden
          className="absolute -top-24 -right-24 w-[420px] h-[420px] opacity-15"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M 20 100 Q 100 -30, 180 100 Q 100 230, 20 100 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 40 100 Q 100 0, 160 100 Q 100 200, 40 100 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>

        <div className="above-grain relative container mx-auto py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/70 mb-8 flex items-center gap-3">
              <span aria-hidden className="w-7 h-px bg-secondary-400" />
              Fin · Begin again
            </div>

            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-[var(--cream)] mb-4 tracking-tight">
              <em className="text-secondary-300">Et si</em> votre logiciel
              <br />
              était fait <em className="text-secondary-300">à la main?</em>
            </h2>
            <p className="font-display italic text-xl md:text-2xl text-white/60 mb-10">
              What if your software were made by hand?
            </p>

            <p className="lead-text text-white/80 max-w-xl mb-12">
              Then it would fit the work you actually do, instead of bending
              you around someone else&apos;s product. The first conversation is
              free. We sit with your problem and tell you honestly whether
              software is even the right move.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Button
                href="/contact"
                size="lg"
                variant="accent"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Book a free consultation
              </Button>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-white/80 hover:text-[var(--cream)] transition-colors pt-4"
              >
                <span className="squiggle-forest">See our work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hairline separator into the imprint */}
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
      </section>

      {/* ============================================================
          IMPRINT — sitemap colophon
          ============================================================ */}
      <div className="bg-[var(--ink)] text-[var(--cream)] relative">
        {/* Editorial section-break fleuron — sits on the boundary between forest and ink. */}
        <div
          aria-hidden
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 bg-[var(--ink)] text-secondary-400 font-display italic text-3xl leading-none select-none"
        >
          &#10086;
        </div>
        <div className="container mx-auto py-20">
          {/* Masthead row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10 border-b border-white/15">
            <div>
              <Logo variant="light" size="lg" />
              <ul className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/60 space-y-2 leading-relaxed">
                <li className="text-white/80">Coopérative de solidarité</li>
                <li>Worker- &amp; community-owned</li>
                <li>Founded {SITE_CONFIG.foundingYear} · Bilingue EN / FR</li>
                <li>Working across Canada</li>
              </ul>
            </div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/60 space-y-3 md:text-right">
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary-400" />
                {SITE_CONFIG.location}
              </div>
              <div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[var(--cream)] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, '')}`}
                  className="hover:text-[var(--cream)] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Sitemap columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-12 pb-16">
            <FooterColumn
              eyebrow="01 · Métier"
              title="Services"
              links={NAVIGATION.footer.services}
            />
            <FooterColumn
              eyebrow="02 · Maison"
              title="The Cooperative"
              links={NAVIGATION.footer.company}
            />
            <FooterColumn
              eyebrow="03 · Notes"
              title="Resources"
              links={NAVIGATION.footer.resources}
            />
            <FooterColumn
              eyebrow="04 · Correspondance"
              title="Connect"
              links={NAVIGATION.footer.connect}
            />
          </div>

          {/* Colophon — magazine imprint line */}
          <div className="pt-10 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/60 leading-relaxed">
              © {currentYear} {SITE_CONFIG.name} ·{' '}
              <span className="text-white/90">Coopérative de solidarité</span>{' '}
              · Set in Cormorant, Spectral &amp; DM Mono · Made in Tio&apos;tia:ke / Montréal
            </div>

            <div className="flex items-center gap-3">
              <SocialLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={SOCIAL_LINKS.github} label="GitHub">
                <Github className="w-4 h-4" />
              </SocialLink>
              <SocialLink href={`mailto:${SITE_CONFIG.email}`} label="Email" external={false}>
                <Mail className="w-4 h-4" />
              </SocialLink>
            </div>

            <div className="flex items-center gap-6 font-mono text-[0.65rem] uppercase tracking-[0.22em]">
              {NAVIGATION.footer.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-[var(--cream)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type LinkItem = { name: string; href: string; external?: boolean };

const FooterColumn: React.FC<{
  eyebrow: string;
  title: string;
  links: readonly LinkItem[];
}> = ({ eyebrow, title, links }) => (
  <div>
    <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-400 mb-3">
      {eyebrow}
    </div>
    <h3 className="font-display italic text-2xl text-[var(--cream)] mb-6 leading-tight">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          {'external' in link && link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[var(--cream)] transition-colors text-[0.95rem] font-display inline-flex items-center gap-1.5"
            >
              {link.name}
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-white/70 hover:text-[var(--cream)] transition-colors text-[0.95rem] font-display"
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink: React.FC<{
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}> = ({ href, label, external = true, children }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/70 hover:text-[var(--cream)] hover:border-secondary-400 transition-colors"
    aria-label={label}
  >
    {children}
  </a>
);

export default Footer;
