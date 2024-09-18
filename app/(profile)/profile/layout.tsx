import { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { ProfileSidebar } from "@/components/shared/profile/profile-sidebar";

export default function ProfilePageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container className="mt-8 flex gap-28">
            <ProfileSidebar className="flex-1 basis-1/4" />

            {children}
        </Container>
    );
}
