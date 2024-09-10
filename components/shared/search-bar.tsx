"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useClickAway, useDebounce } from "react-use";
import { Product } from "@prisma/client";
import { Api } from "@/services/api-client";
import Link from "next/link";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    className?: string;
}

export const SearchBar: React.FC<Props> = ({ className }) => {
    const [active, setActive] = React.useState(false);

    const [searchQuery, setSearchQuery] = React.useState("");
    const [focused, setFocused] = React.useState(false);
    const [products, setProducts] = React.useState<ProductWithRelations[]>([]);
    const ref = React.useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
        setActive(false);
    });

    useDebounce(
        async () => {
            try {
                const response = await Api.products.search(searchQuery);
                setProducts(response);
            } catch (e) {
                console.log(e);
            }
        },
        250,
        [searchQuery, active]
    );

    const onClickItem = () => {
        setActive(false);
        setFocused(false);
        setSearchQuery("");
        setProducts([]);
    };
    return (
        <>
            {focused && (
                <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>
            )}
            <div
                className={cn(
                    "relative flex items-center w-[53px] h-12 bg-secondary rounded-r-lg transition-all z-30",
                    { "w-[600px] bg-white": active },
                    className
                )}
                ref={ref}
            >
                <div
                    className="absolute flex items-center h-12 cursor-pointer"
                    onClick={() => {
                        setActive(!active);
                        setFocused(!focused);
                        setActive(!active);
                    }}
                >
                    <Search width={24} className="ml-2 text-primary" />
                </div>
                {active && (
                    <Input
                        className="pl-10 flex-1 h-12 rounded-l-none"
                        placeholder="Пошук страви..."
                        onFocus={() => setFocused(true)}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                )}
                {products.length > 0 && (
                    <div
                        className={cn(
                            "absolute w-full bg-white rounded-xl py-2 overflow-hidden top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
                            focused &&
                                "visible opacity-100 top-14 overflow-auto"
                        )}
                    >
                        {products.map((product) => (
                            <Link
                                onClick={onClickItem}
                                key={product.id}
                                href={`/product/${product.id}`}
                                className="flex justify-between items-center gap-3 w-full px-3 my-2 hover:bg-primary/10"
                            >
                                <img
                                    className="rounded-sm w-24 h-14 object-cover"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                                <span className="flex-1">{product.name}</span>
                                <p>
                                    <span className="font-bold">
                                        {product.items[0].price}₴/
                                    </span>
                                    {product.items[0].description.split(" ")[0]}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
