import { BordersBlock } from "@/components/shared/borders-block";
import { ProfileBonuses } from "@/components/shared/profile/profile-bonuses";
import { ProfileOrders } from "@/components/shared/profile/profile-orders";
import React from "react";

export default function ProfilePage() {
    return (
        <BordersBlock
            title="Мій кабінет"
            className="flex-1 basis-3/4"
            bodyClassName="p-0"
        >
            <ProfileOrders className="mt-5" />

            <ProfileBonuses className="my-5" />
        </BordersBlock>
    );
}
