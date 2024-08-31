"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "../container";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DotButton, useDotButton } from "./carousel-dot-button";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Carousel: React.FC<Props> = ({ className }) => {
    const slides = [
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1719903379.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1715926436.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1724653076.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1719950246.jpg",
        "https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1724136750.jpg",
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000 }),
    ]);

    const autoplay = emblaApi?.plugins().autoplay;

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            autoplay?.reset();
        }
    }, [emblaApi, autoplay]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            autoplay?.reset();
        }
    }, [emblaApi, autoplay]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        autoplay
    );

    return (
        <div className={className}>
            <Container>
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div
                                className="flex items-center justify-center rounded-md flex-shrink-0 flex-grow-0 basis-[80%] h-[400px]"
                                key={index}
                            >
                                <img
                                    className="rounded-md border-[14px] border-secondary w-[90%]"
                                    src={slide}
                                    key={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between pt-6 px-8">
                    <div>
                        <Button onClick={scrollPrev} className="w-10 mr-4">
                            <ChevronLeft width={24} className="absolute" />
                        </Button>
                        <Button onClick={scrollNext} className="w-10">
                            <ChevronRight width={24} className="absolute" />
                        </Button>
                    </div>
                    <div className="flex gap-4">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                            >
                                <div
                                    className={cn(
                                        "w-5 h-5 border-2 border-primary rounded-full",
                                        {
                                            "bg-primary":
                                                index === selectedIndex,
                                        }
                                    )}
                                ></div>
                            </DotButton>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};
