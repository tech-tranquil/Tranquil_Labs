"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Cpu, Globe, Layers, Code, Building2, ArrowRight, Lightbulb, Pen, Zap, Rocket } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { getLenis } from "@/hooks/useLenis";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const services = [
  { icon: Cpu, label: "AI Product Development", desc: "End-to-end AI product design and engineering" },
  { icon: Globe, label: "LLM Integration", desc: "GPT, Claude, Gemini & custom model integrations" },
  { icon: Zap, label: "AI Automation Systems", desc: "Intelligent workflows and process automation" },
  { icon: Layers, label: "SaaS Development", desc: "Scalable software-as-a-service platforms" },
  { icon: Code, label: "Custom Software Platforms", desc: "Bespoke AI-first software solutions" },
];

const pipeline = [
  { id: "idea", label: "Idea", sub: "Discovery & scoping", icon: Lightbulb, color: "#2dd4bf" },
  { id: "design", label: "Design", sub: "Architecture & UX", icon: Pen, color: "#a78bfa" },
  { id: "build", label: "AI Development", sub: "Engineering & testing", icon: Cpu, color: "#0b3bcb" },
  { id: "deploy", label: "Deployment", sub: "Launch & scale", icon: Rocket, color: "#4ade80" },
];

export function ConsultancySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);
  const reduced = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (reduced || !pathRef.current) return;

    const numDots = 4;
    const ctx = gsap.context(() => {
      // Animate path drawing
      const len = pathRef.current!.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate dots along path
      for (let i = 0; i < numDots; i++) {
        const dot = dotsRef.current[i];
        if (!dot) continue;
        gsap.to(dot, {
          motionPath: {
            path: pathRef.current!,
            align: pathRef.current!,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
          duration: 3,
          delay: i * 0.6 + 0.5,
          repeat: -1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} id="consultancy" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-lavender/10 border border-lavender/20 text-lavender mb-6">
            Tranquil Consultancy
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Build AI with{" "}
            <span className="gradient-text-teal">Tranquil Labs</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tranquil Consultancy partners with startups, founders, and companies to design
            and build intelligent AI-powered products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Services */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-6 text-slate-200">Our Services</h3>
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {services.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 glass rounded-2xl border border-lavender/10 hover:border-lavender/30 hover:bg-lavender/[0.04] transition-all duration-300 group card-shine"
                  whileHover={{ scale: 1.01, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-lavender/15 border border-lavender/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-lavender/25 transition-colors">
                    <Icon className="w-5 h-5 text-lavender" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">{label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-lavender opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => scrollTo("contact")}
              className="group relative mt-8 flex items-center gap-2.5 bg-lavender text-background px-8 py-4 rounded-xl font-bold text-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 40px -8px rgba(167,139,250,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </motion.button>
          </motion.div>

          {/* Right: Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-200">Development Pipeline</h3>

            {/* SVG pipeline visualization */}
            <div className="relative flex justify-center mb-8">
              <svg viewBox="0 0 200 480" className="w-48 hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full">
                <path
                  ref={pathRef}
                  d="M 100 40 L 100 440"
                  fill="none"
                  stroke="rgba(167,139,250,0.25)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
                {/* Animated dots */}
                {[0, 1, 2, 3].map((i) => (
                  <circle
                    key={i}
                    ref={(el) => { if (el) dotsRef.current[i] = el; }}
                    r="4"
                    fill="#a78bfa"
                    opacity="0.8"
                    style={{ display: reduced ? "none" : "block" }}
                  />
                ))}
              </svg>

              {/* Pipeline stages */}
              <div className="space-y-5 w-full relative z-10">
                {pipeline.map((stage, i) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.id}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                    >
                      {/* Stage number + icon */}
                      <div className="flex-shrink-0 relative">
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                          style={{
                            background: `${stage.color}12`,
                            borderColor: `${stage.color}25`,
                          }}
                          whileHover={{
                            background: `${stage.color}20`,
                            boxShadow: `0 0 20px -5px ${stage.color}40`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: stage.color }} />
                        </motion.div>
                        <div
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border"
                          style={{
                            background: `${stage.color}20`,
                            borderColor: `${stage.color}50`,
                            color: stage.color,
                          }}
                        >
                          {i + 1}
                        </div>
                      </div>

                      {/* Label */}
                      <motion.div
                        className="glass rounded-2xl px-5 py-3.5 flex-1 border border-white/5 hover:border-lavender/20 transition-all duration-300 group card-shine"
                        whileHover={{ scale: 1.01, y: -1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="font-bold text-white text-sm">{stage.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{stage.sub}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Why work with us */}
            <motion.div
              className="glass rounded-2xl p-6 border border-lavender/15 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-lavender/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-lavender" />
                </div>
                <p className="font-bold text-white">Why Tranquil Consultancy?</p>
              </div>
              <ul className="space-y-2">
                {[
                  "Deep AI engineering expertise",
                  "Full-stack product development",
                  "Lean, startup-friendly process",
                  "End-to-end delivery ownership",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 bg-lavender rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
