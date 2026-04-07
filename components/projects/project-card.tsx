"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Globe, Eye } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 p-4 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#080808]/80 dark:hover:border-white/[0.15] dark:hover:shadow-[0_8px_40px_rgba(37,185,255,0.1)]"
    >
      {/* IMAGE SHOWCASE AREA (Using project.cover) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] border border-black/5 dark:border-white/10">
        <Image
          src={project.cover || "/images/project-placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20 dark:group-hover:bg-black/40" />
        
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-110 hover:bg-[var(--accent)] dark:bg-black/40 dark:hover:bg-[var(--accent)]" title="View Live Site">
              <Globe className="h-5 w-5" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-110 hover:bg-white hover:text-black dark:bg-black/40 dark:hover:bg-white dark:hover:text-black" title="View Source Code">
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex flex-1 flex-col px-2 pt-6 pb-2">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">{project.category}</span>
            <span className="text-[10px] font-semibold text-[var(--muted)]">{project.year}</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
            {project.excerpt}
          </p>
        </div>

        {/* Tech Stack Badges (Using project.techStack) */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.techStack?.slice(0, 4).map((tech: string) => (
            <span key={tech} className="rounded-full border border-black/5 bg-black/[0.03] px-3 py-1 text-[11px] font-semibold text-[var(--foreground)]/70 dark:border-white/10 dark:bg-white/5 dark:text-[var(--muted)]">
              {tech}
            </span>
          ))}
          {project.techStack?.length > 4 && (
            <span className="rounded-full px-2 py-1 text-[11px] font-semibold text-[var(--muted)]">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/[0.05]">
          <Link href={`/projects/${project.id}`} className="group/btn inline-flex w-full items-center justify-between rounded-xl bg-black/5 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--accent)] hover:text-white dark:bg-white/5 dark:hover:bg-[var(--accent)] dark:hover:text-black">
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4 opacity-70 group-hover/btn:opacity-100" />
              View Case Study
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}