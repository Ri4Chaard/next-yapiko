"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

type Item = FilterChecboxProps;

interface Props {
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    loading?: boolean;
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void;
    defaultValue?: string[];
    selected?: Set<string>;
    className?: string;
    name?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
    items,
    className,
    loading,
    onClickCheckbox,
    selected,
    defaultValue,
    name,
}) => {
    if (loading) {
        return (
            <div
                className={cn(
                    "flex items-center gap-2 row flex-wrap",
                    className
                )}
            >
                {[...Array(8)].map((_, index) => (
                    <Skeleton
                        key={index}
                        className="rounded-[8px] w-[80px] h-[40px]"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={cn("flex items-center gap-2 row flex-wrap", className)}>
            {items.map((item, index) => (
                <FilterCheckbox
                    key={index}
                    text={item.text}
                    value={item.value}
                    endAdornment={item.endAdornment}
                    checked={selected?.has(item.value)}
                    onCheckedChange={() => onClickCheckbox?.(item.value)}
                    name={name}
                />
            ))}
        </div>
    );
};
