"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { LoaderCircle, Plus } from "lucide-react";

import { GroupVariants } from "./group-variants";
import {
    PizzaBorder,
    pizzaBorders,
    PizzaSize,
    pizzaSizes,
} from "@/constants/pizza";
import { GroupSelectVariants } from "./group-select-variants";
import { ExtraIngredient, ProductItem } from "@prisma/client";
import { usePizzaOptions } from "@/hooks/use-pizza-options";
import { getPizzaDetails } from "@/lib/get-pizza-details";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface Props {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    items: ProductItem[];
    extraIngredients: ExtraIngredient[];
    loading?: boolean;
    onSubmit: (itemId: number) => void;
    className?: string;
}

export const PizzaCardForm: React.FC<Props> = ({
    id,
    imageUrl,
    name,
    items,
    extraIngredients,
    onSubmit,
    className,
    loading,
}) => {
    const {
        size,
        border,
        description,
        selectedIngredients,
        currentItemId,
        setSize,
        setBorder,
    } = usePizzaOptions(items);

    const { totalPrice } = getPizzaDetails(
        border,
        size,
        items,
        extraIngredients,
        selectedIngredients
    );

    const handleClickAdd = () => {
        if (currentItemId) onSubmit(currentItemId);
    };

    return (
        <div className={cn("relative w-full", className)}>
            <Link href={`/product/${id}`}>
                <img src={imageUrl} alt={name} className="rounded-md w-full" />
            </Link>
            <div className="absolute w-full flex items-center justify-between bottom-4 px-4 font-semibold">
                <div className="flex flex-col w-full">
                    <Link href={`/product/${id}`}>
                        <Title
                            text={name}
                            size="sm"
                            className="hover:text-salad transition-colors mb-2 text-white"
                        />
                    </Link>
                    {loading ? (
                        <div className="flex ">
                            <div className="flex items-center justify-center mr-5 rounded-[8px] w-[121px] h-10 bg-muted">
                                <LoaderCircle className="w-5 h-5 animate-spin" />
                            </div>
                            <div className="flex items-center justify-center w-[169px] h-10 mr-6 rounded-[8px] bg-muted">
                                <LoaderCircle className="w-5 h-5 animate-spin" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex text-sm">
                            <GroupVariants
                                className="mr-5"
                                items={pizzaSizes}
                                value={String(size)}
                                onClick={(value) =>
                                    setSize(Number(value) as PizzaSize)
                                }
                            />

                            <GroupSelectVariants
                                items={pizzaBorders}
                                value={String(border)}
                                onChange={(value) =>
                                    setBorder(Number(value) as PizzaBorder)
                                }
                                className="mr-6"
                            />
                        </div>
                    )}
                </div>
                <div className="flex flex-col self-end">
                    <span className="self-end text-white/70">
                        {description}
                    </span>
                    <div className="flex items-center justify-between">
                        <span className="text-[22px] mr-2 text-white">
                            {totalPrice}₴
                        </span>
                        <Button
                            onClick={handleClickAdd}
                            variant="salad"
                            className="w-[30px] p-0 h-[30px] flex items-center justify-center rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                            loading={loading}
                        >
                            <Plus />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
