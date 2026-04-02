"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const projects = [
  {
    title: "Tranquil AI — Mental Wellness Platform",
    category: "AI Solutions",
    tags: ["iOS", "Android", "LLM", "CBT"],
    desc: "AI-powered mental wellness companion with CBT support, mood analytics, and personalized meditation. 1,000+ users.",
    color: "teal",
    status: "Live",
  },
  {
    title: "AI Behavioral Prediction Engine",
    category: "AI Solutions",
    tags: ["Python", "LBM", "TensorFlow", "FastAPI"],
    desc: "Proprietary Large Behavioral Models predicting emotional states from subtle digital patterns.",
    color: "lavender",
    status: "In Progress",
  },
  {
    title: "Enterprise Wellness Dashboard",
    category: "Consultancy",
    tags: ["React", "Next.js", "Analytics", "HR Integration"],
    desc: "Team mental health monitoring and wellness analytics for Fortune 500 HR departments.",
    color: "blue",
    status: "Beta",
  },
  {
    title: "Sleep AI Composer",
    category: "AI Solutions",
    tags: ["Audio AI", "Generative", "iOS"],
    desc: "Generative AI that composes personalized sleep soundscapes based on your biometric and stress profile.",
    color: "teal",
    status: "Alpha",
  },
  {
    title: "HealthTech AI Integration",
    category: "Consultancy",
    tags: ["HIPAA", "EHR", "LLM", "Healthcare"],
    desc: "AI integration for a leading US health-tech company — clinical documentation and patient triage automation.",
    color: "lavender",
    status: "NDA",
  },
  {
    title: "Cognitive Load Optimizer",
    category: "Consultancy",
    tags: ["Neuro-tech", "Wearables", "ML"],
    desc: "Real-time cognitive load monitoring system for a deep-tech startup. Reduces meeting fatigue by 40%.",
    color: "blue",
    status: "Live",
  },
];

const filters = ["All", "AI Solutions", "Consultancy"];

const colorMap = {
  teal: { text: "text-teal", bg: "bg-teal/10 border-teal/20", badge: "bg-teal/10 text-teal" },
  lavender: { text: "text-lavender", bg: "bg-lavender/10 border-lavender/20", badge: "bg-lavender/10 text-lavender" },
  blue: { text: "text-blue-400", bg: "bg-primary/10 border-primary/20", badge: "bg-primary/10 text-blue-400" },
};

export function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-surface/20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-6">
            Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Projects we're <span className="gradient-text-teal">proud of</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === f
                  ? "bg-teal text-background"
                  : "glass border border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <AnimatePresence>
            {filtered.map((p) => {
              const c = colorMap[p.color as keyof typeof colorMap];
              return (
                <motion.div
                  key={p.title}
                  layout
                  variants={fadeUp}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`glass rounded-2xl p-6 border ${c.bg} group hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${c.badge}`}>
                      {p.status}
                    </span>
                    <ArrowUpRight className={`w-5 h-5 ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-snug">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 glass rounded-md text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
