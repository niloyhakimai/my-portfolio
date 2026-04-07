import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Code2, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data/projects"; 

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  // Find the requested project
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        
        {/* Breadcrumb & Navigation */}
        <div className="mb-10 flex items-center justify-between">
          <Link 
            href="/#projects" 
            className="group flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
            <span>Projects</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[var(--accent)]">{project.id}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/20">
                {project.category}
              </span>
              <span className="text-sm font-semibold text-[var(--muted)]">{project.year}</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[var(--muted)]">
              {project.tagline}
            </p>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 text-sm font-semibold text-[var(--background)] transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-8 text-sm font-semibold text-[var(--foreground)] transition-all hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Project Cover Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-black/5 bg-black/5 dark:border-white/10 dark:bg-white/5 lg:aspect-[4/5]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 border-t border-black/5 pt-16 dark:border-white/[0.05]">
          
          {/* Main Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">Project Overview</h3>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] whitespace-pre-wrap">
                {project.description}
              </p>
            </div>
          </div>

          {/* Sidebar: Tech, Challenges, Improvements */}
          <div className="space-y-12">
            
            {/* Tech Stack */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                <Code2 className="h-4 w-4 text-[var(--accent)]" />
                Technologies Used
              </h4>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-semibold text-[var(--foreground)]/80 dark:border-white/10 dark:bg-white/5 dark:text-[var(--muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                  <ArrowUpRight className="h-4 w-4 text-rose-500" />
                  Core Challenges
                </h4>
                <ul className="mt-6 space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500/50" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Improvements */}
            {project.improvements && project.improvements.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--foreground)]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Future Improvements
                </h4>
                <ul className="mt-6 space-y-4">
                  {project.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/50" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}