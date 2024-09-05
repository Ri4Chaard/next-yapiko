import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface QueryFilters {
    ingredients: string;
}
export interface Filters {
    selectedIngredients: Set<string>;
}

interface ReturnProps extends Filters {
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

    return React.useMemo(
        () => ({
            selectedIngredients,
            setSelectedIngredients: toggleIngredients,
        }),
        [selectedIngredients]
    );
};
