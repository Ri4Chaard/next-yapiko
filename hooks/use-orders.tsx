import { Api } from "@/services/api-client";
import { Order } from "@prisma/client";
import React from "react";

export const useOrders = (email: string | undefined) => {
    const [loading, setLoading] = React.useState(true);
    const [orders, setOrders] = React.useState<Order[]>([]);

    React.useEffect(() => {
        async function fetchOrdersInfo() {
            try {
                setLoading(true);
                const orders = await Api.orders.getOrdersByEmail({
                    email,
                });
                setOrders(orders);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchOrdersInfo();
    }, []);

    return { orders, loading };
};
