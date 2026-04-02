"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete,
      });

      // Start: black screen
      tl.set(containerRef.current, { opacity: 1 })
        // t=0.3 — particle glows in
        .fromTo(
          particleRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
          0.3
        )
        // t=0.8 — particle expands to ring
        .to(
          particleRef.current,
          { scale: 2.5, opacity: 0, duration: 0.5, ease: "power2.out" },
          0.8
        )
        .fromTo(
          ringRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 0.6, duration: 0.5, ease: "power2.out" },
          0.8
        )
        // t=1.0 — text fades in
        .fromTo(
          textRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          1.0
        )
        // Hold text for 0.8s, then fade everything out
        .to(
          [ringRef.current, textRef.current],
          { opacity: 0, y: -10, duration: 0.5, ease: "power2.in", stagger: 0.05 },
          2.0
        )
        // Scale up + fade out container
        .to(
          containerRef.current,
          {
            opacity: 0,
            scale: 1.05,
            duration: 0.6,
            ease: "power2.inOut",
          },
          2.3
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
      style={{ opacity: 1 }}
    >
      {/* Ambient glow bg */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px]" />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="absolute w-32 h-32 rounded-full border border-teal/40"
        style={{
          boxShadow: "0 0 40px rgba(45,212,191,0.2), inset 0 0 40px rgba(45,212,191,0.05)",
          opacity: 0,
        }}
      />

      {/* Core particle */}
      <div
        ref={particleRef}
        className="w-3 h-3 rounded-full bg-teal"
        style={{
          boxShadow: "0 0 20px rgba(45,212,191,0.8), 0 0 60px rgba(45,212,191,0.4)",
          opacity: 0,
        }}
      />

      {/* Text */}
      <p
        ref={textRef}
        className="absolute bottom-[calc(50%-80px)] text-center text-xl md:text-2xl font-light tracking-wide text-slate-300"
        style={{ opacity: 0 }}
      >
        Technology should{" "}
        <span className="text-teal font-semibold">understand</span> humans.
      </p>
    </div>
  );
}
