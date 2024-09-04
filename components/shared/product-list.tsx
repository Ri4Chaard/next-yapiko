import React from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { Product } from "@prisma/client";

interface Props {
    cards: Product[];
    className?: string;
}

export const ProductList: React.FC<Props> = ({ cards, className }) => {
    return (
        <div className={cn("grid grid-cols-2 gap-[50px] mb-10", className)}>
            {cards.map((card: any) => (
                <ProductCard
                    key={card.name}
                    imageUrl={card.imageUrl}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                />
            ))}
        </div>
    );
};
