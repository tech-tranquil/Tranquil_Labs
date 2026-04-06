import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Tranquil Labs",
  description: "The page you're looking for doesn't exist. Return to Tranquil Labs — AI Product Development & Software Consultancy.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-slate-100 flex flex-col items-center justify-center px-6 text-center">
      {/* Glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* 404 number */}
        <p className="text-8xl font-black tracking-tight bg-gradient-to-br from-teal-400 to-cyan-300 bg-clip-text text-transparent select-none">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold text-white">
          Page not found
        </h1>

        <p className="mt-3 text-slate-400 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Only this specific page is missing — the rest of the site is fully operational.
        </p>

        {/* Quick links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm transition-colors"
          >
            ← Back to Home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Helpful links */}
        <div className="mt-10 text-sm text-slate-500">
          <p className="mb-3 font-medium text-slate-400">Or jump to a section:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {[
              { label: "Services", href: "/#consultancy" },
              { label: "Projects", href: "/#projects" },
              { label: "Team", href: "/#team" },
              { label: "Tranquil AI", href: "/#tranquil-ai" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-teal-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-600">
          Think this is a mistake?{" "}
          <a
            href="mailto:support@tranquilai.in"
            className="text-teal-500 hover:text-teal-400 transition-colors"
          >
            Report a broken link
          </a>
        </p>
      </div>
    </main>
  );
}
