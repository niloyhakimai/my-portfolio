import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const model = "llama-3.3-70b-versatile";

type ChatMessage = {
  content: string;
  role: "assistant" | "user";
};

export async function POST(request: Request) {
  const payload = (await request.json()) as { messages?: ChatMessage[] };
  const messages =
    payload.messages?.filter(
      (message) =>
        (message.role === "assistant" || message.role === "user") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0,
    ) ?? [];

  if (!messages.length) {
    return NextResponse.json(
      {
        error: "Send at least one message to start the portfolio assistant.",
      },
      { status: 400 },
    );
  }

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json({
      message:
        "The Groq API key is not configured yet. Add `GROQ_API_KEY` to `.env.local`, use a Groq key instead of an xAI Grok key, then restart the Next.js server to activate the live chatbot. For now, this placeholder assistant can still explain that Niloy is a full stack web developer focused on modern web tech, Agentic AI, and Python.",
    });
  }

  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      max_tokens: 420,
      messages: [
        {
          content:
            "You are the floating portfolio assistant for Niloy Hakim. Answer in a warm, polished, concise tone. You must be able to communicate in both Bangla and English, and you should naturally mirror the user's language. Keep answers focused on Niloy's skills, projects, personality, availability, and portfolio content.",
          role: "system",
        },
        ...messages.slice(-8),
      ],
      model,
      temperature: 0.7,
    });

    const response =
      completion.choices[0]?.message?.content?.trim() ??
      "I am online, but I could not generate a response just now.";

    return NextResponse.json({ message: response });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to contact Groq right now.",
      },
      { status: 500 },
    );
  }
}

