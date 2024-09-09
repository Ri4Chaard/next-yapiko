import { Container } from "@/components/shared/container";
import { IngredientsDetails } from "@/components/shared/ingredients-details";
import { Recomendations } from "@/components/shared/recomendations";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { prisma } from "@/prisma/prisma-client";
import { Plus } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: { id: number };
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number(params.id) },
        include: { items: true, ingredients: true, category: true },
    });

    if (!product) {
        notFound();
    }

    return (
        <Container>
            <div className="flex gap-8 mt-8">
                {/* Ліва частина */}
                <div className="flex-1 flex flex-col justify-between">
                    <img
                        src={product.imageUrl}
                        className="object-cover w-full rounded-md"
                        alt={product.name}
                    />
                    {product.ingredients.length > 0 && (
                        <IngredientsDetails
                            ingredients={product.ingredients}
                            className="mt-5"
                        />
                    )}
                </div>

                {/* Права частина */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <Title
                            text={product.name}
                            size="lg"
                            className="font-bold bg-primary text-primary-foreground rounded-t-md uppercase p-3 border-b border-secondary"
                        />
                        <div className="flex items-center justify-between px-3 py-5 bg-primary text-primary-foreground">
                            <div>
                                <span className="text-2xl font-bold">
                                    {product.items[0].price}₴ /
                                </span>
                                <span>{product.items[0].description}</span>
                            </div>
                            <Button
                                variant="salad"
                                className="text-black font-semibold"
                            >
                                <Plus className="mr-3" />
                                Додати в кошик
                            </Button>
                        </div>
                        <div className="bg-white border border-primary text-black rounded-b-md p-3">
                            <h2 className="text-primary font-bold">Важливо!</h2>
                            <p className="text-sm">
                                Соєвий соус, васабі та імбир надаються до ролів
                                безкоштовно в залежності від розміру замовлення.
                                Деталі в розділі "Доставка і оплата"
                            </p>
                        </div>
                    </div>
                    <Recomendations className="mt-5" />
                </div>
            </div>
        </Container>
    );
}
