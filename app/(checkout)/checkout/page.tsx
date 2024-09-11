"use client";

import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import * as CartItemDetails from "@/components/shared/cart-item-details";
import { useCart } from "@/hooks/use-cart";
import { ShoppingBasket, Trash2Icon, X } from "lucide-react";
import { getCartItemDetails } from "@/lib/get-cart-item-details";
import { PizzaBorder, PizzaSize } from "@/constants/pizza";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
    const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
        useCart();

    return (
        <Container className="mt-10">
            <div className="flex gap-10">
                <div className="bg-white rounded-md border border-secondary w-full">
                    <div className="flex items-center p-5 border-b border-b-secondary">
                        <ShoppingBasket
                            width={30}
                            height={30}
                            strokeWidth={2}
                        />
                        <span className="h-full w-[2px] bg-black mx-3" />
                        <span className="font-bold mr-6 text-2xl">{3}</span>
                        <Title
                            text="Ваш кошик"
                            className="font-extrabold text-2xl"
                        />
                    </div>
                    <div className="p-5">
                        {items.map((item) => (
                            <div className="flex items-center justify-between my-2">
                                <div className="flex items-center gap-5 flex-1">
                                    <CartItemDetails.Image
                                        src={item.imageUrl}
                                    />
                                    <CartItemDetails.Info
                                        name={item.name}
                                        description={item.description}
                                        details={getCartItemDetails(
                                            item.ingredients,
                                            item.pizzaBorder as PizzaBorder,
                                            item.pizzaSize as PizzaSize
                                        )}
                                    />
                                </div>

                                <CartItemDetails.Price value={item.price} />

                                <div className="flex items-center gap-5 ml-20">
                                    <CartItemDetails.CountButton
                                    // onClick={onClickCountButton}
                                    // value={quantity}
                                    />
                                    <button
                                        type="button"
                                        // onClick={onClickRemove}
                                    >
                                        <Trash2Icon
                                            className="text-gray-400 hover:text-gray-600"
                                            size={20}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-md border border-secondary w-[450px] h-full">
                    <div className="bg-primary text-primary-foreground rounded-t-md p-5">
                        <h2 className="text-2xl">Ваше замовлення</h2>
                    </div>
                    <div>
                        <p>Проміжний підсумок кошика</p>
                        <p>Доставка</p>
                        <p>Пакет</p>
                    </div>
                    <div>
                        <p>Сума замовлення {totalAmount}</p>
                    </div>
                    <Button
                        variant="salad"
                        // onClick={() => setRedirecting(true)}
                        // loading={redirecting}
                        type="submit"
                        className="w-full h-20 text-lg font-bold rounded-b-md rounded-t-none"
                    >
                        Перейти до оформлення
                        {/* <ArrowBigRight className="ml-4" /> */}
                    </Button>
                </div>
            </div>
        </Container>
    );
}
