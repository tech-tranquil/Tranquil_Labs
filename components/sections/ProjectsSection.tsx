"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const projects = [
  {
    title: "ChatAstro",
    subtitle: "AI Conversational Astrology Platform",
    stack: ["Node.js", "Flask", "PostgreSQL", "Flutter", "Docker", "Gen AI"],
    tagline: "Real-time personalized astrological insights via conversational AI.",
    desc: "Hybrid Node.js + Flask backend for AI astrology. Integrated Divine APIs for precise planetary calculations, engineered stateful conversational workflows with advanced prompt engineering, and deployed containerized microservices with fault-tolerant APIs.",
    link: "https://chats.chatastro.ai/",
    color: "teal",
  },
  {
    title: "PhoenixHub",
    subtitle: "Full-Stack CRM System",
    stack: ["Node.js", "PostgreSQL", "REST APIs", "Cloud"],
    tagline: "End-to-end lead lifecycle management with automated workflows.",
    desc: "Custom CRM built from scratch with multi-tenant architecture, modular RBAC for fine-grained permissions, scalable RESTful APIs for pipeline management, and real-time analytics dashboards optimized for high-throughput reporting.",
    link: "https://www.phoenixhub.in/",
    color: "lavender",
  },
  {
    title: "Political Campaign Dashboard",
    subtitle: "Enterprise RBAC Analytics Platform",
    stack: ["PostgreSQL", "Data Analytics", "Secure Middleware"],
    tagline: "Hierarchical RBAC analytics for political campaign operations.",
    desc: "Constituency-level analytics pipelines tracking voter engagement and campaign metrics. Engineered hierarchical RBAC supporting multiple admin levels, secure middleware for data isolation, and real-time dashboards for decision-making.",
    link: "https://pulse.esoftinnovations.in/",
    color: "blue",
  },
  {
    title: "Malayalam Voter OCR Pipeline",
    subtitle: "Document Intelligence Automation",
    stack: ["Python", "PyTesseract", "Google Document AI"],
    tagline: "Large-scale OCR extraction from Malayalam voter documents.",
    desc: "Hybrid OCR pipeline combining PyTesseract and Google Cloud Document AI with confidence-scoring validation. Applied advanced image preprocessing — noise reduction, adaptive binarization, layout segmentation — for high-accuracy bulk extraction.",
    color: "green",
  },
  {
    title: "PetCare SaaS",
    subtitle: "Pet Management Platform",
    stack: ["Full-Stack Web", "Cloud", "REST APIs"],
    tagline: "SaaS platform for scheduling and tracking pet care activities.",
    desc: "Full-stack pet management platform with activity scheduling, health tracking, reminders and notifications. Built a scalable cloud-deployed backend for continuous availability and seamless multi-pet management.",
    link: "https://petcaresaas.onrender.com/",
    color: "teal",
  },
  {
    title: "CPM Hub",
    subtitle: "Football Academy Management System",
    stack: ["Full-Stack", "RBAC", "Analytics"],
    tagline: "Comprehensive sports management for football academies.",
    desc: "Multi-role platform (Admin, Coach, Parent, Student) with RBAC dashboards, training modules, homework assignment, performance analytics, and communication workflows — enabling end-to-end digital academy management.",
    color: "lavender",
  },
];

const colorMap = {
  teal:    { rgb: "45,212,191",  icon: "text-teal",      tag: "bg-teal/10 text-teal border-teal/20",           accent: "from-teal/50 to-transparent",     border: "rgba(45,212,191,0.18)"  },
  lavender:{ rgb: "167,139,250", icon: "text-lavender",  tag: "bg-lavender/10 text-lavender border-lavender/20",accent: "from-lavender/50 to-transparent", border: "rgba(167,139,250,0.18)" },
  blue:    { rgb: "96,165,250",  icon: "text-blue-400",  tag: "bg-blue-400/10 text-blue-400 border-blue-400/20",accent: "from-blue-400/50 to-transparent",  border: "rgba(96,165,250,0.18)"  },
  green:   { rgb: "74,222,128",  icon: "text-green-400", tag: "bg-green-400/10 text-green-400 border-green-400/20",accent: "from-green-400/50 to-transparent",border: "rgba(74,222,128,0.18)"  },
};

export function ProjectsSection() {
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
            Projects we&apos;re <span className="gradient-text-teal">proud of</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">Hover a card to see more</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((p) => {
            const c = colorMap[p.color as keyof typeof colorMap];
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group [perspective:1000px] h-[230px] cursor-pointer"
              >
                {/* Flip inner */}
                <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* ── FRONT ── */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-[#0f1117] [backface-visibility:hidden] overflow-hidden flex flex-col p-6"
                    style={{ border: `1px solid ${c.border}` }}
                  >
                    {/* Top accent */}
                    <div
                      className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, transparent, rgba(${c.rgb},0.8) 50%, transparent)` }}
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[17px] font-bold text-white leading-snug mb-0.5">{p.title}</h3>
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${c.icon} mb-3`}>
                          {p.subtitle}
                        </p>
                        <p className="text-[13px] text-slate-400 leading-relaxed">{p.tagline}</p>
                      </div>

                      {/* Stack pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className={`text-[11px] px-2 py-0.5 rounded-md border ${c.tag} font-medium`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── BACK ── */}
                  <div
                    className="absolute inset-0 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden flex flex-col p-6"
                    style={{
                      background: `linear-gradient(135deg, rgba(${c.rgb},0.12) 0%, #0f1117 50%)`,
                      border: `1px solid rgba(${c.rgb},0.35)`,
                    }}
                  >
                    {/* Top accent (brighter on back) */}
                    <div
                      className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, transparent, rgba(${c.rgb},1) 50%, transparent)` }}
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className={`text-[13px] font-bold uppercase tracking-widest ${c.icon} mb-3`}>{p.title}</h3>
                        <p className="text-[13px] text-slate-300 leading-relaxed">{p.desc}</p>
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold ${c.icon} hover:opacity-80 transition-opacity`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Live <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
