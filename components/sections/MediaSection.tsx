"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PressTicker } from "@/components/ui/PressTicker";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const articles = [
  {
    source: "The Indian Express",
    date: "Feb 2026",
    title: "AI health ATMs, file managers and mental health companions: How startups are transforming healthcare access and diagnostics",
    excerpt: "A young founder from NIT Vellore is turning personal struggle into technological innovation with Tranquil AI — a platform that combines mood tracking, guided journaling, meditation support, sleep tools and an AI-driven chat feature.",
    href: "https://indianexpress.com/article/health-wellness/ai-health-atm-file-manager-mental-health-companions-how-startups-transforming-healthcare-access-diagnostics-10541775/",
    color: "teal",
  },
  {
    source: "StartupPedia",
    date: "Nov 2025",
    title: "Four 22-year-old VIT Vellore students turned a hackathon idea into an AI mental health app, bagged ₹5 lakh seed grant",
    excerpt: "Tranquil AI is a mental health companion built by four VIT engineers to make emotional wellness accessible, affordable, and stigma-free by combining AI empathy with psychologist insights.",
    href: "https://startuppedia.in/tech-innovation/four-22-year-old-vit-vellore-students-turned-a-hackathon-idea-into-an-ai-mental-health-app-bagged-5-lakh-seed-grant-10635543",
    color: "lavender",
  },
  {
    source: "The Interview World",
    date: "Apr 2025",
    title: "Tranquil AI Disrupting Mental Health Through Mindfulness",
    excerpt: "In an exclusive interaction at Startup Mahakumbh, CEO Arihant Bharadwaj breaks down the technology driving Tranquil AI — trained on 70,000+ real therapy conversations to deliver genuine emotional intelligence beyond generic chatbots.",
    href: "https://theinterview.world/tranquil-ai-disrupting-mental-health-through-mindfulness/",
    color: "blue",
  },
  {
    source: "Business Standard",
    date: "Apr 2025",
    title: "Cisco and NASSCOM Foundation Honour Top 10 thingQbator Start-ups at NeoVation 2025",
    excerpt: "Tranquil (VIT, Vellore) named among the top 10 student-led startups out of 1,367 submissions, receiving ₹5 lakh in seed funding for its AI-powered mental health support platform at the NeoVation 2025 felicitation event.",
    href: "https://www.business-standard.com/content/press-releases-ani/cisco-and-nasscom-foundation-honour-top-10-thingqbator-start-ups-at-neovation-2025-125042500006_1.html",
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
              <motion.a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
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
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
