import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Target modern browsers to reduce polyfills and bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // lucide-react omitted — optimizePackageImports breaks Turbopack HMR for icon chunks in dev.
    optimizePackageImports: ['framer-motion'],
    optimizeCss: true, // Inline critical CSS to eliminate render-blocking
  },
  async headers() {
    const securityHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
    ];

    // In dev, never set Cache-Control on /_next/* — Next.js manages chunk HMR and
    // custom headers there break Turbopack (stale lucide-react icon chunks, etc.).
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    }

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
