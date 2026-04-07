import type { NavItem, SkillGroup, SocialLink } from "@/lib/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/niloyhakimai",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niloyhakimai/",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://x.com/niloynakimai",
    icon: "twitter",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "facebook",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    summary: "Thin, atmospheric interfaces built for clarity, motion, and performance.",
    accent: "from-sky-400/25 via-cyan-300/10 to-transparent",
    ringColor: "rgba(125, 211, 252, 0.55)",
    skills: [
      { name: "Next.js 15", level: 95 },
      { name: "React 19", level: 93 },
      { name: "Tailwind CSS v4", level: 94 },
      { name: "Framer Motion", level: 90 },
      { name: "TypeScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    summary: "APIs and services shaped around reliable architecture and fast iteration.",
    accent: "from-emerald-400/25 via-teal-300/10 to-transparent",
    ringColor: "rgba(110, 231, 183, 0.5)",
    skills: [
      { name: "Node.js", level: 89 },
      { name: "Express.js", level: 86 },
      { name: "Groq SDK", level: 82 },
      { name: "REST API Design", level: 88 },
      { name: "Python", level: 87 },
    ],
  },
  {
    title: "Tools",
    summary: "Modern workflows for shipping polished products without losing development speed.",
    accent: "from-fuchsia-400/20 via-violet-300/10 to-transparent",
    ringColor: "rgba(232, 121, 249, 0.45)",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vercel", level: 84 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 79 },
      { name: "VS Code", level: 91 },
    ],
  },
];

export const siteProfile = {
  name: "Niloy Hakim",
  designation: "Full-Stack Developer",
  spotlight:
    "Building modern web applications, AI-powered features, and polished digital products with a product-first mindset.",
  introduction:
    "I design and develop clean, high-performance digital experiences with a focus on usability, structure, and execution.",
  availability:
    "Open to remote roles, freelance work, and product-focused collaborations.",
  resumeHref: "/resume/niloy-hakim-resume.pdf",
  email: "niloyhakim.ai@gmail.com",
  phone: "+880 1XXX-XXXXXX",
  location: "Bangladesh",
  about: [
    "I started programming out of curiosity and gradually turned it into a focused practice of building real products. Over time, that evolved into a habit of solving problems through structure, clean interfaces, and reliable systems.",
    "After completing my Higher Secondary Certificate (HSC), I continued learning independently by building projects, studying modern web architecture, and integrating AI where it adds real value to the user experience.",
  ],
  interests: [
    "Modern web development",
    "AI-powered product building",
    "Interface design and architecture",
    "Music, films, and creative experimentation",
  ],
};