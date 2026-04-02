"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getLenis } from "@/hooks/useLenis";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";

gsap.registerPlugin(ScrollTrigger);

const words = "The future of technology should not overwhelm humans — it should empower them.".split(" ");

export function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const particleRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [animTriggered, setAnimTriggered] = useState(false);

  useEffect(() => {
    if (reduced) { setAnimTriggered(true); return; }
    const ctx = gsap.context(() => {
      // Particle fade out + text appear on scroll
      gsap.fromTo(
        particleRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Words appear one by one
      wordRefs.current.forEach((word, i) => {
        if (!word) return;
        gsap.fromTo(
          word,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${60 - i * 0.8}%`,
              toggleActions: "play none none reverse",
            },
            onStart: () => { if (i === 0) setAnimTriggered(true); },
          }
        );
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
      id="closing"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Particle background */}
      <div ref={particleRef} className="absolute inset-0 z-0">
        <ParticleCanvas count={60} colorScheme="mixed" interactive={false} className="absolute inset-0" />
      </div>

      {/* Deep gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/70 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] section-container text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-teal/60 text-sm uppercase tracking-[0.3em] font-semibold">
            Our Promise
          </span>
        </motion.div>

        {/* Animated words */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight mb-8 max-w-5xl mx-auto">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { if (el) wordRefs.current[i] = el; }}
              className={`inline-block mr-[0.3em] ${
                reduced ? "opacity-100" : "opacity-0"
              } ${
                ["empower", "humans", "overwhelm"].includes(word.replace(/[^a-zA-Z]/g, ""))
                  ? "gradient-text-teal"
                  : "text-slate-100"
              }`}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Sub-line */}
        <motion.p
          className="text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          At Tranquil Labs, we are building intelligent systems designed to support people
          and organizations in a world shaped by artificial intelligence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            onClick={() => scrollTo("tranquil-ai")}
            className="flex items-center gap-2 bg-teal text-background px-8 py-4 rounded-xl font-bold text-lg hover:shadow-glow-teal hover:bg-teal/90 transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Tranquil AI
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 glass border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Work With Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Bottom fade */}
        <motion.div
          className="mt-24 text-slate-700 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          Tranquil Labs Inc. — Palo Alto, CA · Bangalore, IN
        </motion.div>
      </div>
    </section>
  );
}
