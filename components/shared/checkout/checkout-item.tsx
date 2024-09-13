import React from "react";
import { cn } from "@/lib/utils";
import * as CartItemDetails from "@/components/shared/cart-item-details";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { PizzaBorder, PizzaSize } from "@/constants/pizza";
import { CartItemProps } from "../cart-item-details/cart-item-details.types";
import { LoaderCircle, Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
    onClickCountButton?: (type: "plus" | "minus") => void;
    onClickRemove?: () => void;
    className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
    name,
    imageUrl,
    description,
    details,
    quantity,
    price,
    disabled,
    onClickCountButton,
    onClickRemove,
    className,
}) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between my-2",
                {
                    "opacity-50 pointer-events-none": disabled,
                },
                className
            )}
        >
            <div className="flex items-center gap-5 flex-1">
                <CartItemDetails.Image src={imageUrl} />
                <CartItemDetails.Info
                    name={name}
                    description={description}
                    details={details}
                />
            </div>

            <CartItemDetails.Price value={price} />

            <div className="flex items-center gap-5 ml-20">
                <CartItemDetails.CountButton
                    onClick={onClickCountButton}
                    value={quantity}
                />
                <button type="button" onClick={onClickRemove}>
                    <Trash2Icon
                        className="text-gray-400 hover:text-gray-600"
                        size={20}
                    />
                </button>
            </div>
        </div>
    );
};
