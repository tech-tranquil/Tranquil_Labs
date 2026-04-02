"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "teal" | "lavender" | "dark";
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = false,
  onClick,
}: GlassCardProps) {
  const variants = {
    default: "glass",
    teal: "glass-teal",
    lavender: "glass-lavender",
    dark: "glass-dark",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6 relative overflow-hidden",
        variants[variant],
        hover && "cursor-pointer",
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
