import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";

interface Props extends React.PropsWithChildren {
    title: string;
    endAdornment?: React.ReactNode;
    className?: string;
}

export const BordersBlock: React.FC<Props> = ({
    children,
    title,
    endAdornment,
    className,
}) => {
    return (
        <div
            className={cn(
                "bg-white rounded-md border border-secondary w-full",
                className
            )}
        >
            <div className="flex items-center p-5 border-b border-b-secondary">
                {endAdornment}
                <Title text={title} className="font-extrabold text-2xl" />
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
};
