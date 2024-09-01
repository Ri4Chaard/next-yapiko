import { PizzaCard } from "@/components/shared/pizza-card";

export default function PizzaPage() {
    const pizzas = [
        {
            name: "Піца 4 сири з куркою та ананасами",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/5/-/5-100_15_.webp",
            description: "580г",
            price: 219,
        },
        {
            name: "Піца кватерона",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_35_6.webp",
            description: "540г",
            price: 219,
        },
        {
            name: "Піца 4 сири з куркою та ананасами",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/5/-/5-100_15_.webp",
            description: "580г",
            price: 219,
        },
        {
            name: "Піца кватерона",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_35_6.webp",
            description: "540г",
            price: 219,
        },
        {
            name: "Піца 4 сири з куркою та ананасами",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/5/-/5-100_15_.webp",
            description: "580г",
            price: 219,
        },
        {
            name: "Піца кватерона",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_35_6.webp",
            description: "540г",
            price: 219,
        },
        {
            name: "Піца 4 сири з куркою та ананасами",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/5/-/5-100_15_.webp",
            description: "580г",
            price: 219,
        },
        {
            name: "Піца кватерона",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_35_6.webp",
            description: "540г",
            price: 219,
        },
    ];
    return (
        <div className="grid grid-cols-2 gap-[50px] mb-10">
            {pizzas.map((pizza) => (
                <PizzaCard
                    name={pizza.name}
                    imageUrl={pizza.imageUrl}
                    description={pizza.description}
                    price={pizza.price}
                />
            ))}
        </div>
    );
}
