"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CheckboxFilterGroup } from "./checkbox-filter-group";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { FilterChecboxProps } from "./filter-checkbox";
import { useIngredients } from "@/hooks/use-ingredients";
import { useParams } from "next/navigation";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const params = useParams();
    const { ingredients, loading } = useIngredients(params);

    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    return (
        <div className={cn("sticky top-[100px]", className)}>
            <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

            <CheckboxFilterGroup
                title="Інгредієнти"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
            />
        </div>
    );
};
