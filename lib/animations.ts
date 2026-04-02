import { Variants } from "framer-motion";

// ─── Framer Motion Variants ───────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ─── GSAP ScrollTrigger defaults ─────────────────────────

export const scrollTriggerDefaults = {
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none reverse",
};

export const scrollTriggerScrub = {
  start: "top top",
  end: "+=200%",
  scrub: 1.5,
  pin: true,
};

// ─── Viewport options (Framer) ────────────────────────────

export const viewportOnce = {
  once: true,
  margin: "-80px",
};

export const viewportEager = {
  once: false,
  margin: "-80px",
};

// ─── Custom easing ────────────────────────────────────────

export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  snappy: [0.33, 1, 0.68, 1],
  gentle: [0.4, 0, 0.2, 1],
} as const;
