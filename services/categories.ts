import { Category } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getAll = async (): Promise<Category[]> => {
    return (await axiosInstance.get<Category[]>("categories")).data;
};
