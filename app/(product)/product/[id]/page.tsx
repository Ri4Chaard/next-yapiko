import { PizzaPageForm } from "@/components/shared/product-page/pizza-page-form";
import { ProductPageForm } from "@/components/shared/product-page/product-page-form";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: { id: number };
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number(params.id) },
        include: {
            items: true,
            ingredients: true,
            extraIngredients: true,
            category: true,
        },
    });

    if (!product) {
        notFound();
    }

    const isPizzaForm = Boolean(product.items[0].pizzaSize);

    if (isPizzaForm) {
        return <PizzaPageForm product={product} />;
    }

    return (
        <ProductPageForm product={product} category={product.category.link} />
    );
}
