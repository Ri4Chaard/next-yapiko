import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Suspense } from "react";

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
            <Suspense>
                <Header />
            </Suspense>

            {children}
        </main>
    );
}
