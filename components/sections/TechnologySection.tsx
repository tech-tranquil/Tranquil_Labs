"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, Users, Layers } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { viewportOnce } from "@/lib/animations";

const pipeline = [
  { id: "input",      label: "User Input",           sub: "Voice, Text, Biometrics",         icon: Users,  color: "#94a3b8", rgb: "148,163,184" },
  { id: "behavioral", label: "Behavioral Engine",     sub: "Pattern Recognition & LBM",       icon: Brain,  color: "#2dd4bf", rgb: "45,212,191"  },
  { id: "neural",     label: "Neural AI System",      sub: "LLM + Contextual Reasoning",      icon: Cpu,    color: "#a78bfa", rgb: "167,139,250" },
  { id: "emotion",    label: "Emotion Intelligence",  sub: "Sentiment & State Detection",     icon: Layers, color: "#f59e0b", rgb: "245,158,11"  },
  { id: "response",   label: "Response Generation",   sub: "Personalized, Empathetic Output", icon: Brain,  color: "#4ade80", rgb: "74,222,128"  },
];

const techPillars = [
  { title: "Adaptive AI Models",    desc: "Proprietary Large Behavioral Models (LBMs) that understand emotional context, not just words.",                         rgb: "45,212,191",  icon: Brain,  iconColor: "text-teal",      iconBg: "from-teal/20 to-teal/5"         },
  { title: "Behavioral Analytics",  desc: "Deep temporal pattern recognition tracking thousands of behavioral signals over time.",                                  rgb: "167,139,250", icon: Layers, iconColor: "text-lavender",  iconBg: "from-lavender/20 to-lavender/5" },
  { title: "Human-Centered Design", desc: "Every model output is measured against human flourishing metrics, not engagement metrics.",                              rgb: "96,165,250",  icon: Users,  iconColor: "text-blue-400", iconBg: "from-blue-400/20 to-blue-400/5" },
];

