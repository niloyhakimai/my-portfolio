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

export const metadata: Metadata = {
  title: "Niloy Hakim | Full-Stack Developer",
  description:
    "Full-Stack Developer building modern web applications, AI-powered systems, and polished digital products with JavaScript, React, Next.js, and Python.",
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
