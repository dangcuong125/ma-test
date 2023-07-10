import axiosClient from "@/common/utils/axios";
import { IDefaultParams, IListOrderResponse, IOrder } from "./interface";
import { API_CUSTOMER_ORDER } from "@/common/constants/api.constants";

export const getMyOrder = (params: IDefaultParams, pageParams?: number) => {
  const transParams =
    params.statuses === "" || params.statuses === "ALL" || !params.statuses
      ? {
          limit: params.limit,
          page: params.page || pageParams,
        }
      : {
          limit: 3,
          page: pageParams || params.page,
          statuses: params.statuses,
        };
  return axiosClient.get<any, IListOrderResponse>(API_CUSTOMER_ORDER, {
    params: { ...transParams },
  });
};

export const getDetailOrder = (id: number) => {
  return axiosClient.get<any, IOrder>(`${API_CUSTOMER_ORDER}/${id}`);
};
