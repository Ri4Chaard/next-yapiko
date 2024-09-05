import { ProductsMenu } from "@/components/shared/products-menu";
import { TopBar } from "@/components/shared/top-bar";
import { findProducts, GetParams, GetSearchParams } from "@/lib/find-products";
import { getCategories } from "@/lib/get-categories";
import { notFound } from "next/navigation";

export default async function SubcategoryPage({
    params,
    searchParams,
}: {
    params: GetParams;
    searchParams: GetSearchParams;
}) {
    const { categories, category, subcategory } = await getCategories(params);

    if (!category) {
        return notFound();
    }

    const { products } = await findProducts(params, searchParams);

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
