import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    href: string;
    image: string;
    name: string;
    price: number;
    className?: string;
}

export const CategoryCard: React.FC<Props> = ({
    href,
    image,
    name,
    price,
    className,
}) => {
    return (
        <Link href={href} className={cn("relative", className)}>
            <img
                className="w-full h-full object-cover rounded-lg"
                src={image}
                alt="category image"
            />
            <div className="absolute bottom-4 left-6">
                <h2 className="text-white font-bold text-3xl">{name}</h2>
                <p className="text-white/50 text-xl">від {price}₴</p>
            </div>
        </Link>
    );
};
