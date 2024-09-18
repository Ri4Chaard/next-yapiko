import React from "react";
import { cn } from "@/lib/utils";
import { CartStateItem } from "@/lib/get-cart-details";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { PizzaBorder, PizzaSize } from "@/constants/pizza";
import { ShoppingBasket, Trash2Icon } from "lucide-react";
import { Title } from "../title";
import { CheckoutItem } from "./checkout-item";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckoutItemSkeleton } from "./checkout-item-skeleton";
import { BordersBlock } from "../borders-block";

interface Props {
    items: CartStateItem[];
    onClickCountButton: (
        id: number,
        quantity: number,
        type: "plus" | "minus"
    ) => void;
    removeCartItem: (id: number) => void;
    loading?: boolean;
    className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
    items,
    onClickCountButton,
    removeCartItem,
    loading,
    className,
}) => {
    return (
        <BordersBlock
            title="Ваш кошик"
            endAdornment={
                <>
                    <ShoppingBasket width={30} height={30} strokeWidth={2} />
                    <span className=" mx-3">|</span>
                    <span className="font-bold mr-6 text-2xl">{3}</span>
                </>
            }
            className={className}
        >
            {loading
                ? [...Array(3)].map((_, index) => (
                      <CheckoutItemSkeleton key={index} />
                  ))
                : items.map((item) => (
                      <CheckoutItem
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          description={item.description}
                          details={getCartItemDetails(
                              item.ingredients,
                              item.pizzaBorder as PizzaBorder,
                              item.pizzaSize as PizzaSize
                          )}
                          price={item.price}
                          imageUrl={item.imageUrl}
                          quantity={item.quantity}
                          onClickCountButton={(type) =>
                              onClickCountButton(item.id, item.quantity, type)
                          }
                          onClickRemove={() => removeCartItem(item.id)}
                          disabled={item.disabled}
                      />
                  ))}
        </BordersBlock>
    );
};
