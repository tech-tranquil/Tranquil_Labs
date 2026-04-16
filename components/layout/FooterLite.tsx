import Image from "next/image";

export function FooterLite() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="Tranquil Labs Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-black text-lg tracking-tight">
              Tranquil <span className="gradient-text-animated">Labs</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="mailto:support@tranquilai.in"
              className="hover:text-white transition-colors"
            >
              support@tranquilai.in
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-600">
          © 2026 Tranquil Labs Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
