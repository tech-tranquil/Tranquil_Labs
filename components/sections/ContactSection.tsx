"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Cpu, Globe, Layers, Code, Mail, ArrowRight, Sparkles } from "lucide-react";
import { slideLeft, slideRight, viewportOnce } from "@/lib/animations";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

const services = [
  {
    icon: Cpu,
    label: "Product Development",
    desc: "End-to-end product build",
    detail: "From scoping to deployment, we own the full build so you can focus on the vision.",
    rgb: "167,139,250",
  },
  {
    icon: Globe,
    label: "AI Integrations",
    desc: "GPT, Claude, Gemini",
    detail: "We plug powerful LLMs into your product: chatbots, search, and agents. All production-ready.",
    rgb: "45,212,191",
  },
  {
    icon: Layers,
    label: "LLM Fine-tuning",
    desc: "Custom model training",
    detail: "Models trained on your data. Better accuracy, lower cost, full ownership.",
    rgb: "96,165,250",
  },
  {
    icon: Code,
    label: "Startup Product Build",
    desc: "0-to-1 execution",
    detail: "No tech team? We become your engineers. Validate, build, and ship your MVP fast.",
    rgb: "74,222,128",
  },
];

const reasons = [
  "Deep AI expertise — LLM, NLP, behavioral ML",
  "Startup-speed execution with enterprise quality",
  "End-to-end: design, build, deploy, iterate",
  "Ethical AI principles baked into every product",
  "NASSCOM-recognized, globally connected team",
];

