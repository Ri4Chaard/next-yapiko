"use client";

import { BordersBlock } from "@/components/shared/borders-block";
import { ProfileOrdersList } from "@/components/shared/profile/profile-orders-list";
import { useOrders } from "@/hooks/use-orders";
import { useSession } from "next-auth/react";
import React from "react";

export default function ProfilePage() {
    const { data: session } = useSession();

    const { orders, loading } = useOrders(session?.user.email);

    return (
        <BordersBlock
            title="Мій кабінет"
            className="flex-1 basis-3/4"
            bodyClassName="p-0"
        >
            <ProfileOrdersList orders={orders} loading={loading} />
        </BordersBlock>
    );
}
