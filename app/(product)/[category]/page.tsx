import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";
import { Api } from "@/services/api-client";
import { notFound } from "next/navigation";

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

    if (!category) {
        return notFound();
    }

    //TODO: Продукты брать по фильтрам, вынести в отдельную фунуцию

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
                products={products}
            />
        </>
    );
}
