"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { navItems } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type PulseRipple = {
  id: number;
  x: number;
  y: number;
};

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ripples, setRipples] = useState<PulseRipple[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-44% 0px -44% 0px", threshold: [0.15, 0.35, 0.55, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    
    const newRipple = { id: Date.now(), x: event.clientX, y: event.clientY };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)), 800);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              initial={{ width: 0, height: 0, opacity: 0.8, borderWidth: "2px" }}
              animate={{ width: 120, height: 120, opacity: 0, borderWidth: "0px" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ left: ripple.x, top: ripple.y, x: "-50%", y: "-50%" }}
              className="absolute rounded-full border-[var(--accent)] shadow-[0_0_20px_var(--accent)]"
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
        <motion.header
          animate={{ y: scrolled ? 0 : 4, scale: scrolled ? 0.985 : 1 }}
          className="pointer-events-auto mx-auto max-w-6xl"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={cn(
              "glass-panel rounded-full px-4 py-3 md:px-5 border border-black/5 bg-white/70 backdrop-blur-3xl transition-all duration-300 dark:border-white/[0.08] dark:bg-[#050505]/60",
              scrolled && "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <Link className="min-w-0 group" href="/" onClick={() => setMenuOpen(false)}>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
                  Niloy Hakim
                </p>
                <p className="truncate text-sm font-medium text-[var(--foreground)]/90">
                  Full Stack Developer
                </p>
              </Link>

              <nav className="hidden items-center md:flex relative" onMouseLeave={() => setHoveredItem(null)}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const isHovered = hoveredItem === item.id;

                  return (
                    <a
                      key={item.id}
                      className={cn(
                        "relative px-5 py-2 text-sm font-medium transition-colors duration-300 outline-none",
                        isActive ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      )}
                      href={`#${item.id}`}
                      onClick={handleNavigate(item.id)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="active-dot"
                          className="absolute -bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[var(--foreground)] shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {isHovered && (
                        <motion.div
                          layoutId="hover-bg"
                          className="absolute inset-0 -z-10 rounded-full bg-black/[0.04] border border-black/[0.02] dark:bg-white/[0.04] dark:border-white/[0.02]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 relative z-10">
                <ThemeToggle />
                <button
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-[var(--foreground)] transition hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10 md:hidden"
                  onClick={() => setMenuOpen((current) => !current)}
                  type="button"
                >
                  {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="mt-4 grid gap-1 border-t border-black/5 pt-4 pb-2 dark:border-white/10">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        className={cn(
                          "rounded-xl px-4 py-3 text-sm font-medium transition-all active:scale-95",
                          activeSection === item.id
                            ? "bg-black/[0.05] border border-black/[0.05] text-[var(--foreground)] dark:bg-white/[0.06] dark:border-white/[0.05]"
                            : "text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/5"
                        )}
                        href={`#${item.id}`}
                        onClick={handleNavigate(item.id)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      </div>
    </>
  );
}