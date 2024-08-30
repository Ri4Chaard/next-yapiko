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
                className="text-primary font-bold uppercase"
            />
            <div className="mt-5 grid grid-cols-7 gap-10 justify-items-center items-center ">
                <div className="w-full h-[350px] col-span-3">
                    <CategoryCard
                        href="/pizza"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_35_6.webp"
                        name="Кругла піца"
                        price={159}
                    />
                </div>
                <div className="w-full h-[350px] col-span-2">
                    <CategoryCard
                        href="/soup"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_37_1.webp"
                        name="Супи"
                        price={99}
                    />
                </div>
                <div className="w-full h-[350px] col-span-2">
                    <CategoryCard
                        href="/soup"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/2/-/2-100_31__1.webp"
                        name="WOK"
                        price={129}
                    />
                </div>
                <div className="w-full h-[350px] col-span-3">
                    <CategoryCard
                        href="/pasta"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/f/i/file_291_1.webp"
                        name="Пасти"
                        price={175}
                    />
                </div>
                <div className="w-full h-[350px] col-span-4">
                    <CategoryCard
                        href="/set"
                        image="https://yapiko.com.ua/media/catalog/product/cache/eef5449ab1be0e676ed6197c8f656f61/6/_/6.webp"
                        name="Сети"
                        price={359}
                    />
                </div>
            </div>
        </Container>
    );
};
