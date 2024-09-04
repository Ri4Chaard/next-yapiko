import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";

export default async function CategoryPage({
    params,
}: {
    params: { category: string };
}) {
    const categories = await prisma.category.findMany({
        include: { ingredients: true, subcategories: true },
    });

    // Найти категорию по ссылке
    const category = await prisma.category.findFirst({
        where: { link: params.category },
    });

    // Получение продуктов по категории и подкатегории
    const products = await prisma.product.findMany({
        where: {
            categoryId: category?.id,
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
                cards={products}
            />
        </>
    );
}
