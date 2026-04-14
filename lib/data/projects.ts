import type { Project } from "@/lib/types";

export const projects: Project[] = [
{
  id: "cinetube",
  title: "CineTube",
  category: "Full-Stack Streaming & Discovery Platform",
  year: "2026",
  tagline:
    "A full-stack movie and TV streaming platform with TMDB-powered discovery, Stripe billing, role-based moderation, and Groq-backed AI assistance.",
  excerpt:
    "A production-style streaming experience built with Next.js and Express, featuring subscriptions, premium checkout flows, watchlists, moderated reviews, admin tools, and AI-powered discovery.",
  description:
    "CineTube is a full-stack streaming and discovery platform that combines a cinematic Next.js frontend with an Express and Prisma backend. The app supports JWT and Google authentication, role-based access for admins, moderators, and curators, profile management, watchlists, approved community reviews with comments and likes, TMDB-powered catalog sync through backend proxy routes, and Stripe-based monthly/yearly subscriptions alongside premium movie purchase and rental flows. It also includes Groq-backed AI recommendations, AI review summaries, and a floating assistant that helps users discover titles, understand plans, and navigate the platform.",
  cover: "/images/cinetube-cover.jpg",
  techStack: [
    "Next.js 16",
    "React 19",
    "Tailwind CSS 4",
    "Node.js",
    "Express 5",
    "Prisma ORM",
    "PostgreSQL",
    "Stripe",
    "Google OAuth",
    "TMDB API",
    "Groq API"
  ],
  liveUrl: "https://cinetube-self.vercel.app",
  githubUrl: "https://github.com/niloyhakimai/cinetube-frontend",
  challenges: [
    "Combining local media management with TMDB-synced discovery while keeping routes, previews, and metadata consistent across movies and series.",
    "Designing a unified Stripe payment flow that supports subscriptions, premium title checkout, and access control inside the viewing experience.",
    "Managing role-based permissions and review moderation for admins, moderators, curators, and regular users without making the product flow feel heavy."
  ],
  improvements: [
    "Add real-time notifications for review replies, moderation actions, featured drops, and subscription events.",
    "Expand the AI layer into deeper personalization using watchlist activity, ratings, purchases, and viewing behavior.",
    "Upgrade playback with richer streaming features such as resume progress, subtitle/audio preferences, and adaptive HLS/DASH delivery."
  ],
},

{
    id: "estatepro",
    title: "EstatePro",
    category: "Full-Stack Real Estate Platform",
    year: "2026",
    tagline: "A premium real estate platform featuring AI-assisted discovery, role-based dashboards, and property management.",
    excerpt:
      "A complete real estate ecosystem built with Next.js, integrating Groq-powered AI for natural language search and advanced role-aware routing.",
    description:
      "EstatePro is designed as a comprehensive real estate product rather than a simple landing page. Built on the Next.js App Router, it offers a polished marketing site, searchable property catalog, and dedicated dashboard experiences for Admins, Managers, and Users. The platform leverages Prisma and PostgreSQL for robust relational data management, secured by NextAuth credentials. Its standout feature is the deep AI integration powered by Groq, offering prompt-to-filter property discovery and a conversational floating real estate assistant, all wrapped in a responsive, modern glass-inspired UI.",
    cover: "/images/estatepro-cover.jpg", 
    techStack: [
      "Next.js", 
      "React",
      "TypeScript",
      "Prisma ORM", 
      "PostgreSQL", 
      "NextAuth.js", 
      "Groq AI",
      "Tailwind CSS"
    ],
    liveUrl: "https://estatepro-ai.vercel.app/",
    githubUrl: "https://github.com/niloyhakimai/estatepro-ai",
    challenges: [
      "Integrating the Groq AI SDK to accurately parse natural language prompts and securely convert them into structured Prisma database filters.",
      "Implementing strict role-aware dashboard routing and protecting API routes for three distinct user tiers (ADMIN, MANAGER, USER) using NextAuth.",
      "Designing a scalable, shareable search state management system for the explore page with advanced filtering, sorting, and pagination.",
    ],
    improvements: [
      "Add interactive map integrations (e.g., Google Maps or Mapbox) for location-based property discovery and boundary drawing.",
      "Integrate Stripe payment processing for premium listing fees or booking deposits.",
      "Implement real-time WebSocket notifications to instantly alert managers and users when new property inquiries are submitted or updated.",
    ],
  },

  {
    id: "interactive-3d-environment",
    title: "Interactive 3D Architecture",
    category: "3D Web Experience",
    year: "2026",
    tagline: "A fully immersive 3D house model rendered in real-time with dual camera modes and cinematic transitions.",
    excerpt:
      "Explore a real-time rendered 3D environment featuring seamless exterior orbit and interior first-person navigation modes.",
    description:
      "An immersive 3D web experience bridging the gap between web design and spatial computing. Built with Next.js and Three.js (React Three Fiber), this project features a fully rendered 3D house model optimized with Draco compression for fast loading and smooth performance, even on mid-range devices. It introduces a sophisticated dual-camera system: an Orbit Mode for showroom-style exterior viewing, and a First-Person Mode for interior navigation using scroll-to-walk interactions and GSAP-powered cinematic fly-in animations. The entire UI overlay is fully responsive and built with Tailwind CSS.",
    cover: "/images/project-3d.jpg", 
    techStack: [
      "Next.js", 
      "Three.js", 
      "React Three Fiber", 
      "@react-three/drei", 
      "GSAP", 
      "Tailwind CSS"
    ],
    liveUrl: "https://interactive-3d-modern-webbsite.vercel.app/",
    githubUrl: "https://github.com/niloyhakimai/interactive-3d-modern-webbsite",
    challenges: [
      "Optimizing complex GLTF 3D models using Draco compression to maintain high visual fidelity without sacrificing load times or FPS.",
      "Implementing flawless mathematical lerping for seamless camera transitions between exterior orbit controls and interior first-person view.",
      "Synchronizing native DOM scroll events with 3D camera movement to create a natural, intuitive 'scroll-to-walk' user experience.",
    ],
    improvements: [
      "Integrate WebXR support to allow users to experience the 3D house in Virtual Reality (VR) headsets.",
      "Implement dynamic environment mapping and real-time day/night lighting cycles based on the user's local timezone.",
      "Add interactive spatial hotspots (Raycasting) inside the house to display architectural details and material information.",
    ],
  },
  {
    id: "cyberpunk-gaming-hero",
    title: "Cyberpunk 3D Hero",
    category: "Interactive Web Experience",
    year: "2026",
    tagline: "A high-performance, interactive 3D hero section featuring mouse-parallax effects and a futuristic Cyber Ninja theme.",
    excerpt:
      "Immersive 3D web experience with fluid mouse-parallax effects, floating characters, and performance-optimized rendering.",
    description:
      "A next-generation gaming hero section that brings a Cyberpunk aesthetic to life using Next.js 14 and Framer Motion. The entire viewport reacts to mouse movements in 3D space, creating a deep parallax effect where the central Cyber Ninja character pops out of the screen. Built with performance and UX in mind, it utilizes buttery-smooth spring physics on desktop while gracefully disabling heavy calculations on mobile to preserve battery life and ensure optimal visibility. The project also features realistic 3D tilt cards and hydration-safe, client-side particle generation.",
    cover: "/images/project-gaming.jpg", 
    techStack: [
      "Next.js 14", 
      "TypeScript", 
      "Tailwind CSS", 
      "Framer Motion", 
      "Lucide React"
    ],
    liveUrl: "https://gaming-hero.vercel.app/",
    githubUrl: "https://github.com/niloyhakimai/gaming-hero",
    challenges: [
      "Implementing full-section 3D tilt and parallax effects without causing layout shifts or jittery animations.",
      "Ensuring the complex Framer Motion physics degraded gracefully on mobile devices to save battery while maintaining visual appeal.",
      "Managing client-side particle generation safely to prevent hydration mismatches within the Next.js App Router.",
    ],
    improvements: [
      "Integrate WebGL/Three.js for true 3D model rendering of the Cyber Ninja character instead of 2D parallax layers.",
      "Add spatial sound design elements that trigger on specific hover or parallax interactions to enhance gaming immersion.",
      "Implement a dynamic theme switcher allowing users to toggle between different cyberpunk neon color palettes.",
    ],
  },
{
    id: "medistore",
    title: "MediStore Platform",
    category: "Multi-Role E-Commerce",
    year: "2026",
    tagline: "A comprehensive medical e-commerce platform with real-time order tracking and secure multi-vendor inventory management.",
    excerpt:
      "Full-stack medical e-commerce platform featuring customer, seller, and admin portals with secure JWT authentication.",
    description:
      "MediStore is a robust multi-role e-commerce ecosystem built to handle the complexities of online pharmacy management. Developed with Next.js 14 (App Router) on the frontend and an Express.js/TypeScript backend, it features three distinct access tiers. Customers can browse, manage their cart, and track orders; Sellers manage inventory and order fulfillment via a dedicated dashboard; and Admins monitor overall platform health. The data layer is powered by PostgreSQL and structured with Prisma ORM, ensuring relational integrity for products, multi-vendor orders, and secure JWT-based authentication.",
    cover: "/images/project-medistore.jpg", 
    techStack: [
      "Next.js 14", 
      "TypeScript", 
      "Node.js & Express", 
      "Prisma ORM", 
      "PostgreSQL", 
      "JWT Auth",
      "Tailwind CSS"
    ],
    liveUrl: "https://medistore-client-ochre.vercel.app/",
    githubUrl: "https://github.com/niloyhakimai/medistore-client",
    challenges: [
      "Implementing a secure, Role-Based Access Control (RBAC) system using JWT to strictly separate Customer, Seller, and Admin privileges.",
      "Designing a complex relational database schema with Prisma to handle multi-vendor product inventory and cross-referenced order tracking.",
      "Building a responsive and intuitive Seller Dashboard that allows vendors to seamlessly manage product states and delivery updates.",
    ],
    improvements: [
      "Integrate an automated prescription upload and verification pipeline for restricted medical items.",
      "Add WebSocket integration for real-time, instant push notifications when an order status changes (Pending → Shipped → Delivered).",
      "Implement advanced data visualization charts in the Admin panel to track sales trends and top-performing sellers over time.",
    ],
  },

{
    id: "fitlife-gym",
    title: "FitLife Gym",
    category: "Premium Landing Page",
    year: "2026",
    tagline: "A dark-themed, high-conversion landing page for a premium fitness brand featuring cinematic animations.",
    excerpt:
      "High-energy fitness landing page featuring Ken Burns animations, interactive Bento grids, and fluid Framer Motion interactions.",
    description:
      "FitLife Gym is a modern, high-energy landing page meticulously designed to convert visitors into members for a premium fitness business. Built with Next.js and styled with a custom dark Tailwind CSS theme, the site emphasizes visual impact and a frictionless user experience. Key features include a cinematic Ken Burns hero animation that immediately grabs attention, an interactive Bento-style grid for showcasing training programs, and dynamic trainer profiles with social hover effects. Framer Motion drives the fluid, scroll-linked animations, ensuring a polished, professional feel throughout the entire user journey.",
    cover: "/images/project-fitlife.jpg", // ⚠️ আপনার এই প্রজেক্টের একটি স্ক্রিনশট public/images ফোল্ডারে এই নামে সেভ করুন
    techStack: [
      "Next.js", 
      "Tailwind CSS", 
      "Framer Motion", 
      "Lucide React"
    ],
    liveUrl: "https://fit-life-gym-zeta.vercel.app/", // 
    githubUrl: "https://github.com/niloyhakimai/fitLife-Gym", 
    challenges: [
      "Implementing a performant Ken Burns background zoom effect that doesn't cause layout shifts or frame drops on mobile browsers.",
      "Designing an intuitive and visually striking Bento grid layout for training programs that gracefully collapses into a responsive mobile view.",
      "Balancing the deep dark theme with vibrant, energetic accent colors to ensure maximum text readability and high contrast for Call-to-Action (CTA) buttons.",
    ],
    improvements: [
      "Integrate a headless CMS (like Sanity or Contentful) to allow gym owners to seamlessly update pricing tiers, schedules, and trainer profiles without code changes.",
      "Add a dynamic, interactive class schedule and booking system integrated with a calendar API.",
      "Implement advanced scroll-triggered micro-interactions for membership pricing tables to increase conversion rates.",
    ],
  },

{
    id: "sonic-audio",
    title: "Sonic Audio",
    category: "High-End E-Commerce",
    year: "2026",
    tagline: "A studio-grade, minimal landing page for premium audio accessories featuring real-time 3D audio visualization.",
    excerpt:
      "A sophisticated product experience focused on acoustics, featuring Three.js visualizers and high-end bento-grid layouts.",
    description:
      "Sonic Audio is a premium storefront concept designed for high-fidelity audio equipment. It bridges the gap between sound and vision by utilizing a Three.js (React Three Fiber) powered animated 3D sphere that reacts like a sound wave visualizer. The project features a minimal, studio-grade aesthetic with a Bento-style grid for technical specifications—highlighting Active Noise Cancellation (ANC), ultra-low latency, and battery life for audiophiles. It also includes an auto-scrolling infinite marquee gallery to showcase lifestyle imagery and Framer Motion-driven micro-interactions for a fluid, high-end feel.",
    cover: "/images/project-sonic.jpg",
    techStack: [
      "Next.js", 
      "Three.js", 
      "React Three Fiber", 
      "Framer Motion", 
      "Tailwind CSS"
    ],
    liveUrl: "https://sonic-audio-seven.vercel.app/",
    githubUrl: "https://github.com/niloyhakimai/sonic-audio",
    challenges: [
      "Synchronizing Three.js mesh deformations with smooth animations to create a realistic, fluid 'audio-wave' effect on a 3D sphere.",
      "Optimizing the infinite marquee gallery for smooth, jitter-free performance across high-refresh-rate displays and mobile devices.",
      "Developing a high-contrast, minimal UI that emphasizes product photography while maintaining a clear hierarchy for complex technical data.",
    ],
    improvements: [
      "Integrate the Web Audio API to allow the 3D sphere to react dynamically to real-time music playback from the user's input.",
      "Implement a 360-degree product viewer allowing users to interactively rotate and examine the audio accessories in high detail.",
      "Add a 'Build your Bundle' interactive feature with real-time price calculations and custom accessory selections.",
    ],
  },

  {
    id: "rivet-crm",
    title: "Rivet CRM",
    category: "Business Platform",
    year: "2025",
    tagline: "A client management system with lean workflows and strong visual discipline.",
    excerpt:
      "A CRM concept focused on simplicity, structured records, and efficient daily use.",
    description:
      "Rivet CRM organizes leads, activities, follow-ups, and account notes inside a polished business interface. The product direction prioritizes simplicity over clutter, with just enough motion to create orientation and feedback.",
    cover: "/images/projects/project-lattice.svg",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "Tailwind CSS"],
    liveUrl: "https://example.com/rivet-crm",
    githubUrl: "https://github.com/yourusername/rivet-crm",
    challenges: [
      "Compressing large amounts of account data into an interface that still felt lightweight.",
      "Designing stateful filters and table behaviors without making the system intimidating.",
      "Supporting desktop productivity patterns while remaining usable on smaller screens.",
    ],
    improvements: [
      "Add CRM automation, reminders, and AI-generated summaries.",
      "Introduce reporting dashboards and deal forecasting.",
      "Connect email sync and activity timeline integrations.",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
