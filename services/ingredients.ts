import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./instance";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ApiRoutes } from "./constants";

export const getIngredients = async (params: Params): Promise<Ingredient[]> => {
    return (
        await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS, {
            params: { params },
        })
    ).data;
};
