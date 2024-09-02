import React from "react";
import { cn } from "@/lib/utils";

export type Variant = {
    name: string;
    value: string;
};

interface Props {
    items: readonly Variant[];
    onClick?: (value: Variant["value"]) => void;
    value?: Variant["value"];
    className?: string;
}

export const GroupVariants: React.FC<Props> = ({
    items,
    onClick,
    value,
    className,
}) => {
    return (
        <div className={cn("bg-white rounded-[8px] text-black", className)}>
            {items.map((item) => (
                <button
                    key={item.value}
                    className={cn(
                        "py-1 px-3 h-full transition-colors rounded-[8px]",
                        {
                            "bg-salad": value === item.value,
                        }
                    )}
                    onClick={() => onClick?.(item.value)}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};
