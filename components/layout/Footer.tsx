"use client";
import { Waves, ArrowUpRight } from "lucide-react";
import { getLenis } from "@/hooks/useLenis";

const footerLinks = {
  Platform: [
    { label: "Tranquil AI", href: "#ecosystem" },
    { label: "Download App", href: "#download" },
    { label: "Features", href: "#product-demo" },
    { label: "Pricing", href: "#download" },
  ],
  Consultancy: [
    { label: "AI Development", href: "#contact" },
    { label: "Projects", href: "#projects" },
    { label: "Start a Project", href: "#contact" },
    { label: "Case Studies", href: "#projects" },
  ],
  Company: [
    { label: "Our Story", href: "#vision" },
    { label: "Team", href: "#team" },
    { label: "Media", href: "#media" },
    { label: "Careers", href: "#contact" },
  ],
  Resources: [
    { label: "Technology", href: "#technology" },
    { label: "Research", href: "#media" },
    { label: "Press Kit", href: "#media" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface/50 backdrop-blur-sm">
      <div className="section-container py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-teal/20 border border-teal/30 rounded-lg flex items-center justify-center">
                <Waves className="w-4 h-4 text-teal" />
              </div>
              <span className="font-black text-lg tracking-tight">
                Tranquil <span className="text-teal">Labs</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Engineering a world where technology respects human tranquility and
              cognitive freedom. Palo Alto, CA.
            </p>
            <a
              href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/20 rounded-lg text-teal text-sm font-semibold hover:bg-teal/20 transition-colors"
            >
              Download Tranquil AI
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-slate-500 hover:text-teal text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © 2025 Tranquil Labs Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
