"use client";

import React from "react";
import { ProfileOrdersList } from "./profile-orders-list";
import { useOrders } from "@/hooks/use-orders";
import { Title } from "../title";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
    className?: string;
}

export const ProfileOrders: React.FC<Props> = ({ className }) => {
    const { orders, loading: loadingOrders } = useOrders();

    return (
        <div className={className}>
            <div className="px-5">
                <Title size="xs" text="Мої замовлення" />
            </div>
            <ProfileOrdersList
                orders={orders.splice(orders.length - 4)}
                loading={loadingOrders}
            />

            {loadingOrders ? (
                <Skeleton className="mx-5 w-[146px] h-[24px] bg-secondary" />
            ) : (
                orders.length > 0 && (
                    <div className="flex px-5 font-bold text-primary">
                        <Link
                            href={"/profile/orders"}
                            className="flex items-center"
                        >
                            Переглянути всі
                            <ArrowRight width={15} className="ml-1" />
                        </Link>
                    </div>
                )
            )}
        </div>
    );
};
