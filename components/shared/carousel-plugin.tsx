"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Carousel } from "./carousel/carousel";
import { useProductRecomendations } from "@/hooks/use-product-recomendations";

interface Props {
    category: string;
    className?: string;
}

export const CarouselPlugin: React.FC<Props> = ({ category, className }) => {
    const { products, loading } = useProductRecomendations(category);

    return (
        <div className={cn("", className)}>
            <Carousel products={products} slides={[]} loading={loading} />
        </div>
    );
};
