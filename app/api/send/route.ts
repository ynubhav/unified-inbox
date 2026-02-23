import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendWhatsApp, sendSMS } from "@/lib/twilio";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { platform, phone, headline, body, cta } = await req.json();

    if (!platform || !phone || !headline || !body || !cta) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullMessage = `${headline}\n\n${body}\n\n${cta}`;

    let result;

    if (platform === "whatsapp") {
      result = await sendWhatsApp(phone, fullMessage);
    } else if (platform === "sms") {
      result = await sendSMS(phone, fullMessage);
    } else {
      return NextResponse.json(
        { error: "Invalid platform" },
        { status: 400 }
      );
    }

    await prisma.messageDelivery.create({
      data: {
        userId: session.user.id,
        platform: platform.toUpperCase(), // matches enum WHATSAPP / SMS
        phone,
        headline,
        body,
        cta,
        twilioSid: result.sid,
        status: "SENT",
      },
    });

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