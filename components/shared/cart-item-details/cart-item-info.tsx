import { cn } from "@/lib/utils";

interface Props {
    name: string;
    details: string;
    description: string;
    className?: string;
}

export const CartItemInfo: React.FC<Props> = ({
    name,
    details,
    description,
    className,
}) => {
    return (
        <div>
            <div className={cn("flex items-center justify-between", className)}>
                <h2 className="font-bold flex-1 leading-6">{name}</h2>
            </div>
            <p>{description}</p>
            {details.length > 0 && (
                <p className="text-xs text-gray-400 w-[90%]">{details}</p>
            )}
        </div>
    );
};
