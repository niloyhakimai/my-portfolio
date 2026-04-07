"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectFeed } from "@/components/projects/project-feed";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <section className="section-anchor-offset relative px-4 py-16 sm:py-24 z-10" id="projects">
      <div className="mx-auto max-w-6xl">
        
        <SectionHeading
          description="A curated selection of my recent builds. Each project demonstrates clean architecture, scalable systems, and modern web technologies."
          eyebrow="Selected Work"
          title="Architecting solutions. Delivering impact."
        />

        <div className="mt-12 sm:mt-16">
          <ProjectFeed projects={projects} />
        </div>
        
      </div>
    </section>
  );
}