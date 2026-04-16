import Image from "next/image";

const navLinks = [
  { label: "Tranquil AI", href: "#tranquil-ai" },
  { label: "Consultancy", href: "#consultancy" },
  { label: "Projects", href: "#projects" },
  { label: "Media", href: "#media" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function NavigationLite() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0bcc] backdrop-blur-md">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="#hero" className="flex items-center gap-3">
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
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://tranquilai.in/download/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-teal text-background px-5 py-2.5 rounded-xl text-sm font-bold"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
