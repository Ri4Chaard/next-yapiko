import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const paramsCategory =
        req.nextUrl.searchParams.get("params[category]") || "";
    const paramsSubcategory =
        req.nextUrl.searchParams.get("params[subcategory]") || "";
    const category = await prisma.category.findFirst({
        where: { link: paramsCategory },
    });
    const subcategory = await prisma.subcategory.findFirst({
        where: { link: paramsSubcategory },
    });

    const ingredients = await prisma.ingredient.findMany({
        orderBy: {
            id: "desc",
        },
        where: {
            categories: category
                ? {
                      some: {
                          id: {
                              in: [category.id],
                          },
                      },
                  }
                : undefined,
            subcategories: subcategory
                ? {
                      some: {
                          id: {
                              in: [subcategory.id],
                          },
                      },
                  }
                : undefined,
        },
    });

    return NextResponse.json(ingredients);
}
