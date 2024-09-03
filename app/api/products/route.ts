import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const products = await prisma.product.findMany({
        include: { ingredients: true, extraIngredient: true, items: true },
    });

    return NextResponse.json(products);
}
