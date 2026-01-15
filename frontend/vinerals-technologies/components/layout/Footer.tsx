'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Heart } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import Button from '@/components/ui/Button';
import { NAVIGATION, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* ============================================
          CTA SECTION - Integrated with footer
          ============================================ */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-secondary-600/15 rounded-full blur-3xl" />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-primary-200 border border-white/10">
                Let&apos;s Talk
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Build{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Something Great?
              </span>
            </h2>

            {/* Subhead */}
            <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
              Free consultation. No pressure. Let&apos;s talk about what technology can do for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button
                href="/contact"
                size="lg"
                variant="accent"
                icon={<ArrowRight className="w-5 h-5" />}
                className="shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 transition-all"
              >
                Book a Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Curved transition to footer */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 60L1440 60L1440 30C1440 30 1320 0 720 0C120 0 0 30 0 30L0 60Z" 
              fill="#0f172a"
            />
          </svg>
        </div>
      </section>

      {/* ============================================
          MAIN FOOTER
          ============================================ */}
      <div className="bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Top Section - Logo, Description, Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 pb-12 border-b border-slate-800">
            
            {/* Logo & Description */}
            <div className="lg:col-span-5">
              <Logo variant="light" size="lg" className="mb-4" />
              <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                {SITE_CONFIG.description}
              </p>
              
              {/* Location badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-secondary-400" />
                {SITE_CONFIG.location}
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {/* Services */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {NAVIGATION.footer.services.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-slate-400 hover:text-white transition-colors text-sm inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {NAVIGATION.footer.company.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-slate-400 hover:text-white transition-colors text-sm inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {NAVIGATION.footer.resources.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-slate-400 hover:text-white transition-colors text-sm inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    Connect
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {NAVIGATION.footer.connect.map((link) => (
                      <li key={link.href}>
                        {'external' in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors text-sm inline-block"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link 
                            href={link.href} 
                            className="text-slate-400 hover:text-white transition-colors text-sm inline-block"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-500 text-sm order-2 md:order-1">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </div>

            {/* Social Icons - Center on mobile */}
            <div className="flex items-center gap-4 order-1 md:order-2">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links + Made with love */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm order-3">
              {NAVIGATION.footer.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <span className="text-slate-600">|</span>
              <span className="text-slate-500 flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in {SITE_CONFIG.location.split(',')[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;