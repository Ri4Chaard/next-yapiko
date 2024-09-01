import { Container } from "@/components/shared/container";
import { ProductCard } from "@/components/shared/product-card";
import { Title } from "@/components/shared/title";

export default function BurgerPage() {
    const cards = [
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
        {
            name: "Суші бургер з лососем",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_389_1.jpg",
            description: "330г",
            price: 299,
        },
    ];
    return (
        <div className="grid grid-cols-2 gap-[50px] mb-10">
            {cards.map((card) => (
                <ProductCard
                    imageUrl={card.imageUrl}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                />
            ))}
        </div>
    );
}
