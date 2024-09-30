import React from "react";
import { cn } from "@/lib/utils";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    DrawerTrigger,
} from "../ui/drawer";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import { AuthButton } from "./auth/auth-button";
import { Coins, Menu, Package, Utensils } from "lucide-react";
import { CategoriesWithRelations } from "@/@types/prisma";

interface Props {
    categories: CategoriesWithRelations[];
    hasAuth?: boolean;
    className?: string;
}

export const HeaderBurger: React.FC<Props> = ({
    categories,
    hasAuth,
    className,
}) => {
    return (
        <Drawer direction="left">
            <DrawerTrigger className={cn("block md:hidden", className)}>
                <Menu className="text-primary" />
            </DrawerTrigger>
            <DrawerContent>
                <Dialog>
                    <DialogTrigger asChild className="my-5">
                        <Button className="w-3/4 mx-auto">Меню</Button>
                    </DialogTrigger>
                    <DialogContent className="h-full">
                        <div className="h-full overflow-scroll">
                            {categories.map((category) =>
                                category.subcategories?.length > 0 ? (
                                    <div key={category.id}>
                                        <h2>{category.name}</h2>
                                        <div>
                                            {category.subcategories?.map(
                                                (subcategory) => (
                                                    <Link
                                                        href={`/${category.link}/${subcategory.link}`}
                                                        key={subcategory.name}
                                                    >
                                                        <div className="flex flex-col items-center">
                                                            <img
                                                                className="h-[70px]"
                                                                src={
                                                                    subcategory.imageUrl
                                                                }
                                                                alt="icon"
                                                            />
                                                            {subcategory.name}
                                                        </div>
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={category.id}
                                        href={`/${category.link}`}
                                        className={cn("h-12")}
                                    >
                                        {category.name}
                                    </Link>
                                )
                            )}
                        </div>
                    </DialogContent>
                </Dialog>

                {hasAuth && <AuthButton className="mx-auto w-3/4" />}

                <div className="flex flex-col items-center gap-3 my-5">
                    <Button
                        className="flex items-center gap-2 w-3/4"
                        variant="salad"
                    >
                        <Utensils width={18} />
                        <b>Ресторани</b>
                    </Button>

                    <Button
                        className="flex items-center gap-2 w-3/4"
                        variant="salad"
                    >
                        <Coins width={18} />
                        <b>Бонуси</b>
                    </Button>

                    <Button
                        className="flex items-center gap-2 w-3/4"
                        variant="salad"
                    >
                        <Package width={18} />
                        <b>Доставка та оплата</b>
                    </Button>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
