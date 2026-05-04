"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Code,
  Layers,
  Cpu,
  Twitter,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { MagicButtonLink } from "@/components/ui/magic-button";
import { siteProfile, socialLinks } from "@/lib/data/site";
import { useMobilePerformance } from "@/lib/hooks/use-mobile-performance";

const socialIconMap = {
  facebook: FaFacebookF,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const inlineMetrics = [
  { text: "Production-Ready Code", icon: Code },
  { text: "Modern Web Stack", icon: Layers },
  { text: "AI-Powered Systems", icon: Cpu },
];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { shouldReduceMotion } = useMobilePerformance();
  const revealTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };
  const imageRevealTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const };
  const metricsRevealTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.8, delay: 0.4 };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50, mass: 1.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imageParallaxX = useTransform(smoothX, (v) => v * -1);
  const imageParallaxY = useTransform(smoothY, (v) => v * -1);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * 30;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
      onMouseLeave={shouldReduceMotion ? undefined : handleMouseLeave}
      className="section-anchor-offset relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40 lg:pt-44"
      id="home"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            style={shouldReduceMotion ? undefined : { y: textY, opacity: opacityFade }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 flex flex-col items-start"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            transition={revealTransition}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-secondary)]/20 bg-[var(--accent-secondary)]/[0.03] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[var(--accent-secondary)] backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-secondary)] opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_8px_var(--accent-secondary)]"></span>
              </span>
              <span>Available for Full-Time Roles</span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] leading-[1.1]">
              Code. Build. Scale. <br className="hidden sm:block" /> Building scalable
              <span className="text-glow-accent"> digital products.</span>
            </h1>

            <p className="mt-5 max-w-[32rem] text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
              Full-Stack Developer building scalable web apps and AI-powered systems with Next.js,
              Node.js, and Python. Focused on real-world products and clean architecture.
            </p>

            <div className="relative z-20 mt-8 flex flex-wrap gap-3.5">
              <MagicButtonLink
                download
                href={siteProfile.resumeHref}
                className="bg-black text-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-white dark:text-black"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm font-semibold">Resume</span>
              </MagicButtonLink>

              <a
                className="inline-flex h-[2.8rem] items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-5 text-sm font-medium text-black backdrop-blur-md transition hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:border-white/20 dark:hover:bg-white/10"
                href="#projects"
              >
                <span>View Work</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </a>
            </div>

            <div className="relative z-20 mt-10 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    aria-label={social.label}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-[var(--muted)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/10 hover:text-black dark:border-white/5 dark:bg-white/5 dark:hover:border-white/15 dark:hover:bg-white/10 dark:hover:text-white"
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            style={shouldReduceMotion ? undefined : { y: imageScrollY, opacity: opacityFade }}
            animate={{ opacity: 1, scale: 1 }}
            className="pointer-events-none relative z-10 mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:ml-auto lg:max-w-[28rem]"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
            transition={imageRevealTransition}
          >
            <motion.div style={shouldReduceMotion ? undefined : { x: imageParallaxX, y: imageParallaxY }}>
              <motion.div
                animate={
                  shouldReduceMotion
                    ? { y: 0, rotate: 0 }
                    : { y: ["-3%", "3%", "-3%"], rotate: [-1.5, 1.5, -1.5] }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }
                className="relative aspect-square w-full rounded-full border-[10px] border-black/5 bg-white shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] transition-colors duration-500 sm:border-[16px] dark:border-[#080808] dark:bg-[#050505] dark:shadow-[inset_0_0_60px_#000,0_0_80px_rgba(37,185,255,0.08)]"
              >
                <div className="absolute inset-[0.15rem] overflow-hidden rounded-full border border-black/5 dark:border-white/5">
                  <Image
                    alt={siteProfile.name}
                    className="object-cover object-center opacity-95 transition-opacity duration-700 dark:hover:opacity-100"
                    fill
                    priority
                    quality={68}
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 448px"
                    src="/images/profile.webp"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,var(--background)_100%)] transition-colors duration-500" />
                </div>

                <motion.div
                  style={shouldReduceMotion ? undefined : { x: smoothX, y: smoothY }}
                  className="absolute left-[2%] top-[15%] z-20 inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-secondary)]/15 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent-secondary)]/90 shadow-xl backdrop-blur-xl sm:left-[8%] sm:top-[12%] sm:text-[11px] dark:bg-[#050505]/90"
                >
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)]/80 shadow-[0_0_8px_var(--accent-secondary)]/50"></span>
                  <span>Full Stack Developer</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-3xl border border-black/5 bg-black/[0.02] py-5 backdrop-blur-sm transition-colors duration-500 sm:gap-x-12 dark:border-white/5 dark:bg-white/[0.01]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          transition={metricsRevealTransition}
        >
          {inlineMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.text} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-[var(--accent-secondary)]/80 dark:text-[var(--accent-secondary)]/60" />
                <span className="metric-text text-xs font-semibold tracking-tight text-[var(--muted)] sm:text-sm">
                  {metric.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
