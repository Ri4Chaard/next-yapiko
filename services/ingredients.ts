import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const getIngredients = async (params: Params): Promise<Ingredient[]> => {
    return (
        await axiosInstance.get<Ingredient[]>("ingredients", {
            params: { params },
        })
    ).data;
};
