"use client";

import { updateUserInfo } from "@/app/actions";
import {
    formRegisterSchema,
    TFormRegisterValues,
} from "@/components/shared/auth/forms/schemas";
import { BordersBlock } from "@/components/shared/borders-block";
import { FormInput } from "@/components/shared/form/form-input";
import { Button } from "@/components/ui/button";
import { useUserInfo } from "@/hooks/use-user-info";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function MyDataPage() {
    const { user, loading } = useUserInfo();

    const form = useForm({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    React.useEffect(() => {
        if (user) {
            form.setValue("fullName", user.fullName);
            form.setValue("email", user.email);
        }
    }, [user]);

    const onSubmit = async (data: TFormRegisterValues) => {
        console.log(data);
        try {
            await updateUserInfo({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            });
            toast.success("Дані оновлено 📝", {
                icon: "✔️",
            });
        } catch (error) {
            return toast.error("Помилка оновлення даних", { icon: "❌" });
        }
    };
    return (
        <BordersBlock title="Мої дані" className="flex-1 basis-3/4 mb-4">
            <FormProvider {...form}>
                <form
                    className={cn("flex flex-col gap-5 mx-auto w-96 mt-10", {
                        "opacity-70 pointer-events-none": loading,
                    })}
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormInput name="email" label="E-mail" required />
                    <FormInput name="fullName" label="Повне ім'я" required />

                    <FormInput
                        type="password"
                        name="password"
                        label="Новий пароль"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Повторіть пароль"
                        required
                    />

                    <Button
                        disabled={form.formState.isSubmitting}
                        className="text-base mt-10"
                        type="submit"
                    >
                        Зберегти
                    </Button>
                </form>
            </FormProvider>
        </BordersBlock>
    );
}
