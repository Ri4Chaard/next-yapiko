import { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { TopBar } from "@/components/shared/top-bar";
import { Suspense } from "react";
import { prisma } from "@/prisma/prisma-client";

export const metadata: Metadata = {
    title: "Next Yapiko | Головна",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const categories = await prisma.category.findMany({
        include: { subcategories: true },
    });
    return (
        <main className="min-h-screen">
            <Suspense>
                <Header categories={categories} />
            </Suspense>

            {children}
        </main>
    );
}
