export const mapPizzaSize = {
    32: "32 см",
    42: "42 см",
} as const;

export const mapPizzaBorder = {
    1: "Борт-Без начинки",
    2: "Сирний бортик",
    3: "М'ясний бортик",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
    name,
    value,
}));
export const pizzaBorders = Object.entries(mapPizzaBorder).map(
    ([value, name]) => ({
        name,
        value,
    })
);

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaBorder = keyof typeof mapPizzaBorder;
