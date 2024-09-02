import React from "react";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Variant } from "./group-variants";

interface Props {
    items: readonly Variant[];
    onChange?: (value: Variant["value"]) => void;
    value?: Variant["value"];
    className?: string;
}
export const GroupSelectVariants: React.FC<Props> = ({
    items,
    value,
    onChange,
    className,
}) => {
    return (
        <Select onValueChange={onChange} defaultValue={String(value)}>
            <SelectTrigger
                className={cn(
                    "w-[169px] mr-6 rounded-[8px] text-black",
                    className
                )}
            >
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-[8px]">
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            className={cn("transition-colors rounded-[8px]", {
                                "bg-salad": value === item.value,
                            })}
                        >
                            {item.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
