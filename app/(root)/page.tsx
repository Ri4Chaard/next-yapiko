import { Carousel } from "@/components/shared/carousel/carousel";
import { Container } from "@/components/shared/container";
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
            <div className="mt-4 sm:mt-10">
                <Container>
                    <Carousel>
                        {slides.map((slide, index) => (
                            <div
                                className="flex items-center justify-center rounded-md flex-shrink-0 flex-grow-0 basis-full sm:basis-[80%]"
                                key={index}
                            >
                                <img
                                    className="rounded-md border-[8px] sm:border-[14px] border-secondary w-full sm:w-[90%]"
                                    src={slide}
                                    key={index}
                                />
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </div>

            <div className="my-6 sm:my-10">
                <PopularCategories />
            </div>
        </>
    );
}
