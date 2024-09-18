import { BordersBlock } from "@/components/shared/borders-block";
import { ProfileOrdersList } from "@/components/shared/profile/profile-orders-list";
import { prisma } from "@/prisma/prisma-client";

export default async function ProfilePage() {
    const orders = await prisma.order.findMany({
        where: {
            email: "yarik271202@gmail.com",
        },
    });

    return (
        <BordersBlock title="Мій кабінет" className="flex-1 basis-3/4">
            <ProfileOrdersList orders={orders} />
        </BordersBlock>
    );
}
