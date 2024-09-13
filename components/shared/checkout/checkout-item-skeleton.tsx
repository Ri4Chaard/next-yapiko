import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    className?: string;
}

export const CheckoutItemSkeleton: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn("flex items-center justify-between my-2", className)}
        >
            <div className="flex items-center gap-5 flex-1">
                <Skeleton className="w-[150px] h-[110px] rounded-md" />
                <div>
                    <div className="flex items-center justify-between">
                        <Skeleton className="w-40 h-6" />
                    </div>
                    <Skeleton className="w-10 h-6" />
                </div>
            </div>

            <Skeleton className="w-10 h-6" />

            <div className="flex items-center gap-5 ml-20">
                <Skeleton className="w-24 h-[30px]" />
                <Skeleton className="w-5 h-5" />
            </div>
        </div>
    );
};
