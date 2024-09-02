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

interface Props {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    className?: string;
}

export const PizzaCard: React.FC<Props> = ({
    imageUrl,
    name,
    description,
    price,
    className,
}) => {
    const [pizzaSize, setPizzaSize] = React.useState<PizzaSize>(32);
    const [pizzaBorder, setPizzaBorder] = React.useState<PizzaBorder>(1);

    return (
        <div className={cn("relative w-[450px]", className)}>
            <Link href={`/${name}`}>
                <img src={imageUrl} alt={name} className="rounded-md" />
            </Link>
            <div className="absolute w-full flex items-center justify-between bottom-4 px-4 font-semibold text-white">
                <div className="flex flex-col w-full">
                    <Link href={`/${name}`}>
                        <Title
                            text={name}
                            size="sm"
                            className="hover:text-salad transition-colors mb-2"
                        />
                    </Link>

                    <div className="flex justify-between text-sm">
                        <GroupVariants
                            items={pizzaSizes}
                            value={String(pizzaSize)}
                            onClick={(value) =>
                                setPizzaSize(Number(value) as PizzaSize)
                            }
                        />

                        <GroupSelectVariants
                            items={pizzaBorders}
                            value={String(pizzaBorder)}
                            onChange={(value) =>
                                setPizzaBorder(Number(value) as PizzaBorder)
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col self-end">
                    <span className="self-end text-white/70">
                        {description}
                    </span>
                    <div className="flex items-center justify-between">
                        <span className="text-[22px] mr-2">{price}₴</span>
                        <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-salad text-black transition-colors hover:bg-primary hover:text-primary-foreground">
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
