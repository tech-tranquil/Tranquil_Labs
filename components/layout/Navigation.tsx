"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLenis } from "@/hooks/useLenis";

const navLinks = [
  { label: "Tranquil AI",  href: "#tranquil-ai" },
  { label: "Consultancy",  href: "#consultancy" },
  { label: "Projects",     href: "#projects" },
  { label: "Media",        href: "#media" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

const mobileItemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export function Navigation() {
  const [isTop,    setIsTop]    = useState(true);
  const [hidden,   setHidden]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsTop(y < 80);
      setHidden(y > lastScrollY.current && y > 200);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTop
            ? "bg-transparent border-transparent"
            : "glass-dark border-b border-white/[0.06]"
        )}
        style={{
          boxShadow: isTop ? "none" : "0 4px 24px rgba(0,0,0,0.4)",
        }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
            >
              <motion.div
                className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/logo.png" alt="Tranquil Labs Logo" width={36} height={36} className="w-full h-full object-contain" />
              </motion.div>
              <span className="font-black text-lg tracking-tight">
                Tranquil{" "}
                <span className="gradient-text-animated">Labs</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2"
              >
                Work With Us
              </button>
              <motion.a
                href="https://tranquilai.in/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 bg-teal text-background px-5 py-2.5 rounded-xl text-sm font-bold overflow-hidden"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 30px -5px rgba(45,212,191,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <Download className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Get the App</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(10,10,11,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.06) 0%, transparent 70%)" }}
            />

            <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-bold w-full text-center py-4 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-6 w-full"
              >
                <a
                  href="https://tranquilai.in/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-teal text-background py-4 rounded-2xl text-lg font-bold"
                >
                  <Download className="w-5 h-5" />
                  Get Tranquil AI
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
