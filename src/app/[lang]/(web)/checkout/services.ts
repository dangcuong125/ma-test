import { BASE_URL_API } from "@/common/constants/config.constant";

import {
  ICartItem,
  IOrderShippingResponse,
  IParamsSearchProvince,
  IParamsUpdateCartItem,
  IProvinceResponses,
  IResCheckoutCart,
} from "./interface";
import axiosClient from "@/common/utils/axios";
import {
  API_CHECKOUT_CART,
  API_ORDER_SHIPPING,
  API_PROVINCE_CUSTOMER,
} from "@/common/constants/api.constants";

export const getProductCart = () => {
  return axiosClient.get<any, IResCheckoutCart>(API_CHECKOUT_CART);
};

export const deleteCartItem = async (params: {
  productToVariantIds: number[];
}) => {
  return axiosClient.delete(API_CHECKOUT_CART, {
    data: params,
  });
};

export const updateCartItem = async (data: IParamsUpdateCartItem) => {
  return axiosClient.put(API_CHECKOUT_CART, data);
};

export const getListUserAddress = async (params: {
  page: number;
  limit: number;
}) => {
  return axiosClient.get<any, IOrderShippingResponse>(API_ORDER_SHIPPING, {
    params,
  });
};

export const getDataProvince = async (
  page: number,
  params: IParamsSearchProvince
) => {
  params.page = page;
  if (params.searchText === "") {
    delete params.searchText;
  }

  if (params.parentId === 0) {
    delete params.parentId;
  }

  return axiosClient.get<any, IProvinceResponses>(API_PROVINCE_CUSTOMER, {
    params,
  });
};
