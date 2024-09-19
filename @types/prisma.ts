import {
    Category,
    ExtraIngredient,
    Ingredient,
    Product,
    ProductItem,
    Subcategory,
} from "@prisma/client";

export type ProductWithRelations = Product & {
    ingredients?: Ingredient[];
    extraIngredients?: ExtraIngredient[];
    items: ProductItem[];
};

export type CategoriesWithRelations = Category & {
    subcategories: Subcategory[];
    ingredients?: Ingredient[];
    products?: ProductWithRelations[];
};

export type OrderProductItem = ProductItem & {
    product: Product;
};

export type OrderProducts = {
    productItem: OrderProductItem;
    extraIngredients?: ExtraIngredient[];
    quantity: number;
};
