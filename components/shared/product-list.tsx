import React from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { Product } from "@prisma/client";
import { ProductsWithRealtions } from "@/@types/prisma";
import { PizzaCard } from "./pizza-card";

interface Props {
    subcategory: string;
    products: ProductsWithRealtions[];
    className?: string;
}

export const ProductList: React.FC<Props> = ({
    subcategory,
    products,
    className,
}) => {
    return (
        <div className={cn("grid grid-cols-2 gap-[50px] mb-10", className)}>
            {products.map((product: ProductsWithRealtions) =>
                subcategory === "Кругла" ? (
                    <PizzaCard
                        key={product.name}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        description={product.description}
                        price={product.items[0].price}
                    />
                ) : (
                    <ProductCard
                        key={product.name}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        description={product.description}
                        price={product.items[0].price}
                    />
                )
            )}
        </div>
    );
};
