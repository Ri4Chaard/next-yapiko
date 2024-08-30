import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

interface Props {
    className?: string;
}

export const SearchBar: React.FC<Props> = ({ className }) => {
    // const [active, setActive] = React.useState(false);
    return (
        <>
            <div
                // onClick={() => setActive(!active)}
                className={cn(
                    "relative flex items-center w-[53px] h-12 bg-secondary rounded-r-lg transition-all cursor-pointer",
                    // { "w-[500px] bg-white": active },
                    className
                )}
            >
                <Search width={24} className="absolute left-2 text-primary" />
                {/* {active && (
                    <Input className="ml-10" placeholder="Пошук страви..." />
                )} */}
            </div>
        </>
    );
};
