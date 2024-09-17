import React from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    subcategory: string;
    products: ProductWithRelations[];
    className?: string;
}

export const ProductList: React.FC<Props> = ({ products, className }) => {
    return (
        <div
            className={cn(
                "grid grid-cols-2 justify-items-center gap-[50px] mb-10",
                className
            )}
        >
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};
