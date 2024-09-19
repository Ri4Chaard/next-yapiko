import React from "react";
import { cn } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";

interface Props {
    status: OrderStatus;
    className?: string;
}

export const OrderStatusTag: React.FC<Props> = ({ status, className }) => {
    const mapTextByStatus = {
        PENDING: "Очікує оплату",
        SUCCEEDED: "Оплачено",
        CANCELED: "Відхилено",
    } as const;

    const mapClassNameByStatus = {
        PENDING: "border-yellow-600 bg-yellow-300 text-yellow-700",
        SUCCEEDED: "border-green-600 bg-green-300 text-green-700",
        CANCELED: "border-red-600 bg-red-300 text-red-700",
    } as const;
    return (
        <div
            className={cn(
                "w-[110px] rounded-lg text-sm border p-1",
                mapClassNameByStatus[status],
                className
            )}
        >
            {mapTextByStatus[status]}
        </div>
    );
};
