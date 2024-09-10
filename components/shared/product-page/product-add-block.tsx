"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/store/cart";
import React from "react";
import toast from "react-hot-toast";
import { ToastCartSuccess } from "../toast-messages/toast-cart-success";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
    product: ProductWithRelations;
}

export const ProductAddBlock: React.FC<Props> = ({ product }) => {
    const [addCartItem, loading] = useCartStore((state) => [
        state.addCartItem,
        state.loading,
    ]);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? product.items[0].id;

            await addCartItem({
                productItemId: itemId,
                ingredients,
            });
            toast(<ToastCartSuccess product={product} />);
        } catch (err) {
            toast.error("Не вдалося додати продукт до кошика");
            console.log(err);
        }
    };

    return (
        <div className="flex items-center justify-between px-3 py-5 bg-primary text-primary-foreground">
            <div>
                <span className="text-2xl font-bold">
                    {product.items[0].price}₴ /
                </span>
                <span>{product.items[0].description}</span>
            </div>
            <Button
                loading={loading}
                onClick={() => onSubmit()}
                variant="salad"
                className="text-black font-semibold w-[176px]"
            >
                <Plus className="mr-3" />
                Додати в кошик
            </Button>
        </div>
    );
};
