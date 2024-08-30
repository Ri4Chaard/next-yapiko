"use client";

import React from "react";
import { EmblaCarouselType } from "embla-carousel";
import { AutoplayType } from "embla-carousel-autoplay";

type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined,
    autoplay: AutoplayType | undefined
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const onDotButtonClick = React.useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        autoplay?.reset();
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi
            .on("reInit", onInit)
            .on("reInit", onSelect)
            .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

type PropType = React.ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    );
};
