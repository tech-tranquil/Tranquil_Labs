"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { viewportOnce } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2023",
    label: "Company Founded",
    desc: "Tranquil Labs founded with a mission to build intelligent systems that support human wellbeing. Deep research into AI, behavioral science, and human-centric design began.",
    color: "border-teal/40 text-teal",
    dot: "bg-teal",
  },
  {
    year: "2024",
    label: "Tranquil AI Launched",
    desc: "Launched Tranquil AI — a CBT-powered mental wellness companion. First 10,000 users achieved. Recognized by ThingQbator & NASSCOM accelerator programs.",
    color: "border-lavender/40 text-lavender",
    dot: "bg-lavender",
  },
  {
    year: "2025",
    label: "AI Behavioral Prediction System",
    desc: "Proprietary Large Behavioral Models (LBMs) in active development. Expanding Tranquil Consultancy services to enterprise clients globally.",
    color: "border-primary/40 text-blue-400",
    dot: "bg-primary",
  },
  {
    year: "Future",
    label: "Global AI Ecosystem",
    desc: "Building the foundational infrastructure layer for ethical, human-centered AI across every digital experience — the industry standard for responsible AI.",
    color: "border-white/20 text-slate-300",
    dot: "bg-white/40",
  },
];

export function VisionSection() {
  const lineRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 600 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container">
        {/* About statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-8">
            About Tranquil Labs
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-10">
            An{" "}
            <span className="gradient-text-teal">AI Innovation</span>{" "}
            Company
          </h2>

          <div className="space-y-6 text-left md:text-center">
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Tranquil Labs is a technology company focused on building intelligent software
              systems powered by artificial intelligence.
            </p>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
              Our mission is to design technologies that combine advanced AI capabilities with
              thoughtful product design and human-centered thinking.
            </p>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
              From AI-powered applications to enterprise systems, Tranquil Labs develops
              solutions that help individuals and organizations unlock new possibilities
              with technology.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* SVG line */}
          <svg
            className="absolute left-[60px] top-4 h-full w-px hidden md:block"
            style={{ overflow: "visible" }}
          >
            <line
              ref={lineRef}
              x1="0"
              y1="0"
              x2="0"
              y2="600"
              stroke="rgba(45,212,191,0.25)"
              strokeWidth="1"
              strokeDasharray="600"
              strokeDashoffset={reduced ? 0 : 600}
            />
          </svg>

          <div className="space-y-12 md:pl-24">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Dot */}
                <div className="absolute -left-[calc(24px+4px)] md:-left-[calc(24px+16px)] top-1.5 hidden md:flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${m.dot} shadow-[0_0_10px_currentColor]`} />
                </div>

                <div className={`glass rounded-2xl p-6 border ${m.color} flex-1 group hover:scale-[1.01] transition-transform`}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`text-2xl font-black ${m.color.split(" ")[1]}`}>
                      {m.year}
                    </span>
                    <span className="text-white font-bold text-lg">{m.label}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
