import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { Order } from "@prisma/client";
import { OrderProducts } from "@/@types/prisma";
import { OrderStatusTag } from "../order-status-tag";

interface Props {
    order: Order;
    className?: string;
}

export const ProfileOrderItem: React.FC<Props> = ({ order, className }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={className}
        >
            <CollapsibleTrigger className="flex justify-between items-center w-full bg-secondary px-5 py-3 my-2">
                <div className="flex items-center">
                    <ShoppingCart width={18} className="mr-3" />
                    <span className="mr-3">Замовлення #{order.id}</span>
                    {isOpen ? (
                        <ChevronUp width={18} />
                    ) : (
                        <ChevronDown width={18} />
                    )}
                </div>
                <div className="basis-2/6">
                    <OrderStatusTag status={order.status} />
                </div>
                <p className="basis-1/6 text-end font-bold">
                    {order.totalAmount}₴
                </p>
            </CollapsibleTrigger>
            <CollapsibleContent>
                {JSON.parse(String(order.items)).map(
                    (item: OrderProducts, index: number) => (
                        <div
                            key={index}
                            className="flex justify-between items-center gap-3 w-full px-5 my-3"
                        >
                            <img
                                className="rounded-sm w-24 h-14 object-cover"
                                src={item.productItem.product.imageUrl}
                                alt={item.productItem.product.name}
                            />
                            <span className="flex-1">
                                {item.productItem.product.name}
                            </span>
                            <p>
                                {item.productItem.price}₴/
                                {item.productItem.description}
                            </p>
                            <span>x {item.quantity}</span>
                        </div>
                    )
                )}
            </CollapsibleContent>
        </Collapsible>
    );
};
