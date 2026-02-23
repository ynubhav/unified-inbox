import { NextResponse } from "next/server";
import { generateMarketingMessage } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { context } = await req.json();

    if (!context) {
      return NextResponse.json(
        { error: "Context is required" },
        { status: 400 }
      );
    }

    const data = await generateMarketingMessage(context);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Server failed to generate message" },
      { status: 500 }
    );
  }
}