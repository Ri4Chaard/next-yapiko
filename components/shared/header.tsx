"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { Coins, House, Package, Utensils } from "lucide-react";
import { CartButton } from "./cart-button";
import Link from "next/link";
import { CategoriesWithRelations } from "@/@types/prisma";
import { TopBar } from "./top-bar";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
    categories?: CategoriesWithRelations[];
    hasTopbar?: boolean;
    hasCart?: boolean;
    className?: string;
}

export const Header: React.FC<Props> = ({
    categories,
    hasTopbar = true,
    hasCart = true,
    className,
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    React.useEffect(() => {
        let toastMessage = "";

        if (searchParams.has("paid")) {
            toastMessage =
                "Замовлення успішно сплачено! Інформація надіслана на пошту.";
        }

        if (toastMessage) {
            setTimeout(() => {
                router.replace("/");
                toast.success(toastMessage, { duration: 3000 });
            }, 1000);
        }
    }, []);

    return (
        <header className={cn("sticky top-0 z-10 bg-white", className)}>
            <div className="border-b border-secondary">
                <Container className="flex items-center justify-between py-3">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="pb-2"
                            />
                            <h1 className="text-2xl uppercase font-black text-primary">
                                Next-Yapiko
                            </h1>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Button
                            className="flex items-center gap-2"
                            variant="salad"
                        >
                            <Utensils width={18} />
                            <b>Ресторани</b>
                        </Button>

                        <Button
                            className="flex items-center gap-2"
                            variant="salad"
                        >
                            <Coins width={18} />
                            <b>Бонуси</b>
                        </Button>

                        <Button
                            className="flex items-center gap-2"
                            variant="salad"
                        >
                            <Package width={18} />
                            <b>Доставка та оплата</b>
                        </Button>

                        <Button className="flex items-center gap-2">
                            <House width={18} />
                            <b>Увійти</b>
                        </Button>

                        {hasCart && <CartButton />}
                    </div>
                </Container>
            </div>
            {hasTopbar && categories && <TopBar categories={categories} />}
        </header>
    );
};
