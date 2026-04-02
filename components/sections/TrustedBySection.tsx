"use client";
import { motion } from "framer-motion";
import { staggerFast, fadeIn, viewportOnce } from "@/lib/animations";

const partners = [
  { name: "NASSCOM", type: "Accelerator" },
  { name: "ThingQbator", type: "Incubator" },
  { name: "Cisco DevNet", type: "Partner" },
  { name: "IIT Bombay", type: "Research" },
  { name: "MIT Media Lab", type: "Research" },
  { name: "Product Hunt", type: "Launch" },
  { name: "YC Community", type: "Network" },
  { name: "Google for Startups", type: "Partner" },
];

export function TrustedBySection() {
  return (
    <section id="trusted" className="section-padding bg-surface/20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-8">
            Recognized & supported by
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-300">
            Trusted by the <span className="gradient-text-teal">ecosystem</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerFast}
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeIn}
              className="glass rounded-xl p-6 text-center border border-white/5 hover:border-teal/20 group transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 group-hover:border-teal/30 transition-colors">
                <span className="text-lg font-black text-slate-400 group-hover:text-teal transition-colors">
                  {p.name.charAt(0)}
                </span>
              </div>
              <p className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors">
                {p.name}
              </p>
              <p className="text-xs text-slate-600 mt-1">{p.type}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
