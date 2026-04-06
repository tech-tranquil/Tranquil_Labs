"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { getLenis } from "@/hooks/useLenis";
import { viewportOnce } from "@/lib/animations";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tranquil_ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/tranquilai01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/tranquil_labs",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const footerLinks: Record<string, { label: string; href: string; external?: boolean }[]> = {
  Platform: [
    { label: "Tranquil AI",   href: "https://tranquilai.in", external: true },
    { label: "Download App",  href: "#download" },
    { label: "Features",      href: "#tranquil-ai" },
    { label: "Pricing",       href: "#download" },
  ],
  Consultancy: [
    { label: "AI Development",  href: "#contact" },
    { label: "Projects",        href: "#projects" },
    { label: "Start a Project", href: "#contact" },
    { label: "Case Studies",    href: "#projects" },
  ],
  Company: [
    { label: "Our Story", href: "#about" },
    { label: "Team",      href: "#team" },
    { label: "Media",     href: "#media" },
    { label: "Careers",   href: "#contact" },
  ],
  Resources: [
    { label: "Technology", href: "#technology" },
    { label: "Research",   href: "#media" },
    { label: "Press Kit",  href: "#media" },
    { label: "Contact",    href: "#contact" },
  ],
};

const policies: Record<string, { title: string; content: React.ReactNode }> = {
  "Privacy Policy": {
    title: "Privacy Policy",
    content: (
      <div className="space-y-5 text-slate-400 text-sm leading-relaxed">
        <p className="text-slate-300">Last updated: April 2025</p>
        <section>
          <h3 className="text-white font-semibold mb-2">1. Information We Collect</h3>
          <p>We collect information you provide directly — such as your name, email, and project details when you contact us. We also collect usage data (pages visited, time on site) via analytics tools to improve our services.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">2. How We Use Your Information</h3>
          <p>Your information is used solely to respond to enquiries, deliver our services, and improve the Tranquil Labs platform. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">3. Data Storage & Security</h3>
          <p>All data is stored securely on encrypted servers. We implement industry-standard security practices including TLS encryption and access controls to protect your information.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">4. Cookies</h3>
          <p>We use essential cookies to ensure the website functions correctly, and optional analytics cookies to understand usage patterns. You can opt out of analytics cookies at any time.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">5. Your Rights</h3>
          <p>You have the right to access, update, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:support@tranquilai.in" className="text-teal hover:underline">support@tranquilai.in</a>.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">6. Contact</h3>
          <p>For any privacy-related questions, reach us at <a href="mailto:support@tranquilai.in" className="text-teal hover:underline">support@tranquilai.in</a>.</p>
        </section>
      </div>
    ),
  },
  "Terms of Service": {
    title: "Terms of Service",
    content: (
      <div className="space-y-5 text-slate-400 text-sm leading-relaxed">
        <p className="text-slate-300">Last updated: April 2025</p>
        <section>
          <h3 className="text-white font-semibold mb-2">1. Acceptance of Terms</h3>
          <p>By accessing or using any Tranquil Labs service — including this website, Tranquil AI, or any consultancy engagement — you agree to be bound by these Terms of Service.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">2. Services</h3>
          <p>Tranquil Labs provides AI product development, consultancy, and related technology services. We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">3. Intellectual Property</h3>
          <p>All content, designs, and technology on this website are the property of Tranquil Labs Private Limited. You may not reproduce or redistribute any content without explicit written permission.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">4. Limitation of Liability</h3>
          <p>Tranquil Labs shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or inability to access them.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">5. Governing Law</h3>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">6. Contact</h3>
          <p>Questions about these terms? Reach us at <a href="mailto:support@tranquilai.in" className="text-teal hover:underline">support@tranquilai.in</a>.</p>
        </section>
      </div>
    ),
  },
  "Cookie Policy": {
    title: "Cookie Policy",
    content: (
      <div className="space-y-5 text-slate-400 text-sm leading-relaxed">
        <p className="text-slate-300">Last updated: April 2025</p>
        <section>
          <h3 className="text-white font-semibold mb-2">1. What Are Cookies</h3>
          <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">2. Cookies We Use</h3>
          <ul className="space-y-2 mt-2">
            <li><span className="text-teal font-medium">Essential cookies</span> — Required for the website to function (e.g. session state). Cannot be disabled.</li>
            <li><span className="text-lavender font-medium">Analytics cookies</span> — Help us understand page visits and improve performance. Can be opted out.</li>
            <li><span className="text-blue-400 font-medium">Preference cookies</span> — Remember your settings like reduced motion preferences.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">3. Third-Party Cookies</h3>
          <p>We may use services like Google Analytics which set their own cookies. These are governed by their respective privacy policies.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">4. Managing Cookies</h3>
          <p>You can control or delete cookies through your browser settings at any time. Disabling essential cookies may affect site functionality.</p>
        </section>
        <section>
          <h3 className="text-white font-semibold mb-2">5. Contact</h3>
          <p>Cookie questions? Contact us at <a href="mailto:support@tranquilai.in" className="text-teal hover:underline">support@tranquilai.in</a>.</p>
        </section>
      </div>
    ),
  },
};

function PolicyModal({ policy, onClose }: { policy: string; onClose: () => void }) {
  const data = policies[policy];
  if (!data) return null;
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        className="relative w-full max-w-lg max-h-[80vh] rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: "#0f1117",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <h2 className="text-lg font-bold text-white">{data.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="px-6 py-6 flex-1"
          style={{ overflowY: "auto" }}
          onWheel={(e) => e.stopPropagation()}
        >
          {data.content}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Footer() {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(15,17,23,0.6)", backdropFilter: "blur(8px)" }}
      />

      <div className="relative section-container py-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
                <Image src="/logo.png" alt="Tranquil Labs Logo" width={36} height={36} className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-lg tracking-tight">
                Tranquil{" "}
                <span className="gradient-text-animated">Labs</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Engineering a world where technology respects human tranquility and
              cognitive freedom.
            </p>
            <motion.a
              href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 bg-teal/10 border border-teal/20 rounded-xl text-teal text-sm font-semibold hover:bg-teal/20 hover:border-teal/35 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Tranquil AI
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-teal border border-white/[0.06] hover:border-teal/30 hover:bg-teal/[0.06] transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-xs font-bold mb-5 uppercase tracking-widest">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-teal text-sm transition-colors duration-200 flex items-center gap-1"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-slate-500 hover:text-teal text-sm transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © 2025 Tranquil Labs Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button
                key={item}
                onClick={() => setActivePolicy(item)}
                className="hover:text-teal cursor-pointer transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Policy modals */}
      <AnimatePresence>
        {activePolicy && (
          <PolicyModal policy={activePolicy} onClose={() => setActivePolicy(null)} />
        )}
      </AnimatePresence>
    </footer>
  );
}
