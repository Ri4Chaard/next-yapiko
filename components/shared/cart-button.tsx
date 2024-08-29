import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingBasket } from "lucide-react";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
    return (
        <Button className={cn("group relative", className)}>
            <div className="flex w-6 items-center justify-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingBasket width={18} strokeWidth={2} />
            </div>
            <b className="absolute left-3 top-[11px] transition duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                427₴
            </b>
            <span className="h-full w-[1px] bg-secondary/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <b>3</b>
            </div>
            <ArrowRight
                size={20}
                className="absolute right-2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
        </Button>
    );
};
