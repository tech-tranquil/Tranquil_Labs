"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { SectionProgress } from "@/components/layout/SectionProgress";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);
const MouseSpotlight = dynamic(
  () => import("@/components/ui/MouseSpotlight").then((m) => m.MouseSpotlight),
  { ssr: false }
);

function canRunDesktopEffects() {
  if (typeof window === "undefined") return false;

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const desktopWidth = window.matchMedia("(min-width: 1024px)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

  return finePointer && desktopWidth && !reduceMotion && !saveData;
}

export function ClientEnhancements() {
  const [desktopEffectsEnabled, setDesktopEffectsEnabled] = useState(false);

  useEffect(() => {
    const update = () => setDesktopEffectsEnabled(canRunDesktopEffects());
    update();

    const mediaQueries = [
      window.matchMedia("(hover: hover) and (pointer: fine)"),
      window.matchMedia("(min-width: 1024px)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];

    mediaQueries.forEach((media) => media.addEventListener("change", update));
    window.addEventListener("resize", update, { passive: true });

    return () => {
      mediaQueries.forEach((media) => media.removeEventListener("change", update));
      window.removeEventListener("resize", update);
    };
  }, []);

  useLenis({ enabled: desktopEffectsEnabled });

  if (!desktopEffectsEnabled) return null;

  return (
    <>
      <CustomCursor />
      <MouseSpotlight />
      <SectionProgress />
    </>
  );
}
