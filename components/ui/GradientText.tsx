"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "teal" | "primary" | "warm";
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  variant = "teal",
  animate = false,
}: GradientTextProps) {
  const gradients = {
    teal: "from-teal via-[#60efdf] to-lavender",
    primary: "from-primary via-blue-400 to-teal",
    warm: "from-lavender via-pink-400 to-teal",
  };

  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[variant],
        animate && "bg-[length:200%_auto]",
        className
      )}
      animate={
        animate
          ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
          : undefined
      }
      transition={
        animate ? { duration: 4, repeat: Infinity, ease: "linear" } : undefined
      }
    >
      {children}
    </motion.span>
  );
}
