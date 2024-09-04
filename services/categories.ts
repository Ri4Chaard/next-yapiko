import { Category } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getAll = async () => {
    return (await axiosInstance.get<Category>("/categories")).data;
};
