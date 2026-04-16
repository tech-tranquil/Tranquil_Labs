import dynamic from "next/dynamic";

// Layout
import { NavigationLite } from "@/components/layout/NavigationLite";
import { FooterLite } from "@/components/layout/FooterLite";
import { LazyMount } from "@/components/layout/LazyMount";

// Sections (static — fast paint)
import { HeroSectionLite } from "@/components/sections/HeroSectionLite";

function DeferredSectionPlaceholder() {
  return <div className="section-padding" style={{ minHeight: "70vh" }} aria-hidden />;
}

const EcosystemSection = dynamic(
  () =>
    import("@/components/sections/EcosystemSection").then((m) => ({
      default: m.EcosystemSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const VisionSection = dynamic(
  () =>
    import("@/components/sections/VisionSection").then((m) => ({
      default: m.VisionSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const UseCasesSection = dynamic(
  () =>
    import("@/components/sections/UseCasesSection").then((m) => ({
      default: m.UseCasesSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const ConsultancySection = dynamic(
  () =>
    import("@/components/sections/ConsultancySection").then((m) => ({
      default: m.ConsultancySection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const TechnologySection = dynamic(
  () =>
    import("@/components/sections/TechnologySection").then((m) => ({
      default: m.TechnologySection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then((m) => ({
      default: m.ProjectsSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const MediaSection = dynamic(
  () =>
    import("@/components/sections/MediaSection").then((m) => ({
      default: m.MediaSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const TractionSection = dynamic(
  () =>
    import("@/components/sections/TractionSection").then((m) => ({
      default: m.TractionSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const TeamSection = dynamic(
  () =>
    import("@/components/sections/TeamSection").then((m) => ({
      default: m.TeamSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((m) => ({
      default: m.ContactSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);
const ClosingSection = dynamic(
  () =>
    import("@/components/sections/ClosingSection").then((m) => ({
      default: m.ClosingSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);

const ProductDemoSection = dynamic(
  () =>
    import("@/components/sections/ProductDemoSection").then((m) => ({
      default: m.ProductDemoSection,
    })),
  { ssr: false, loading: () => <DeferredSectionPlaceholder /> }
);

export default function Home() {
  return (
    <main className="relative bg-background">
      <NavigationLite />

      {/* 01 — Hero */}
      <HeroSectionLite />

      {/* 02 — Choose Your Path */}
      <LazyMount>
        <EcosystemSection />
      </LazyMount>

      {/* 03 — About Tranquil Labs */}
      <LazyMount>
        <VisionSection />
      </LazyMount>

      {/* 04 — What We Build */}
      <LazyMount>
        <UseCasesSection />
      </LazyMount>

      {/* 05 — Tranquil AI Product */}
      <LazyMount>
        <ProductDemoSection />
      </LazyMount>

      {/* 06 — Consultancy Services */}
      <LazyMount>
        <ConsultancySection />
      </LazyMount>

      {/* 07 — Projects */}
      <LazyMount>
        <ProjectsSection />
      </LazyMount>

      {/* 08 — Technology */}
      <LazyMount>
        <TechnologySection />
      </LazyMount>

      {/* 09 — Media & Insights */}
      <LazyMount>
        <MediaSection />
      </LazyMount>

      {/* 10 — Traction & Impact */}
      <LazyMount>
        <TractionSection />
      </LazyMount>

      {/* 11 — Founding Team */}
      <LazyMount>
        <TeamSection />
      </LazyMount>

      {/* 12 — Contact / Build With Us */}
      <LazyMount>
        <ContactSection />
      </LazyMount>

      {/* 13 — Final Vision */}
      <LazyMount>
        <ClosingSection />
      </LazyMount>

      <FooterLite />
    </main>
  );
}
