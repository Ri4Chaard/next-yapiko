import { Carousel } from "@/components/shared/carousel/carousel";
import { PopularCategories } from "@/components/shared/popular-categories";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
    return (
        <>
            <div className="mt-10">
                <Carousel />
            </div>

            <div className="my-10">
                <PopularCategories />
            </div>
        </>
    );
}
