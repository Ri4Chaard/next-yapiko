import { Carousel } from "@/components/shared/carousel/carousel";
import { Header } from "@/components/shared/header";
import { PopularCategories } from "@/components/shared/popular-categories";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
    return (
        <main>
            <Header />

            <TopBar />
            <div className="mt-10">
                <Carousel />
            </div>

            <div className="my-10">
                <PopularCategories />
            </div>
        </main>
    );
}
