"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function useMobilePerformance() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);
  const [hasResolvedDevice, setHasResolvedDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const update = () => {
      setIsMobile(mediaQuery.matches);
      setHasResolvedDevice(true);
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
    // Default to the low-motion path until the device query resolves.
    shouldReduceMotion: !hasResolvedDevice || isMobile || Boolean(prefersReducedMotion),
  };
}
