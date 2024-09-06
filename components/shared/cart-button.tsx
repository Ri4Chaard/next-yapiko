"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { CartDrawer } from "./cart-drawer";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
    const [totalAmount, items, loading] = useCartStore((state) => [
        state.totalAmount,
        state.items,
        state.loading,
    ]);

    return (
        <CartDrawer>
            <Button
                loading={loading}
                className={cn(
                    "group relative",
                    {
                        "w-[94px]": loading,
                    },
                    className
                )}
            >
                <div className="flex w-7 items-center justify-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingBasket width={18} strokeWidth={2} />
                </div>
                <b className="absolute left-0 w-[50px] text-right top-[11px] transition duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    {totalAmount}₴
                </b>
                <span className="h-full w-[1px] bg-secondary/30 mx-3" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <b>{items.length}</b>
                </div>
                <ArrowRight
                    size={20}
                    className="absolute right-2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                />
            </Button>
        </CartDrawer>
    );
};
