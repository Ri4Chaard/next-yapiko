"use client";

import { BordersBlock } from "@/components/shared/borders-block";
import { ProfileOrdersList } from "@/components/shared/profile/profile-orders-list";
import { useOrders } from "@/hooks/use-orders";

export default function OrdersPage() {
    const { orders, loading } = useOrders();

    return (
        <BordersBlock
            title="Мої замовлення"
            className="flex-1 basis-3/4 mb-4"
            bodyClassName="p-0"
        >
            <ProfileOrdersList orders={orders} loading={loading} />
        </BordersBlock>
    );
}
