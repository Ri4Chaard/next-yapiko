import React from "react";
import { Container } from "./container";
import { Title } from "./title";
import { Filters } from "./filters";
import { ProductList } from "./product-list";
import { ProductWithRelations } from "@/@types/prisma";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface Props {
    category: string;
    subcategory?: string;
    products: ProductWithRelations[];
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
            <div className=" mt-5">
                <Filters />
                {products && (
                    <ProductList
                        className="mx-5 mt-5"
                        subcategory={subcategory || ""}
                        products={products}
                    />
                )}
            </div>
        </Container>
    );
};
