"use client";

import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  email: string;
  message: string;
  name: string;
  service: string;
};

type FormState = {
  message: string;
  type: "error" | "idle" | "success";
};

const initialValues: ContactFormValues = {
  email: "",
  message: "",
  name: "",
  service: "Portfolio Website",
};

export function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    message: "",
    type: "idle",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormState({ message: "", type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to submit the form right now.");
      }

      setFormState({
        message:
          payload.message ??
          "Your message has been captured successfully. I will get back to you shortly.",
        type: "success",
      });
      setFormValues(initialValues);
    } catch (error) {
      setFormState({
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared input styling for consistency
  const inputStyles = "w-full rounded-2xl border border-black/5 bg-black/[0.03] px-5 py-3.5 text-sm text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)]/50 focus:border-black/20 focus:bg-white/50 focus:ring-4 focus:ring-black/5 dark:border-white/10 dark:bg-white/[0.03] dark:focus:border-[var(--accent)]/50 dark:focus:bg-[#050505]/80 dark:focus:ring-[var(--accent)]/10";
  const labelStyles = "mb-2 ml-1 block text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]";

  return (
    <form className="flex h-full flex-col space-y-6" onSubmit={handleSubmit}>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelStyles} htmlFor="name">
            Name
          </label>
          <input
            className={inputStyles}
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Insert your name"
            required
            value={formValues.name}
          />
        </div>
        <div>
          <label className={labelStyles} htmlFor="email">
            Email
          </label>
          <input
            className={inputStyles}
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Insert your email"
            required
            type="email"
            value={formValues.email}
          />
        </div>
      </div>

      <div>
        <label className={labelStyles} htmlFor="service">
          Project Type
        </label>
        <div className="relative">
          <select
            className={cn(inputStyles, "appearance-none cursor-pointer")}
            id="service"
            name="service"
            onChange={handleChange}
            value={formValues.service}
          >
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Full-Stack Web App">Full-Stack Web App</option>
            <option value="UI/UX Collaboration">UI/UX Collaboration</option>
            <option value="AI Integration">AI Integration</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[var(--muted)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <label className={labelStyles} htmlFor="message">
          Project Details
        </label>
        <textarea
          className={cn(inputStyles, "h-32 min-h-32 resize-none sm:h-40")}
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="Write your project details, timeline, or the problem you want to solve..."
          required
          value={formValues.message}
        />
      </div>

      <div className="mt-auto pt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Premium Send Button (Matching Reference) */}
        <button
          className="group relative inline-flex h-12 min-w-40 items-center justify-center gap-2 overflow-hidden rounded-full border border-black/10 bg-black/5 px-8 text-sm font-semibold text-[var(--foreground)] transition-all hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:focus:ring-white/20"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin text-[var(--muted)]" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="h-4 w-4 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--foreground)]" />
            </>
          )}
        </button>

        {/* Status Message */}
        <div className="flex-1 sm:text-right">
          {formState.message ? (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "text-xs font-medium sm:text-sm",
                formState.type === "success" ? "text-emerald-500 dark:text-emerald-400" : "text-rose-500 dark:text-rose-400"
              )}
            >
              {formState.message}
            </motion.p>
          ) : (
            <p className="text-xs text-[var(--muted)] sm:text-sm">
              All messages are securely routed.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

