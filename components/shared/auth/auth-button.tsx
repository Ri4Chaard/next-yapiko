import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { CircleUser, House } from "lucide-react";
import { AuthDrawer } from "./auth-drawer";
import { useSession } from "next-auth/react";

interface Props {
    className?: string;
}

export const AuthButton: React.FC<Props> = ({ className }) => {
    const { data: session } = useSession();
    console.log(session);

    if (session) {
        return (
            <Button
                variant="outline"
                className={cn("flex items-center gap-2", className)}
            >
                <CircleUser size={18} />
                Профіль
            </Button>
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
