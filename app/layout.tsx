import { Providers } from "@/components/shared/providers";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link data-rh="true" rel="icon" href="/logo.png" />
            </head>
            <body className={nunito.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
