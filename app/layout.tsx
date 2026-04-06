import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    // 1. Organization
    {
      "@type": ["Organization", "TechnologyCompany"],
      "@id": `${siteUrl}/#organization`,
      name: "Tranquil Labs",
      legalName: "Tranquil Labs Private Limited",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        caption: "Tranquil Labs Logo",
      },
      image: { "@id": `${siteUrl}/#logo` },
      description:
        "Tranquil Labs is a full-stack AI product development studio. We design, build, and ship production-ready AI products — from MVPs to enterprise platforms. Our clients are startups, founders, and companies that need a dedicated engineering team.",
      foundingDate: "2025-02",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "India",
      },
      areaServed: "Worldwide",
      email: "support@tranquilai.in",
      slogan: "From Idea to Production — Powered by AI",
      sameAs: [
        "https://x.com/tranquil_labs",
        "https://twitter.com/tranquil_labs",
        "https://www.linkedin.com/company/tranquilai01",
        "https://www.instagram.com/tranquil_ai",
        "https://tranquilai.in",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "support@tranquilai.in",
          availableLanguage: ["English", "Hindi"],
          areaServed: "Worldwide",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@tranquilai.in",
          availableLanguage: "English",
        },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "Product Development",
        "SaaS Development",
        "Mental Health Technology",
        "Full Stack Engineering",
        "Mobile App Development",
        "AI Automation",
      ],
    },

    // 2. WebSite
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tranquil Labs",
      description:
        "AI Product Development Studio — Build intelligent, production-ready software with Tranquil Labs",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 3. WebPage
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Tranquil Labs | AI Product Development & Software Consultancy",
      description:
        "Hire Tranquil Labs to build your AI product, MVP, or enterprise software. Full-stack AI product development studio based in India, serving clients worldwide.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: { "@id": `${siteUrl}/#logo` },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
      inLanguage: "en-US",
      datePublished: "2025-02-01",
      dateModified: "2025-04-07",
      potentialAction: {
        "@type": "ReadAction",
        target: [siteUrl],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero-description"],
      },
    },

    // 4. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tranquil AI",
          item: `${siteUrl}/#tranquil-ai`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Consultancy",
          item: `${siteUrl}/#consultancy`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Projects",
          item: `${siteUrl}/#projects`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Team",
          item: `${siteUrl}/#team`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: `${siteUrl}/#contact`,
        },
      ],
    },

    // 5. ProfessionalService (Consultancy arm)
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#consultancy`,
      name: "Tranquil Consultancy — AI Product Development",
      url: `${siteUrl}/#consultancy`,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      description:
        "Tranquil Consultancy partners with startups, founders, and companies to design and build intelligent AI-powered products. We handle end-to-end delivery: Idea → Design → AI Development → Deployment.",
      serviceType: [
        "AI Product Development",
        "LLM Integration",
        "AI Automation Systems",
        "SaaS Development",
        "Custom Software Platforms",
        "MVP Development",
        "Technical Architecture Consulting",
        "Full Stack Development",
        "Machine Learning Engineering",
      ],
      priceRange: "$$",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Product Development",
              description:
                "End-to-end AI product design and engineering. We build intelligent, production-ready applications with custom ML models, LLM integrations, and data pipelines.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LLM Integration",
              description:
                "GPT-4, Claude, Gemini, and custom model integrations for your product — chatbots, semantic search, document intelligence, and AI agents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "MVP Development",
              description:
                "Ship your first product in weeks, not months. We handle design, engineering, and launch so you can validate your idea with real users fast.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Development",
              description:
                "Scalable software-as-a-service platforms built on modern cloud architecture. From database design to frontend to deployment.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Automation Systems",
              description:
                "Intelligent workflows and process automation that eliminate manual work, reduce costs, and scale your operations.",
            },
          },
        ],
      },
    },

    // 6. SoftwareApplication (Tranquil AI product)
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#tranquil-ai`,
      name: "Tranquil AI",
      applicationCategory: "HealthApplication",
      operatingSystem: ["iOS", "Android"],
      description:
        "Tranquil AI is a mental wellness platform featuring an AI companion for real-time emotional support, mood analytics, and sleep therapy. 2,200+ users, 95% accuracy rating.",
      url: "https://tranquilai.in",
      downloadUrl: "https://apps.apple.com/in/app/tranquil-ai/id6738845854",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2200",
        bestRating: "5",
      },
      creator: { "@id": `${siteUrl}/#organization` },
    },

    // 7. ItemList — Portfolio / Projects
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#portfolio`,
      name: "Tranquil Labs — Portfolio & Case Studies",
      description:
        "Production projects built by Tranquil Labs — AI platforms, CRMs, analytics dashboards, OCR pipelines, and SaaS products.",
      url: `${siteUrl}/#projects`,
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "ChatAstro — AI Conversational Astrology Platform",
            description:
              "Real-time personalized astrological insights via conversational AI. Built with Node.js, Flask, PostgreSQL, Flutter, and Gen AI.",
            url: "https://chats.chatastro.ai/",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "PhoenixHub — Full-Stack CRM System",
            description:
              "Custom CRM with multi-tenant architecture, modular RBAC, and real-time analytics dashboards.",
            url: "https://www.phoenixhub.in/",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            name: "Political Campaign Dashboard — Enterprise Analytics Platform",
            description:
              "Constituency-level analytics with hierarchical RBAC for political campaign operations.",
            url: "https://pulse.esoftinnovations.in/",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            name: "Malayalam Voter OCR Pipeline — Document Intelligence",
            description:
              "Hybrid OCR pipeline combining PyTesseract and Google Document AI for large-scale voter document extraction.",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "CreativeWork",
            name: "PetCare SaaS — Pet Management Platform",
            description:
              "Full-stack SaaS platform for scheduling and tracking pet care activities.",
            url: "https://petcaresaas.onrender.com/",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "CreativeWork",
            name: "CPM Hub — Football Academy Management System",
            description:
              "Multi-role platform with RBAC, performance analytics, and training management for football academies.",
            creator: { "@id": `${siteUrl}/#organization` },
          },
        },
      ],
    },

    // 8. FAQPage — appears as rich result on Google
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Tranquil Labs offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tranquil Labs offers end-to-end AI product development, LLM integration (GPT-4, Claude, Gemini), AI automation systems, SaaS development, custom software platforms, and MVP development. We act as a dedicated engineering team — handling everything from idea validation to production deployment.",
          },
        },
        {
          "@type": "Question",
          name: "Can Tranquil Labs build my MVP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. MVP development is one of our core services. We follow a lean, startup-friendly process — Discovery → Design → AI Development → Deployment — and can ship your first product in weeks so you can validate with real users fast.",
          },
        },
        {
          "@type": "Question",
          name: "How do I hire Tranquil Labs for my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fill in the contact form at tranquillabs.net/#contact or email support@tranquilai.in with your project idea. We'll get back to you within 24 hours to discuss scope, timeline, and budget.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tranquil Labs work with international clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While we are based in India, we work with clients worldwide. We have experience collaborating with startups and enterprises across North America, Europe, and Southeast Asia.",
          },
        },
        {
          "@type": "Question",
          name: "What is Tranquil AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tranquil AI is Tranquil Labs' flagship mental wellness application featuring an AI companion for emotional support, mood analytics, and sleep therapy. It has 2,200+ active users, a 95% accuracy rating, and is available on iOS and Android.",
          },
        },
        {
          "@type": "Question",
          name: "What technology stack does Tranquil Labs use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work across the full stack: React, Next.js, Node.js, Python, Flask, PostgreSQL, Docker, and cloud platforms (AWS, GCP). For AI, we use GPT-4, Claude, Gemini, and custom ML models. We choose the right stack for each project.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to build a product with Tranquil Labs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on project scope, complexity, and timeline. We offer flexible engagement models — fixed-scope MVP packages, dedicated team retainers, and milestone-based contracts. Contact us at support@tranquilai.in for a project estimate.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Tranquil Labs located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tranquil Labs is based in India and works with clients globally, supporting remote collaboration across time zones.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build an AI product with Tranquil Labs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timeline depends on scope. A lean MVP can be designed and shipped in 4–8 weeks. Mid-size AI platforms typically take 2–4 months. We always begin with a scoping session to give you a realistic timeline before we start.",
          },
        },
        {
          "@type": "Question",
          name: "Does Tranquil Labs offer dedicated development teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer dedicated team retainers where a full-stack squad — engineers, AI specialists, and a product manager — is assigned exclusively to your project. This is ideal for companies that need ongoing engineering capacity.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Tranquil Labs serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We have built products across mental health, fintech, healthcare, political analytics, astrology, sports, and e-commerce. Our AI and engineering expertise is industry-agnostic — we adapt to your domain.",
          },
        },
        {
          "@type": "Question",
          name: "Can Tranquil Labs integrate AI into my existing product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We specialize in retrofitting AI into existing products — adding LLM-powered features, semantic search, recommendation engines, or intelligent automation into your current codebase without a full rebuild.",
          },
        },
      ],
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

        {/* ── Meta Pixel ──────────────────────────────────────────────────────── */}
        {META_PIXEL_ID && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
                  n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window,document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init','${META_PIXEL_ID}');
                  fbq('track','PageView');
                `,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* ── Google Analytics ────────────────────────────────────────────────── */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}

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
