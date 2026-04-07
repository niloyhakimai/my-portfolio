export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "facebook";
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  summary: string;
  accent: string;
  ringColor: string;
  skills: Skill[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  excerpt: string;
  description: string;
  cover: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

