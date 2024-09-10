import { prisma } from "@/prisma/prisma-client";

export const getRecomendations = async () => {
    const beer = await prisma.product.findMany({
        where: { subcategoryLink: "beer" },
        include: { items: true },
    });
    const nonAlcohol = await prisma.product.findMany({
        where: { subcategoryLink: "non-alcohol" },
        include: { items: true },
    });
    // const sauce = await prisma.product.findMany({
    //     where: { subcategoryLink: "sauce" },
    //     include: { items: true },
    // });

    const recomendations = [
        beer[Math.floor(Math.random() * beer.length)],
        nonAlcohol[Math.floor(Math.random() * nonAlcohol.length)],
        // sauce[Math.floor(Math.random() * sauce.length)],
    ];

    return recomendations;
};
