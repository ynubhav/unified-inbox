import { NextResponse } from "next/server";
import { sendWhatsApp, sendSMS } from "@/lib/twilio";

export async function POST(req: Request) {
  try {
    const { platform, phone, message } = await req.json();

    if (!platform || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let result;

    if (platform === "whatsapp") {
      result = await sendWhatsApp(phone, message);
    } else if (platform === "sms") {
      result = await sendSMS(phone, message);
    } else {
      return NextResponse.json(
        { error: "Invalid platform" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      sid: result.sid,
    });
  } catch (error) {
    console.error("Send API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}