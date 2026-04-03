"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [mounted,   setMounted]   = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [clicking,  setClicking]  = useState(false);
  const [hovering,  setHovering]  = useState(false);
  const [onInput,   setOnInput]   = useState(false);
  const isTouchDevice = useRef(false);

  // Raw mouse position (immediate)
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);

  // Dot – follows mouse precisely
  const dotX = useSpring(rawX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(rawY, { stiffness: 1000, damping: 50 });

  // Ring – lags behind the dot
  const ringX = useSpring(rawX, { stiffness: 220, damping: 28 });
  const ringY = useSpring(rawY, { stiffness: 220, damping: 28 });

  // Glow blob – very lazy
  const glowX = useSpring(rawX, { stiffness: 60, damping: 18 });
  const glowY = useSpring(rawY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    setMounted(true);

    const onFirstTouch = () => { isTouchDevice.current = true; };
    window.addEventListener("touchstart", onFirstTouch, { once: true });

    const onMove = (e: MouseEvent) => {
      if (isTouchDevice.current) return;
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => { if (!isTouchDevice.current) setVisible(true); };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "button, a, input, textarea, select, label, [role='button'], [data-cursor='pointer']"
      );
      setHovering(!!el);
      setOnInput(!!(e.target as HTMLElement).closest("input, textarea, select"));
    };

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("mouseover",  onOver as EventListener);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mouseover",  onOver as EventListener);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.style.cursor = "";
    };
  }, [rawX, rawY]);

  // Nothing rendered until client mounts – avoids hydration mismatch
  if (!mounted) return null;

  const showCursor = visible && !onInput;

  return (
    <AnimatePresence>
      {showCursor && (
        <>
          {/* ── Outer ring ── */}
          <motion.div
            key="ring"
            className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
              borderStyle: "solid",
            }}
            animate={{
              width:       clicking ? 16 : hovering ? 36 : 24,
              height:      clicking ? 16 : hovering ? 36 : 24,
              borderWidth: "1px",
              borderColor: hovering
                ? "rgba(45,212,191,0.6)"
                : "rgba(45,212,191,0.28)",
              backgroundColor: hovering ? "rgba(45,212,191,0.04)" : "transparent",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          {/* ── Inner dot ── */}
          <motion.div
            key="dot"
            className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
            style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
            animate={{
              width:  hovering ? 3 : 4,
              height: hovering ? 3 : 4,
              backgroundColor: "rgba(45,212,191,0.9)",
              boxShadow: "0 0 6px rgba(45,212,191,0.6)",
            }}
            transition={{ duration: 0.15 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
