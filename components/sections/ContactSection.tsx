"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Cpu, Globe, Layers, Code } from "lucide-react";
import { slideLeft, slideRight, viewportOnce } from "@/lib/animations";

const services = [
  { icon: Cpu, label: "AI Product Development" },
  { icon: Globe, label: "AI Integrations" },
  { icon: Layers, label: "LLM Fine-tuning" },
  { icon: Code, label: "Startup Product Build" },
];

interface FormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-teal/5 pointer-events-none" />

      <div className="section-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
        >
          <div className="pill-badge bg-lavender/10 border border-lavender/20 text-lavender mb-6">
            Build With Us
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Let's build{" "}
            <span className="gradient-text-teal">something great</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Partner with Tranquil Labs to build intelligent products that users love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">What we offer</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="glass rounded-xl p-4 border border-lavender/10 hover:border-lavender/30 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-lavender mb-2" />
                    <p className="font-semibold text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-teal/10">
              <h4 className="font-bold mb-3 text-teal">Why Tranquil Labs?</h4>
              <ul className="space-y-3">
                {[
                  "Deep AI expertise — LLM, NLP, behavioral ML",
                  "Startup-speed execution with enterprise quality",
                  "End-to-end: design, build, deploy, iterate",
                  "Ethical AI principles baked into every product",
                  "NASSCOM-recognized, globally connected team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-slate-500 text-sm">Or reach us directly</p>
              <a
                href="mailto:hello@tranquillabs.ai"
                className="text-teal font-bold hover:underline block mt-1"
              >
                hello@tranquillabs.ai
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {submitted ? (
              <motion.div
                className="glass-teal rounded-2xl p-12 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle className="w-16 h-16 text-teal mx-auto mb-5" />
                <h3 className="text-2xl font-bold mb-3">Message Received!</h3>
                <p className="text-slate-400">
                  We'll get back to you within 24 hours. Exciting things ahead.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass rounded-2xl p-8 border border-white/5 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-slate-400 font-medium block mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register("name", { required: "Required" })}
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-slate-600 focus:outline-none focus:border-teal/40 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 font-medium block mb-2">
                      Company
                    </label>
                    <input
                      {...register("company")}
                      placeholder="Acme Inc."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-slate-600 focus:outline-none focus:border-teal/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-400 font-medium block mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-slate-600 focus:outline-none focus:border-teal/40 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs text-slate-400 font-medium block mb-2">
                    Project Type
                  </label>
                  <select
                    {...register("projectType")}
                    className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-teal/40 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>AI Product Development</option>
                    <option>LLM Fine-tuning & Integration</option>
                    <option>Startup Product Build</option>
                    <option>AI Strategy & Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 font-medium block mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    {...register("message", { required: "Required" })}
                    rows={4}
                    placeholder="Describe your vision, timeline, and goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-slate-600 focus:outline-none focus:border-teal/40 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-teal text-background py-4 rounded-xl font-bold hover:shadow-glow-teal transition-all disabled:opacity-70"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⏳
                    </motion.span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
