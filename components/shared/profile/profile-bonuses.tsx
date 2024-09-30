"use client";

import React from "react";
import { Title } from "../title";
import { ProfileBonusesInfo } from "./profile-bonuses-info";
import { cn } from "@/lib/utils";
import { useUserInfo } from "@/hooks/use-user-info";

interface Props {
    className?: string;
}

export const ProfileBonuses: React.FC<Props> = ({ className }) => {
    const { user, loading: loadingUser } = useUserInfo();

    return (
        <div className={cn("px-5", className)}>
            <Title size="xs" text="Мої бонуси" />
            <ProfileBonusesInfo
                className="mt-5"
                user={user!!}
                loading={loadingUser}
            />
        </div>
    );
};
