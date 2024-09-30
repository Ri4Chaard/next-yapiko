import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await getUserSession();

        if (!user) {
            return NextResponse.json(
                { message: "Ви не авторизовані" },
                { status: 401 }
            );
        } else {
            const data = await prisma.order.findMany({
                where: {
                    email: user.email,
                },
            });

            return NextResponse.json(data);
        }
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "[ORDERS_GET] Server error" },
            { status: 500 }
        );
    }
}
