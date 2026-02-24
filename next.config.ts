import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable X-Powered-By header to hide framework identity
  poweredByHeader: false,

  // Enable React Strict Mode for runtime safety checks
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // — DNS Prefetch —
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },

          // — HSTS — Force HTTPS for 2 years, include subdomains, preload-eligible
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },

          // — XSS Protection — Legacy but still useful for older browsers
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },

          // — Clickjacking Protection — Prevents embedding in iframes
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },

          // — MIME Sniffing Protection — Prevents content-type confusion attacks
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },

          // — Referrer Policy — Strict: only send origin on cross-origin requests
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },

          // — Permissions Policy — Disable dangerous browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
          },

          // — Cross-Origin Opener Policy — Isolate browsing context
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },

          // — Cross-Origin Resource Policy — Restrict resource loading
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          },

          // — Cross-Origin Embedder Policy — Enable cross-origin isolation
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless'
          },

          // — Content Security Policy — Strict allowlisting
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' blob: data: https://images.unsplash.com https://images.pexels.com",
              "connect-src 'self' https://api.whatsapp.com https://vitals.vercel-insights.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; ')
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
