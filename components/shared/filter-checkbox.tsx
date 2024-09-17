import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
    name?: string;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name,
}) => {
    return (
        <Checkbox
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
            className="rounded-[8px] p-2 bg-secondary border-none"
            id={`checkbox-${String(name)}-${String(value)}`}
        >
            {text}
        </Checkbox>
    );
};
