import { Carousel } from "@/components/shared/carousel/carousel";
import { Header } from "@/components/shared/header";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
    return (
        <main>
            <Header />

            <TopBar />

            <Carousel />
        </main>
    );
}
