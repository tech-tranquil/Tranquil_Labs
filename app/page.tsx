"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Lenis smooth scroll
import { useLenis } from "@/hooks/useLenis";

// Layout
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionProgress } from "@/components/layout/SectionProgress";

// Sections (static — fast paint)
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ConsultancySection } from "@/components/sections/ConsultancySection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { TractionSection } from "@/components/sections/TractionSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

// Heavy sections — dynamic import (no SSR)
const IntroScreen = dynamic(
  () => import("@/components/sections/IntroScreen").then((m) => ({ default: m.IntroScreen })),
  { ssr: false }
);

const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection").then((m) => ({ default: m.HeroSection })),
  { ssr: false }
);

const ProductDemoSection = dynamic(
  () =>
    import("@/components/sections/ProductDemoSection").then((m) => ({
      default: m.ProductDemoSection,
    })),
  { ssr: false }
);

export default function Home() {
  useLenis();

  const [introComplete, setIntroComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Skip intro on re-visits within same tab session
    const seen = sessionStorage.getItem("introSeen");
    if (seen) {
      setIntroComplete(true);
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    sessionStorage.setItem("introSeen", "1");
    setTimeout(() => setShowIntro(false), 400);
  };

  return (
    <main className="relative bg-background">
      {/* Cinematic intro */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Main site */}
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navigation />
        <SectionProgress />

        {/* 01 — Hero */}
        <HeroSection />

        {/* 02 — Choose Your Path */}
        <EcosystemSection />

        {/* 03 — About Tranquil Labs */}
        <VisionSection />

        {/* 04 — What We Build */}
        <UseCasesSection />

        {/* 05 — Tranquil AI Product */}
        <ProductDemoSection />

        {/* 06 — Consultancy Services */}
        <ConsultancySection />

        {/* 07 — Projects */}
        <ProjectsSection />

        {/* 08 — Technology */}
        <TechnologySection />

        {/* 09 — Media & Insights */}
        <MediaSection />

        {/* 10 — Traction & Impact */}
        <TractionSection />

        {/* 11 — Founding Team */}
        <TeamSection />

        {/* 12 — Contact / Build With Us */}
        <ContactSection />

        {/* 13 — Final Vision */}
        <ClosingSection />

        <Footer />
      </div>
    </main>
  );
}
