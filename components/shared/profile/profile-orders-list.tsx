"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Order } from "@prisma/client";
import { ProfileOrderItem } from "./profile-order-item";
import { Title } from "../title";
import { Loader2 } from "lucide-react";

interface Props {
    orders: Order[];
    loading?: boolean;
    className?: string;
}

export const ProfileOrdersList: React.FC<Props> = ({
    orders,
    loading,
    className,
}) => {
    console.log(orders);

    return (
        <div className={cn("", className)}>
            <Title size="xs" text="Мої замовлення" className="px-5 pt-5" />
            {loading ? (
                <div className="flex items-center justify-center h-[100px]">
                    <Loader2 className="animate-spin text-primary" />
                </div>
            ) : (
                orders.map((order) => <ProfileOrderItem order={order} />)
            )}
        </div>
    );
};
