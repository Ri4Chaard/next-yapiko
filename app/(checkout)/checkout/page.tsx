"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Container } from "@/components/shared/container";
import { useCart } from "@/hooks/use-cart";
import { CheckoutCart } from "@/components/shared/checkout/checkout-cart";
import { CheckoutSidebar } from "@/components/shared/checkout/checkout-sidebar";
import { CheckoutPersonalInfoForm } from "@/components/shared/checkout/checkout-personal-info-form";
import {
    checkoutFormSchema,
    CheckoutFormValues,
} from "@/constants/checkout-form-schema";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import React from "react";
import { useUserInfo } from "@/hooks/use-user-info";

export default function CheckoutPage() {
    const [submitting, setSubmitting] = React.useState(false);
    const [bonusPoints, setBonusPoints] = React.useState(0);
    const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
        useCart();

    const onClickCountButton = (
        id: number,
        quantity: number,
        type: "plus" | "minus"
    ) => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            house: "",
            entrance: "",
            floor: "",
            apartment: "",
            comment: "",
            bonuses: "",
        },
    });

    const { user, loading: loadingUser } = useUserInfo();

    React.useEffect(() => {
        if (user) {
            const [firstName, lastName] = user.fullName.split(" ");

            form.setValue("firstName", firstName);
            form.setValue("lastName", lastName);
            form.setValue("email", user.email);

            setBonusPoints(user.bonusPoints);
        }
    }, [user]);

    const onSubmit = async (data: CheckoutFormValues) => {
        console.log(data);

        try {
            setSubmitting(true);
            const paymentUrl = await createOrder(data);
            toast.success(
                "Замовлення успішно оформлене! 📝 Перехід на оплату...",
                {
                    icon: "✔️",
                }
            );
            if (paymentUrl) {
                window.location.href = paymentUrl;
            }
        } catch (err) {
            console.log(err);
            setSubmitting(false);
            toast.error("Не вдалося створити замовлення", {
                icon: "❌",
            });
        }
    };

    return (
        <Container className="mt-10">
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        {/* Ліва частина */}
                        <div className="flex flex-col gap-10 flex-1 mb-20">
                            <CheckoutCart
                                items={items}
                                onClickCountButton={onClickCountButton}
                                removeCartItem={removeCartItem}
                                loading={loading}
                            />

                            <CheckoutPersonalInfoForm
                                className={
                                    loading || loadingUser
                                        ? "opacity-70 pointer-events-none"
                                        : ""
                                }
                            />
                        </div>

                        {/* Права частина */}
                        <CheckoutSidebar
                            totalAmount={totalAmount}
                            loading={loading || submitting || loadingUser}
                            bonusPoints={bonusPoints}
                        />
                    </div>
                </form>
            </FormProvider>
        </Container>
    );
}
