"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PressTicker } from "@/components/ui/PressTicker";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const articles = [
  {
    source: "YourStory",
    date: "Jan 2025",
    title: "How Tranquil AI is Using Emotional Intelligence to Redefine Mental Health Support",
    excerpt: "A startup out of Palo Alto is building AI that actually listens — combining CBT principles with behavioral prediction to create personalized wellness companions.",
    color: "teal",
  },
  {
    source: "Inc42",
    date: "Feb 2025",
    title: "Tranquil Labs Makes It to ThingQbator Cohort — NASSCOM's Flagship Accelerator",
    excerpt: "Selected among 500+ applicants, Tranquil Labs joins NASSCOM's prestigious ThingQbator program with backing from Cisco DevNet.",
    color: "lavender",
  },
  {
    source: "Product Hunt",
    date: "Mar 2025",
    title: "Tranquil AI: AI-Powered Mental Wellness Companion — Product of the Day",
    excerpt: "Featured as Product Hunt's top mental health application, Tranquil AI brings together mood tracking, CBT, and AI-generated guidance in one calm interface.",
    color: "blue",
  },
  {
    source: "MIT Tech Review",
    date: "Dec 2024",
    title: "The Next Wave: AI Startups Building for Emotional Intelligence",
    excerpt: "Among a new cohort of AI wellness startups, Tranquil Labs stands out with its focus on behavioral modeling over engagement optimization.",
    color: "teal",
  },
];

const colorMap = {
  teal: { border: "border-teal/20", source: "text-teal" },
  lavender: { border: "border-lavender/20", source: "text-lavender" },
  blue: { border: "border-primary/20", source: "text-blue-400" },
};

export function MediaSection() {
  return (
    <section id="media" className="section-padding relative overflow-hidden">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-6">
            Press & Media
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            The world is <span className="gradient-text-teal">listening</span>
          </h2>
        </motion.div>

        {/* Press ticker */}
        <motion.div
          className="mb-16 border-y border-white/5 py-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
        >
          <PressTicker />
        </motion.div>

        {/* Article cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {articles.map((a) => {
            const c = colorMap[a.color as keyof typeof colorMap];
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className={`glass rounded-2xl p-6 border ${c.border} group hover:scale-[1.01] transition-transform duration-300 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest ${c.source}`}>
                    {a.source}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-600">{a.date}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="font-bold text-base mb-3 leading-snug group-hover:text-teal transition-colors">
                  {a.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.excerpt}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
