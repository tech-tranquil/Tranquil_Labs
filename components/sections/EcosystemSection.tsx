"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Brain, Building2, ArrowRight, Zap, BarChart3, Headphones,
  BookOpen, Activity, Cpu, Globe, Layers, Code, Sparkles
} from "lucide-react";
import { viewportOnce } from "@/lib/animations";
import { getLenis } from "@/hooks/useLenis";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const aiFeatures = [
  { icon: Brain,     label: "AI Companion",        desc: "24/7 behavioral support" },
  { icon: BarChart3, label: "Mood Analytics",       desc: "Real-time tracking" },
  { icon: Headphones, label: "Sleep Therapy",       desc: "CBT-based audio" },
  { icon: BookOpen,  label: "Emotional Journaling", desc: "AI-guided reflection" },
  { icon: Activity,  label: "Behavioral Insights",  desc: "Pattern detection" },
  { icon: Zap,       label: "Guided Meditation",    desc: "Adaptive sessions" },
];

const consultFeatures = [
  { icon: Cpu,       label: "AI Product Development",  desc: "End-to-end build" },
  { icon: Globe,     label: "LLM Integration",          desc: "GPT, Claude, Gemini" },
  { icon: Layers,    label: "AI Automation Systems",    desc: "Workflow intelligence" },
  { icon: Code,      label: "SaaS Development",         desc: "Scalable platforms" },
  { icon: Building2, label: "Custom Software",          desc: "Enterprise grade" },
];

export function EcosystemSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ecosystem" className="section-padding relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-25 pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 bg-line-grid pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)" }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-6 inline-flex"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3" />
            Choose Your Path
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Two ways to work
            <br />
            <span className="gradient-text-animated">with Tranquil Labs</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for intelligent wellness tools or want to build
            AI-powered products — we have a path for you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-2 gap-6 perspective-1000">

          {/* ── Card 1: Tranquil AI ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <TiltCard className="h-full">
              <CardSpotlight color="45,212,191" size={320} className="h-full rounded-3xl">
              <motion.div
                className="h-full rounded-3xl p-10 relative overflow-hidden cursor-pointer group card-shine"
                style={{
                  background: "linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(45,212,191,0.02) 100%)",
                  border: "1px solid rgba(45,212,191,0.15)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(45,212,191,0.08)",
                }}
                whileHover={{
                  borderColor: "rgba(45,212,191,0.40)",
                  boxShadow: "0 0 60px -10px rgba(45,212,191,0.25), 0 0 120px -30px rgba(45,212,191,0.1), 0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(45,212,191,0.1)",
                }}
                transition={{ duration: 0.35 }}
                onClick={() => scrollTo("tranquil-ai")}
              >
                {/* Corner glow orb */}
                <motion.div
                  className="absolute top-0 right-0 w-72 h-72 bg-teal/[0.08] rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Animated border highlight */}
                <motion.div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.5), transparent)" }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-teal/15 border border-teal/25 rounded-2xl flex items-center justify-center">
                        <Brain className="w-7 h-7 text-teal" />
                      </div>
                      <div>
                        <p className="text-teal text-xs font-bold uppercase tracking-widest mb-1">Flagship Product</p>
                        <h3 className="text-2xl font-black">Tranquil AI</h3>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
                      </span>
                      <span className="text-xs text-teal font-bold">Live</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                    AI-powered platform designed to support mental wellbeing through intelligent
                    assistance, mood insights, guided practices, and behavioral analytics.
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {aiFeatures.map(({ icon: Icon, label, desc }, i) => (
                      <motion.div
                        key={label}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-teal/[0.06] transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                      >
                        <div className="w-7 h-7 bg-teal/12 border border-teal/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-teal" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-300 leading-tight">{label}</p>
                          <p className="text-[10px] text-slate-600 mt-0.5">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => { e.stopPropagation(); scrollTo("tranquil-ai"); }}
                    className="group flex items-center gap-2 text-teal font-bold text-sm transition-all duration-300"
                  >
                    Explore Product
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
              </CardSpotlight>
            </TiltCard>
          </motion.div>

          {/* ── Card 2: Tranquil Consultancy ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <TiltCard className="h-full">
              <CardSpotlight color="167,139,250" size={320} className="h-full rounded-3xl">
              <motion.div
                className="h-full rounded-3xl p-10 relative overflow-hidden cursor-pointer group card-shine"
                style={{
                  background: "linear-gradient(135deg, rgba(167,139,250,0.07) 0%, rgba(167,139,250,0.02) 100%)",
                  border: "1px solid rgba(167,139,250,0.15)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(167,139,250,0.08)",
                }}
                whileHover={{
                  borderColor: "rgba(167,139,250,0.40)",
                  boxShadow: "0 0 60px -10px rgba(167,139,250,0.25), 0 0 120px -30px rgba(167,139,250,0.1), 0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(167,139,250,0.1)",
                }}
                transition={{ duration: 0.35 }}
                onClick={() => scrollTo("consultancy")}
              >
                {/* Corner glow orb */}
                <motion.div
                  className="absolute top-0 right-0 w-72 h-72 bg-lavender/[0.08] rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Animated border highlight */}
                <motion.div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)" }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-lavender/15 border border-lavender/25 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-lavender" />
                      </div>
                      <div>
                        <p className="text-lavender text-xs font-bold uppercase tracking-widest mb-1">Enterprise Services</p>
                        <h3 className="text-2xl font-black">Tranquil Consultancy</h3>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender/10 border border-lavender/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lavender opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-lavender" />
                      </span>
                      <span className="text-xs text-lavender font-bold">Open</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                    We help startups and companies design, build, and deploy AI-powered products
                    and intelligent software systems — from idea to production.
                  </p>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-10">
                    {consultFeatures.map(({ icon: Icon, label, desc }, i) => (
                      <motion.div
                        key={label}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-lavender/[0.06] transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                      >
                        <div className="w-7 h-7 bg-lavender/12 border border-lavender/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-lavender" />
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-xs font-semibold text-slate-300">{label}</span>
                          <span className="text-[10px] text-slate-600 ml-auto">{desc}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => { e.stopPropagation(); scrollTo("contact"); }}
                    className="group flex items-center gap-2 text-lavender font-bold text-sm transition-all duration-300"
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
              </CardSpotlight>
            </TiltCard>
          </motion.div>
        </div>

        {/* Bottom connector accent */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-teal/20" />
          <span className="text-xs text-slate-600 font-medium uppercase tracking-widest">
            Powered by Large Behavioral Models
          </span>
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-lavender/20" />
        </motion.div>
      </div>
    </section>
  );
}
