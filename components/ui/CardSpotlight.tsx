"use client";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  /** rgb triplet, e.g. "45,212,191" */
  color?: string;
  size?: number;
}

/**
 * Wraps any card. Shows a radial glow that tracks the mouse
 * inside the card. Use `color` to tint per brand color.
 */
export function CardSpotlight({
  children,
  className = "",
  color = "45,212,191",
  size = 260,
}: CardSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(-999);
  const rawY = useMotionValue(-999);

  // Spring the position for a silky feel
  const x = useSpring(rawX, { stiffness: 250, damping: 22 });
  const y = useSpring(rawY, { stiffness: 250, damping: 22 });

  // Fade in/out on enter/leave
  const alpha = useMotionValue(0);
  const opacity = useSpring(alpha, { stiffness: 150, damping: 20 });

  // Compose the reactive CSS gradient
  const background = useMotionTemplate`radial-gradient(
    ${size}px circle at ${x}px ${y}px,
    rgba(${color}, 0.13),
    transparent 70%
  )`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rawX.set(e.clientX - r.left);
    rawY.set(e.clientY - r.top);
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => alpha.set(1)}
      onMouseLeave={() => alpha.set(0)}
    >
      {/* Spotlight layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
        style={{ background, opacity }}
      />
      {/* Content */}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
