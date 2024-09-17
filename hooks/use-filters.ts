import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface QueryFilters {
    ingredients: string;
    sort: string;
}

export interface Filters {
    selectedSort: string;
    selectedIngredients: Set<string>;
}

interface ReturnProps extends Filters {
    setSelectedSort: (value: string) => void;
    setSelectedIngredients: (key: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >;

    // Ingredient filter
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get("ingredients")?.split(","))
    );

    // Sort filter
    const [selectedSort, setSelectedSort] = React.useState(
        searchParams.get("sort") || "none"
    );

    return React.useMemo(
        () => ({
            selectedSort,
            setSelectedSort,
            selectedIngredients,
            setSelectedIngredients: toggleIngredients,
        }),
        [selectedSort, selectedIngredients] // Add selectedSort as a dependency
    );
};
