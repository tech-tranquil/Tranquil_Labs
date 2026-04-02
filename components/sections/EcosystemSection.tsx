"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Building2, ArrowRight, Zap, BarChart3, Headphones, BookOpen, Activity, Cpu, Globe, Layers, Code } from "lucide-react";
import { viewportOnce } from "@/lib/animations";
import { getLenis } from "@/hooks/useLenis";

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

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
  { icon: Brain, label: "AI Companion" },
  { icon: BarChart3, label: "Mood Analytics" },
  { icon: Headphones, label: "Sleep Therapy" },
  { icon: BookOpen, label: "Emotional Journaling" },
  { icon: Activity, label: "Behavioral Insights" },
  { icon: Zap, label: "Guided Meditation" },
];

const consultFeatures = [
  { icon: Cpu, label: "AI Product Development" },
  { icon: Globe, label: "LLM Integration" },
  { icon: Layers, label: "AI Automation Systems" },
  { icon: Code, label: "SaaS Development" },
  { icon: Building2, label: "Custom Software Platforms" },
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
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-6">
            Choose Your Path
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Two ways to work
            <br />
            <span className="gradient-text-teal">with Tranquil Labs</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you're looking for intelligent wellness tools or want to build
            AI-powered products — we have a path for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 perspective-1000">
          {/* Card 1: Tranquil AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <TiltCard className="h-full">
              <motion.div
                className="h-full rounded-3xl p-10 relative overflow-hidden cursor-pointer group"
                style={{
                  background: "linear-gradient(135deg, rgba(45,212,191,0.06) 0%, rgba(45,212,191,0.02) 100%)",
                  border: "1px solid rgba(45,212,191,0.15)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(45,212,191,0.45)",
                  boxShadow: "0 0 60px -10px rgba(45,212,191,0.25), 0 0 120px -30px rgba(45,212,191,0.1)",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollTo("tranquil-ai")}
              >
                {/* Glow orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-teal/20 border border-teal/30 rounded-2xl flex items-center justify-center">
                        <Brain className="w-7 h-7 text-teal" />
                      </div>
                      <div>
                        <p className="text-teal text-xs font-bold uppercase tracking-widest mb-0.5">Flagship Product</p>
                        <h3 className="text-2xl font-black">Tranquil AI</h3>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 border border-teal/20">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
                      <span className="text-xs text-teal font-semibold">Live</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                    AI-powered platform designed to support mental wellbeing through intelligent
                    assistance, mood insights, guided practices, and behavioral analytics.
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {aiFeatures.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2.5">
                        <div className="w-6 h-6 bg-teal/15 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3 h-3 text-teal" />
                        </div>
                        <span className="text-sm text-slate-400 font-medium">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => { e.stopPropagation(); scrollTo("tranquil-ai"); }}
                    className="flex items-center gap-2 text-teal font-bold text-base group-hover:gap-3 transition-all duration-300"
                  >
                    Explore Product
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Tranquil Consultancy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <TiltCard className="h-full">
              <motion.div
                className="h-full rounded-3xl p-10 relative overflow-hidden cursor-pointer group"
                style={{
                  background: "linear-gradient(135deg, rgba(167,139,250,0.06) 0%, rgba(167,139,250,0.02) 100%)",
                  border: "1px solid rgba(167,139,250,0.15)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(167,139,250,0.45)",
                  boxShadow: "0 0 60px -10px rgba(167,139,250,0.25), 0 0 120px -30px rgba(167,139,250,0.1)",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollTo("consultancy")}
              >
                {/* Glow orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-lavender/20 border border-lavender/30 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-lavender" />
                      </div>
                      <div>
                        <p className="text-lavender text-xs font-bold uppercase tracking-widest mb-0.5">Enterprise Services</p>
                        <h3 className="text-2xl font-black">Tranquil Consultancy</h3>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/20">
                      <span className="text-xs text-lavender font-semibold">Open</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                    We help startups and companies design, build, and deploy AI-powered products
                    and intelligent software systems.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-10">
                    {consultFeatures.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-lavender/15 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3 h-3 text-lavender" />
                        </div>
                        <span className="text-sm text-slate-400 font-medium">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => { e.stopPropagation(); scrollTo("contact"); }}
                    className="flex items-center gap-2 text-lavender font-bold text-base group-hover:gap-3 transition-all duration-300"
                  >
                    Start a Project
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
