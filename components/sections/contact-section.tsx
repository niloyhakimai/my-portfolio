"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Twitter, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { siteProfile, socialLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

// Mapping your social links to easily accessible contact cards
const contactCards = [
  {
    id: "email",
    href: `mailto:${siteProfile.email}`,
    icon: Mail,
    label: "Email",
    value: siteProfile.email,
    color: "rgba(240, 80, 50, 0.2)", // Subtle Red Glow
    iconColor: "text-red-400"
  },
  {
    id: "linkedin",
    href: socialLinks.find((link) => link.icon === "linkedin")?.href || "#",
    icon: Linkedin,
    label: "LinkedIn",
    value: "niloy-hakim", // Customize this username
    color: "rgba(10, 102, 194, 0.2)", // LinkedIn Blue Glow
    iconColor: "text-blue-400"
  },
  {
    id: "twitter",
    href: socialLinks.find((link) => link.icon === "twitter")?.href || "#",
    icon: Twitter,
    label: "Twitter",
    value: "@NiloyHakim", // Customize this username
    color: "rgba(29, 155, 240, 0.2)", // Twitter Blue Glow
    iconColor: "text-sky-400"
  },
];

export function ContactSection() {
  return (
    <section className="section-anchor-offset relative px-4 py-16 sm:py-24 z-10" id="contact">
      <div className="mx-auto max-w-5xl">
        
        <SectionHeading
          description="Let's discuss your next project, AI integration, or freelance opportunity."
          eyebrow="Get in Touch"
          title="Start the conversation."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          
          {/* LEFT SIDE: "Talk to me" Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-2"
            >
              <h3 className="text-xl font-semibold text-center lg:text-left text-[var(--foreground)]">Talk to me</h3>
            </motion.div>

            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <a href={item.href} target="_blank" rel="noreferrer" className="block group">
                    <SpotlightCard className="relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-black/5 bg-black/[0.02] px-4 py-8 transition-all duration-300 hover:border-black/10 hover:bg-white/60 dark:border-white/[0.06] dark:bg-[#080808]/60 dark:hover:border-white/10 dark:hover:bg-[#111]/80">
                      
                      {/* Interactive Hover Glow */}
                      <div 
                        className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                        style={{ backgroundColor: item.color }}
                      />

                      <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Center the icon/text stack inside SpotlightCard's inner wrapper */}
                        <div className={cn("mx-auto flex h-14 w-14 min-h-[56px] min-w-[56px] shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-[#111]", item.iconColor)}>
                          <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">{item.label}</p>
                          <p className="mt-1 text-sm font-medium text-[var(--foreground)]/80">{item.value}</p>
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]">
                          <span>Write me</span>
                          <ArrowRight className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                    </SpotlightCard>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center lg:text-left text-[var(--foreground)]">Write me your project</h3>
            </div>

            <SpotlightCard className="flex-1 rounded-[2.5rem] border border-black/5 bg-white/70 p-8 sm:p-10 backdrop-blur-xl shadow-lg dark:border-white/[0.06] dark:bg-[#050505]/60">
              <div className="relative z-[1] h-full flex flex-col">
                <p className="max-w-md text-sm leading-relaxed text-[var(--muted)] mb-8">
                  Share the details of your project, landing page, or AI integration. I usually respond within a few hours.
                </p>
                <div className="flex-1">
                  <ContactForm />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

