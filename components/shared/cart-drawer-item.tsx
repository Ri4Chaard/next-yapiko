import React from "react";

import { cn } from "@/lib/utils";

import * as CartItem from "./cart-item-details";
import { Trash2Icon } from "lucide-react";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton } from "./count-button";

interface Props extends CartItemProps {
    onClickCountButton?: (type: "plus" | "minus") => void;
    onClickRemove?: () => void;
    className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
    imageUrl,
    name,
    price,
    description,
    quantity,
    details,
    disabled,
    onClickCountButton,
    onClickRemove,
    className,
}) => {
    return (
        <div
            className={cn(
                "flex bg-white py-2 px-4 gap-3",
                { "opacity-50 pointer-events-none": disabled },
                className
            )}
        >
            <CartItem.Image src={imageUrl} />
            <div className="flex-1 flex flex-col justify-between">
                <CartItem.Info
                    name={name}
                    details={details}
                    description={description}
                />

                <div className="flex items-center justify-between">
                    <CartItem.Price value={price} />

                    <div className="flex items-center gap-3">
                        <CountButton
                            onClick={onClickCountButton}
                            value={quantity}
                        />
                        <Trash2Icon
                            onClick={onClickRemove}
                            className="text-gray-400 cursor-pointer hover:text-gray-600"
                            size={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
