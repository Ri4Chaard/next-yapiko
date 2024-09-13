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

export default function CheckoutPage() {
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
        },
    });

    return (
        <Container className="mt-10">
            <FormProvider {...form}>
                <form
                // onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="flex gap-10">
                        {/* Ліва частина */}
                        <div className="flex flex-col gap-10 flex-1 mb-20">
                            <CheckoutCart
                                items={items}
                                onClickCountButton={onClickCountButton}
                                removeCartItem={removeCartItem}
                                loading={loading}
                            />
                            <CheckoutPersonalInfoForm />
                        </div>

                        {/* Права частина */}
                        <CheckoutSidebar totalAmount={totalAmount} />
                    </div>
                </form>
            </FormProvider>
        </Container>
    );
}
