"use server";

import { PayOrderTemplate } from "@/components/shared/email-templates/pay-order";
import { CheckoutFormValues } from "@/constants/checkout-form-schema";
import { createPayment } from "@/lib/create-payment";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookieStore = cookies();
        const cartToken = cookieStore.get("cartToken")?.value;
        if (!cartToken) {
            throw new Error("Cart token not found");
        }

        // Знаходимо кошик по токену
        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        extraIngredients: true,
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
            where: {
                token: cartToken,
            },
        });

        // Якщо кошик не знайдено повертаємо помилку
        if (!userCart) {
            throw new Error("Cart not found");
        }

        //Якщо кошик пустий повертаємо помилку
        if (userCart?.totalAmount === 0) {
            throw new Error("Cart is empty");
        }

        //Створюємо замовлення
        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: data.firstName + " " + data.lastName,
                email: data.email,
                phone: data.phone,
                address:
                    data.address + " | " + data.house + data.entrance
                        ? " | " + data.entrance
                        : "" + data.floor
                        ? " | " + data.floor
                        : "" + data.apartment
                        ? " | " + data.apartment
                        : "",
                comment: data.comment,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items),
            },
        });

        //Очищаємо кошик
        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            },
        });

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            },
        });

        const paymentUrl = await createPayment({
            amount: order.totalAmount,
            orderId: order.id,
            description: "Next-Yapiko | Оплата замовлення #" + order.id,
        });

        if (!paymentUrl) {
            throw new Error("Payment data not found");
        }

        await sendEmail(
            data.email,
            "Next-Yapiko | Сплатіть замовлення #" + order.id,
            PayOrderTemplate({
                orderId: order.id,
                totalAmount: order.totalAmount,
                paymentUrl,
            })
        );

        return paymentUrl;
    } catch (err) {
        console.log("[CreateOrder] Server error", err);
    }
}
