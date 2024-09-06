"use client";

import { useCart } from "@/hooks/use-cart";
import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Title } from "./title";
import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowRight, ShoppingBasket } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { PizzaBorder, PizzaSize } from "@/constants/pizza";
import Link from "next/link";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { totalAmount, updateItemQuantity, items, removeCartItem } =
        useCart();

    const [redirecting, setRedirecting] = React.useState(false);

    const onClickCountButton = (
        id: number,
        quantity: number,
        type: "plus" | "minus"
    ) => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>

            <SheetContent className="flex flex-col p-0 justify-between border-none">
                <div
                    className={cn(
                        "flex flex-col h-full",
                        !totalAmount && "justify-center"
                    )}
                >
                    {totalAmount > 0 && (
                        <SheetHeader className="bg-primary py-7 px-3">
                            <SheetTitle className="flex items-center text-primary-foreground">
                                <ShoppingBasket width={30} strokeWidth={2} />
                                <span className="h-full w-[1px] bg-secondary/30 mx-3" />
                                <span className="font-bold mr-3">
                                    {items.length}
                                </span>
                                <span className="text-xl font-bold">
                                    Ваш кошик
                                </span>
                            </SheetTitle>
                        </SheetHeader>
                    )}

                    {!totalAmount && (
                        <div className="flex flex-col items-center justify-center w-72 mx-auto">
                            <Image
                                src="/assets/icons/sad-yapiko.svg"
                                alt="Empty cart"
                                width={120}
                                height={120}
                            />
                            <Title
                                size="sm"
                                text="Кошик пустий"
                                className="text-center font-bold my-2"
                            />
                            <p className="text-center text-neutral-500 mb-5">
                                Додайте хоча б одну страву, щоб здійснити
                                замовлення
                            </p>
                            <SheetClose asChild>
                                <Button
                                    className="w-full h-12 text-base"
                                    size="lg"
                                >
                                    <ArrowBigLeft className="w-5 mr-2" />
                                    Повернутися назад
                                </Button>
                            </SheetClose>
                        </div>
                    )}

                    {totalAmount > 0 && (
                        <>
                            <div className="overflow-auto flex-1">
                                {items.map((item) => (
                                    <div key={item.id} className="mb-2">
                                        <CartDrawerItem
                                            id={item.id}
                                            imageUrl={item.imageUrl}
                                            description={item.description}
                                            details={getCartItemDetails(
                                                item.ingredients,
                                                item.pizzaBorder as PizzaBorder,
                                                item.pizzaSize as PizzaSize
                                            )}
                                            disabled={item.disabled}
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                            onClickCountButton={(type) =>
                                                onClickCountButton(
                                                    item.id,
                                                    item.quantity,
                                                    type
                                                )
                                            }
                                            onClickRemove={() =>
                                                removeCartItem(item.id)
                                            }
                                        />
                                    </div>
                                ))}
                            </div>

                            <SheetFooter className=" bg-white p-8">
                                <div className="w-full">
                                    <div className="flex mb-4">
                                        <span className="flex flex-1 text-lg text-neutral-500">
                                            Разом
                                            <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                                        </span>
                                        <span className="font-bold text-lg">
                                            {totalAmount} ₴
                                        </span>
                                    </div>
                                    <Link href="/checkout">
                                        <Button
                                            onClick={() => setRedirecting(true)}
                                            loading={redirecting}
                                            type="submit"
                                            className="w-full h-12 text-base"
                                        >
                                            Оформити замовлення
                                            <ArrowRight className="w-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </SheetFooter>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
