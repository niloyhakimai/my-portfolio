"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function useMobilePerformance() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  return {
    isMobile,
    shouldReduceMotion: isMobile || Boolean(prefersReducedMotion),
  };
}
