"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Cpu, Brain, Users, Layers } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const pipeline = [
  { id: "input", label: "User Input", sub: "Voice, Text, Biometrics", icon: Users, color: "#64748b" },
  { id: "behavioral", label: "Behavioral Engine", sub: "Pattern Recognition & LBM", icon: Brain, color: "#2dd4bf" },
  { id: "neural", label: "Neural AI System", sub: "LLM + Contextual Reasoning", icon: Cpu, color: "#a78bfa" },
  { id: "emotion", label: "Emotion Intelligence", sub: "Sentiment & State Detection", icon: Layers, color: "#f59e0b" },
  { id: "response", label: "Response Generation", sub: "Personalized, Empathetic Output", icon: Brain, color: "#4ade80" },
];

const techPillars = [
  {
    title: "Adaptive AI Models",
    desc: "Proprietary Large Behavioral Models (LBMs) that understand emotional context, not just words.",
    color: "teal",
    bg: "bg-teal/10 border-teal/20",
    glow: "shadow-glow-teal",
    icon: Brain,
  },
  {
    title: "Behavioral Analytics",
    desc: "Deep temporal pattern recognition tracking thousands of behavioral signals over time.",
    color: "lavender",
    bg: "bg-lavender/10 border-lavender/20",
    glow: "shadow-glow-lavender",
    icon: Layers,
  },
  {
    title: "Human-Centered Design",
    desc: "Every model output is measured against human flourishing metrics, not engagement metrics.",
    color: "blue",
    bg: "bg-primary/10 border-primary/20",
    glow: "shadow-glow-primary",
    icon: Users,
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !pathRef.current) return;

    const numDots = 3;
    const ctx = gsap.context(() => {
      // Animate path drawing
      const len = pathRef.current!.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Glowing dots travel along path
      dotsRef.current.forEach((dot, i) => {
        if (!dot || !pathRef.current) return;
        gsap.to(dot, {
          motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            autoRotate: false,
            start: 0,
            end: 1,
          },
          duration: 3,
          delay: i * 1,
          repeat: -1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play pause resume pause",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} id="technology" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-primary/10 border border-primary/20 text-blue-400 mb-6">
            Our Technology
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Intelligence that{" "}
            <span className="gradient-text-teal">feels human</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A vertically integrated AI stack from raw behavioral signals to emotionally
            intelligent responses — purpose-built for mental wellness at scale.
          </p>
        </motion.div>

        {/* Tech Pillars */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {techPillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className={`glass rounded-2xl p-8 border ${p.bg} ${p.glow} group`}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-12 h-12 rounded-xl ${p.bg} border flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 text-${p.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Pipeline visualization */}
        <div className="max-w-2xl mx-auto">
          <motion.h3
            className="text-center text-2xl font-bold mb-12 text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
          >
            The Intelligence Pipeline
          </motion.h3>

          <div className="relative">
            {/* SVG path + animated dots */}
            <svg
              className="absolute left-1/2 top-6 -translate-x-1/2 pointer-events-none"
              width="2"
              style={{ height: `${(pipeline.length - 1) * 100}px` }}
            >
              <path
                ref={pathRef}
                d={`M 1 0 L 1 ${(pipeline.length - 1) * 100}`}
                fill="none"
                stroke="rgba(45,212,191,0.3)"
                strokeWidth="1.5"
              />
              {/* Travelling dots */}
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  ref={(el) => { if (el) dotsRef.current[i] = el; }}
                  r="4"
                  fill="#2dd4bf"
                  style={{ filter: "drop-shadow(0 0 4px rgba(45,212,191,0.8))" }}
                />
              ))}
            </svg>

            <div className="space-y-[52px]">
              {pipeline.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.id}
                    className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                  >
                    <div className="flex-1">
                      <div
                        className={`glass rounded-xl p-5 border ${
                          i % 2 === 0 ? "mr-10 text-right" : "ml-10"
                        }`}
                        style={{ borderColor: `${stage.color}30` }}
                      >
                        <h4 className="font-bold mb-1" style={{ color: stage.color }}>
                          {stage.label}
                        </h4>
                        <p className="text-slate-500 text-xs">{stage.sub}</p>
                      </div>
                    </div>

                    {/* Center node */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border z-10"
                      style={{
                        backgroundColor: `${stage.color}15`,
                        borderColor: `${stage.color}40`,
                        boxShadow: `0 0 20px ${stage.color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: stage.color }} />
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
