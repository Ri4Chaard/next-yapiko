import { Carousel } from "@/components/shared/carousel/carousel";
import { PopularCategories } from "@/components/shared/popular-categories";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
    const slides = [
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1719903379.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1715926436.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1724653076.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1719950246.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1724136750.jpg",
    ];
    return (
        <>
            <div className="mt-10">
                <Carousel slides={slides} />
            </div>

            <div className="my-10">
                <PopularCategories />
            </div>
        </>
    );
}
