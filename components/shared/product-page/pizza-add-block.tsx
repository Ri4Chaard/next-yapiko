"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePizzaOptions } from "@/hooks/use-pizza-options";
import { getPizzaDetails } from "@/lib/get-pizza-details";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";
import { ToastCartSuccess } from "../toast-messages/toast-cart-success";
import { ProductWithRelations } from "@/@types/prisma";
import { CircleCheck, LoaderCircle, Plus } from "lucide-react";
import { GroupVariants } from "../group-variants";
import {
    PizzaBorder,
    pizzaBorders,
    PizzaSize,
    pizzaSizes,
} from "@/constants/pizza";
import { GroupSelectVariants } from "../group-select-variants";
import { Button } from "@/components/ui/button";

interface Props {
    product: ProductWithRelations;
}

export const PizzaAddBlock: React.FC<Props> = ({ product }) => {
    const [activeIngredientBlock, setActiveIngredientBlock] =
        React.useState(false);

    const {
        size,
        border,
        description,
        selectedIngredients,
        currentItemId,
        setSize,
        setBorder,
        addIngredient,
    } = usePizzaOptions(product.items);

    const { totalPrice } = getPizzaDetails(
        border,
        size,
        product.items,
        product.extraIngredients || [],
        selectedIngredients
    );

    const [addCartItem, loading] = useCartStore((state) => [
        state.addCartItem,
        state.loading,
    ]);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? product.items[0];

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

    const handleClickAdd = () => {
        if (currentItemId)
            onSubmit(currentItemId, Array.from(selectedIngredients));
    };

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-between px-3 py-5 bg-primary text-black">
                    <div className="flex items-center justify-center rounded-[8px] w-[121px] h-10 bg-muted">
                        <LoaderCircle className="w-5 h-5 animate-spin" />
                    </div>
                    <div className="flex items-center justify-center w-[169px] h-10 rounded-[8px] bg-muted">
                        <LoaderCircle className="w-5 h-5 animate-spin" />
                    </div>
                </div>
            ) : (
                <div className="flex justify-between px-3 py-5 bg-primary text-primary-foreground text-sm">
                    <GroupVariants
                        items={pizzaSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupSelectVariants
                        items={pizzaBorders}
                        value={String(border)}
                        onChange={(value) =>
                            setBorder(Number(value) as PizzaBorder)
                        }
                    />
                </div>
            )}
            <div className="bg-primary p-3 font-bold text-primary-foreground border-b border-secondary">
                <button
                    className="hover:text-salad"
                    onClick={() =>
                        setActiveIngredientBlock(!activeIngredientBlock)
                    }
                >
                    {activeIngredientBlock ? "-" : "+"} Додаткові інгредієнти
                </button>
            </div>
            <div
                className={cn(
                    "grid grid-cols-3 gap-1 border-x border-primary h-0 overflow-y-scroll transition-all",
                    { "h-[212px]": activeIngredientBlock }
                )}
            >
                {product.extraIngredients?.map((ingredient) => (
                    <div
                        key={ingredient.id}
                        className={cn(
                            "relative flex flex-col items-center m-2 cursor-pointer",
                            {
                                "border border-primary rounded-md":
                                    selectedIngredients.has(ingredient.id),
                            }
                        )}
                        onClick={() => addIngredient(ingredient.id)}
                    >
                        <CircleCheck
                            className={cn(
                                "absolute hidden right-1 top-1 text-primary",
                                {
                                    block: selectedIngredients.has(
                                        ingredient.id
                                    ),
                                }
                            )}
                        />
                        <img
                            src={ingredient.imageUrl}
                            width={84}
                            alt={ingredient.name}
                        />
                        <p className="font-semibold">
                            {ingredient.name} / +{ingredient.price}₴
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between px-3 py-5 bg-primary text-primary-foreground">
                <div>
                    <span className="text-2xl font-bold">{totalPrice}₴ /</span>
                    <span>{description}</span>
                </div>
                <Button
                    loading={loading}
                    onClick={handleClickAdd}
                    variant="salad"
                    className="text-black font-semibold w-[176px]"
                >
                    <Plus className="mr-3" />
                    Додати в кошик
                </Button>
            </div>
        </>
    );
};
