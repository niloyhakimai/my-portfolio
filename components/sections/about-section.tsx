"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Activity, Globe } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function AboutSection() {
  return (
    <section className="section-anchor-offset relative px-4 py-12 sm:py-20 lg:py-24 z-10" id="about">
      <div className="mx-auto max-w-6xl">
        
        <SectionHeading
          description="A look into my programming journey, the work I enjoy, and what keeps me balanced off-screen."
          eyebrow="About Me"
          title="Driven by curiosity. Defined by execution."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Main Narrative Card: Journey & Type of Work */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SpotlightCard className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 p-8 sm:p-10 backdrop-blur-xl shadow-lg dark:border-white/[0.06] dark:bg-[#050505]/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02),0_24px_60px_rgba(0,0,0,0.4)] h-full transition-colors duration-500">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-[80px] pointer-events-none" />
              
              <div className="relative z-[1] space-y-6">
                <p className="text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
                  My programming journey started with a deep curiosity for how things work on the web. After completing my HSC, I bypassed traditional routes and threw myself into self-taught engineering—learning through building real-world projects and solving complex problems.
                </p>
                <p className="text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
                  I truly enjoy work that challenges my architectural thinking. Building scalable full-stack applications and integrating AI-powered systems is where I thrive. I love crafting seamless digital products from front to back using modern JavaScript ecosystems and Python.
                </p>
                <p className="text-base font-medium leading-relaxed text-[var(--foreground)] sm:text-[17px]">
                  I am highly passionate about <span className="text-[var(--accent)]">Remote Work</span>. Operating asynchronously allows me to maintain deep focus, execute efficiently, and collaborate with teams globally without boundaries.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <div className="grid gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SpotlightCard className="rounded-[2rem] border border-black/5 bg-white/70 p-6 sm:p-8 backdrop-blur-xl shadow-md dark:border-white/[0.06] dark:bg-[#050505]/60 transition-colors duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] dark:bg-[var(--accent)]/10">
                    <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">Education & Growth</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground)]/90">
                      Completed HSC and immediately transitioned into intensive self-driven software development. My real degree is my GitHub commit history and the products I build.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Hobbies & Personality Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SpotlightCard className="rounded-[2rem] border border-black/5 bg-white/70 p-6 sm:p-8 backdrop-blur-xl shadow-md dark:border-white/[0.06] dark:bg-[#050505]/60 transition-colors duration-500 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent-secondary)]/20 bg-[var(--accent-secondary)]/[0.05] dark:bg-[var(--accent-secondary)]/10">
                    <Activity className="h-5 w-5 text-[var(--accent-secondary)]" />
                  </div>
                  <div className="w-full">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">Off-Screen Personality</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground)]/90">
                      When I am not writing code, you will find me on the <span className="font-semibold text-[var(--accent-secondary)]">Football field</span>. 
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">
                      Football keeps me grounded and active. The strategy, quick decision-making, and teamwork required on the pitch perfectly mirror my approach to building software—staying agile and working together to hit the target.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}