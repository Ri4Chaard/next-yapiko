"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { Plus } from "lucide-react";

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
        <div className={cn("relative w-[450px]", className)}>
            <Link href={`/${name}`}>
                <img src={imageUrl} alt={name} className="rounded-md" />
            </Link>
            <div className="absolute w-full flex items-center justify-between bottom-4 px-4 font-semibold">
                <div className="flex flex-col w-full">
                    <Link href={`/${name}`}>
                        <Title
                            text={name}
                            size="sm"
                            className="hover:text-salad transition-colors mb-2 text-white"
                        />
                    </Link>
                    {loading ? (
                        <div className="flex justify-between">
                            <Skeleton className="rounded-[8px] w-[121px] h-10 text-black" />
                            <Skeleton className="w-[169px] h-10 mr-6 rounded-[8px]" />
                        </div>
                    ) : (
                        <div className="flex justify-between text-sm">
                            <GroupVariants
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
