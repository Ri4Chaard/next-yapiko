import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Plus } from "lucide-react";
import Link from "next/link";

interface Props {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({
    imageUrl,
    name,
    description,
    price,
    className,
}) => {
    return (
        <div className={cn("relative w-[450px]", className)}>
            <Link href={`/${name}`}>
                <img src={imageUrl} alt={name} className="rounded-md" />
            </Link>
            <div className="absolute w-full flex items-center justify-between bottom-4 px-4 font-semibold text-white">
                <Link href={`/${name}`}>
                    <Title
                        text={name}
                        size="sm"
                        className="hover:text-salad transition-colors"
                    />
                </Link>
                <div className="flex flex-col">
                    <span className="self-end text-white/70">
                        {description}
                    </span>
                    <div className="flex items-center justify-between">
                        <span className="text-[22px] mr-2">{price}₴</span>
                        <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-salad text-black transition-colors hover:bg-primary hover:text-primary-foreground">
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
