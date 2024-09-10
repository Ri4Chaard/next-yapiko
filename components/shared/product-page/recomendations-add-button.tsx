"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { ProductWithRelations } from "@/@types/prisma";
import toast from "react-hot-toast";
import { ToastCartSuccess } from "../toast-messages/toast-cart-success";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const RecomendationsAddButton: React.FC<Props> = ({
    product,
    className,
}) => {
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
        <Button
            onClick={() => onSubmit()}
            variant="salad"
            className={cn(
                "w-[30px] p-0 h-[30px] rounded-full transition-colors hover:bg-primary hover:text-primary-foreground",
                className
            )}
            loading={loading}
        >
            <Plus />
        </Button>
    );
};
