"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, BarChart2, Headphones, BookOpen, Activity, Zap, ArrowRight, Download } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { viewportOnce, staggerContainer, fadeUp } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Brain,
    label: "AI Companion",
    color: "teal",
    title: "Your Personal AI Therapist",
    desc: "CBT-powered daily guidance. Empathetic, private, available 24/7. Learns your patterns and adapts to your journey.",
    messages: [
      { role: "ai", text: "Good morning! How are you feeling today?" },
      { role: "user", text: "A bit anxious about the presentation..." },
      { role: "ai", text: "That's completely understandable. Let's work through it together. What worries you most?" },
      { role: "user", text: "What if I freeze up?" },
      { role: "ai", text: "Here's a quick CBT reframe: you've prepared well. Let's try a 2-minute breathing exercise..." },
    ],
  },
  {
    icon: BarChart2,
    label: "Mood Analytics",
    color: "lavender",
    title: "Deep Emotional Intelligence",
    desc: "Time-series emotion visualization detects behavioral patterns, peak performance windows, and stress triggers with AI precision.",
    chart: true,
  },
  {
    icon: Headphones,
    label: "Sleep Therapy",
    color: "blue",
    title: "Guided Sleep & Audio Therapy",
    desc: "AI-composed soundscapes, breathing exercises, and meditation audios personalized to your sleep patterns and stress levels.",
    breathing: true,
  },
];

const allFeatures = [
  { icon: Brain, label: "AI Companion", desc: "24/7 intelligent support", color: "teal" },
  { icon: BarChart2, label: "Mood Analytics", desc: "Pattern recognition & insights", color: "lavender" },
  { icon: Zap, label: "Guided Meditation", desc: "Mindfulness practices", color: "blue" },
  { icon: Headphones, label: "Sleep Therapy", desc: "AI-composed soundscapes", color: "teal" },
  { icon: BookOpen, label: "Emotional Journaling", desc: "AI-guided reflection", color: "lavender" },
  { icon: Activity, label: "Behavioral Insights", desc: "Deep pattern modeling", color: "blue" },
];

const mockMoodData = [62, 58, 71, 65, 78, 82, 75, 88, 85, 90, 87, 92];

const colorMap = {
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/20", feature: "bg-teal/15 text-teal border-teal/25" },
  lavender: { bg: "bg-lavender/10", text: "text-lavender", border: "border-lavender/20", feature: "bg-lavender/15 text-lavender border-lavender/25" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", feature: "bg-blue-500/15 text-blue-400 border-blue-500/25" },
};

export function ProductDemoSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const feature = features[activeFeature];

  return (
    <section ref={sectionRef} id="tranquil-ai" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          <div className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-6">
            Our Flagship Product
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="gradient-text-teal">Tranquil AI</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            An intelligent platform designed to support mental wellbeing through AI-powered
            assistance, behavioral insights, journaling tools, and guided wellness experiences.
          </p>
        </motion.div>

        {/* Interactive demo + feature description */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Phone mockup */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
          >
            <div className="phone-frame w-64 h-[520px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-background p-4 pt-8 flex flex-col gap-3 overflow-hidden">
                <AnimatePresence mode="wait">
                  {feature.messages && (
                    <motion.div
                      key="chat"
                      className="flex flex-col gap-2 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {feature.messages.map((msg, i) => (
                        <motion.div
                          key={i}
                          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                        >
                          <div
                            className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                              msg.role === "ai"
                                ? "bg-teal/10 text-teal border border-teal/20"
                                : "bg-white/10 text-slate-200"
                            }`}
                          >
                            {msg.text}
                          </div>
                        </motion.div>
                      ))}
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="bg-teal/10 border border-teal/20 px-3 py-2 rounded-xl flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 bg-teal/60 rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {feature.chart && (
                    <motion.div
                      key="chart"
                      className="flex-1 flex flex-col gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="text-center">
                        <p className="text-xs text-slate-500 mb-1">Mood Trend (12 weeks)</p>
                        <p className="text-3xl font-black text-lavender">+30%</p>
                        <p className="text-xs text-slate-400">improvement</p>
                      </div>
                      <div className="flex items-end gap-1 h-28 px-2">
                        {mockMoodData.map((val, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-sm bg-lavender/60"
                            initial={{ height: 0 }}
                            animate={{ height: `${val}%` }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                          />
                        ))}
                      </div>
                      <p className="text-center text-xs text-slate-500">Jan → Mar 2025</p>
                    </motion.div>
                  )}

                  {feature.breathing && (
                    <motion.div
                      key="breathing"
                      className="flex-1 flex flex-col items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-xs text-slate-400 uppercase tracking-widest">4-7-8 Breathing</p>
                      <motion.div
                        className="w-28 h-28 rounded-full border-2 border-blue-400/40 flex items-center justify-center relative"
                        animate={{ scale: [1, 1.4, 1.4, 1], opacity: [0.6, 1, 1, 0.6] }}
                        transition={{ duration: 19, repeat: Infinity }}
                      >
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                          <motion.div
                            className="w-8 h-8 rounded-full bg-blue-400/40"
                            animate={{ scale: [1, 1.5, 1.5, 1] }}
                            transition={{ duration: 19, repeat: Infinity }}
                          />
                        </div>
                        <span className="absolute bottom-[-24px] text-xs text-blue-400 font-medium">Breathe in...</span>
                      </motion.div>
                      <div className="mt-8 space-y-2 w-full px-2">
                        {["Ocean Waves", "Forest Rain", "Deep Focus"].map((track, i) => (
                          <div key={track} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${i === 0 ? "bg-blue-500/20 text-blue-400" : "text-slate-500"}`}>
                            <Headphones className="w-3 h-3" />
                            {track}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Step dots */}
            <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 flex gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`h-2 rounded-full transition-all ${i === activeFeature ? "bg-teal w-6" : "bg-white/20 w-2"}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Feature detail */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Feature tabs */}
            <div className="flex gap-3 flex-wrap">
              {features.map((f, i) => {
                const FIcon = f.icon;
                const fc = colorMap[f.color as keyof typeof colorMap];
                return (
                  <button
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      i === activeFeature
                        ? `${fc.bg} ${fc.text} border ${fc.border}`
                        : "bg-white/5 text-slate-500 hover:text-slate-300 border border-transparent"
                    }`}
                  >
                    <FIcon className="w-4 h-4" />
                    {f.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {(() => {
                  const f = features[activeFeature];
                  const c = colorMap[f.color as keyof typeof colorMap];
                  const FIcon = f.icon;
                  return (
                    <>
                      <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                        <FIcon className={`w-7 h-7 ${c.text}`} />
                      </div>
                      <h3 className="text-3xl font-black mb-4">{f.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed">{f.desc}</p>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 pt-2">
              <a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-teal text-background px-6 py-3 rounded-xl font-bold hover:bg-teal/90 hover:shadow-glow-teal transition-all"
              >
                <Download className="w-4 h-4" />
                Download App
              </a>
            </div>
          </motion.div>
        </div>

        {/* 6-Feature grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 mb-8"
          >
            All Features
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allFeatures.map((f) => {
              const FIcon = f.icon;
              const c = colorMap[f.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={f.label}
                  variants={fadeUp}
                  className={`glass rounded-2xl p-5 border ${c.feature} text-center group hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-3`}>
                    <FIcon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <p className="text-sm font-bold text-white mb-1">{f.label}</p>
                  <p className="text-xs text-slate-500 leading-tight">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
