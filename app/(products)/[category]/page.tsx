import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { findProducts, GetParams, GetSearchParams } from "@/lib/find-products";
import { getCategories } from "@/lib/get-categories";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: GetParams }) {
    const { category } = await getCategories(params);

    return {
        title: `Next Yapiko | ${category?.name}`,
    };
}

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: GetParams;
    searchParams: GetSearchParams;
}) {
    const { categories, category } = await getCategories(params);

    if (!category) {
        return notFound();
    }

    const { products } = await findProducts(params, searchParams);

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
