import { mapPizzaBorder, PizzaBorder, PizzaSize } from "@/constants/pizza";
import { ExtraIngredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
    border: PizzaBorder,
    size: PizzaSize,
    items: ProductItem[],
    extraIngredients: ExtraIngredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrice(
        border,
        size,
        items,
        extraIngredients,
        selectedIngredients
    );
    const textDetails = `Піца ${size} см, ${mapPizzaBorder[border]}`;
    return { totalPrice, textDetails };
};
