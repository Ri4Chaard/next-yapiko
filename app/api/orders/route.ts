import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const userEmail = req.nextUrl.searchParams.get("email");

    const data = await prisma.order.findMany({
        where: {
            email: userEmail ? userEmail : undefined,
        },
    });

    return NextResponse.json(data);
}
