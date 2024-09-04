import {
    Category,
    ExtraIngredient,
    Ingredient,
    Product,
    ProductItem,
    Subcategory,
} from "@prisma/client";

export type ProductsWithRealtions = Product & {
    ingredients?: Ingredient[];
    extraIngredients?: ExtraIngredient[];
    items: ProductItem[];
};

export type CategoriesWithRelations = Category & {
    subcategories: Subcategory[];
    ingredients?: Ingredient[];
    products?: ProductsWithRealtions[];
};
