import React from "react";
import { Container } from "./container";
import { Title } from "./title";
import { Filters } from "./filters";
import { ProductList } from "./product-list";
import { ProductsWithRealtions } from "@/@types/prisma";

interface Props {
    category: string;
    subcategory?: string;
    products: ProductsWithRealtions[];
    className?: string;
}

export const ProductsMenu: React.FC<Props> = ({
    category,
    subcategory,
    products,
    className,
}) => {
    return (
        <Container className={className}>
            <Title
                text={
                    subcategory && subcategory.length > 0
                        ? subcategory.toUpperCase()
                        : category.toUpperCase()
                }
                size="xl"
                className="mt-3 font-bold"
            />
            <div className="flex gap-[80px] mt-10">
                <div className="w-[250px]">
                    <Filters />
                </div>
                <div className="flex-1">
                    {products && (
                        <ProductList
                            subcategory={subcategory || ""}
                            products={products}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};
