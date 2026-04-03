import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#0f1117",
        "surface-2": "#161b2c",
        primary: "#0b3bcb",
        teal: "#2dd4bf",
        lavender: "#a78bfa",
        "teal-dim": "rgba(45,212,191,0.15)",
        "lavender-dim": "rgba(167,139,250,0.15)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 0% 0%, rgba(11,59,203,0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(167,139,250,0.1) 0px, transparent 50%)",
        "gradient-aurora":
          "radial-gradient(ellipse at 20% 50%, rgba(45,212,191,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(11,59,203,0.06) 0%, transparent 50%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, #2dd4bf, #a78bfa, #0b3bcb, #2dd4bf)",
        "gradient-teal-lavender":
          "linear-gradient(135deg, rgba(45,212,191,0.15) 0%, rgba(167,139,250,0.15) 100%)",
      },
      animation: {
        "pulse-slow":    "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ticker":        "ticker 30s linear infinite",
        "float-1":       "float1 6s ease-in-out infinite",
        "float-2":       "float2 8s ease-in-out infinite",
        "float-3":       "float3 7s ease-in-out infinite",
        "glow-pulse":    "glowPulse 3s ease-in-out infinite",
        "breathing":     "breathing 4s ease-in-out infinite",
        "shimmer":       "shimmer 3s linear infinite",
        "aurora":        "aurora-drift 12s ease-in-out infinite",
        "pulse-ring":    "pulse-ring 2s ease-out infinite",
        "gradient-x":    "gradient-shift 4s ease infinite",
        "spin-slow":     "spin-slow 12s linear infinite",
        "border-flow":   "border-flow 3s linear infinite",
        "scan":          "scan-line 4s ease-in-out infinite",
        "orbit":         "orbit 6s linear infinite",
        "counter-up":    "counter-up 0.5s ease-out forwards",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-20px) rotate(2deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-30px) rotate(-2deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-15px) rotate(1deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.8", transform: "scale(1.05)" },
        },
        breathing: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%":      { transform: "scale(1.3)", opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%":      { transform: "translate(3%, -2%) scale(1.05)" },
          "50%":      { transform: "translate(-2%, 3%) scale(0.95)" },
          "75%":      { transform: "translate(2%, -1%) scale(1.02)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.8)", opacity: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        "border-flow": {
          "0%":   { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        "scan-line": {
          "0%":   { transform: "translateY(-100%)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          to:   { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
        "counter-up": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to:   { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "glow-teal":       "0 0 40px -10px rgba(45,212,191,0.4)",
        "glow-teal-lg":    "0 0 80px -10px rgba(45,212,191,0.3), 0 0 40px -5px rgba(45,212,191,0.2)",
        "glow-lavender":   "0 0 40px -10px rgba(167,139,250,0.4)",
        "glow-lavender-lg":"0 0 80px -10px rgba(167,139,250,0.3), 0 0 40px -5px rgba(167,139,250,0.2)",
        "glow-primary":    "0 0 40px -10px rgba(11,59,203,0.4)",
        "glass":           "0 8px 32px rgba(0,0,0,0.4)",
        "card":            "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover":      "0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
        "inner-glow-teal": "inset 0 0 40px -10px rgba(45,212,191,0.1)",
      },
      backdropBlur: {
        xs:  "2px",
        "2xl": "48px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        bounce: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
