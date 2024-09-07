import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export type CartStateItem = {
    id: number;
    quantity: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    disabled?: boolean;
    pizzaSize?: number | null;
    pizzaBorder?: number | null;
    ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
    items: CartStateItem[];
    totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        description: item.productItem.description,
        price: calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.pizzaSize,
        pizzaBorder: item.productItem.pizzaBorder,
        disabled: false,
        ingredients: item.extraIngredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price,
        })),
    })) as CartStateItem[];

    return {
        items,
        totalAmount: data.totalAmount,
    };
};
