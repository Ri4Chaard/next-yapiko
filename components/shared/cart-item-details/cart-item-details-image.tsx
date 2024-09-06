import { cn } from "@/lib/utils";

interface Props {
    src: string;
    className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
    return (
        <img
            className={cn(
                "w-[170px] h-[130px] rounded-md object-cover",
                className
            )}
            src={src}
        />
    );
};
