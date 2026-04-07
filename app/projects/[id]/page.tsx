import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Layers3, Lightbulb, Wrench } from "lucide-react";
import { MagicButtonLink } from "@/components/ui/magic-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { getProjectById, projects } from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Niloy Hakim",
    };
  }

  return {
    title: `${project.title} | Niloy Hakim`,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-4 pb-14 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <MagicButtonLink href="/">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </MagicButtonLink>
        </div>

        <div className="section-shell rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
              <div className="relative aspect-[16/11]">
                <Image
                  alt={project.title}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  src={project.cover}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="small-label !text-white/70">{project.category}</p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SpotlightCard className="section-shell rounded-[1.8rem] p-6">
                <div className="relative z-[1]">
                  <p className="small-label">Brief Description</p>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="section-shell rounded-[1.8rem] p-6">
                <div className="relative z-[1]">
                  <p className="small-label">Links</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <MagicButtonLink external href={project.liveUrl}>
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Live Project</span>
                    </MagicButtonLink>
                    <MagicButtonLink external href={project.githubUrl}>
                      <Github className="h-4 w-4" />
                      <span>GitHub Repository</span>
                    </MagicButtonLink>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <SpotlightCard className="section-shell rounded-[1.8rem] p-6">
              <div className="relative z-[1]">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-[var(--accent)]" />
                  <p className="small-label">Main Stack Used</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-[var(--foreground)]/88"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="section-shell rounded-[1.8rem] p-6">
              <div className="relative z-[1]">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-[var(--accent-secondary)]" />
                  <p className="small-label">Challenges Faced</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="text-sm leading-7 text-[var(--muted)] sm:text-base"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>

            <SpotlightCard className="section-shell rounded-[1.8rem] p-6">
              <div className="relative z-[1]">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-[var(--accent)]" />
                  <p className="small-label">Future Improvements</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {project.improvements.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-7 text-[var(--muted)] sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </main>
  );
}
