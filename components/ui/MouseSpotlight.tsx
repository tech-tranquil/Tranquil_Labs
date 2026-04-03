"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function MouseSpotlight() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-800);
  const mouseY = useMotionValue(-800);

  const x = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const background = useMotionTemplate`radial-gradient(
    500px circle at ${x}px ${y}px,
    rgba(45, 212, 191, 0.05),
    rgba(167, 139, 250, 0.02) 45%,
    transparent 70%
  )`;

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[3]"
      style={{ background }}
      aria-hidden
    />
  );
}
