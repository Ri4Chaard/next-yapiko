import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { Coins, House, Package, Utensils } from "lucide-react";
import { CartButton } from "./cart-button";
import Link from "next/link";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("border-b border-secondary", className)}>
            <Container className="flex items-center justify-between py-8">
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
                    <Button className="flex items-center gap-2" variant="salad">
                        <Utensils width={18} />
                        <b>Ресторани</b>
                    </Button>

                    <Button className="flex items-center gap-2" variant="salad">
                        <Coins width={18} />
                        <b>Бонуси</b>
                    </Button>

                    <Button className="flex items-center gap-2" variant="salad">
                        <Package width={18} />
                        <b>Доставка та оплата</b>
                    </Button>

                    <Button className="flex items-center gap-2">
                        <House width={18} />
                        <b>Увійти</b>
                    </Button>

                    <CartButton />
                </div>
            </Container>
        </header>
    );
};
