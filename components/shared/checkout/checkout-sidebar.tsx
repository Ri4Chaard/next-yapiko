"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Banknote, Coins, Loader2, Package, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FormCheckbox } from "../form/form-checkbox";

interface Props {
    totalAmount: number;
    bonusPoints: number;
    loading?: boolean;
    className?: string;
}

const DELIVERY_PRICE = 50;
const BAG_PRICE = 3;

export const CheckoutSidebar: React.FC<Props> = ({
    totalAmount,
    bonusPoints,
    loading,
    className,
}) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const totalPrice = isChecked
        ? totalAmount + DELIVERY_PRICE + BAG_PRICE - bonusPoints
        : totalAmount + DELIVERY_PRICE + BAG_PRICE;

    return (
        <div
            className={cn(
                "sticky top-28 bg-white rounded-md border border-secondary w-[450px] h-full",
                className
            )}
        >
            <div className="bg-primary text-primary-foreground rounded-t-md p-5">
                <h2 className="text-2xl">Ваше замовлення</h2>
            </div>
            <div className="border-b border-secondary font-semibold">
                <div className="flex justify-between items-center my-2 px-2">
                    <Banknote className="mr-2 -rotate-45" />
                    {loading ? (
                        <>
                            <Skeleton className="flex-1 mr-10 h-[20px]" />
                            <Skeleton className="w-[40px] h-[24px]" />
                        </>
                    ) : (
                        <>
                            <p className="flex-1 text-sm">
                                Проміжний підсумок кошика
                            </p>
                            {isChecked ? (
                                <span className="text-primary">
                                    {totalAmount - bonusPoints}₴
                                </span>
                            ) : (
                                <span>{totalAmount}₴</span>
                            )}
                        </>
                    )}
                </div>
                <div className="flex justify-between items-center my-2 px-2">
                    <Package className="mr-2" />
                    {loading ? (
                        <>
                            <Skeleton className="flex-1 mr-10 h-[20px]" />
                            <Skeleton className="w-[40px] h-[24px]" />
                        </>
                    ) : (
                        <>
                            <p className="flex-1 text-sm">Доставка</p>
                            <span>{DELIVERY_PRICE}₴</span>
                        </>
                    )}
                </div>
                <div className="flex justify-between items-center my-2 px-2">
                    <ShoppingBag className="mr-2" />
                    {loading ? (
                        <>
                            <Skeleton className="flex-1 mr-10 h-[20px]" />
                            <Skeleton className="w-[40px] h-[24px]" />
                        </>
                    ) : (
                        <>
                            <p className="flex-1 text-sm">Пакет</p>
                            <span>{BAG_PRICE}₴</span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center font-bold text-xl my-2 px-3">
                <p>Сума замовлення</p>
                {loading ? (
                    <Skeleton className="w-[50px] h-[28px]" />
                ) : (
                    <span>{totalPrice}₴</span>
                )}
            </div>
            <div className="flex justify-between items-center px-3">
                <div className="flex items-center font-semibold">
                    <span className="mr-2">Мої бонуси:</span>
                    {loading ? (
                        <Skeleton className="w-[32px] h-[28px]" />
                    ) : (
                        <span className="text-primary text-lg">
                            {bonusPoints}
                        </span>
                    )}
                    <Coins className="text-primary" width={18} />
                </div>

                <FormCheckbox
                    label="Списати бонуси"
                    name="bonuses"
                    className="text-base"
                    value={String(bonusPoints)}
                    defaultChecked={isChecked}
                    onChange={(e) => {
                        setIsChecked(!isChecked);
                    }}
                />
            </div>
            <Button
                type="submit"
                variant="salad"
                loading={loading}
                className="w-full h-20 text-lg font-bold rounded-b-md rounded-t-none active:scale-100"
            >
                Перейти до оформлення
            </Button>
        </div>
    );
};
