import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { House, User } from "lucide-react";
import { AuthDrawer } from "./auth-drawer";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
    className?: string;
}

export const AuthButton: React.FC<Props> = ({ className }) => {
    const { data: session } = useSession();

    if (session) {
        return (
            <Link
                href="/profile"
                className={cn("flex items-center gap-2", className)}
            >
                <Button
                    variant="outline"
                    className="flex w-full items-center gap-2"
                >
                    <User size={18} />
                    Профіль
                </Button>
            </Link>
        );
    }
    return (
        <AuthDrawer>
            <Button className={cn("flex items-center gap-2", className)}>
                <House width={18} />
                <b>Увійти</b>
            </Button>
        </AuthDrawer>
    );
};
