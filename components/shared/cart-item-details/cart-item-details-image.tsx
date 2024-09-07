import { cn } from "@/lib/utils";

interface Props {
    src: string;
    className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
    return (
        <img
            className={cn(
                "w-[150px] h-[110px] rounded-md object-cover",
                className
            )}
            src={src}
        />
    );
};
