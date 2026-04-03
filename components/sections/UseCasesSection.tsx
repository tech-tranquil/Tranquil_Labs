"use client";
import { motion } from "framer-motion";
import { Cpu, Package, Database, Heart } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

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
  teal:     { rgb: "45,212,191",  icon: "text-teal",      iconBg: "from-teal/20 to-teal/5",         tag: "text-teal/80",      bullet: "bg-teal"      },
  lavender: { rgb: "167,139,250", icon: "text-lavender",  iconBg: "from-lavender/20 to-lavender/5", tag: "text-lavender/80",  bullet: "bg-lavender"  },
  blue:     { rgb: "96,165,250",  icon: "text-blue-400",  iconBg: "from-blue-400/20 to-blue-400/5", tag: "text-blue-400/80",  bullet: "bg-blue-400"  },
  green:    { rgb: "74,222,128",  icon: "text-green-400", iconBg: "from-green-400/20 to-green-400/5",tag: "text-green-400/80", bullet: "bg-green-400" },
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
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
                className="group relative rounded-2xl bg-[#0f1117]"
                style={{
                  border: `1px solid rgba(${c.rgb}, 0.15)`,
                  boxShadow: "0 2px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                whileHover={{
                  y: -6,
                  borderColor: `rgba(${c.rgb}, 0.45)`,
                  boxShadow: `0 20px 60px -12px rgba(${c.rgb}, 0.22), inset 0 1px 0 rgba(255,255,255,0.07)`,
                  transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
              >
                {/* Full-width centered top accent line */}
                <div
                  className="absolute top-0 inset-x-0 h-px rounded-t-2xl pointer-events-none z-10"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${c.rgb}, 0.9) 50%, transparent)` }}
                />

                {/* Bottom radial glow on hover */}
                <div
                  className="absolute bottom-0 inset-x-0 h-36 rounded-b-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                  style={{ background: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(${c.rgb}, 0.1), transparent)` }}
                />

                <CardSpotlight color={c.rgb} size={280} className="h-full rounded-2xl">
                  <div className="relative z-[1] p-7 flex flex-col gap-5">
                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${c.icon}`} strokeWidth={1.75} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-[17px] font-bold text-white mb-1 leading-snug">{item.title}</h3>
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${c.tag}`}>
                        {item.tagline}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/[0.06]" />

                    {/* Capabilities */}
                    <ul className="space-y-2.5">
                      {item.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2.5">
                          <span className={`w-1 h-1 rounded-full ${c.bullet} flex-shrink-0 opacity-80`} />
                          <span className="text-[13px] text-slate-400 leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
