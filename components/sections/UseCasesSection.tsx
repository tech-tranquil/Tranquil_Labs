"use client";
import { motion } from "framer-motion";
import { Cpu, Package, Database, Heart } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const builds = [
  {
    icon: Cpu,
    color: "teal",
    title: "AI Systems",
    tagline: "Intelligent infrastructure at scale",
    capabilities: [
      "Custom AI model development",
      "LLM integrations & fine-tuning",
      "Automation platforms",
    ],
  },
  {
    icon: Package,
    color: "lavender",
    title: "Product Development",
    tagline: "From concept to production",
    capabilities: [
      "SaaS platforms",
      "Mobile applications",
      "AI-first products",
    ],
  },
  {
    icon: Database,
    color: "blue",
    title: "Data Intelligence",
    tagline: "Turning data into decisions",
    capabilities: [
      "Analytics systems",
      "Predictive platforms",
      "Data infrastructure",
    ],
  },
  {
    icon: Heart,
    color: "green",
    title: "Human-Centered AI",
    tagline: "Technology built for people",
    capabilities: [
      "Behavioral insights",
      "Wellbeing technology",
      "Assistive AI systems",
    ],
  },
];

const colorMap = {
  teal: {
    bg: "bg-teal/10 border-teal/20",
    icon: "text-teal bg-teal/20",
    tag: "text-teal",
    bullet: "bg-teal",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(45,212,191,0.3)] hover:border-teal/40",
  },
  lavender: {
    bg: "bg-lavender/10 border-lavender/20",
    icon: "text-lavender bg-lavender/20",
    tag: "text-lavender",
    bullet: "bg-lavender",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(167,139,250,0.3)] hover:border-lavender/40",
  },
  blue: {
    bg: "bg-primary/10 border-primary/20",
    icon: "text-blue-400 bg-primary/20",
    tag: "text-blue-400",
    bullet: "bg-blue-400",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(11,59,203,0.4)] hover:border-primary/40",
  },
  green: {
    bg: "bg-green-500/10 border-green-500/20",
    icon: "text-green-400 bg-green-500/20",
    tag: "text-green-400",
    bullet: "bg-green-400",
    glow: "hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.3)] hover:border-green-500/40",
  },
};

export function UseCasesSection() {
  return (
    <section id="what-we-build" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface/10 pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="pill-badge bg-primary/10 border border-primary/20 text-blue-400 mb-6">
            What We Build
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Intelligent solutions across
            <br />
            <span className="gradient-text-teal">every vertical</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From behavioral AI to enterprise data systems, we build the full stack
            of intelligent technology.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {builds.map((item) => {
            const Icon = item.icon;
            const c = colorMap[item.color as keyof typeof colorMap];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`glass rounded-2xl p-8 border ${c.bg} ${c.glow} group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wider ${c.tag} mb-5`}>
                  {item.tagline}
                </p>

                {/* Capabilities */}
                <ul className="space-y-2.5">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} mt-1.5 flex-shrink-0`} />
                      <span className="text-sm text-slate-400 leading-snug">{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
