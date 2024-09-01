"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";
import { ChevronDown, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
    const [pizzaSize, setPizzaSize] = React.useState<32 | 42>(32);
    const [pizzaBorder, setPizzaBorder] = React.useState<1 | 2 | 3>(1);

    const mapPizzaSizes = {
        32: "32 см",
        42: "42 см",
    } as const;
    const mapPizzaBorders = {
        1: "Борт-Без начинки",
        2: "Сирний бортик",
        3: "М'ясний бортик",
    };

    const pizzaSizes = Object.entries(mapPizzaSizes).map(([value, name]) => ({
        name,
        value,
    }));
    const pizzaBorders = Object.entries(mapPizzaBorders).map(
        ([value, name]) => ({
            name,
            value,
        })
    );

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
                    {/* Привести часть компонента в порядок, Popover заменить selectjm */}
                    {/* https://ui.shadcn.com/docs/components/select */}
                    <div className="flex justify-between text-sm">
                        <div className="bg-white rounded-[8px] text-black">
                            {pizzaSizes.map((size) => (
                                <button
                                    key={size.value}
                                    className={cn(
                                        "py-1 px-3 h-full transition-colors rounded-[8px]",
                                        {
                                            "bg-salad":
                                                pizzaSize ===
                                                Number(size.value),
                                        }
                                    )}
                                    onClick={() =>
                                        setPizzaSize(
                                            Number(
                                                size.value
                                            ) as typeof pizzaSize
                                        )
                                    }
                                >
                                    {size.name}
                                </button>
                            ))}
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="w-[169px] flex items-center justify-between mr-6 py-1 px-3  bg-white rounded-[8px] text-black">
                                    {mapPizzaBorders[pizzaBorder]}
                                    <ChevronDown width={18} />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 rounded-[8px]">
                                <div className="flex flex-col">
                                    {pizzaBorders.map((border) => (
                                        <button
                                            key={border.value}
                                            onClick={() =>
                                                setPizzaBorder(
                                                    Number(
                                                        border.value
                                                    ) as typeof pizzaBorder
                                                )
                                            }
                                            className={cn(
                                                "py-1 px-3 w-full text-start transition-colors rounded-[8px]",
                                                {
                                                    "bg-salad":
                                                        pizzaBorder ===
                                                        Number(border.value),
                                                }
                                            )}
                                        >
                                            {border.name}
                                        </button>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
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
