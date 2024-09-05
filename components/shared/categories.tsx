import React from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { CategoriesWithRelations } from "@/@types/prisma";

interface Props {
    categories: CategoriesWithRelations[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
    return (
        <NavigationMenu className={cn("bg-primary rounded-l-lg", className)}>
            <NavigationMenuList>
                {categories.map((category, index) =>
                    category.subcategories?.length > 0 ? (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger>
                                {category.name}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {category.subcategories?.map((subcategory) => (
                                    <NavigationMenuLink
                                        href={`/${category.link}/${subcategory.link}`}
                                        key={subcategory.name}
                                    >
                                        <div className="flex flex-col items-center">
                                            <img
                                                className="h-[70px]"
                                                src={subcategory.imageUrl}
                                                alt="icon"
                                            />
                                            {subcategory.name}
                                        </div>
                                    </NavigationMenuLink>
                                ))}
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
    );
};
