"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { AIThinkingIndicator } from "@/components/ui/AIThinkingIndicator";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const team = [
  {
    name: "Arihant Bharadwaj",
    role: "Chief Executive Officer",
    bio: "Serial entrepreneur, ex-Stanford AI lab researcher. Led product strategy for 3 AI startups. Believes technology should amplify human potential, not diminish it.",
    focus: ["Product Strategy", "Fundraising", "AI Vision"],
    img: "/images/ari.png",
    color: "teal",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ritwik Tripathi",
    role: "Chief Technology Officer",
    bio: "MS Computer Science from IIT Bombay. Full-stack AI engineer with deep expertise in NLP, behavioral modeling, and distributed AI systems.",
    focus: ["AI Architecture", "LLM Engineering", "Systems Design"],
    img: "/images/Ritwik.jpg",
    color: "lavender",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Shreyas Tiwary",
    role: "Chief Financial Officer",
    bio: "Background in VC-backed startup finance and venture strategy. Expert in financial modeling for AI-first companies and investor relations.",
    focus: ["Finance", "Investor Relations", "Strategy"],
    img: "/images/Pandit.jpg",
    color: "blue",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ashutosh Kala",
    role: "Chief Operating Officer",
    bio: "Operational excellence expert with experience scaling B2C consumer apps. Built and managed teams across 4 timezones.",
    focus: ["Operations", "Growth", "Team Building"],
    img: "/images/Kala.jpg",
    color: "green",
    linkedin: "#",
    twitter: "#",
  },
];

const colorMap = {
  teal: { bg: "border-teal/20", text: "text-teal", badge: "bg-teal/10 text-teal" },
  lavender: { bg: "border-lavender/20", text: "text-lavender", badge: "bg-lavender/10 text-lavender" },
  blue: { bg: "border-primary/20", text: "text-blue-400", badge: "bg-primary/10 text-blue-400" },
  green: { bg: "border-green-500/20", text: "text-green-400", badge: "bg-green-500/10 text-green-400" },
};

export function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-surface/20 to-background">
      <div className="section-container">
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
            The minds behind the <span className="gradient-text-teal">mission</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A founding team blending deep tech, startup operations, and a genuine belief
            that technology can be calmer.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {team.map((member, i) => {
            const c = colorMap[member.color as keyof typeof colorMap];
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className={`glass rounded-2xl overflow-hidden border ${c.bg} group cursor-pointer`}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden bg-surface">
                  <motion.div
                    className="absolute inset-0 bg-surface flex items-center justify-center"
                    animate={{ filter: isHovered ? "grayscale(0%)" : "grayscale(100%)" }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Fallback avatar if image fails */}
                    <div
                      className={`w-full h-full bg-gradient-to-br from-surface-2 to-surface flex items-center justify-center`}
                      style={{
                        backgroundImage: `url(${member.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                      }}
                    >
                      {/* Show placeholder letter if no image */}
                      <span className={`text-5xl font-black ${c.text} opacity-20`}>
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent`}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-3 ${c.text}`}>{member.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.bio}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.focus.map((f) => (
                      <span key={f} className={`text-xs px-2 py-0.5 rounded ${c.badge}`}>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* AI Thinking indicator */}
                  <AIThinkingIndicator active={isHovered} className="mb-3" />

                  {/* Social links */}
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="text-slate-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-slate-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
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
