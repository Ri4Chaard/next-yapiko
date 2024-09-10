"use client";

import { useCartStore } from "@/store/cart";
import { ProductCardForm } from "./product-card-form";
import { PizzaCardForm } from "./pizza-card-form";
import { ProductWithRelations } from "@/@types/prisma";
import toast from "react-hot-toast";
import { ShoppingBasket } from "lucide-react";
import { ToastCartSuccess } from "./toast-messages/toast-cart-success";

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
            toast(<ToastCartSuccess product={product} />);

            _onSubmit?.();
        } catch (err) {
            toast.error("Не вдалося додати продукт до кошика");
            console.log(err);
        }
    };

    if (isPizzaForm)
        return (
            <PizzaCardForm
                id={product.id}
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
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={firstItem.description}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
        />
    );
};
