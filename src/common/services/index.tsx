import { API_CUSTOMER_CART } from "../constants/api.constants";
import {
  ICartDataSubmit,
  ICartProductItem,
} from "../constants/common.interfaces";
import axiosClient from "../utils/axios";

export const getProductCart = () => {
  return axiosClient.get<any, ICartProductItem[]>(API_CUSTOMER_CART);
};

export const addToCart = async (data: ICartDataSubmit) => {
  return axiosClient.post(API_CUSTOMER_CART, data);
};
