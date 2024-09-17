import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Title } from "../../title";
import { FormInput } from "../../form/form-input";
import { Button } from "@/components/ui/button";
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface Props {
    className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: TFormLoginValues) => {
        try {
            const resp = await signIn("credentials", {
                ...data,
                redirect: false,
            });

            if (!resp?.ok) {
                throw Error();
            }

            toast.success("Ви успішно увійши в акаунт", {
                icon: "✔️",
            });
        } catch (error) {
            console.log("Error [LOGIN], error");
            toast.error("Не вдалось увійти в акаунт", {
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
                    text="Авторизація"
                    className="text-center font-bold my-1"
                />
                <p className="text-center text-neutral-500 mb-5">
                    Введіть свою пошту, щоб увійти в свій акаунт
                </p>
                <div className="flex flex-col gap-5 w-full">
                    <FormInput
                        name="email"
                        label="E-Mail"
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

                    <Button
                        className="w-full h-12 text-base"
                        size="lg"
                        loading={form.formState.isSubmitting}
                    >
                        Увійти
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
