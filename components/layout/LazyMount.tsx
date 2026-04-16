"use client";

import { useEffect, useRef, useState } from "react";

interface LazyMountProps {
  children: React.ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

export function LazyMount({
  children,
  minHeight = "70vh",
  rootMargin = "300px 0px",
}: LazyMountProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mounted) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div ref={containerRef} style={{ minHeight }} aria-busy={!mounted}>
      {mounted ? children : null}
    </div>
  );
}
