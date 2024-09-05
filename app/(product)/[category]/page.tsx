import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { findMenu, GetParams, GetSearchParams } from "@/lib/findMenu";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: GetParams;
    searchParams: GetSearchParams;
}) {
    const categories = await prisma.category.findMany({
        include: { ingredients: true, subcategories: true },
    });

    // Найти категорию по ссылке
    const { products, category } = await findMenu(params, searchParams);

    if (!category) {
        return notFound();
    }

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
