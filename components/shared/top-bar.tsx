import React from "react";
import { Container } from "./container";

import { SearchBar } from "./search-bar";
import { CategoriesWithRelations } from "@/@types/prisma";
import { Categories } from "./categories";
import { cn } from "@/lib/utils";

interface Props {
    categories: CategoriesWithRelations[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
    return (
        <div
            className={cn(
                "bg-white pt-5 pb-2 shadow-lg shadow-black/5",
                className
            )}
        >
            <Container className="flex items-center justify-between bg-primary rounded-full">
                <Categories categories={categories} />

                <SearchBar />
            </Container>
        </div>
    );
};
