import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export const useIngredients = (params: Params) => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getIngredients(
                    params
                );
                setIngredients(ingredients);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchIngredients();
    }, []);

    return {
        ingredients,
        loading,
    };
};
