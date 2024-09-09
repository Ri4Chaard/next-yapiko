import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { ProductWithRelations } from "@/@types/prisma";

export const search = async (
    query: string
): Promise<ProductWithRelations[]> => {
    return (
        await axiosInstance.get<ProductWithRelations[]>(
            ApiRoutes.SEARCH_PRODUCTS,
            {
                params: { query },
            }
        )
    ).data;
};

export const getRecomendations = async (params: {
    category: string;
}): Promise<ProductWithRelations[]> => {
    return (
        await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.PRODUCTS, {
            params,
        })
    ).data;
};
