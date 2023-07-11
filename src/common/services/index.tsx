import { API_CUSTOMER_CART } from "../constants/api.constants";
import { ICartProductItem } from "../constants/common.interfaces";
import axiosClient from "../utils/axios";

export const getProductCart = () => {
  return axiosClient.get<any, ICartProductItem[]>(API_CUSTOMER_CART);
};
