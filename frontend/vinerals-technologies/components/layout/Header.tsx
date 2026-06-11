'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Logo from '@/components/shared/Logo';
import { NAVIGATION } from '@/lib/constants';

/**
 * Header — magazine masthead. A double rule sits beneath; the logo
 * occupies the spine; nav items are mono small-caps; dropdowns open
 * as paper plates with hairline rules.
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        // Opaque cream once scrolled — never bleeds through onto dark sections
        // (the footer's forest block was washing out nav text under the previous /95 + blur).
        scrolled
          ? 'bg-[var(--cream)] shadow-paper'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      {/* Editorial dateline strip */}
      <div className="hidden md:block border-b border-[var(--ink-hairline)]/40">
        <div className="container mx-auto flex items-center justify-between py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
          <span>Vol. I · Montréal · Bilingue EN / FR</span>
          <span>Une coopérative de solidarité</span>
        </div>
      </div>

      <nav className="container mx-auto py-5 md:py-6 relative">
        <div className="flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop nav — small-caps mono labels with squiggle on hover */}
          <div className="hidden lg:flex items-center gap-10">
            {NAVIGATION.main.map((item) => (
              <div key={item.name} className="relative">
                {'dropdown' in item ? (
                  <div className="group">
                    <Link
                      href={item.href}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-soft)] hover:text-primary-700 transition-colors py-2 inline-flex items-baseline gap-1.5"
                    >
                      <span className="squiggle">{item.name}</span>
                      <span aria-hidden className="text-[0.6em] text-[var(--ink-faint)] group-hover:text-secondary-500">+</span>
                    </Link>
                    {/* Dropdown plate */}
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="w-72 bg-[var(--paper)] border border-[var(--ink-hairline)]/40 shadow-card py-2 grain">
                        {item.dropdown.map((subItem, idx) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="above-grain block px-5 py-3 text-[var(--ink-soft)] hover:text-primary-700 hover:bg-[var(--cream)] transition-colors font-display text-base border-b last:border-b-0 border-[var(--ink-hairline)]/25"
                          >
                            <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-secondary-500 mr-3">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-soft)] hover:text-primary-700 transition-colors"
                  >
                    <span className="squiggle">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Demoted to a text link — the hero & footer own the button-weight CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 group font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 hover:text-secondary-500 transition-colors"
          >
            <span className="squiggle-forest">Begin a project</span>
            <span aria-hidden>→</span>
          </Link>

          {/* Mobile menu trigger — literal aria-expanded values for static a11y checks */}
          {mobileMenuOpen ? (
            <button
              type="button"
              className="lg:hidden text-[var(--ink)] p-2 -mr-2 hover:text-primary-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              aria-expanded="true"
            >
              <X className="w-6 h-6" />
            </button>
          ) : (
            <button
              type="button"
              className="lg:hidden text-[var(--ink)] p-2 -mr-2 hover:text-primary-700 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded="false"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom hairline of the masthead */}
        <div aria-hidden className="absolute bottom-0 left-5 right-5 md:left-10 md:right-10 lg:left-14 lg:right-14 h-px bg-[var(--ink-hairline)]/40" />

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-1 animate-fade-in-down">
            {NAVIGATION.main.map((item, idx) => (
              <div key={item.name} className="py-1">
                {'dropdown' in item ? (
                  <div className="space-y-1">
                    <Link
                      href={item.href}
                      className="flex items-baseline gap-3 py-3 font-display text-xl text-[var(--ink)]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="numeral text-base">{String(idx + 1).padStart(2, '0')}</span>
                      <span>{item.name}</span>
                    </Link>
                    <div className="pl-9 space-y-1 pb-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--ink-muted)] hover:text-primary-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-3 py-3 font-display text-xl text-[var(--ink)] hover:text-primary-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="numeral text-base">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Button
                href="/contact"
                size="md"
                variant="primary"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Begin a project
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
