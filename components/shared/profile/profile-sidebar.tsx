"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

interface Props {
    className?: string;
}

export const ProfileSidebar: React.FC<Props> = ({ className }) => {
    const currPath = usePathname();
    const links = [
        { path: "/profile", name: "Мій кабінет" },
        { path: "/profile/bonuses", name: "Бонусний рахунок" },
        { path: "/profile/my-data", name: "Мої дані" },
        { path: "/profile/orders", name: "Замовлення" },
    ];

    const onClickSignOut = () => {
        signOut({
            callbackUrl: "/",
        });
    };

    return (
        <div
            className={cn(
                "sticky top-24 flex flex-col justify-center items-center gap-5 py-5 h-full border border-secondary rounded-md font-semibold",
                className
            )}
        >
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={cn("w-3/4 hover:text-purple", {
                        "text-primary font-bold": link.path === currPath,
                    })}
                >
                    <h1>{link.name}</h1>
                </Link>
            ))}
            <Button onClick={onClickSignOut} className="w-3/4">
                Вийти
            </Button>
        </div>
    );
};
