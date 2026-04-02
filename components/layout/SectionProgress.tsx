"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLenis } from "@/hooks/useLenis";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "problem", label: "Problem" },
  { id: "vision", label: "Vision" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "use-cases", label: "Use Cases" },
  { id: "product-demo", label: "Product" },
  { id: "technology", label: "Technology" },
  { id: "projects", label: "Projects" },
  { id: "media", label: "Media" },
  { id: "trusted", label: "Trusted By" },
  { id: "traction", label: "Impact" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
  { id: "download", label: "Download" },
  { id: "closing", label: "Closing" },
];

export function SectionProgress() {
  const [active, setActive] = useState("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className="relative flex items-center justify-end gap-3"
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <AnimatePresence>
            {hoveredId === id && (
              <motion.span
                className="text-xs font-medium text-slate-400 whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={() => scrollTo(id)}
            className="relative w-2 h-2 flex items-center justify-center"
          >
            <motion.span
              className="block rounded-full"
              animate={{
                width: active === id ? "8px" : "6px",
                height: active === id ? "8px" : "6px",
                backgroundColor:
                  active === id
                    ? "rgb(45,212,191)"
                    : "rgba(255,255,255,0.2)",
                boxShadow:
                  active === id
                    ? "0 0 8px rgba(45,212,191,0.6)"
                    : "none",
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
