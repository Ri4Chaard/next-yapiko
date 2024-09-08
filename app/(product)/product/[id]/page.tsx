import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { GetParams } from "@/lib/find-products";
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
                <div className="flex-1">
                    <img
                        src={product.imageUrl}
                        className="object-cover w-full rounded-md"
                        alt={product.name}
                    />
                    <div className="mt-10">
                        <h2 className="text-2xl bg-salad rounded-t-md p-3 font-bold text-salad-foreground">
                            Склад
                        </h2>
                        <div className="grid grid-cols-3 gap-3 border-x border-b border-muted">
                            {product.ingredients.map((ingredient) => (
                                <div className="flex flex-col items-center">
                                    <img
                                        src={ingredient.imageUrl}
                                        width={84}
                                        alt={ingredient.name}
                                    />
                                    <p className="lowercase">
                                        {ingredient.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Права частина */}
                <div className="bg-primary text-primary-foreground rounded-md flex-1 h-full">
                    <Title
                        text={product.name}
                        size="lg"
                        className="font-bold uppercase p-3 border-b border-secondary"
                    />
                    <div className="flex items-center justify-between px-3 py-5">
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
            </div>
        </Container>
    );
}