interface FormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Fire ViewContent once when the contact section enters the viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("ViewContent", { content_name: "Contact Form", content_category: "Lead Gen" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const messageValue = watch("message", "");

  const onSubmit = async (data: FormData) => {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "749db36a-922e-410b-82cd-6955c8927628",
        subject: `New project enquiry from ${data.name} — ${data.company}`,
        from_name: data.name,
        email: data.email,
        company: data.company,
        project_type: data.projectType,
        budget: data.budget,
        message: data.message,
      }),
    });
    if (res.ok) {
      // Fire Meta Lead event — this is what Meta counts as a conversion
      trackEvent("Lead", {
        content_name: "Project Enquiry",
        content_category: "Consultancy",
      });
      setSubmitted(true);
    }
  };

  const inputClass = (name: string, hasError?: boolean) => `
    w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm placeholder-slate-600
    focus:outline-none transition-all duration-300
    ${hasError ? "border-red-400/40 focus:border-red-400/60" : ""}
    ${focusedField === name && !hasError
      ? "border-teal/40 bg-white/[0.06] shadow-[0_0_20px_-8px_rgba(45,212,191,0.3)]"
      : !hasError ? "border-white/10 hover:border-white/20" : ""
    }
  `;

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender/[0.04] via-transparent to-teal/[0.04] pointer-events-none" />
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30"
        style={{ maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)" }}
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
          <motion.div
            className="pill-badge bg-lavender/10 border border-lavender/20 text-lavender mb-6 inline-flex"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3" />
            Build With Us
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Let's build{" "}
            <span className="gradient-text-animated">something great</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
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
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-5 text-slate-200">What we offer</h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map(({ icon: Icon, label, desc, detail, rgb }) => (
                  <div
                    key={label}
                    className="group [perspective:900px] h-[150px] cursor-pointer"
                  >
                    <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                      {/* FRONT */}
                      <div
                        className="absolute inset-0 rounded-2xl bg-[#0f1117] [backface-visibility:hidden] flex flex-col p-4 overflow-hidden"
                        style={{ border: `1px solid rgba(${rgb},0.18)` }}
                      >
                        <div
                          className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                          style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.7) 50%, transparent)` }}
                        />
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
                          style={{ background: `rgba(${rgb},0.12)`, border: `1px solid rgba(${rgb},0.22)` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: `rgb(${rgb})` }} />
                        </div>
                        <p className="font-bold text-[15px] text-white leading-tight">{label}</p>
                        <p className="text-[12px] mt-0.5" style={{ color: `rgba(${rgb},0.65)` }}>{desc}</p>
                      </div>

                      {/* BACK */}
                      <div
                        className="absolute inset-0 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between p-4 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, rgba(${rgb},0.12) 0%, #0f1117 60%)`,
                          border: `1px solid rgba(${rgb},0.35)`,
                        }}
                      >
                        <div
                          className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
                          style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},1) 50%, transparent)` }}
                        />
                        <p
                          className="text-[11px] font-bold uppercase tracking-widest mb-2"
                          style={{ color: `rgb(${rgb})` }}
                        >
                          {label}
                        </p>
                        <p className="text-[13px] text-slate-300 leading-relaxed flex-1">{detail}</p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Tranquil Labs */}
            <motion.div
              className="glass rounded-2xl p-6 border border-teal/10 hover:border-teal/20 transition-colors"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-teal/15 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-teal" />
                </div>
                <h4 className="font-bold text-sm text-teal">Why Tranquil Labs?</h4>
              </div>
              <ul className="space-y-2.5">
                {reasons.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Direct contact */}
            <motion.a
              href="mailto:support@tranquilai.in"
              className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-teal/20 hover:bg-teal/[0.03] transition-all group"
              whileHover={{ scale: 1.01, y: -1 }}
            >
              <div className="w-10 h-10 bg-teal/10 border border-teal/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                <Mail className="w-4 h-4 text-teal" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Or reach us directly</p>
                <p className="text-teal font-bold text-sm mt-0.5">support@tranquilai.in</p>
              </div>
              <ArrowRight className="w-4 h-4 text-teal ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="glass rounded-3xl p-12 text-center border border-teal/20"
                  style={{ boxShadow: "0 0 60px -20px rgba(45,212,191,0.2), 0 4px 24px rgba(0,0,0,0.4)" }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-teal mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-black mb-3">Message Received!</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We'll get back to you within 24 hours.<br />
                    Exciting things ahead. 🚀
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass rounded-3xl p-8 border border-white/[0.07] space-y-5"
                  style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)" }}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {/* Form header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white">Start a conversation</h3>
                    <p className="text-xs text-slate-500 mt-1">We respond within 24 hours</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        {...register("name", { required: "Required" })}
                        placeholder="Jane Smith"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass("name", !!errors.name)}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        {...register("company")}
                        placeholder="Acme Inc."
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass("company")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                      })}
                      type="email"
                      placeholder="jane@company.com"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass("email", !!errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        {...register("projectType")}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClass("projectType")} bg-surface text-slate-300 cursor-pointer`}
                      >
                        <option value="">Select a service...</option>
                        <option>Product Development</option>
                        <option>LLM Fine-tuning &amp; Integration</option>
                        <option>Startup Product Build</option>
                        <option>AI Strategy &amp; Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wider">
                        Budget (₹)
                      </label>
                      <select
                        {...register("budget")}
                        onFocus={() => setFocusedField("budget")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClass("budget")} bg-surface text-slate-300 cursor-pointer`}
                      >
                        <option value="">Select a range...</option>
                        <option value="below-10k">Below ₹10,000</option>
                        <option value="10k-25k">₹10,000 – ₹25,000</option>
                        <option value="25k-1lakh">₹25,000 – ₹1,00,000</option>
                        <option value="1lakh-3lakh">₹1,00,000 – ₹3,00,000</option>
                        <option value="5lakh+">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-semibold block mb-2 uppercase tracking-wider">
                      Tell us about your project *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Please describe your project",
                        minLength: { value: 50, message: "Please add a bit more detail (min 50 characters)" },
                      })}
                      rows={4}
                      placeholder="Describe your vision, timeline, and goals..."
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass("message", !!errors.message)} resize-none`}
                    />
                    <div className="flex items-center justify-between mt-1.5">
                      {errors.message ? (
                        <p className="text-red-400 text-xs">{errors.message.message}</p>
                      ) : (
                        <span />
                      )}
                      <p className={`text-xs ml-auto ${(messageValue?.length ?? 0) >= 50 ? "text-teal" : "text-slate-500"}`}>
                        {messageValue?.length ?? 0} / 50
                      </p>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center gap-2.5 bg-teal text-background py-4 rounded-xl font-bold text-sm overflow-hidden disabled:opacity-60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 40px -8px rgba(45,212,191,0.55)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-background/30 border-t-background rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
