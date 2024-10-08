import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { PaymentCallbackData } from "@/@types/liqpay";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { CartItemDTO } from "@/services/dto/cart.dto";
import { sendEmail } from "@/lib/send-email";
import { OrderSuccessTemplate } from "@/components/shared/email-templates/order-success";

export async function POST(req: NextRequest) {
    try {
        const bodyText = await req.text();

        const params = new URLSearchParams(bodyText);
        const data = params.get("data");
        const signature = params.get("signature");

        if (!data || !signature) {
            return NextResponse.json(
                { error: "Missing data or signature" },
                { status: 400 }
            );
        }

        const privateKey = process.env.LIQPAY_PRIVATE_API_KEY;

        const generatedSignature = crypto
            .createHash("sha1")
            .update(privateKey + data + privateKey)
            .digest("base64");

        if (generatedSignature !== signature) {
            console.log("Invalid signature");
            return NextResponse.json(
                { error: "Invalid signature" },
                { status: 400 }
            );
        }

        const paymentData = JSON.parse(
            Buffer.from(data, "base64").toString("utf8")
        ) as PaymentCallbackData;

        const order = await prisma.order.findFirst({
            where: {
                id: Number(paymentData.order_id),
            },
        });

        if (!order) {
            return NextResponse.json({ error: "Order not found" });
        }

        const isSucceeded = paymentData.status === "success";

        const currentUser = await prisma.user.findFirst({
            where: {
                id: order.userId || undefined,
            },
        });

        //Списуємо бонуси, якщо юзер обрав їх списання
        if (order.userBonuses && currentUser && isSucceeded) {
            //Відміняємо замовлення, якщо бонусів недостатньо
            if (order.userBonuses > currentUser.bonusPoints) {
                await prisma.order.update({
                    where: { id: order.id },
                    data: {
                        status: OrderStatus.CANCELED,
                    },
                });

                return NextResponse.json({ error: "Not enough bonuses" });
            }

            const totalAmountWithBonuses =
                order.userBonuses > order.totalAmount
                    ? 0
                    : order.totalAmount - order.userBonuses;
            await prisma.user.update({
                where: {
                    id: Number(currentUser.id),
                },
                data: {
                    bonusPoints:
                        totalAmountWithBonuses === 0
                            ? order.userBonuses - order.totalAmount
                            : 0,
                },
            });
        }

        //Нараховуємо бонуси
        if (isSucceeded && order.userId) {
            await prisma.user.update({
                where: {
                    id: order.userId,
                },
                data: {
                    bonusPoints: {
                        increment: Math.floor(order.totalAmount * 0.05),
                    },
                },
            });
        }

        await prisma.order.update({
            where: { id: order.id },
            data: {
                status: isSucceeded
                    ? OrderStatus.SUCCEEDED
                    : OrderStatus.CANCELED,
                paymentId: String(paymentData.payment_id),
            },
        });

        const items = JSON.parse(order?.items as string) as CartItemDTO[];
        if (isSucceeded) {
            await sendEmail(
                order.email,
                "Next-Yapiko | Ваше замовлення успішно оформлено 🎉",
                OrderSuccessTemplate({
                    orderId: order.id,
                    items,
                    totalAmount: order.totalAmount,
                    userId: order.userId || undefined,
                    userBonuses: order.userBonuses || undefined,
                })
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log("[Checkout Callback] Error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
