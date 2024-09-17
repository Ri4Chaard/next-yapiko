"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckboxFilterGroup } from "./checkbox-filter-group";
import { useIngredients } from "@/hooks/use-ingredients";
import { useParams } from "next/navigation";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";
import { ProductsSort } from "./products-sort";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const params = useParams();
    const { ingredients, loading } = useIngredients(params);

    const filters = useFilters();

    useQueryFilters(filters);

    console.log(filters);

    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    return (
        <div className={cn("flex justify-between", className)}>
            <CheckboxFilterGroup
                className="basis-2/3"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
            />

            <ProductsSort
                className="basis-1/3"
                onChange={(value) => filters.setSelectedSort(value)}
            />
        </div>
    );
};
