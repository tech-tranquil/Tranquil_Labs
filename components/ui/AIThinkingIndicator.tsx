"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const thoughts = [
  "Analyzing profile...",
  "Processing expertise...",
  "Generating insight...",
  "Mapping neural patterns...",
  "Synthesizing data...",
];

interface AIThinkingIndicatorProps {
  active: boolean;
  className?: string;
}

export function AIThinkingIndicator({ active, className }: AIThinkingIndicatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % thoughts.length);
    }, 1500);
    return () => clearInterval(id);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className={`flex items-center gap-2 font-mono text-xs text-teal ${className}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <span className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 bg-teal rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.25 }}
            >
              {thoughts[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
