"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, LoaderCircle, Orbit, SendHorizontal, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { MagicButton } from "@/components/ui/magic-button";
import { cn } from "@/lib/utils";

type ChatMessage = {
  content: string;
  role: "assistant" | "user";
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Assalamu alaikum. I am Niloy's advanced bilingual AI guide. Ask me about technologies, projects, or his professional journey.",
  },
];

// Making stars dynamic and slightly varied
const stars = Array.from({ length: 10 }).map(() => ({
  left: `${Math.random() * 90 + 5}%`,
  top: `${Math.random() * 90 + 5}%`,
  delay: Math.random() * 2,
}));

const quickPrompts = [
  "Introduce NiloyHakim",
  "Niloy's Tech Stack",
  "Show project highlights",
];

export function SpaceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [isOpen, isSubmitting, messages]);

  const submitMessage = async (content: string) => {
    const trimmed = content.trim();

    if (!trimmed || isSubmitting) {
      return;
    }

    const nextMessages = [...messages, { content: trimmed, role: "user" as const }];
    setMessages(nextMessages);
    setInput("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to reach the assistant.");
      }

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            payload.message ??
            "I am ready to help in Bangla or English. What specific aspect of Niloy's work are you curious about?",
        },
      ]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Nebula network temporary offline. Please try again or refresh.",
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitMessage(input);
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-4">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            className="pointer-events-auto relative w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-[2.5rem] border border-cyan-500/15 bg-[#04060d]/90 p-5 text-white shadow-[0_32px_120px_-10px_rgba(34,211,238,0.3),0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-3xl isolation-auto"
            exit={{ opacity: 0, scale: 0.8, y: 60, rotateX: 15 }}
            initial={{ opacity: 0, scale: 0.8, y: 60, rotateX: 15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: "1000px" }}
          >
            {/* Holographic Glowing Effects */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_40%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.18),transparent_45%)]" />
            
            {/* Twinkling Stars */}
            {stars.map((star) => (
              <motion.span
                key={`${star.left}-${star.top}`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-300/60"
                style={{ left: star.left, top: star.top }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, delay: star.delay }}
              />
            ))}

            <div className="relative z-[1] flex items-start justify-between gap-3 border-b border-cyan-800/20 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-sky-400/15 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                  <Orbit className="h-6 w-6 text-cyan-200" />
                  <motion.span
                    animate={{ rotate: 360 }}
                    className="absolute inset-[-4px] rounded-full border border-dashed border-cyan-200/20"
                    transition={{ duration: 12, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                  />
                   <motion.span
                    animate={{ rotate: -360 }}
                    className="absolute inset-[10px] rounded-full border border-cyan-200/20"
                    transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-white tracking-tight">Nebula Guide</p>
                  <p className="mt-1.5 text-xs text-cyan-100/60 font-medium">
                    Groq + Llama 3.3 | Prompt Niloy AI
                  </p>
                </div>
              </div>

              <button
                aria-label="Close chatbot"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => {
                  setIsOpen(false);
                }}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* QUICK PROMPT CHIPS */}
            <motion.div 
                className="relative z-[1] mt-5 flex flex-wrap gap-2.5"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
              {quickPrompts.map((prompt) => (
                <motion.button
                  key={prompt}
                  variants={{
                    hidden: { opacity: 0, x: -10, scale: 0.9 },
                    visible: { opacity: 1, x: 0, scale: 1 }
                  }}
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(34,211,238,0.06)" }}
                  className="rounded-full border border-cyan-500/10 bg-cyan-500/[0.03] px-4 py-2 text-xs font-semibold text-cyan-100/90 transition-all duration-300 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  onClick={() => {
                    void submitMessage(prompt);
                  }}
                  type="button"
                >
                  {prompt}
                </motion.button>
              ))}
            </motion.div>

            {/* MESSAGES */}
            <div className="relative z-[1] mt-5 max-h-[22rem] space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "max-w-[88%] rounded-[1.25rem] px-5 py-3.5 text-sm leading-relaxed shadow-[0_2px_15px_rgba(0,0,0,0.25)]",
                    message.role === "assistant"
                      ? "ml-0 border border-cyan-600/15 bg-[#0a0f21]/70 text-cyan-50/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                      : "ml-auto border border-sky-300/15 bg-sky-300/10 text-sky-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                  )}
                  initial={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </motion.div>
              ))}

              {isSubmitting ? (
                <motion.div 
                    animate={{ opacity: 1 }}
                    className="flex max-w-[88%] ml-0 items-center gap-3 rounded-[1.25rem] border border-cyan-600/15 bg-[#0a0f21]/70 px-5 py-3.5 text-sm text-cyan-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                    initial={{ opacity: 0 }}
                >
                  <LoaderCircle className="h-4 w-4 animate-spin text-cyan-400" />
                  <span className="font-medium tracking-tight">Thinking through Nebula network...</span>
                </motion.div>
              ) : null}

              <div ref={bottomRef} />
            </div>

            {/* INPUT FORM */}
            <form className="relative z-[1] mt-5 space-y-3" onSubmit={handleSubmit}>
              <div className="rounded-[1.75rem] border border-cyan-600/15 bg-[#0a0f21]/80 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.01)] backdrop-blur-lg">
                <textarea
                  className="min-h-24 w-full resize-none bg-transparent px-3 py-2 text-sm leading-relaxed text-cyan-50 placeholder:text-cyan-100/30 focus:outline-none"
                  onChange={(event) => {
                    setInput(event.target.value);
                  }}
                  placeholder="Ask in Bangla or English..."
                  value={input}
                />
                <div className="flex items-center justify-between px-2.5 pb-1 pt-3">
                  <div className="flex items-center gap-2.5 text-xs text-cyan-200/40 font-medium">
                    <Sparkles className="h-4 w-4 text-cyan-400/60" />
                    <span>Portfolio-aware, bidirectional replies</span>
                  </div>
                  <MagicButton
                    className="h-11 min-w-11 px-4 py-0 text-cyan-950 bg-cyan-400 hover:bg-cyan-300"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    ) : (
                      <SendHorizontal className="h-4 w-4" />
                    )}
                  </MagicButton>
                </div>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        animate={{ y: [0, -6, 0] }}
        aria-label={isOpen ? "Close AI chatbot" : "Open AI chatbot"}
        className="pointer-events-auto relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-[#030408]/85 text-white shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_18px_rgba(34,211,238,0.18)] backdrop-blur-xl transition-transform duration-300 hover:scale-105"
        onClick={() => {
          setIsOpen((current) => !current);
        }}
        transition={{ duration: 4.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        type="button"
      >
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-sky-400/15 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Bot className="h-5 w-5 text-cyan-100" />
          <motion.span
            animate={{ rotate: 360 }}
            className="absolute inset-[-4px] rounded-full border border-dashed border-cyan-300/30"
            transition={{ duration: 7, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          />
        </span>
      </motion.button>
    </div>
  );
}

