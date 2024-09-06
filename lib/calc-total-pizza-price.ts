import { ExtraIngredient, Ingredient, ProductItem } from "@prisma/client";
import { PizzaBorder, PizzaSize } from "../constants/pizza";

/**
 * Функція для підрахунку загальної коштовності піци
 *
 * @example ```calcTotalPizzaPrice(1, 20, items, ingredients, selectedIngredients)```
 *
 * @param type - тип тіста обраної піци
 * @param size - розмір обраної піци
 * @param items - список варіацій
 * @param ingredients - список інгредієнтів
 * @param selectedIngredients - обрані інгредієнти
 * @returns number загальна коштовність
 */

export const calcTotalPizzaPrice = (
    border: PizzaBorder,
    size: PizzaSize,
    items: ProductItem[],
    extraIngredients: ExtraIngredient[],
    selectedIngredients: Set<number>
) => {
    const pizzaPrice =
        items.find(
            (item) => item.pizzaBorder === border && item.pizzaSize === size
        )?.price || 0;
    const totalIngredientsPrice = extraIngredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);

    return pizzaPrice + totalIngredientsPrice;
};
