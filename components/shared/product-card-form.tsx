import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    loading?: boolean;
    onSubmit?: VoidFunction;
    className?: string;
}

export const ProductCardForm: React.FC<Props> = ({
    imageUrl,
    name,
    description,
    price,
    className,
    onSubmit,
    loading,
}) => {
    return (
        <div className={cn("relative w-[450px]", className)}>
            <Link href={`/${name}`}>
                <img src={imageUrl} alt={name} className="rounded-md" />
            </Link>
            <div className="absolute w-full flex items-center justify-between bottom-4 px-4 font-semibold">
                <Link href={`/${name}`}>
                    <Title
                        text={name}
                        size="sm"
                        className="hover:text-salad transition-colors text-white"
                    />
                </Link>
                <div className="flex flex-col">
                    <span className="self-end text-white/70">
                        {description}
                    </span>
                    <div className="flex items-center justify-between">
                        <span className="text-[22px] mr-2 text-white">
                            {price}₴
                        </span>
                        <Button
                            onClick={() => onSubmit?.()}
                            variant="salad"
                            className="w-[30px] p-0 h-[30px] flex items-center justify-center rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                            loading={loading}
                        >
                            <Plus />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
