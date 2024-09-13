import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Next Yapiko | Кошик",
};

export default function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Suspense>
                <Header hasTopbar={false} hasCart={false} />
            </Suspense>

            {children}
        </main>
    );
}
