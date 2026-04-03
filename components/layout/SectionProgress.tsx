"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLenis } from "@/hooks/useLenis";

const sections = [
  { id: "hero",         label: "Home" },
  { id: "ecosystem",    label: "Ecosystem" },
  { id: "about",        label: "About" },
  { id: "use-cases",    label: "Use Cases" },
  { id: "tranquil-ai",  label: "Tranquil AI" },
  { id: "consultancy",  label: "Consultancy" },
  { id: "projects",     label: "Projects" },
  { id: "technology",   label: "Technology" },
  { id: "media",        label: "Media" },
  { id: "traction",     label: "Traction" },
  { id: "team",         label: "Team" },
  { id: "contact",      label: "Contact" },
];

export function SectionProgress() {
  const [active,    setActive]    = useState("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { threshold: 0.45 }
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
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2">
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        const isHovered = hoveredId === id;

        return (
          <div
            key={id}
            className="relative flex items-center justify-end gap-3"
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Label tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="glass rounded-lg px-2.5 py-1 border border-white/10"
                  initial={{ opacity: 0, x: 8, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 8, scale: 0.9 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <span className="text-[10px] font-semibold text-slate-300 whitespace-nowrap uppercase tracking-widest">
                    {label}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dot button */}
            <button
              onClick={() => scrollTo(id)}
              className="relative flex items-center justify-center w-5 h-5"
              aria-label={`Go to ${label}`}
            >
              {/* Pulse ring for active */}
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded-full border border-teal/40"
                  animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}

              {/* Dot */}
              <motion.span
                className="block rounded-full"
                animate={{
                  width:  isActive ? "10px" : isHovered ? "8px" : "5px",
                  height: isActive ? "10px" : isHovered ? "8px" : "5px",
                  backgroundColor: isActive
                    ? "rgb(45,212,191)"
                    : isHovered
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.18)",
                  boxShadow: isActive
                    ? "0 0 12px rgba(45,212,191,0.7), 0 0 24px rgba(45,212,191,0.3)"
                    : "none",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
