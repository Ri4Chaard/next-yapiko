"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CheckboxFilterGroup } from "./checkbox-filter-group";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { FilterChecboxProps } from "./filter-checkbox";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    // const { ingredients, loading } = useIngredients();
    // const filters = useFilters();

    // useQueryFilters(filters);

    // const items = ingredients.map((item) => ({
    //     value: String(item.id),
    //     text: item.name,
    // }));
    // const updatePrices = (prices: number[]) => {
    //     console.log(prices, 999);

    //     filters.setPrices("priceFrom", prices[0]);
    //     filters.setPrices("priceTo", prices[1]);
    // };

    const items: FilterChecboxProps[] = [
        { text: "Запечені", value: "1" },
        { text: "Royal", value: "1" },
        { text: "Дракони", value: "1" },
        { text: "Макі", value: "1" },
        { text: "З сиром філадельфія", value: "1" },
        { text: "З лососем", value: "1" },
        { text: "З креветкою", value: "1" },
        { text: "З вугром", value: "1" },
        { text: "З тунцем", value: "1" },
        { text: "З тунцем", value: "1" },
        { text: "З тунцем", value: "1" },
        { text: "З тунцем", value: "1" },
        { text: "З тунцем", value: "1" },
    ];

    return (
        <div className={cn("sticky top-[100px]", className)}>
            <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

            {/* Price filter */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ціна від та до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        // value={String(filters.prices.priceFrom)}
                        // onChange={(e) =>
                        //     filters.setPrices(
                        //         "priceFrom",
                        //         Number(e.target.value)
                        //     )
                        // }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        // value={String(filters.prices.priceTo)}
                        // onChange={(e) =>
                        //     filters.setPrices("priceTo", Number(e.target.value))
                        // }
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[0, 1000]}
                    // onValueChange={updatePrices}
                />
            </div>
            <CheckboxFilterGroup
                title="Інгредієнти"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                // loading={loading}
                // onClickCheckbox={filters.setSelectedIngredients}
                // selected={filters.selectedIngredients}
            />
        </div>
    );
};
