import { prisma } from "@/prisma/prisma-client";
import { GetParams } from "./find-products";

export const getCategories = async (params: GetParams) => {
    const categories = await prisma.category.findMany({
        include: { subcategories: true },
    });

    const category = await prisma.category.findFirst({
        where: { link: params.category },
    });
    const subcategory = await prisma.subcategory.findFirst({
        where: { link: params.subcategory },
    });

    return { categories, category, subcategory };
};
