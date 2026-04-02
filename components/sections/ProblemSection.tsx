"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Zap, Cpu } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const problems = [
  {
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    glow: "shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)]",
    label: "Mental Health Crisis",
    stat: "1 in 5",
    statSub: "people affected globally",
    body: "Modern technology is optimized for engagement, leading to unprecedented levels of cognitive fatigue, anxiety, and burnout. The human mind was never designed for this pace.",
  },
  {
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    glow: "shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]",
    label: "Technology Overwhelm",
    stat: "4.8 hrs",
    statSub: "avg daily screen time",
    body: "Notification overload, infinite scroll, and dark patterns are rewiring human attention spans. We need technology that works with our biology, not against it.",
  },
  {
    icon: Cpu,
    color: "text-teal",
    bg: "bg-teal/10 border-teal/20",
    glow: "shadow-glow-teal",
    label: "AI Integration Gap",
    stat: "73%",
    statSub: "businesses struggle with AI adoption",
    body: "Most organizations recognize the transformative potential of AI but lack the expertise and frameworks to implement it safely, ethically, and effectively.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-padding bg-gradient-to-b from-background via-surface/30 to-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="pill-badge bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
            The Problem
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Why the world needs
            <br />
            <span className="text-slate-500">a calmer technology</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three interconnected crises demand a fundamentally different approach to how we
            build and deploy technology.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                variants={fadeUp}
                className={`glass rounded-2xl p-8 border ${p.bg} ${p.glow} group hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${p.bg} border flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${p.color}`} />
                </div>

                <div className="mb-4">
                  <span className={`text-4xl font-black ${p.color}`}>{p.stat}</span>
                  <span className="text-sm text-slate-500 block mt-1">{p.statSub}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{p.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transition bridge */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-light text-slate-300">
            This is why we built{" "}
            <span className="font-black gradient-text-teal">Tranquil Labs.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
