import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { ProductsWithRealtions } from "@/@types/prisma";

export const search = async (
    query: string
): Promise<ProductsWithRealtions[]> => {
    return (
        await axiosInstance.get<ProductsWithRealtions[]>(
            ApiRoutes.SEARCH_PRODUCTS,
            {
                params: { query },
            }
        )
    ).data;
};
