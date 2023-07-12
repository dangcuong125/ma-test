import axiosClient from "@/common/utils/axios";
import { MOCK_DATA } from "../category/constants";
import { API_ADDRESS, API_CUSTOMER_PRODUCT } from "@/common/constants/api.constants";
import { IProductItems } from "../category/interfaces";

export const getProductDetail = ( id: number) => {
    return axiosClient.get<unknown, IProductItems>(`${API_CUSTOMER_PRODUCT}/${id}`);
  };