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
import { SearchBar } from "./search-bar";

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    const categories: {
        name: string;
        link: string;
        subcategories: { name: string; subLink: string; icon: string }[];
    }[] = [
        {
            name: "Суши",
            link: "sushi",
            subcategories: [
                {
                    name: "Суши",
                    subLink: "sushi",
                    icon: "/assets/icons/sushi.svg",
                },
                {
                    name: "Роли",
                    subLink: "rolls",
                    icon: "/assets/icons/sushi.svg",
                },
                {
                    name: "Royal",
                    subLink: "royal",
                    icon: "/assets/icons/sushi.svg",
                },
                {
                    name: "Сети",
                    subLink: "sets",
                    icon: "/assets/icons/sushi.svg",
                },
            ],
        },
        {
            name: "Піца",
            link: "pizza",
            subcategories: [
                {
                    name: "Кругла",
                    subLink: "round",
                    icon: "/assets/icons/sushi.svg",
                },
                {
                    name: "Party піца",
                    subLink: "party",
                    icon: "/assets/icons/sushi.svg",
                },
            ],
        },
        {
            name: "Бургери",
            link: "burgers",
            subcategories: [],
        },
        {
            name: "Гаряче",
            link: "hot-dishes",
            subcategories: [
                {
                    name: "WOK",
                    subLink: "wok",
                    icon: "/assets/icons/sushi.svg",
                },
                {
                    name: "Супи",
                    subLink: "soup",
                    icon: "/assets/icons/sushi.svg",
                },
                {
                    name: "Пасти",
                    subLink: "pasta",
                    icon: "/assets/icons/sushi.svg",
                },
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
                                                    href={`/${category.link}/${subcategory.subLink}`}
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
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        href={`/${category.link}`}
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "h-12"
                                        )}
                                    >
                                        {category.name}
                                    </NavigationMenuLink>
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
