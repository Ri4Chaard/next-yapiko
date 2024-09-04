import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { ProductsMenu } from "@/components/shared/products-menu";

export const metadata: Metadata = {
    title: "Next Yapiko | Продукти",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header />

            {children}
        </main>
    );
}
