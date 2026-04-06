"use client";
import dynamic from "next/dynamic";

// Lenis smooth scroll
import { useLenis } from "@/hooks/useLenis";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

// Layout
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionProgress } from "@/components/layout/SectionProgress";

// Sections (static — fast paint)
import { HeroSection } from "@/components/sections/HeroSection";
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

const ProductDemoSection = dynamic(
  () =>
    import("@/components/sections/ProductDemoSection").then((m) => ({
      default: m.ProductDemoSection,
    })),
  { ssr: false }
);

export default function Home() {
  useLenis();

  return (
    <main className="relative bg-background">
      {/* Global mouse effects */}
      <CustomCursor />
      <MouseSpotlight />

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
    </main>
  );
}
