import { NextResponse } from "next/server";

type ContactPayload = {
  email?: string;
  message?: string;
  name?: string;
  service?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return NextResponse.json(
      {
        error: "Please provide your name, email, and message before submitting.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: `Thanks ${payload.name.trim()}. Your message about "${
      payload.service ?? "a new project"
    }" was received by the local contact endpoint.`,
  });
}
