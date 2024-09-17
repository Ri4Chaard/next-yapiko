"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Carousel } from "../carousel/carousel";
import { useProductRecomendations } from "@/hooks/use-product-recomendations";
import { ProductCard } from "../product-card";

interface Props {
    category: string;
    className?: string;
}

export const CarouselPlugin: React.FC<Props> = ({ category, className }) => {
    const { products, loading } = useProductRecomendations(category);

    return (
        <div className={cn("", className)}>
            <Carousel loading={loading}>
                {products.map((product) => (
                    <div
                        className="flex items-center justify-center mx-5 rounded-md flex-shrink-0 flex-grow-0 basis-[40%]"
                        key={product.name}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
