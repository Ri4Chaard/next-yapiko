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
    inputClassName?: string;
}

export const FormInput: React.FC<Props> = ({
    className,
    inputClassName,
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

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const onClickClear = () => {
        setValue(name, "", { shouldValidate: true });
    };

    return (
        <div className={className}>
            <p className="font-bold mb-2">
                {label} {required && <RequiredSymbol />}
            </p>

            <div className="relative">
                <Input
                    className={cn("h-12 text-md", inputClassName)}
                    {...register(name)}
                    {...props}
                />
                {value && <ClearButton onClick={onClickClear} />}
            </div>
            {errorText && <ErrorText text={errorText} className="mt-2" />}
        </div>
    );
};
