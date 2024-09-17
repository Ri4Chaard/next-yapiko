import React from "react";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import { Title } from "../../title";
import { FormInput } from "../../form/form-input";
import { Button } from "@/components/ui/button";
import { formRegisterSchema, TFormRegisterValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/app/actions";
import toast from "react-hot-toast";

interface Props {
    switchType?: () => void;
    className?: string;
}

export const RegisterForm: React.FC<Props> = ({ switchType, className }) => {
    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await registerUser({
                ...data,
            });

            switchType?.();
            toast.success("Реєстрація успішна 📝. Підтвердіть свою пошту", {
                icon: "✔️",
            });
        } catch (error) {
            console.log("Error [REGISTER], error");
            toast.error("Невірний E-Mail або пароль", {
                icon: "❌",
            });
        }
    };
    return (
        <FormProvider {...form}>
            <form
                className={cn(
                    "flex flex-col items-center justify-center w-72 mx-auto",
                    className
                )}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Image
                    src="/assets/icons/happy-yapiko.svg"
                    alt="Empty cart"
                    width={120}
                    height={120}
                />
                <Title
                    size="xl"
                    text="Реєстрація"
                    className="text-center font-bold my-1"
                />
                <p className="text-center text-neutral-500 mb-5">
                    Заповніть форму, щоб зареєструватися
                </p>
                <div className="flex flex-col gap-5 w-full">
                    <FormInput
                        name="email"
                        label="E-Mail"
                        inputClassName="border-primary"
                        required
                    />
                    <FormInput
                        name="fullName"
                        label="Повне ім'я"
                        inputClassName="border-primary"
                        required
                    />
                    <FormInput
                        name="password"
                        label="Пароль"
                        type="password"
                        inputClassName="border-primary"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        label="Повторіть пароль"
                        type="password"
                        inputClassName="border-primary"
                        required
                    />

                    <Button
                        className="w-full h-12 text-base"
                        size="lg"
                        loading={form.formState.isSubmitting}
                    >
                        Зареєструватися
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
