"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLenis } from "@/hooks/useLenis";

const navLinks = [
  { label: "Tranquil AI", href: "#tranquil-ai" },
  { label: "Consultancy", href: "#consultancy" },
  { label: "Projects", href: "#projects" },
  { label: "Media", href: "#media" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isTop, setIsTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setIsTop(y < 80);
      setHidden(y > lastScrollY.current && y > 200);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTop
            ? "bg-transparent border-transparent"
            : "glass-dark border-b border-white/5"
        )}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-teal/20 border border-teal/30 rounded-lg flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                <Waves className="w-4 h-4 text-teal" />
              </div>
              <span className="font-black text-lg tracking-tight">
                Tranquil <span className="text-teal">Labs</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Work With Us
              </button>
              <button
                onClick={() => scrollTo("#download")}
                className="flex items-center gap-2 bg-teal text-background px-5 py-2 rounded-lg text-sm font-bold hover:bg-teal/90 transition-all hover:shadow-glow-teal"
              >
                <Download className="w-4 h-4" />
                Get the App
              </button>
            </div>

            {/* Mobile menu btn */}
            <button
              className="lg:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-dark lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-bold text-slate-300 hover:text-teal transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#download")}
                className="mt-4 flex items-center gap-2 bg-teal text-background px-8 py-3 rounded-xl text-lg font-bold"
              >
                <Download className="w-5 h-5" />
                Get Tranquil AI
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