// Fixed row height for guaranteed line alignment
const ROW_H  = 140;
const NODE_W = 56; // w-14 = 56px
const LINE_TOP    = ROW_H / 2;
const LINE_HEIGHT = (pipeline.length - 1) * ROW_H;
const DOT_TRAVEL  = LINE_HEIGHT;

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="technology" className="section-padding relative overflow-hidden">
      <div className="section-container">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <div className="pill-badge bg-primary/10 border border-primary/20 text-blue-400 mb-6">
            Our Technology
          </div>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Intelligence that{" "}
            <span className="gradient-text-teal">feels human</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A vertically integrated AI stack from raw behavioral signals to emotionally
            intelligent responses — purpose-built for mental wellness at scale.
          </p>
        </div>

        {/* ── Tech Pillars ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-28">
          {techPillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="group relative rounded-2xl bg-[#0f1117]"
                style={{
                  border: `1px solid rgba(${p.rgb}, 0.15)`,
                  boxShadow: "0 2px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                whileHover={{
                  y: -5,
                  borderColor: `rgba(${p.rgb}, 0.45)`,
                  boxShadow: `0 20px 60px -12px rgba(${p.rgb}, 0.2), inset 0 1px 0 rgba(255,255,255,0.07)`,
                  transition: { duration: 0.25 },
                }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${p.rgb},0.9) 50%, transparent)` }}
                />
                <CardSpotlight color={p.rgb} size={280} className="h-full rounded-2xl">
                  <div className="p-7 flex flex-col gap-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${p.iconColor}`} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-white mb-2">{p.title}</h3>
                      <p className="text-[13px] text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>

        {/* ── Pipeline ── */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal/70 mb-2">Data Flow</p>
            <h3 className="text-2xl font-bold text-slate-200">The Intelligence Pipeline</h3>
          </div>

          {/* Fixed-height grid so the line is pixel-perfect */}
          <div
            className="relative"
            style={{ height: pipeline.length * ROW_H }}
          >
            {/* ── Vertical line ── */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[2px] origin-top z-0"
              style={{
                top: LINE_TOP,
                height: LINE_HEIGHT,
                background:
                  "linear-gradient(to bottom, #94a3b840, #2dd4bfaa 25%, #a78bfaaa 50%, #f59e0baa 75%, #4ade80aa)",
                filter: "blur(0.5px)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />

            {/* ── Traveling dots ── */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full z-20 pointer-events-none"
                style={{
                  top: LINE_TOP - 5,
                  background: "#2dd4bf",
                  boxShadow: "0 0 8px 2px rgba(45,212,191,0.9), 0 0 20px 4px rgba(45,212,191,0.4)",
                }}
                animate={{ y: [0, DOT_TRAVEL] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.15,
                  repeatDelay: 0,
                }}
              />
            ))}

            {/* ── Stage rows ── */}
            {pipeline.map((stage, i) => {
              const Icon   = stage.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={stage.id}
                  className="absolute inset-x-0 flex items-center"
                  style={{ top: i * ROW_H, height: ROW_H }}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Card — left or right */}
                  {isLeft ? (
                    <div className="flex-1 flex items-center justify-end pr-3">
                      <motion.div
                        className="relative rounded-xl bg-[#0f1117] overflow-hidden w-full max-w-[220px]"
                        style={{ border: `1px solid ${stage.color}25` }}
                        whileHover={{ borderColor: `${stage.color}60`, boxShadow: `0 6px 24px -6px ${stage.color}35`, transition: { duration: 0.2 } }}
                      >
                        <div
                          className="absolute top-0 inset-x-0 h-px"
                          style={{ background: `linear-gradient(90deg, transparent, ${stage.color}80 60%, transparent)` }}
                        />
                        <div className="p-4 text-right">
                          <p className="text-[9px] font-bold uppercase tracking-[0.15em] opacity-40 mb-0.5" style={{ color: stage.color }}>
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <h4 className="font-bold text-[14px] leading-snug mb-0.5" style={{ color: stage.color }}>{stage.label}</h4>
                          <p className="text-slate-500 text-[11px]">{stage.sub}</p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}

                  {/* Horizontal arm — left */}
                  <div
                    className="w-8 h-px flex-shrink-0"
                    style={{ background: isLeft ? `linear-gradient(to right, transparent, ${stage.color}50)` : "transparent" }}
                  />

                  {/* Center node */}
                  <div className="relative flex-shrink-0 z-10" style={{ width: NODE_W, height: NODE_W }}>
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1px solid ${stage.color}50` }}
                      animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                    />
                    {/* Node body */}
                    <div
                      className="absolute inset-[5px] rounded-full flex items-center justify-center border"
                      style={{
                        background: `radial-gradient(circle at 40% 40%, ${stage.color}28, ${stage.color}0a)`,
                        borderColor: `${stage.color}60`,
                        boxShadow: `0 0 18px ${stage.color}40, inset 0 0 12px ${stage.color}10`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: stage.color }} />
                    </div>
                  </div>

                  {/* Horizontal arm — right */}
                  <div
                    className="w-8 h-px flex-shrink-0"
                    style={{ background: !isLeft ? `linear-gradient(to left, transparent, ${stage.color}50)` : "transparent" }}
                  />

                  {/* Card — right */}
                  {!isLeft ? (
                    <div className="flex-1 flex items-center justify-start pl-3">
                      <motion.div
                        className="relative rounded-xl bg-[#0f1117] overflow-hidden w-full max-w-[220px]"
                        style={{ border: `1px solid ${stage.color}25` }}
                        whileHover={{ borderColor: `${stage.color}60`, boxShadow: `0 6px 24px -6px ${stage.color}35`, transition: { duration: 0.2 } }}
                      >
                        <div
                          className="absolute top-0 inset-x-0 h-px"
                          style={{ background: `linear-gradient(90deg, transparent, ${stage.color}80 40%, transparent)` }}
                        />
                        <div className="p-4 text-left">
                          <p className="text-[9px] font-bold uppercase tracking-[0.15em] opacity-40 mb-0.5" style={{ color: stage.color }}>
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <h4 className="font-bold text-[14px] leading-snug mb-0.5" style={{ color: stage.color }}>{stage.label}</h4>
                          <p className="text-slate-500 text-[11px]">{stage.sub}</p>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex-1" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
