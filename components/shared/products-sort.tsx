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

interface Props {
    selected?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export const ProductsSort: React.FC<Props> = ({
    selected,
    onChange,
    className,
}) => {
    return (
        <div className={cn("", className)}>
            <div className="flex items-center justify-end">
                <span className="mr-2">Сортувати за:</span>
                <Select onValueChange={onChange} defaultValue="none">
                    <SelectTrigger className="rounded-[8px] w-[130px] text-black">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="none">Не сортувати</SelectItem>
                            <SelectItem value="expensive">Ціна ↓</SelectItem>
                            <SelectItem value="cheap">Ціна ↑</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};
