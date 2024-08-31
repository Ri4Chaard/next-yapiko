import { Carousel } from "@/components/shared/carousel/carousel";
import { PopularCategories } from "@/components/shared/popular-categories";

export default function Home() {
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
