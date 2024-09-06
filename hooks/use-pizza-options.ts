import React from "react";
import { PizzaSize, PizzaBorder } from "../constants/pizza";
import { Variant } from "../components/shared/group-variants";
import { useSet } from "react-use";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
    size: PizzaSize;
    border: PizzaBorder;
    selectedIngredients: Set<number>;
    currentItemId?: number;
    setSize: (size: PizzaSize) => void;
    setBorder: (border: PizzaBorder) => void;
    addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
    const [size, setSize] = React.useState<PizzaSize>(32);
    const [border, setBorder] = React.useState<PizzaBorder>(1);
    const [selectedIngredients, { toggle: addIngredient }] = useSet(
        new Set<number>([])
    );

    const currentItemId = items.find(
        (item) => item.pizzaBorder === border && item.pizzaSize === size
    )?.id;

    return {
        size,
        border,
        selectedIngredients,
        currentItemId,
        setSize,
        setBorder,
        addIngredient,
    };
};
