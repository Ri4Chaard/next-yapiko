import {
    Category,
    ExtraIngredient,
    Ingredient,
    Product,
    Subcategory,
} from "@prisma/client";

export type ProductsWithRealtions = Product & {
    ingredients: Ingredient[];
    extraIngredients: ExtraIngredient[];
};

export type CategoriesWithRelations = Category & {
    subcategories: Subcategory[];
    ingredients?: Ingredient[];
    products?: ProductsWithRealtions[];
};
