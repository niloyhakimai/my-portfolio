"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMobilePerformance } from "@/lib/hooks/use-mobile-performance";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

export function ParticleBackground() {
  const [mounted, setMounted] = useState(false);
  const [distantStars, setDistantStars] = useState<Star[]>([]);
  const [midStars, setMidStars] = useState<Star[]>([]);
  const [nearStars, setNearStars] = useState<Star[]>([]);
  const { shouldReduceMotion } = useMobilePerformance();

  useEffect(() => {
    const generateStars = (
      count: number,
      minSize: number,
      maxSize: number,
      speedMultiplier: number,
    ) => {
      return Array.from({ length: count }).map(() => ({
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: (Math.random() * 10 + 10) * speedMultiplier,
        delay: Math.random() * -20,
        driftX: (Math.random() - 0.5) * 150,
        driftY: (Math.random() - 0.5) * 150,
      }));
    };

    const counts = shouldReduceMotion
      ? { distant: 12, mid: 8, near: 4 }
      : { distant: 40, mid: 25, near: 15 };

    setDistantStars(generateStars(counts.distant, 1, 2, 2.5));
    setMidStars(generateStars(counts.mid, 2, 3, 1.5));
    setNearStars(generateStars(counts.near, 3, 5, 0.8));
    setMounted(true);
  }, [shouldReduceMotion]);

  if (!mounted) {
    return null;
  }

  const renderStarLayer = (stars: Star[], className: string) => (
    <>
      {stars.map((star) => {
        const starStyle = {
          left: star.left,
          top: star.top,
          width: star.size,
          height: star.size,
        };

        if (shouldReduceMotion) {
          return (
            <div
              key={star.id}
              className={`absolute rounded-full bg-black dark:bg-white ${className}`}
              style={starStyle}
            />
          );
        }

        return (
          <motion.div
            key={star.id}
            className={`absolute rounded-full bg-black dark:bg-white ${className}`}
            style={starStyle}
            animate={{
              scale: [0, 1.5, 2],
              opacity: [0, 0.8, 0],
              x: [0, star.driftX],
              y: [0, star.driftY],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: star.delay,
            }}
          />
        );
      })}
    </>
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[var(--background)] transition-colors duration-500">
      {shouldReduceMotion ? (
        <>
          <div className="absolute left-[-10%] top-[-10%] h-[42vw] w-[42vw] rounded-full bg-blue-600/8 blur-[80px] dark:bg-blue-600/12" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[48vw] w-[48vw] rounded-full bg-[var(--accent-secondary)]/8 blur-[90px]" />
        </>
      ) : (
        <>
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.1, 1] }}
            className="absolute left-[-10%] top-[-10%] h-[50vw] w-[50vw] rounded-full bg-blue-600/10 blur-[120px] dark:bg-blue-600/20"
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ opacity: [0.02, 0.06, 0.02], x: [0, 30, 0] }}
            className="absolute bottom-[-10%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-[var(--accent-secondary)] blur-[150px] opacity-10"
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="absolute inset-0 perspective-[1000px]">
        {renderStarLayer(distantStars, "opacity-15 dark:opacity-25 blur-[1px]")}
        {renderStarLayer(midStars, "opacity-30 dark:opacity-45 blur-[0.5px]")}
        {renderStarLayer(nearStars, "opacity-60 dark:opacity-80 dark:shadow-[0_0_12px_rgba(255,255,255,0.8)]")}
      </div>
    </div>
  );
}
