"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./search-bar";

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    const categories: {
        name: string;
        subcategories: { name: string; icon: string }[];
    }[] = [
        {
            name: "Суши",
            subcategories: [
                { name: "Суши", icon: "/assets/icons/sushi.svg" },
                { name: "Роли", icon: "/assets/icons/sushi.svg" },
                { name: "Royal", icon: "/assets/icons/sushi.svg" },
                { name: "Сети", icon: "/assets/icons/sushi.svg" },
            ],
        },
        {
            name: "Піца",
            subcategories: [
                { name: "Кругла", icon: "/assets/icons/sushi.svg" },
                { name: "Party піца", icon: "/assets/icons/sushi.svg" },
            ],
        },
        {
            name: "Бургери",
            subcategories: [],
        },
        {
            name: "Гаряче",
            subcategories: [
                { name: "WOK", icon: "/assets/icons/sushi.svg" },
                { name: "Супи", icon: "/assets/icons/sushi.svg" },
                { name: "Пасти", icon: "/assets/icons/sushi.svg" },
            ],
        },
    ];

    return (
        <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
            <Container className="flex items-center justify-between bg-primary rounded-full">
                <NavigationMenu className="bg-primary rounded-l-lg">
                    <NavigationMenuList>
                        {categories.map((category, index) =>
                            category.subcategories?.length > 0 ? (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuTrigger>
                                        {category.name}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {category.subcategories?.map(
                                            (subcategory) => (
                                                <NavigationMenuLink
                                                    key={subcategory.name}
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <Image
                                                            width={70}
                                                            height={70}
                                                            src={
                                                                subcategory.icon
                                                            }
                                                            alt="icon"
                                                        />
                                                        {subcategory.name}
                                                    </div>
                                                </NavigationMenuLink>
                                            )
                                        )}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "h-12"
                                            )}
                                        >
                                            {category.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        )}
                    </NavigationMenuList>
                </NavigationMenu>

                <SearchBar />
            </Container>
        </div>
    );
};
