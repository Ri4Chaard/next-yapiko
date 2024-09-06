import {
    Cart,
    CartItem,
    ExtraIngredient,
    Product,
    ProductItem,
} from "@prisma/client";

export type CartItemDTO = CartItem & {
    productItem: ProductItem & {
        product: Product;
    };
    extraIngredients: ExtraIngredient[];
};

export interface CartDTO extends Cart {
    items: CartItemDTO[];
}

export interface CreateCartItemValues {
    productItemId: number;
    ingredients?: number[];
}
