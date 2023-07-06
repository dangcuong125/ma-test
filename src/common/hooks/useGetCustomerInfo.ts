import { useQuery } from "react-query";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { API_CUSTOMER_PROFILE } from "../constants/api.constants";

export function useGetCustomerInfo(isLoggedIn: boolean) {
  return {
    ...useQuery([QUERY_KEYS.CUSTOMER_PROFILE], getCustomerInfo, {
      enabled: isLoggedIn,
      staleTime: 5000,
      cacheTime: 0, // cacheTime bằng 0 để đảm bảo kết quả mới nhất sẽ được tải lại từ máy chủ
    }),
  };
}

export const getCustomerInfo = (): Promise<any> => {
  return fetch(API_CUSTOMER_PROFILE)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to get customer info");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
