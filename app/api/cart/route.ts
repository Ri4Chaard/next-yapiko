import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/prisma/prisma-client";
import { CreateCartItemValues } from "@/services/dto/cart.dto";
import { findOrCreateCart } from "@/lib/find-or-create-cart";
import { updateCartTotalAmount } from "@/lib/update-cart-total-amount";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("cartToken")?.value;

        if (!token) {
            return NextResponse.json({ totalAmount: 0, items: {} });
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                token,
            },
            include: {
                items: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                        extraIngredients: true,
                    },
                },
            },
        });

        return NextResponse.json(userCart);
    } catch (error) {
        console.log("[CART_GET] Server error", error);
        return NextResponse.json(
            { message: "Не вдалось отримати кошик" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get("cartToken")?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const userCart = await findOrCreateCart(token);

        const data = (await req.json()) as CreateCartItemValues;

        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                productItemId: data.productItemId,
                extraIngredients: { every: { id: { in: data.ingredients } } },
            },
        });

        //Якщо товар було знайдено, робимо +1
        //доробити додавання
        if (findCartItem) {
            await prisma.cartItem.update({
                where: {
                    id: findCartItem.id,
                },
                data: {
                    quantity: findCartItem.quantity + 1,
                },
            });
        }

        await prisma.cartItem.create({
            data: {
                cartId: userCart.id,
                productItemId: data.productItemId,
                quantity: 1,
                extraIngredients: {
                    connect: data.ingredients?.map((id) => ({ id })),
                },
            },
        });

        const updatedUserCart = await updateCartTotalAmount(token);

        const resp = NextResponse.json(updatedUserCart);
        resp.cookies.set("cartToken", token);
        return resp;
    } catch (error) {
        console.log("[CART_POST] Server error", error);
        return NextResponse.json(
            { message: "Не вдалось оновити корзину" },
            { status: 500 }
        );
    }
}
