import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const category = req.nextUrl.searchParams.get("category");

    const products = await prisma.product.findMany({
        where: {
            categoryLink: category ? category : undefined,
        },
        include: { items: true },
    });

    return NextResponse.json(products.slice(0, 5));
}
