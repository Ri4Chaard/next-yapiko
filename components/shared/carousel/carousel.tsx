"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "../container";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import { DotButton, useDotButton } from "./carousel-dot-button";
import { cn } from "@/lib/utils";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductCard } from "../product-card";

interface Props {
    loading?: boolean;
    className?: string;
}

export const Carousel: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    loading,
    className,
}) => {
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

    if (loading) {
        return (
            <div className={className}>
                <Container>
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex items-center justify-center h-[400px]">
                            <LoaderCircle
                                width={30}
                                height={30}
                                className="animate-spin"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 px-8">
                        <div>
                            <Button
                                onClick={scrollPrev}
                                loading={loading}
                                className="w-10 mr-4"
                            >
                                <ChevronLeft width={24} className="absolute" />
                            </Button>
                            <Button
                                onClick={scrollNext}
                                loading={loading}
                                className="w-10"
                            >
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
    }

    return (
        <div className={className}>
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">{children}</div>
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
                                        "bg-primary": index === selectedIndex,
                                    }
                                )}
                            ></div>
                        </DotButton>
                    ))}
                </div>
            </div>
        </div>
    );
};
