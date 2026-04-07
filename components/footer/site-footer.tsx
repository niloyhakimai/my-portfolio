"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteProfile } from "@/lib/data/site";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mx-auto mt-20 w-full max-w-6xl px-4 pb-8 pt-2">
      
      {/* Premium Gradient Divider */}
      <div className="mb-8 h-[1px] w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)]" />
      
      {/* Glassmorphic Footer Container */}
      <div className="flex flex-col gap-6 rounded-[2rem] border border-black/5 bg-white/40 px-6 py-6 backdrop-blur-xl transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:border-white/[0.05] dark:bg-[#050505]/40">
        
        {/* Left Side: Brand & Description */}
        <div>
          <p className="text-base font-bold tracking-tight text-[var(--foreground)]">
            {siteProfile.name}
          </p>
          <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Architectural, ultra-thin portfolio crafted with modern web technologies, AI, and precision.
          </p>
        </div>
        
        {/* Right Side: Links & Copyright */}
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[var(--muted)]">
          <Link className="transition-colors hover:text-[var(--foreground)]" href="/">
            Home
          </Link>
          
          <a
            className="transition-colors hover:text-[var(--foreground)]"
            href={`mailto:${siteProfile.email}`}
          >
            Let&apos;s Talk
          </a>
          
          <span className="opacity-40">|</span>
          
          <span>&copy; {new Date().getFullYear()}</span>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-[var(--foreground)]" />
          </button>
        </div>
        
      </div>
    </footer>
  );
}
