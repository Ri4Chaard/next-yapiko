import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { GetParams } from "@/lib/find-products";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: { id: number };
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number(params.id) },
        include: { items: true, ingredients: true },
    });

    if (!product) {
        notFound();
    }
    return (
        <Container>
            <Title text={product.name} size="xl" />
            <img src={product.imageUrl} alt="product" />
            <div>
                {product.ingredients.map((ingredient) => (
                    <p>{ingredient.name}</p>
                ))}
            </div>
        </Container>
    );
}
