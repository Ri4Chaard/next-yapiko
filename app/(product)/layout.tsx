import { Metadata } from "next";
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
    title: "Next Yapiko | Смаколики",
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
