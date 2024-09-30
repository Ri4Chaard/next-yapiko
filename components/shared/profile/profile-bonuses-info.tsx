import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { Coins, Percent } from "lucide-react";
import { User } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    user: User;
    loading?: boolean;
    className?: string;
}

export const ProfileBonusesInfo: React.FC<Props> = ({
    user,
    loading,
    className,
}) => {
    if (loading) {
        return <Skeleton className={cn("w-[500px] h-[144px]", className)} />;
    }
    return (
        <div
            className={cn(
                "w-[500px] flex justify-around rounded-md bg-secondary p-4",
                className
            )}
        >
            <div className="flex flex-col border-r border-primary basis-1/2 mr-3">
                <div className="flex items-center text-primary">
                    <h2 className="mr-1 text-4xl font-bold">
                        {user?.bonusPoints}
                    </h2>
                    <Coins strokeWidth={2} className="flex" />
                </div>
                <p>Які можна витратити, щоб оплатити замовлення</p>
            </div>
            <div className="flex flex-col basis-1/2">
                <div className="flex items-center text-primary">
                    <h2 className="mr-1 text-4xl font-bold">5</h2>
                    <Percent strokeWidth={2} className="flex" />
                </div>
                <p>Від суми замовлення повертається на твій бонусний рахунок</p>
            </div>
        </div>
    );
};
