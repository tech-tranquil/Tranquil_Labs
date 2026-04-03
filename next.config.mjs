/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove "X-Powered-By: Next.js" header (minor security + cleaner headers)
  poweredByHeader: false,

  // Compress responses with gzip/brotli — faster TTFB = better Core Web Vitals
  compress: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    // Modern formats (WebP, AVIF) for smaller payloads — better LCP
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing — security + trust signal
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking — security signal
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Limit referrer data sent to third parties
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Hint DNS for Google Fonts
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // Basic permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
        ],
      },
      {
        // Long-cache static assets — improves repeat-visit performance (CWV)
        source: "/(.*)\\.(ico|png|jpg|jpeg|svg|gif|webp|avif|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache JS/CSS chunks aggressively (Next.js content-hashes filenames)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Sitemap + robots — always fresh
        source: "/(sitemap.xml|robots.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect www to non-www for canonical URL consistency
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.tranquillabs.net" }],
        destination: "https://tranquillabs.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
