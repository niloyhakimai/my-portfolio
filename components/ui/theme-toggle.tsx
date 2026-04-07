"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { startTransition, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const root = document.documentElement;
    const body = document.body;
    const previousRootBehavior = root.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    // Instant scroll to top (Your requirement)
    root.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.scrollTop = 0;
    body.scrollTop = 0;

    startTransition(() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    });

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousRootBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    });
  };

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-11 w-11 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5",
          className,
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] dark:border-white/10 dark:bg-white/5 dark:text-[var(--foreground)] dark:hover:border-white/20 dark:hover:bg-white/10",
        className,
      )}
      onClick={handleToggle}
      type="button"
    >
      <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
        <SunMedium
          className={cn(
            "absolute h-5 w-5 transition duration-300",
            isDark ? "translate-y-8 rotate-90 opacity-0" : "translate-y-0 opacity-100",
          )}
        />
        <MoonStar
          className={cn(
            "absolute h-5 w-5 transition duration-300",
            isDark ? "translate-y-0 opacity-100" : "-translate-y-8 -rotate-90 opacity-0",
          )}
        />
      </span>
    </button>
  );
} 