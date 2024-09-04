import { Carousel } from "@/components/shared/carousel/carousel";
import { PopularCategories } from "@/components/shared/popular-categories";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: { subcategories: true },
    });

    return (
        <>
            <TopBar categories={categories} />

            <div className="mt-10">
                <Carousel />
            </div>

            <div className="my-10">
                <PopularCategories />
            </div>
        </>
    );
}
