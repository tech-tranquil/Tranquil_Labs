"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

const team = [
  {
    name: "Arihant Bharadwaj",
    role: "Chief Executive Officer",
    initials: "AB",
    bio: "CSE graduate from VIT Vellore. Serial entrepreneur. Led product strategy for 3 AI startups. Believes technology should amplify human potential.",
    focus: ["Product Strategy", "Fundraising", "AI Vision"],
    img: "/images/ari.png",
    color: "teal",
    linkedin: "https://www.linkedin.com/in/arihant-bharadwaj/",
    stat: { label: "Startups", value: "3" },
  },
  {
    name: "Ritwik Tripathi",
    role: "Chief Technology Officer",
    initials: "RT",
    bio: "ECE graduate from VIT Vellore. Full-stack AI engineer with deep expertise in NLP, behavioral modeling, and distributed AI systems.",
    focus: ["AI Architecture", "LLM Engineering", "Systems Design"],
    img: "/images/Ritwik.jpg",
    color: "lavender",
    linkedin: "https://www.linkedin.com/in/ritwik-tripathi/",
    stat: { label: "Models Built", value: "12+" },
  },
  {
    name: "Shreyas Tiwary",
    role: "Chief Financial Officer",
    initials: "ST",
    bio: "CSE graduate from VIT Vellore. Background in VC-backed startup finance and venture strategy. Expert in financial modeling for AI-first companies and investor relations.",
    focus: ["Finance", "Investor Relations", "Strategy"],
    img: "/images/Pandit.jpg",
    color: "blue",
    linkedin: "https://www.linkedin.com/in/shreyastiwary/",
    stat: { label: "Raised", value: "₹2Cr+" },
  },
  {
    name: "Ashutosh Kala",
    role: "Chief Operating Officer",
    initials: "AK",
    bio: "CSE graduate from VIT Vellore. Operational excellence expert with experience scaling B2C consumer apps. Built and managed teams across 4 timezones.",
    focus: ["Operations", "Growth", "Team Building"],
    img: "/images/Kala.jpg",
    color: "green",
    linkedin: "https://www.linkedin.com/in/kalaashutosh/",
    stat: { label: "Team Size", value: "20+" },
  },
];

type TeamColor = "teal" | "lavender" | "blue" | "green";

const colorMap: Record<TeamColor, {
  border: string;
  text: string;
  badge: string;
  glow: string;
  orb: string;
  statText: string;
}> = {
  teal: {
    border:   "border-teal/20 hover:border-teal/40",
    text:     "text-teal",
    badge:    "bg-teal/10 text-teal border-teal/15",
    glow:     "rgba(45,212,191,0.2)",
    orb:      "bg-teal/10",
    statText: "text-teal",
  },
  lavender: {
    border:   "border-lavender/20 hover:border-lavender/40",
    text:     "text-lavender",
    badge:    "bg-lavender/10 text-lavender border-lavender/15",
    glow:     "rgba(167,139,250,0.2)",
    orb:      "bg-lavender/10",
    statText: "text-lavender",
  },
  blue: {
    border:   "border-blue-400/20 hover:border-blue-400/40",
    text:     "text-blue-400",
    badge:    "bg-blue-400/10 text-blue-400 border-blue-400/15",
    glow:     "rgba(96,165,250,0.2)",
    orb:      "bg-blue-400/10",
    statText: "text-blue-400",
  },
  green: {
    border:   "border-emerald-400/20 hover:border-emerald-400/40",
    text:     "text-emerald-400",
    badge:    "bg-emerald-400/10 text-emerald-400 border-emerald-400/15",
    glow:     "rgba(52,211,153,0.2)",
    orb:      "bg-emerald-400/10",
    statText: "text-emerald-400",
  },
};

export function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding relative overflow-hidden bg-gradient-to-b from-surface/10 to-background">

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.04) 0%, transparent 70%)" }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <div className="pill-badge bg-lavender/10 border border-lavender/20 text-lavender mb-6">
            Founding Team
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            The minds behind the{" "}
            <span className="gradient-text-animated">mission</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A team blending deep tech, startup operations, and a genuine belief
            that technology can be calmer.
          </p>
        </motion.div>

        {/* Team cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {team.map((member, i) => {
            const c = colorMap[member.color as TeamColor];
            const isHovered = hoveredIndex === i;

            return (
              <CardSpotlight
                key={member.name}
                color={
                  member.color === "teal"     ? "45,212,191" :
                  member.color === "lavender" ? "167,139,250" :
                  member.color === "blue"     ? "96,165,250" :
                  "52,211,153"
                }
                size={220}
                className="rounded-2xl"
              >
              <motion.div
                variants={fadeUp}
                className={`
                  relative glass rounded-2xl overflow-hidden border transition-all duration-400
                  ${c.border}
                `}
                style={{
                  boxShadow: isHovered
                    ? `0 0 40px -10px ${c.glow}, 0 16px 48px rgba(0,0,0,0.5)`
                    : "0 4px 24px rgba(0,0,0,0.4)",
                  transition: "box-shadow 0.4s ease, border-color 0.4s ease, transform 0.3s ease",
                }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.025, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Photo area */}
                <div className="relative h-64 overflow-hidden bg-surface">
                  {/* Ambient glow orb */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] ${c.orb}`}
                    animate={{ scale: isHovered ? 1.5 : 1, opacity: isHovered ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Photo */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ filter: isHovered ? "grayscale(0%) brightness(1.05)" : "grayscale(40%) brightness(0.9)" }}
                    transition={{ duration: 0.45 }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${member.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center 10%",
                      }}
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-base leading-tight mb-0.5">{member.name}</h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${c.text}`}>{member.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.bio}</p>

                  {/* Focus tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.focus.map((f) => (
                      <span
                        key={f}
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${c.badge}`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="section-divider mb-4" />

                  {/* Social links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Hover glow border (bottom edge) */}
                <motion.div
                  className={`absolute inset-x-0 bottom-0 h-px`}
                  style={{ background: `linear-gradient(90deg, transparent, ${c.glow}, transparent)` }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              </CardSpotlight>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
