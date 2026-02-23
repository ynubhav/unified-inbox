import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const total = await prisma.messageDelivery.count({
      where: { userId },
    });

    const whatsapp = await prisma.messageDelivery.count({
      where: { userId, platform: "WHATSAPP" },
    });

    const sms = await prisma.messageDelivery.count({
      where: { userId, platform: "SMS" },
    });

    const sent = await prisma.messageDelivery.count({
      where: { userId, status: "SENT" },
    });

    const failed = await prisma.messageDelivery.count({
      where: { userId, status: "FAILED" },
    });

    const recent = await prisma.messageDelivery.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    return NextResponse.json({
      total,
      whatsapp,
      sms,
      sent,
      failed,
      successRate: total === 0 ? 0 : Math.round((sent / total) * 100),
      recent,
    });

  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: "Failed to load analytics" },
      { status: 500 }
    );
  }
}