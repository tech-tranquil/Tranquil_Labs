import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    default: "Tranquil Labs | AI Product Development & Software Consultancy",
    template: "%s | Tranquil Labs",
  },
  description:
    "Tranquil Labs is a full-stack AI product studio based in Pune & Bangalore, India. We design, build, and ship production-ready software — from MVPs to enterprise AI platforms. Hire us to build your next product.",
  keywords: [
    // Intent: hire/build
    "hire AI developers India",
    "AI product development company India",
    "software development agency Pune",
    "software development agency Bangalore",
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
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Tranquil Labs | AI Product Development & Software Consultancy",
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
    title: "Tranquil Labs | AI Product Development & Software Consultancy",
    description:
      "We design, build, and ship production-ready AI products. Partner with Tranquil Labs to bring your vision to life.",
    images: [{ url: "/opengraph-image", alt: "Tranquil Labs OG Image" }],
    creator: "@tranquillabs",
    site: "@tranquillabs",
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
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
      ],
      areaServed: "Worldwide",
      email: "support@tranquilai.in",
      sameAs: [
        "https://twitter.com/tranquillabs",
        "https://linkedin.com/company/tranquil-labs",
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
      potentialAction: {
        "@type": "ReadAction",
        target: [siteUrl],
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
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
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
            text: "Yes. While we are based in Pune and Bengaluru, India, we work with clients worldwide. We have experience collaborating with startups and enterprises across North America, Europe, and Southeast Asia.",
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
            text: "Tranquil Labs is headquartered in Pune, Maharashtra with operations in Bengaluru, Karnataka. We work with clients globally and can support remote collaboration across time zones.",
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
        {/* Preconnect for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-slate-100 font-display overflow-x-hidden">
        {children}

        {/* Noscript fallback — ensures key content is accessible without JS */}
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#fff", background: "#0A0A0B" }}>
            <h1>Tranquil Labs — AI Product Development &amp; Software Consultancy</h1>
            <p>
              Tranquil Labs is a full-stack AI product studio based in Pune &amp; Bangalore, India.
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
            <p>Location: Pune &amp; Bengaluru, India</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
