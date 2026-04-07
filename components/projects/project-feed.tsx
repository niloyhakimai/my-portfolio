"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/types"; // Adjust path if needed
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/projects/project-card";

const PAGE_SIZE = 6;

type ProjectFeedProps = {
  projects: Project[];
};

export function ProjectFeed({ projects }: ProjectFeedProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const visibleProjects = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-[var(--muted)]">
          Displaying {visibleProjects.length} of {projects.length} curated projects.
        </p>
        
        {/* Premium Pagination Buttons */}
        {pageCount > 1 ? (
          <div className="flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] p-1.5 backdrop-blur-md dark:border-white/5 dark:bg-white/[0.02]">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={`page-${index + 1}`}
                className={cn(
                  "inline-flex h-9 min-w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                  page === index
                    ? "bg-black/10 text-black shadow-sm dark:bg-white/10 dark:text-white dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "text-[var(--muted)] hover:bg-black/5 hover:text-black dark:hover:bg-white/5 dark:hover:text-white"
                )}
                onClick={() => setPage(index)}
                type="button"
                aria-label={`Go to page ${index + 1}`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`projects-page-${page}`}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          exit={{ opacity: 0, y: -16 }} // Slides up slightly when exiting
          initial={{ opacity: 0, y: 20 }} // Slides in from bottom
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}