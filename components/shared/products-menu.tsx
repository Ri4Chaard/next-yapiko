import React from "react";
import { Container } from "./container";
import { Title } from "./title";
import { Filters } from "./filters";
import { Product } from "@prisma/client";
import { ProductList } from "./product-list";

interface Props {
    category: string;
    subcategory?: string;
    cards: Product[];
    className?: string;
}

export const ProductsMenu: React.FC<Props> = ({
    category,
    subcategory,
    cards,
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
                    <ProductList cards={cards} />
                </div>
            </div>
        </Container>
    );
};
