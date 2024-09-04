import { ProductsWithRealtions } from "@/@types/prisma";
import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function SubcategoryPage({
    params,
}: {
    params: { category: string; subcategory: string };
}) {
    const categories = await prisma.category.findMany({
        include: { ingredients: true, subcategories: true },
    });

    // Найти категорию по ссылке
    const category = await prisma.category.findFirst({
        where: { link: params.category },
    });

    if (!category) {
        return notFound();
    }

    // Найти подкатегорию по ссылке и ID категории
    const subcategory = await prisma.subcategory.findFirst({
        where: { link: params.subcategory },
    });

    // Получение продуктов по категории и подкатегории
    const products = await prisma.product.findMany({
        where: {
            categoryId: category?.id,
            subcategoryId: subcategory?.id,
        },
        include: {
            ingredients: true,
            extraIngredient: true,
            items: true,
        },
    });

    return (
        <>
            <TopBar categories={categories} />
            <ProductsMenu
                category={category ? category.name : ""}
                subcategory={subcategory ? subcategory.name : ""}
                products={products}
            />
        </>
    );
}
