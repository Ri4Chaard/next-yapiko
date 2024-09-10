import { Product } from "@prisma/client";
import { ShoppingBasket } from "lucide-react";
import React from "react";

interface Props {
    product: Product;
    className?: string;
}

export const ToastCartSuccess: React.FC<Props> = ({ product }) => {
    return (
        <div className="text-primary flex items-center">
            <ShoppingBasket className="animate-bounce" />
            <p>
                <b> + 1 </b>
                <span className="text-black">
                    <b>{product.name}</b> додано!
                </span>
            </p>
        </div>
    );
};
