"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { viewportOnce } from "@/lib/animations";
import { Sparkles } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2023",
    label: "Company Founded",
    desc: "Tranquil Labs founded with a mission to build intelligent systems that support human wellbeing. Deep research into AI, behavioral science, and human-centric design began.",
    accent: "teal",
    dot: "bg-teal",
    border: "border-teal/20 hover:border-teal/40",
    yearColor: "text-teal",
    glow: "rgba(45,212,191,0.3)",
    tag: "Origin",
  },
  {
    year: "2024",
    label: "Tranquil AI Launched",
    desc: "Launched Tranquil AI — a CBT-powered mental wellness companion. First 10,000 users achieved. Recognized by ThingQbator & NASSCOM accelerator programs.",
    accent: "lavender",
    dot: "bg-lavender",
    border: "border-lavender/20 hover:border-lavender/40",
    yearColor: "text-lavender",
    glow: "rgba(167,139,250,0.3)",
    tag: "Milestone",
  },
  {
    year: "2025",
    label: "AI Behavioral Prediction System",
    desc: "Proprietary Large Behavioral Models (LBMs) in active development. Expanding Tranquil Consultancy services to enterprise clients globally.",
    accent: "blue",
    dot: "bg-blue-400",
    border: "border-blue-400/20 hover:border-blue-400/40",
    yearColor: "text-blue-400",
    glow: "rgba(96,165,250,0.3)",
    tag: "Now",
  },
  {
    year: "Future",
    label: "Global AI Ecosystem",
    desc: "Building the foundational infrastructure layer for ethical, human-centered AI across every digital experience — the industry standard for responsible AI.",
    accent: "white",
    dot: "bg-white/30",
    border: "border-white/10 hover:border-white/25",
    yearColor: "text-slate-300",
    glow: "rgba(255,255,255,0.15)",
    tag: "Vision",
  },
];

export function VisionSection() {
  const lineRef    = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced    = useReducedMotion();

  useEffect(() => {
    if (reduced || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { strokeDashoffset: 800 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 55%",
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
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.04) 0%, transparent 70%)" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 100%)", opacity: 0.4 }}
      />

      <div className="section-container">

        {/* About statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-8 inline-flex"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3" />
            About Tranquil Labs
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-10">
            An{" "}
            <span className="gradient-text-animated">AI Innovation</span>{" "}
            Company
          </h2>

          <div className="space-y-5 text-left md:text-center">
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Tranquil Labs is a technology company focused on building intelligent software
              systems powered by artificial intelligence.
            </p>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
              Our mission is to design technologies that combine advanced AI capabilities with
              thoughtful product design and human-centered thinking.
            </p>
            <p className="text-base text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              From AI-powered applications to enterprise systems, Tranquil Labs develops
              solutions that help individuals and organizations unlock new possibilities
              with technology.
            </p>
          </div>

          {/* Divider */}
          <div className="section-divider mt-12" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Animated SVG connecting line */}
          <svg
            className="absolute left-[60px] top-6 hidden md:block pointer-events-none"
            style={{ overflow: "visible", height: "100%", width: "2px" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="rgba(45,212,191,0.6)" />
                <stop offset="33%"  stopColor="rgba(167,139,250,0.6)" />
                <stop offset="66%"  stopColor="rgba(96,165,250,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
            </defs>
            <line
              ref={lineRef}
              x1="1"
              y1="0"
              x2="1"
              y2="800"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="800"
              strokeDashoffset={reduced ? 0 : 800}
            />
          </svg>

          <div className="space-y-10 md:pl-24">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative flex gap-6 items-start group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Glowing dot on the line */}
                <div className="absolute -left-[calc(24px+16px)] top-4 hidden md:flex items-center justify-center z-10">
                  <motion.div
                    className={`w-3.5 h-3.5 rounded-full ${m.dot} relative`}
                    style={{ boxShadow: `0 0 0 0 ${m.glow}` }}
                    animate={{ boxShadow: [`0 0 0 0 ${m.glow}`, `0 0 0 8px transparent`] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
                  />
                  {/* Outer ring */}
                  <div
                    className="absolute w-3.5 h-3.5 rounded-full border"
                    style={{ borderColor: m.glow, opacity: 0.4 }}
                  />
                </div>

                {/* Card */}
                <CardSpotlight
                  color={
                    m.accent === "teal"  ? "45,212,191" :
                    m.accent === "lavender" ? "167,139,250" :
                    m.accent === "blue" ? "96,165,250" : "255,255,255"
                  }
                  size={200}
                  className={`flex-1 rounded-2xl`}
                >
                <motion.div
                  className={`glass rounded-2xl p-6 border transition-all duration-400 card-shine ${m.border}`}
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
                  whileHover={{
                    boxShadow: `0 0 30px -5px ${m.glow}, 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)`,
                    y: -2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <span className={`text-2xl font-black ${m.yearColor}`}>{m.year}</span>
                      <span className="w-px h-5 bg-white/10" />
                      <span className="text-white font-bold text-base">{m.label}</span>
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{ color: m.glow, borderColor: m.glow, background: `${m.glow}15` }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="section-divider mb-3" />

                  <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
