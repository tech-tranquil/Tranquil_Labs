"use client";
import { motion, type Transition } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  y = 40,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      } as Transition}
    >
      {children}
    </motion.div>
  );
}
