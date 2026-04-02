"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BarChart3, Headphones, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { GradientText } from "@/components/ui/GradientText";
import { getLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

// Floating UI card data
const floatingCards = [
  {
    icon: BarChart3,
    title: "Mood Score",
    value: "87%",
    sub: "↑ 12% this week",
    color: "teal",
    style: "top-[15%] right-[5%] md:right-[8%]",
    anim: "float-1",
  },
  {
    icon: Brain,
    title: "AI Companion",
    value: "Active",
    sub: "Processing patterns...",
    color: "lavender",
    style: "top-[55%] right-[2%] md:right-[4%]",
    anim: "float-2",
  },
  {
    icon: Headphones,
    title: "Sleep Therapy",
    value: "8h 24m",
    sub: "Best sleep this month",
    color: "primary",
    style: "top-[35%] left-[2%] md:left-[4%]",
    anim: "float-3",
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Scroll-zoom exit effect
      gsap.to(contentRef.current, {
        scale: 1.05,
        filter: "blur(4px)",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Particle network */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas count={90} className="absolute inset-0" interactive />
      </div>

      {/* Layer 2: Gradient glow waves */}
      {!reduced && (
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal/10 rounded-full blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-lavender/10 rounded-full blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[30%] left-[30%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Layer 3: Floating UI cards */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {floatingCards.map((card) => {
          const Icon = card.icon;
          const colors = {
            teal: { bg: "bg-teal/10 border-teal/20", icon: "text-teal", val: "text-teal" },
            lavender: { bg: "bg-lavender/10 border-lavender/20", icon: "text-lavender", val: "text-lavender" },
            primary: { bg: "bg-primary/20 border-primary/30", icon: "text-blue-400", val: "text-blue-400" },
          };
          const c = colors[card.color as keyof typeof colors];
          return (
            <div
              key={card.title}
              className={`absolute hidden md:block ${card.style}`}
            >
              <motion.div
                className={`glass rounded-xl p-3 w-44 border ${c.bg} animate-${card.anim}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${c.icon}`} />
                  <span className="text-xs text-slate-400 font-medium">{card.title}</span>
                </div>
                <p className={`text-lg font-bold ${c.val}`}>{card.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Layer 4: Headline + CTAs */}
      <div ref={contentRef} className="relative z-[3] section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-teal/20 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-3 h-3 text-teal" />
            <span className="text-xs font-semibold uppercase tracking-widest text-teal">
              AI Innovation Company
            </span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8">
            Building Intelligent{" "}
            <GradientText variant="teal" animate className="drop-shadow-[0_0_30px_rgba(45,212,191,0.4)]">
              AI Systems
            </GradientText>
            <br />
            <span className="text-slate-300 font-light">for Humans and Organizations</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Tranquil Labs builds AI-powered products and develops intelligent software
            systems that help people and businesses harness the power of artificial intelligence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => scrollTo("tranquil-ai")}
              className="flex items-center gap-2 bg-teal text-background px-8 py-4 rounded-xl font-bold text-lg hover:shadow-glow-teal hover:bg-teal/90 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Tranquil AI
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 glass border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-teal/50 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
