import { ProductCard } from "@/components/shared/product-card";

export default function SushiPage() {
    const cards = [
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
        },
        {
            name: "Рол філадельфія з тунцем та панко",
            imageUrl:
                "https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/_/4/_4-100_3.webp",
            description: "245г 8 шт",
            price: 145,
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
