import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { TopBar } from "@/components/shared/top-bar";
import { ProductsMenu } from "@/components/shared/products-menu";

export const metadata: Metadata = {
    title: "Next Yapiko | Головна",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header />
            <TopBar />

            <ProductsMenu>{children}</ProductsMenu>
        </main>
    );
}
