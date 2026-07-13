'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Logo from '@/components/shared/Logo';
import { NAVIGATION } from '@/lib/constants';

function isNavActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Header — magazine masthead. A double rule sits beneath; the logo
 * occupies the spine; nav items are mono small-caps; dropdowns open
 * as paper plates with hairline rules. On the homepage at rest it
 * goes transparent over the full-bleed hero photograph.
 */
const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const overHero = pathname === '/' && !scrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape') return;
    const target = event.currentTarget;
    const active = document.activeElement;
    if (active instanceof HTMLElement && target.contains(active)) {
      active.blur();
    }
  }, []);

  const linkTone = (active: boolean) =>
    cn(
      'font-mono text-[0.7rem] uppercase tracking-[0.22em] transition-colors',
      overHero
        ? active
          ? 'text-secondary-200 [text-shadow:0_1px_10px_rgba(10,20,16,0.55)]'
          : 'text-white hover:text-secondary-200 [text-shadow:0_1px_10px_rgba(10,20,16,0.55)]'
        : active
          ? 'text-primary-700'
          : 'text-[var(--ink-soft)] hover:text-primary-700'
    );

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled || mobileMenuOpen
          ? 'bg-[var(--cream)] shadow-paper'
          : overHero
            ? 'bg-gradient-to-b from-primary-950/80 via-primary-950/45 to-transparent'
            : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      {/* Editorial dateline strip */}
      <div
        className={cn(
          'hidden md:block border-b transition-colors duration-500',
          overHero ? 'border-white/25' : 'border-[var(--ink-hairline)]/40'
        )}
      >
        <div
          className={cn(
            'container mx-auto flex items-center justify-between py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-500',
            overHero ? 'text-white/90' : 'text-[var(--ink-soft)]'
          )}
        >
          <span>Montréal · Québec</span>
          <span>Une coopérative de solidarité</span>
        </div>
      </div>

      <nav className="container mx-auto py-5 md:py-6 relative" aria-label="Primary">
        <div className="flex items-center justify-between">
          <Logo size="md" variant={overHero ? 'light' : 'default'} />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAVIGATION.main.map((item) => {
              const active = isNavActive(pathname, item.href);

              if ('dropdown' in item) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onKeyDown={handleNavKeyDown}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      className={cn(
                        linkTone(active),
                        'py-2 inline-flex items-baseline gap-1.5'
                      )}
                    >
                      <span className="squiggle">{item.name}</span>
                      <span
                        aria-hidden
                        className={cn(
                          'text-[0.6em]',
                          overHero
                            ? 'text-white/70 group-hover:text-secondary-200 group-focus-within:text-secondary-200'
                            : 'text-[var(--ink-faint)] group-hover:text-secondary-500 group-focus-within:text-secondary-500'
                        )}
                      >
                        +
                      </span>
                    </Link>
                    <div className="absolute top-full left-0 pt-3 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-300 z-50">
                      <div
                        className="w-72 bg-[var(--paper)] border border-[var(--ink-hairline)]/40 shadow-card py-2 grain"
                        role="menu"
                      >
                        {item.dropdown.map((subItem, idx) => {
                          const subActive = isNavActive(pathname, subItem.href);
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              role="menuitem"
                              className={cn(
                                'above-grain block px-5 py-3 hover:bg-[var(--cream)] transition-colors font-display text-base border-b last:border-b-0 border-[var(--ink-hairline)]/25',
                                subActive
                                  ? 'text-primary-700'
                                  : 'text-[var(--ink-soft)] hover:text-primary-700'
                              )}
                            >
                              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-secondary-500 mr-3">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkTone(active)}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="squiggle">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className={cn(
              'hidden lg:inline-flex items-center gap-2 group font-mono text-[0.7rem] uppercase tracking-[0.22em] transition-colors',
              overHero
                ? 'text-white hover:text-secondary-200 [text-shadow:0_1px_10px_rgba(10,20,16,0.55)]'
                : 'text-primary-700 hover:text-secondary-500'
            )}
          >
            <span className={overHero ? undefined : 'squiggle-forest'}>
              Book a consultation
            </span>
            <span aria-hidden>→</span>
          </Link>

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
              className={cn(
                'lg:hidden p-2 -mr-2 transition-colors',
                overHero
                  ? 'text-white hover:text-secondary-200'
                  : 'text-[var(--ink)] hover:text-primary-700'
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded="false"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>

        <div
          aria-hidden
          className={cn(
            'absolute bottom-0 left-5 right-5 md:left-10 md:right-10 lg:left-14 lg:right-14 h-px transition-colors duration-500',
            overHero ? 'bg-white/30' : 'bg-[var(--ink-hairline)]/40'
          )}
        />

        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-1 animate-fade-in-down">
            {NAVIGATION.main.map((item, idx) => {
              const active = isNavActive(pathname, item.href);

              if ('dropdown' in item) {
                return (
                  <div key={item.name} className="py-1 space-y-1">
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-baseline gap-3 py-3 font-display text-xl',
                        active ? 'text-primary-700' : 'text-[var(--ink)]'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span className="numeral text-base">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                    <div className="pl-9 space-y-1 pb-2">
                      {item.dropdown.map((subItem) => {
                        const subActive = isNavActive(pathname, subItem.href);
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              'block py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] hover:text-primary-700',
                              subActive ? 'text-primary-700' : 'text-[var(--ink-muted)]'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={subActive ? 'page' : undefined}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-baseline gap-3 py-3 font-display text-xl hover:text-primary-700',
                    active ? 'text-primary-700' : 'text-[var(--ink)]'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="numeral text-base">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-6">
              <Button
                href="/contact"
                size="md"
                variant="primary"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
