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
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ticker: "ticker 30s linear infinite",
        "float-1": "float1 6s ease-in-out infinite",
        "float-2": "float2 8s ease-in-out infinite",
        "float-3": "float3 7s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "breathing": "breathing 4s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(-2deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        breathing: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.3)", opacity: "1" },
        },
      },
      boxShadow: {
        "glow-teal": "0 0 40px -10px rgba(45,212,191,0.4)",
        "glow-lavender": "0 0 40px -10px rgba(167,139,250,0.4)",
        "glow-primary": "0 0 40px -10px rgba(11,59,203,0.4)",
        "glow-teal-lg": "0 0 80px -10px rgba(45,212,191,0.3)",
        glass: "0 8px 32px rgba(0,0,0,0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
