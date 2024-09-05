import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { findMenu, GetParams, GetSearchParams } from "@/lib/findMenu";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function SubcategoryPage({
    params,
    searchParams,
}: {
    params: GetParams;
    searchParams: GetSearchParams;
}) {
    const categories = await prisma.category.findMany({
        include: { subcategories: true },
    });

    const category = await prisma.category.findFirst({
        where: { link: params.category },
    });
    const subcategory = await prisma.subcategory.findFirst({
        where: { link: params.subcategory },
    });

    if (!category) {
        return notFound();
    }

    const { products } = await findMenu(params, searchParams);

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
