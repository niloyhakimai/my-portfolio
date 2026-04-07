"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { Cpu, Mail, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { useMobilePerformance } from "@/lib/hooks/use-mobile-performance";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Architecture",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", lightColor: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff", lightColor: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", lightColor: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    id: "tools",
    label: "AI & Modern Tools",
    skills: [
      { name: "Agentic AI", icon: Cpu, color: "#8fd9ff" },
      { name: "Llama / Groq", icon: Sparkles, color: "#F58E2E" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nodemailer", icon: Mail, color: "#EAEAEA", lightColor: "#333333" },
    ],
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategoryData = skillCategories.find((category) => category.id === activeTab);
  const { shouldReduceMotion } = useMobilePerformance();

  return (
    <section className="section-anchor-offset relative z-10 px-4 py-12 sm:py-20 lg:py-24" id="skills">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          description="Interactive technical ecosystem. Click the categories below to explore the stacks."
          eyebrow="Skills & Technologies"
          title="Architecting with precision and power."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {skillCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 outline-none",
                  isActive
                    ? "text-[var(--foreground)]"
                    : "border border-transparent text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/5",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-category-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-black/10 bg-white shadow-lg dark:border-white/10 dark:bg-[#1a1a1a] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-16 flex min-h-[380px] w-full items-center justify-center rounded-[2.5rem] border border-black/5 bg-black/[0.02] p-8 backdrop-blur-sm sm:p-12 dark:border-white/[0.05] dark:bg-white/[0.01]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-[2.5rem]">
            <div className={cn("rounded-full bg-[var(--accent)]/10", shouldReduceMotion ? "h-40 w-40 blur-[70px]" : "h-64 w-64 blur-[100px]")} />
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {activeCategoryData?.skills.map((skill, index) => {
                const Icon = skill.icon;
                const floatDuration = 4 + (index % 3);
                const floatDelay = index * 0.2;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${activeTab}-${skill.name}`}
                    layout={!shouldReduceMotion}
                    initial={{ opacity: 0, scale: 0, y: 40 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 200, damping: 20, delay: index * 0.08 },
                    }}
                    exit={{ opacity: 0, scale: 0.5, y: -20, transition: { duration: 0.2 } }}
                    className={cn(
                      "group relative flex flex-col items-center justify-center",
                      shouldReduceMotion ? "my-0" : isEven ? "mb-6 sm:mb-12" : "mt-6 sm:mt-12",
                    )}
                  >
                    <motion.div
                      animate={shouldReduceMotion ? { y: 0 } : { y: ["-15px", "15px", "-15px"] }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }
                      }
                      className="relative flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 sm:h-[110px] sm:w-[110px] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                    >
                      <div
                        className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30 dark:group-hover:opacity-40"
                        style={{ backgroundColor: skill.color }}
                      />

                      <Icon
                        className="relative z-10 h-8 w-8 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                        style={{ color: skill.color }}
                      />

                      <span className="relative z-10 px-2 text-center text-[10px] font-semibold text-[var(--foreground)]/80 sm:text-xs">
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
