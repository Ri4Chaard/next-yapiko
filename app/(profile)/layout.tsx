import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Next Yapiko | Мій кабінет",
};

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Suspense>
                <Header hasTopbar={false} hasAuth={false} />
            </Suspense>

            {children}
        </main>
    );
}
