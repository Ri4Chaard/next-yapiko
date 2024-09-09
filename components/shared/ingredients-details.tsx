import React from "react";
import { cn } from "@/lib/utils";
import { Ingredient } from "@prisma/client";

interface Props {
    ingredients: Ingredient[];
    className?: string;
}

export const IngredientsDetails: React.FC<Props> = ({
    ingredients,
    className,
}) => {
    return (
        <div className={cn("", className)}>
            <h2 className="text-2xl bg-primary rounded-t-md p-3 font-bold text-primary-foreground">
                Склад
            </h2>
            <div className="grid grid-cols-3 gap-3 border-x border-b border-primary rounded-b-md">
                {ingredients.map((ingredient) => (
                    <div className="flex flex-col items-center">
                        <img
                            src={ingredient.imageUrl}
                            width={84}
                            alt={ingredient.name}
                        />
                        <p className="lowercase">{ingredient.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
