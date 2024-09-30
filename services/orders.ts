import { Order } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getOrdersByEmail = async (): Promise<Order[]> => {
    return (await axiosInstance.get<Order[]>(ApiRoutes.ORDERS)).data;
};
