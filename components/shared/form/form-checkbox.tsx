"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ErrorText } from "../error-text";
import { ClearButton } from "../clear-button";
import { RequiredSymbol } from "../required-symbol";
import { cn } from "@/lib/utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormCheckbox: React.FC<Props> = ({
    className,
    name,
    label,
    required,
    ...props
}) => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    const errorText = errors[name]?.message as string;

    return (
        <div className={className}>
            <div className="flex items-center">
                <input
                    className="mr-1"
                    id={name}
                    type="checkbox"
                    {...register(name)}
                    {...props}
                />
                <label htmlFor={name}>{label}</label>
                {required && <RequiredSymbol />}
            </div>
            {errorText && <ErrorText text={errorText} className="mt-2" />}
        </div>
    );
};
