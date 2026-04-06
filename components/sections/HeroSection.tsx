"use client";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { getLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.45 + i * 0.07,
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const stats = [
  { icon: TrendingUp, label: "Users", value: "2,200+" },
  { icon: Shield, label: "Accuracy", value: "95%" },
  { icon: Zap, label: "Response", value: "<80ms" },
];


export function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const reduced     = useReducedMotion();

  // ── Mouse parallax for aurora ──────────────────────────
  const mouseX = useMotionValue(0.5); // normalised 0-1
  const mouseY = useMotionValue(0.5);

  const sp = (s: number) => ({ stiffness: s, damping: 22 });

  // Each orb gets a different speed – creates depth illusion
  const o1x = useSpring(useTransform(mouseX, [0,1], [-55,  55]), sp(18));
  const o1y = useSpring(useTransform(mouseY, [0,1], [-40,  40]), sp(18));

  const o2x = useSpring(useTransform(mouseX, [0,1], [ 45, -45]), sp(14));
  const o2y = useSpring(useTransform(mouseY, [0,1], [ 35, -35]), sp(14));

  const o3x = useSpring(useTransform(mouseX, [0,1], [-30,  30]), sp(22));
  const o3y = useSpring(useTransform(mouseY, [0,1], [-22,  22]), sp(22));

  const o4x = useSpring(useTransform(mouseX, [0,1], [ 20, -20]), sp(10));
  const o4y = useSpring(useTransform(mouseY, [0,1], [-15,  15]), sp(10));

  const o5x = useSpring(useTransform(mouseX, [0,1], [-18,  18]), sp(26));
  const o5y = useSpring(useTransform(mouseY, [0,1], [ 14, -14]), sp(26));

  useEffect(() => {
    const hero = sectionRef.current;
    if (!hero || reduced) return;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width);
      mouseY.set((e.clientY - r.top)  / r.height);
    };
    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => hero.removeEventListener("mousemove", onMove);
  }, [reduced, mouseX, mouseY]);

  useEffect(() => {
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        scale:  1.04,
        filter: "blur(6px)",
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

  const line1 = "Building Intelligent".split(" ");
  const line2 = "AI Systems".split(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#06060f" }}
    >
      {/* ── Layer 0: Fine line grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,212,191,0.06) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(45,212,191,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* ── Layer 1: Particles ── */}
      <div className="absolute inset-0 z-[1]">
        <ParticleCanvas count={90} className="absolute inset-0" interactive />
      </div>

      {!reduced && (
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">

          {/* ── Vertical light beams rising from bottom ── */}
          {[
            { left: "20%",  delay: 0,   dur: 6,  opacity: 0.18, width: "1px" },
            { left: "35%",  delay: 1.5, dur: 8,  opacity: 0.12, width: "1px" },
            { left: "50%",  delay: 0.5, dur: 7,  opacity: 0.22, width: "2px" },
            { left: "65%",  delay: 2,   dur: 9,  opacity: 0.12, width: "1px" },
            { left: "80%",  delay: 0.8, dur: 6.5,opacity: 0.16, width: "1px" },
          ].map((beam, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{
                left: beam.left,
                width: beam.width,
                height: "65%",
                background: `linear-gradient(to top, rgba(45,212,191,${beam.opacity}) 0%, rgba(45,212,191,0.04) 70%, transparent 100%)`,
                transformOrigin: "bottom center",
              }}
              animate={{ scaleY: [0.6, 1, 0.7, 1, 0.6], opacity: [0.4, 1, 0.6, 1, 0.4] }}
              transition={{ duration: beam.dur, repeat: Infinity, ease: "easeInOut", delay: beam.delay }}
            />
          ))}

          {/* ── Ground horizon glow (single-colour, sharp base) ── */}
          <div
            className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(45,212,191,0.10) 0%, rgba(45,212,191,0.03) 50%, transparent 100%)",
            }}
          />

          {/* ── Top edge thin accent line ── */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 5%, rgba(45,212,191,0.35) 30%, rgba(45,212,191,0.6) 50%, rgba(45,212,191,0.35) 70%, transparent 95%)" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── Horizontal scan line that sweeps downward once ── */}
          <motion.div
            className="absolute inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 10%, rgba(45,212,191,0.18) 35%, rgba(45,212,191,0.35) 50%, rgba(45,212,191,0.18) 65%, transparent 90%)" }}
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 8 }}
          />

          {/* ── Corner accent marks ── */}
          {[
            { top: 32, left: 32, rotate: 0 },
            { top: 32, right: 32, rotate: 90 },
            { bottom: 32, left: 32, rotate: -90 },
            { bottom: 32, right: 32, rotate: 180 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6"
              style={{ ...pos, rotate: pos.rotate }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-teal/50" />
              <div className="absolute top-0 left-0 h-full w-px bg-teal/50" />
            </motion.div>
          ))}

          {/* ── Edge vignette (depth without colour) ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 95% 95% at 50% 50%, transparent 45%, rgba(6,6,16,0.75) 100%)" }}
          />
        </div>
      )}


      {/* Layer 4: Main content */}
      <div ref={contentRef} className="relative z-[5] section-container text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-teal/20 mb-10"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Pinging live dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            <Sparkles className="w-3 h-3 text-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              AI Innovation Company
            </span>
          </motion.div>

          {/* Headline – word by word */}
          <h1
            className="text-5xl sm:text-7xl md:text-[88px] font-black tracking-tight leading-[1.05] mb-8"
            style={{ perspective: "800px" }}
          >
            {/* Line 1 */}
            <span className="block overflow-hidden pb-2">
              {line1.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-[0.22em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Line 2 – teal gradient */}
            <span className="block overflow-hidden pb-2">
              {line2.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={line1.length + i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-[0.22em] last:mr-0 gradient-text-animated"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Line 3 – light weight */}
            <motion.span
              className="block text-slate-400 font-light text-4xl sm:text-6xl md:text-[72px] mt-2"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              for Humans &amp; Organizations
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Tranquil Labs builds AI-powered products and intelligent software systems
            that help people and businesses harness the power of artificial intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Primary CTA */}
            <motion.button
              onClick={() => scrollTo("tranquil-ai")}
              className="group relative flex items-center gap-2.5 bg-teal text-background px-8 py-4 rounded-xl font-bold text-base overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: "0 0 0 0 rgba(45,212,191,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 40px -5px rgba(45,212,191,0.55), 0 0 80px -20px rgba(45,212,191,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 0 0 rgba(45,212,191,0.4)";
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Tranquil AI
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            </motion.button>

            {/* Ghost CTA */}
            <motion.button
              onClick={() => scrollTo("contact")}
              className="group relative flex items-center gap-2.5 glass border border-white/10 px-8 py-4 rounded-xl font-bold text-base hover:border-white/20 hover:bg-white/[0.04] transition-all overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
            </motion.button>
          </motion.div>

          {/* Micro stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block w-px h-4 bg-white/10 mr-4" />}
                <Icon className="w-4 h-4 text-teal flex-shrink-0" />
                <span className="text-sm font-black text-white">{value}</span>
                <span className="text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
