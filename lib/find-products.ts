import { prisma } from "@/prisma/prisma-client";

export interface GetParams {
    category: string;
    subcategory?: string;
}

export interface GetSearchParams {
    query?: string;
    ingredients?: string;
    sort?: string;
}

export const findProducts = async (
    params: GetParams,
    searchParams: GetSearchParams
) => {
    const ingredientsIdArr = searchParams.ingredients?.split(",").map(Number);
    const selectedSort = searchParams.sort;

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

    if (selectedSort === "cheap") {
        products.sort((a, b) => {
            const priceA = a.items[0].price;
            const priceB = b.items[0].price;

            return priceA - priceB;
        });
    } else if (selectedSort === "expensive") {
        products.sort((a, b) => {
            const priceA = a.items[0].price;
            const priceB = b.items[0].price;

            return priceB - priceA;
        });
    }

    return { products };
};
