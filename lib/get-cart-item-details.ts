import { mapPizzaBorder, PizzaBorder, PizzaSize } from "@/constants/pizza";
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
    ingredients: CartStateItem["ingredients"],
    pizzaBorder?: PizzaBorder,
    pizzaSize?: PizzaSize
) => {
    const details = [];
    if (pizzaSize && pizzaBorder) {
        const typeName = mapPizzaBorder[pizzaBorder];
        details.push(`${typeName}, ${pizzaSize} см`);
    }

    console.log(pizzaBorder);

    if (ingredients)
        details.push(...ingredients.map((ingredient) => ingredient.name));

    return details.join(", ");
};
