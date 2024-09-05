import { prisma } from "@/prisma/prisma-client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useSearchParams } from "next/navigation";

export interface GetParams {
    category: string;
    subcategory?: string;
}

export interface GetSearchParams {
    query?: string;
    ingredients?: string;
}

export const findMenu = async (
    params: GetParams,
    searchParams: GetSearchParams
) => {
    const ingredientsIdArr = searchParams.ingredients?.split(",").map(Number);

    const category = await prisma.category.findFirst({
        where: { link: params.category },
    });

    let subcategory;

    if (params.subcategory)
        subcategory = await prisma.subcategory.findFirst({
            where: { link: params.subcategory },
        });

    const products = await prisma.product.findMany({
        where: {
            categoryId: category?.id,
            subcategoryId: subcategory?.id,
            ingredients: ingredientsIdArr
                ? { some: { id: { in: ingredientsIdArr } } }
                : undefined,
        },
        include: {
            items: true,
        },
    });

    return { products, category, subcategory };
};
