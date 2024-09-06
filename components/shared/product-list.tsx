import React from "react";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { PizzaCard } from "./pizza-card";
import { useCartStore } from "@/store/cart";
import { ProductCard } from "./product-card";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    subcategory: string;
    products: ProductWithRelations[];
    className?: string;
}

export const ProductList: React.FC<Props> = ({ products, className }) => {
    return (
        <div className={cn("grid grid-cols-2 gap-[50px] mb-10", className)}>
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};
