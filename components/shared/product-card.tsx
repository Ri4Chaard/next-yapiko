"use client";

import { useCartStore } from "@/store/cart";
import { ProductCardForm } from "./product-card-form";
import { PizzaCardForm } from "./pizza-card-form";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    product: ProductWithRelations;
    onSubmit?: VoidFunction;
}

export const ProductCard: React.FC<Props> = ({
    product,
    onSubmit: _onSubmit,
}) => {
    const [addCartItem, loading] = useCartStore((state) => [
        state.addCartItem,
        state.loading,
    ]);

    const firstItem = product.items[0];
    const isPizzaForm = Boolean(product.items[0].pizzaSize);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;

            await addCartItem({
                productItemId: itemId,
                ingredients,
            });

            _onSubmit?.();
        } catch (err) {
            console.log(err);
        }
    };

    if (isPizzaForm)
        return (
            <PizzaCardForm
                imageUrl={product.imageUrl}
                name={product.name}
                description={firstItem.description}
                extraIngredients={product.extraIngredients || []}
                items={product.items}
                onSubmit={onSubmit}
                loading={loading}
            />
        );

    return (
        <ProductCardForm
            imageUrl={product.imageUrl}
            name={product.name}
            description={firstItem.description}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
        />
    );
};
