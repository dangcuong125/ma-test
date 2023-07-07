import { useQuery } from "react-query";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { API_CUSTOMER_PROFILE } from "../constants/api.constants";
import { ICustomerProfileResponse } from "../@types/profile";
import axiosClient from "../utils/axios";

export function useGetCustomerInfo(isLoggedIn?: boolean) {
  return {
    ...useQuery([QUERY_KEYS.CUSTOMER_PROFILE], getCustomerInfo, {
      enabled: isLoggedIn,
      staleTime: 5000,
      cacheTime: 0, // cacheTime bằng 0 để đảm bảo kết quả mới nhất sẽ được tải lại từ máy chủ
    }),
  };
}

export const getCustomerInfo = (): Promise<ICustomerProfileResponse> => {
  return axiosClient.get(API_CUSTOMER_PROFILE);
};
