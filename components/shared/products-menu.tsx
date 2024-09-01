"use client";

import React from "react";
import { Container } from "./container";
import { Title } from "./title";
import { useParams } from "next/navigation";
import { Filters } from "./filters";

interface Props {
    children: React.ReactNode;
}

export const ProductsMenu: React.FC<Props> = ({ children }) => {
    const { subcategory } = useParams();

    console.log(subcategory);

    return (
        <Container>
            <Title
                text={String(subcategory).toUpperCase()}
                size="xl"
                className="mt-3 font-bold"
            />
            <div className="flex gap-[80px] mt-10">
                <div className="w-[250px]">
                    <Filters />
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </Container>
    );
};
