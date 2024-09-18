"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Order } from "@prisma/client";

interface Props {
    orders: Order[];
    className?: string;
}

export const ProfileOrdersList: React.FC<Props> = ({ orders, className }) => {
    const items = String(orders[1].items);
    console.log(JSON.parse(items));

    return <div className={cn("", className)}></div>;
};
