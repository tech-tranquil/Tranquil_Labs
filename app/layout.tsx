import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DeferredTrackingScripts } from "@/components/layout/DeferredTrackingScripts";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
  weight: ["400", "600", "700", "900"],
});

const siteUrl = "https://tranquillabs.net";

// ─── Viewport (separate export required by Next.js 14) ────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
    { media: "(prefers-color-scheme: light)", color: "#0A0A0B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── Page Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tranquil Labs | AI Products & Software Agency",
    template: "%s | Tranquil Labs",
  },
  description:
    "Tranquil Labs is a full-stack AI product studio based in India. We design, build, and ship production-ready software — from MVPs to enterprise AI platforms.",
  keywords: [
    // Intent: hire/build
    "hire AI developers India",
    "AI product development company India",
    "software development agency India",
    "build AI product",
    "hire software developers India",
    "MVP development company India",
    "custom software development India",
    "technical co-founder for hire",
    "product engineering team India",
    // Services
    "AI consultancy India",
    "LLM integration development",
    "GPT integration services",
    "SaaS development company",
    "full stack development agency",
    "React Next.js development",
    "machine learning development",
    "enterprise software development",
    "AI automation development",
    // Brand
    "Tranquil Labs",
    "Tranquil AI",
    "Tranquil Consultancy",
    "mental health AI platform",
    "AI startup studio India",
    // Long-tail
    "build AI MVP startup",
    "AI product studio India",
    "outsource software development India",
    "startup software development partner",
    "AI product development agency startup",
  ],
  authors: [{ name: "Tranquil Labs", url: siteUrl }],
  creator: "Tranquil Labs",
  publisher: "Tranquil Labs",
  category: "Technology",
  applicationName: "Tranquil Labs",
  referrer: "origin-when-cross-origin",
  // Uncomment and fill in once verified in Google Search Console:
  // verification: { google: "YOUR_GOOGLE_VERIFICATION_CODE" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-IN": siteUrl,
      "x-default": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  other: {
    // Apple PWA
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Tranquil Labs",
    // Mobile
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    // Geo — helps local/regional SEO
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    // Content classification
    "classification": "Technology, Software, Artificial Intelligence",
    "rating": "general",
    "language": "en-US",
    // Copyright
    "copyright": `© ${new Date().getFullYear()} Tranquil Labs`,
    // Revisit hint (for some crawlers)
    "revisit-after": "7 days",
    // Disable phone auto-detection formatting
    "format-detection": "telephone=no",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Tranquil Labs | AI Products & Software Agency",
    description:
      "We design, build, and ship production-ready AI products and software — from MVPs to enterprise platforms. Partner with Tranquil Labs to turn your idea into reality.",
    type: "website",
    url: siteUrl,
    siteName: "Tranquil Labs",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tranquil Labs — AI Product Development & Software Consultancy",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquil Labs | AI Products & Software Agency",
    description:
      "We design, build, and ship production-ready AI products. Partner with Tranquil Labs to bring your vision to life.",
    images: [{ url: "/opengraph-image", alt: "Tranquil Labs OG Image" }],
    creator: "@tranquil_labs",
    site: "@tranquil_labs",
  },
};

// ─── JSON-LD Structured Data ────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "TechnologyCompany"],
      "@id": `${siteUrl}/#organization`,
      name: "Tranquil Labs",
      legalName: "Tranquil Labs Private Limited",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        "Tranquil Labs is a full-stack AI product development studio for startups and enterprises.",
      email: "support@tranquilai.in",
      areaServed: "Worldwide",
      sameAs: [
        "https://x.com/tranquil_labs",
        "https://www.linkedin.com/company/tranquilai01",
        "https://www.instagram.com/tranquil_ai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tranquil Labs",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Tranquil Labs | AI Product Development & Software Consultancy",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

// ─── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        {/* Apple touch icon — explicit tag as belt-and-suspenders */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-slate-100 font-display overflow-x-hidden">
        {children}

        <DeferredTrackingScripts
          metaPixelId={META_PIXEL_ID}
          gaMeasurementId={GA_MEASUREMENT_ID}
        />

        {/* Noscript fallback — ensures key content is accessible without JS */}
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#fff", background: "#0A0A0B" }}>
            <h1>Tranquil Labs — AI Product Development &amp; Software Consultancy</h1>
            <p>
              Tranquil Labs is a full-stack AI product studio based in India.
              We design, build, and ship production-ready software — from MVPs to enterprise AI platforms.
            </p>
            <h2>Our Services</h2>
            <ul>
              <li>AI Product Development</li>
              <li>LLM Integration (GPT-4, Claude, Gemini)</li>
              <li>MVP Development</li>
              <li>SaaS Development</li>
              <li>AI Automation Systems</li>
              <li>Custom Software Platforms</li>
            </ul>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:support@tranquilai.in" style={{ color: "#2dd4bf" }}>support@tranquilai.in</a></p>
            <p>Location: India</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
