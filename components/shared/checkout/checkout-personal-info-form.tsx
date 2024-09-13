import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "../form/form-input";
import { Title } from "../title";
import { FormTextarea } from "../form/form-textarea";

interface Props {
    className?: string;
}

export const CheckoutPersonalInfoForm: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "bg-white rounded-md border border-secondary w-full",
                className
            )}
        >
            <div className="flex items-center p-5 border-b border-b-secondary">
                <Title
                    text="Контактна інформація"
                    className="font-extrabold text-2xl"
                />
            </div>
            <div className="grid grid-cols-2 gap-5 p-5">
                <FormInput
                    name="firstName"
                    className="text-base"
                    placeholder="Ім'я"
                />
                <FormInput
                    name="lastName"
                    className="text-base"
                    placeholder="Прізвище"
                />
                <FormInput
                    name="email"
                    className="text-base"
                    placeholder="E-Mail"
                />
                <FormInput
                    name="phone"
                    className="text-base"
                    placeholder="Телефон"
                />
                <FormInput
                    name="address"
                    className="text-base"
                    placeholder="Телефон"
                />
                <FormTextarea
                    name="comment"
                    className="text-base"
                    placeholder="Ваш коментар..."
                />
            </div>
        </div>
    );
};
