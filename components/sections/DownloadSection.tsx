"use client";
import { motion } from "framer-motion";
import { Apple, Smartphone, Star, Shield, Zap, Heart } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const features = [
  { icon: Heart, label: "Mental Wellness AI", desc: "CBT-based companion" },
  { icon: Zap, label: "Instant Insights", desc: "Real-time mood analytics" },
  { icon: Shield, label: "100% Private", desc: "End-to-end encrypted" },
  { icon: Star, label: "4.8★ Rating", desc: "Loved by thousands" },
];

export function DownloadSection() {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-teal/8 via-transparent to-transparent pointer-events-none" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
          >
            <div className="pill-badge bg-teal/10 border border-teal/20 text-teal mb-8">
              Download Free
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Start your{" "}
              <span className="gradient-text-teal">wellness journey</span>
              <br />today
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Join 40k+ users who have transformed their relationship with stress,
              anxiety, and focus using Tranquil AI.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {features.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass rounded-xl p-4 border border-white/5"
                >
                  <Icon className="w-5 h-5 text-teal mb-2" />
                  <p className="font-bold text-sm">{label}</p>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-background px-6 py-4 rounded-xl font-bold hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-normal">Download on the</p>
                  <p className="text-sm font-black">App Store</p>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.tranquilai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass border border-white/10 px-6 py-4 rounded-xl font-bold hover:border-teal/30 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Smartphone className="w-6 h-6 text-teal" />
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-normal">Get it on</p>
                  <p className="text-sm font-black">Google Play</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* App mockup */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal/10 rounded-full blur-[60px]" />

            <div className="relative phone-frame w-64 h-[520px]">
              {/* App UI mockup inside phone */}
              <div className="absolute inset-0 bg-[#0A0A0B] p-4 pt-10 flex flex-col gap-3 overflow-hidden rounded-[34px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal">Good Evening, Arihant</span>
                  <span className="text-xs text-slate-500">9:41 PM</span>
                </div>

                <div className="bg-teal/10 border border-teal/20 rounded-2xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Today's Mood Score</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-teal">87</span>
                    <span className="text-sm text-green-400 mb-1">↑ 12%</span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[40, 55, 65, 50, 70, 80, 87].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-teal/40"
                        style={{ height: `${h * 0.6}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-lavender/10 border border-lavender/20 rounded-2xl p-4">
                  <p className="text-xs text-lavender mb-2">💬 AI Companion</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Great job today! Your stress markers are improving. Try the 5-minute breathing exercise before your 10 AM meeting."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {["Meditation", "Journal", "Sleep", "Insights"].map((item, i) => (
                    <div
                      key={item}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <p className="text-xs font-bold text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
