"use client";

import dynamic from "next/dynamic";

const SpaceChatbot = dynamic(
  () => import("@/components/chatbot/space-chatbot").then((module) => module.SpaceChatbot),
  { ssr: false },
);

export function DeferredChatbot() {
  return <SpaceChatbot />;
}
