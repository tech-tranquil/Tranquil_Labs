"use client";
import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handler = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsTop(currentY < 80);
      setDirection(currentY > lastY ? "down" : "up");
      lastY = currentY;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { scrollY, direction, isTop };
}
