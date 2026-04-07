import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/syne/500.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@/app/globals.css";

import { SpaceChatbot } from "@/components/chatbot/space-chatbot";
import { SiteFooter } from "@/components/footer/site-footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ParticleBackground } from "@/components/ui/particle-background";

const title = "Niloy Hakim | Full-Stack Developer";
const description =
  "Full-Stack Developer building modern web applications, AI-powered systems, and polished digital products with JavaScript, React, Next.js, and Python.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "https://my-portfolio-eight-mu-75.vercel.app";
const metadataBase = new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Niloy Hakim Portfolio",
    type: "website",
    url: metadataBase,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>
          <ParticleBackground />
          <FloatingNav />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <SpaceChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
