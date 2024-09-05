import { Category } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Category[]> => {
    return (await axiosInstance.get<Category[]>(ApiRoutes.CATEGORIES)).data;
};
