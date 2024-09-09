import React from "react";
import { cn } from "@/lib/utils";
import { getRecomendations } from "@/lib/get-recomendations";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
    className?: string;
}

export const Recomendations: React.FC<Props> = async ({ className }) => {
    const recomendations = await getRecomendations();

    return (
        <div className={cn("", className)}>
            <h2 className="text-2xl bg-primary rounded-t-md p-3 font-bold text-primary-foreground">
                Разом смакує
            </h2>
            <div className="gap-3 border-x border-b border-primary py-2 rounded-b-md">
                {recomendations.map((recomendation) => (
                    <div className="flex items-center px-3 my-2 hover:bg-primary/10 ">
                        <Link
                            key={recomendation.id}
                            href={`/product/${recomendation.id}`}
                            className="flex items-center justify-between pr-3 w-full gap-3"
                        >
                            <img
                                className="rounded-md w-56 h-36 object-cover"
                                src={recomendation.imageUrl}
                                alt={recomendation.name}
                            />
                            <span className="flex-1">{recomendation.name}</span>
                            <p>
                                <span className="font-bold">
                                    {recomendation.items[0].price}
                                    ₴/
                                </span>
                                {
                                    recomendation.items[0].description.split(
                                        " "
                                    )[0]
                                }
                            </p>
                        </Link>
                        <Button
                            // onClick={() => onSubmit?.()}
                            variant="salad"
                            className="w-[30px] p-0 h-[30px] rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
                            // loading={loading}
                        >
                            <Plus />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
