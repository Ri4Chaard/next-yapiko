"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Order } from "@prisma/client";
import { ProfileOrderItem } from "./profile-order-item";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    if (loading) {
        return [...Array(4)].map((_, index) => (
            <div
                key={index}
                className="flex justify-between items-center w-full rounded-none bg-secondary px-5 py-3 my-2 h-[54px]"
            >
                <div className="flex items-center">
                    <Skeleton className="mr-3 bg-white w-[185px] h-[30px]" />
                </div>
                <div className="basis-2/6">
                    <Skeleton className=" bg-white w-[110px] h-[30px]" />
                </div>
                <div className="basis-1/6 flex justify-end text-end font-bold">
                    <Skeleton className=" bg-white w-[40px] h-[30px]" />
                </div>
            </div>
        ));
    }
    return (
        <div className={cn("", className)}>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <ProfileOrderItem key={order.id} order={order} />
                ))
            ) : (
                <div className="px-5 font-bold text-2xl text-primary">
                    Ви ще не зробили жодного замовлення
                </div>
            )}
        </div>
    );
};
