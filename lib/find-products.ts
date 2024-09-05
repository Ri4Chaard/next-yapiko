import { prisma } from "@/prisma/prisma-client";

export interface GetParams {
    category: string;
    subcategory?: string;
}

export interface GetSearchParams {
    query?: string;
    ingredients?: string;
}

export const findProducts = async (
    params: GetParams,
    searchParams: GetSearchParams
) => {
    const ingredientsIdArr = searchParams.ingredients?.split(",").map(Number);

    const products = await prisma.product.findMany({
        where: {
            categoryLink: params.category,
            subcategoryLink: params.subcategory,
            ingredients: ingredientsIdArr
                ? { some: { id: { in: ingredientsIdArr } } }
                : undefined,
        },
        include: {
            items: true,
        },
    });

    return { products };
};
