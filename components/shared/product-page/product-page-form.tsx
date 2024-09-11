import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { IngredientsDetails } from "./ingredients-details";
import { Title } from "../title";
import { Recomendations } from "./recomendations";
import { CarouselPlugin } from "./carousel-plugin";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductAddBlock } from "./product-add-block";

interface Props {
    product: ProductWithRelations;
    category: string;
    className?: string;
}

export const ProductPageForm: React.FC<Props> = ({
    product,
    category,
    className,
}) => {
    const checkCurrentCategory = () => {
        return category !== "other" && category !== "drinks";
    };

    return (
        <Container className={cn("", className)}>
            <div className="flex gap-8 mt-8">
                {/* Ліва частина */}
                <div className="flex-1 ">
                    <img
                        src={product.imageUrl}
                        className="object-cover w-full h-[450px] rounded-md"
                        alt={product.name}
                    />
                    {checkCurrentCategory() && (
                        <Recomendations className="mt-5" />
                    )}
                </div>

                {/* Права частина */}
                <div className="flex-1">
                    <div>
                        <Title
                            text={product.name}
                            size="lg"
                            className="font-bold bg-primary text-primary-foreground rounded-t-md uppercase p-3 border-b border-secondary"
                        />
                        <ProductAddBlock
                            product={product}
                            className={cn({
                                "rounded-b-md": !checkCurrentCategory(),
                            })}
                        />

                        {checkCurrentCategory() && (
                            <div className="bg-white border border-primary text-black rounded-b-md p-3">
                                <h2 className="text-primary font-bold">
                                    Важливо!
                                </h2>
                                <p className="text-sm">
                                    {product.categoryLink === "sushi"
                                        ? `Соєвий соус, васабі та імбир надаються до ролів
                                    безкоштовно в залежності від розміру замовлення.
                                    Деталі в розділі "Доставка і оплата"`
                                        : "Ви можете прибрати будь-який інгредієнт із страви. Укажіть це у коментарі до замовлення або скажіть оператору при підтвержденні замовлення."}
                                </p>
                            </div>
                        )}
                    </div>
                    {product.ingredients && product.ingredients.length > 0 && (
                        <IngredientsDetails
                            ingredients={product.ingredients}
                            className="mt-5"
                        />
                    )}
                </div>
            </div>

            <div className="my-10">
                <h2 className="text-2xl font-bold">Рекомендації</h2>
                <CarouselPlugin
                    className="mt-4"
                    category={product.categoryLink}
                />
            </div>
        </Container>
    );
};
