"use client";

import React from "react";
import { useClickAway } from "react-use";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RequiredSymbol } from "./required-symbol";
import { ClearButton } from "./clear-button";
import { ErrorText } from "./error-text";
import { useAddressAutocomplete } from "@/hooks/use-address-autocomplete";
import { Input } from "../ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const AddressInput: React.FC<Props> = ({
    className,
    name,
    label,
    required,
    ...props
}) => {
    const [focused, setFocused] = React.useState(false);
    const ref = React.useRef(null);

    const {
        register,
        formState: { errors },
        setValue,
        watch,
    } = useFormContext();

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const { suggestions, handleSuggestionClick } = useAddressAutocomplete(
        name,
        value,
        setValue
    );

    useClickAway(ref, () => setFocused(false));

    const onClickClear = () => {
        setValue(name, "", { shouldValidate: true });
    };

    return (
        <div className={className}>
            <p className="font-medium mb-2">
                {label} {required && <RequiredSymbol />}
            </p>
            <div ref={ref} className="relative">
                <Input
                    className="h-12 text-md"
                    value={value}
                    onFocus={() => setFocused(true)}
                    {...register(name)}
                    {...props}
                />
                {value && <ClearButton onClick={onClickClear} />}
                {focused && suggestions.length > 0 && (
                    <ul
                        className={cn(
                            "absolute w-full bg-white rounded-md py-2 border transition-all duration-200 z-30",
                            focused && "visible opacity-100 top-14"
                        )}
                    >
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setFocused(false);
                                    handleSuggestionClick(suggestion);
                                    setValue(name, suggestion);
                                }}
                                className="px-3 py-2 cursor-pointer hover:bg-primary/10"
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {errorText && <ErrorText text={errorText} className="mt-2" />}
        </div>
    );
};
