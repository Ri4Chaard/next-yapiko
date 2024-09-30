import React from "react";
import { Container } from "./container";
import { Title } from "./title";
import { CategoryCard } from "./category-card";

interface Props {
    className?: string;
}

export const PopularCategories: React.FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Title
                text="Популярні категорії"
                size="lg"
                className="text-primary font-bold uppercase text-center sm:text-left"
            />
            <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center items-center">
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] hover:scale-[105%] hover:rotate-1 transition-all col-span-1 sm:col-span-2 md:col-span-3">
                    <CategoryCard
                        href="/pizza/round"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_35_6.webp"
                        name="Кругла піца"
                        price={159}
                    />
                </div>
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] hover:scale-[105%] hover:rotate-1 transition-all col-span-1 sm:col-span-1 md:col-span-2">
                    <CategoryCard
                        href="/hot-dishes/soup"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_37_1.webp"
                        name="Супи"
                        price={99}
                    />
                </div>
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] hover:scale-[105%] hover:rotate-1 transition-all col-span-1 sm:col-span-1 md:col-span-2">
                    <CategoryCard
                        href="/hot-dishes/wok"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/2/-/2-100_31__1.webp"
                        name="WOK"
                        price={129}
                    />
                </div>
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] hover:scale-[105%] hover:rotate-1 transition-all col-span-1 sm:col-span-2 md:col-span-3">
                    <CategoryCard
                        href="/hot-dishes/noodles"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_291_1.webp"
                        name="Пасти"
                        price={175}
                    />
                </div>
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] hover:scale-[105%] hover:rotate-1 transition-all col-span-1 sm:col-span-2 md:col-span-4">
                    <CategoryCard
                        href="/sushi/set"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/6/_/6.webp"
                        name="Сети"
                        price={359}
                    />
                </div>
            </div>
        </Container>
    );
};
