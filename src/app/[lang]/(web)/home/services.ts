import axiosClient from "@/common/utils/axios";
import { MOCK_DATA } from "./constants";
import { API_CUSTOMER_LOGIN, API_HOME_CONFIG } from "@/common/constants/api.constants";
import { IResHomeConfig } from "./interfaces";

export const getHomeConfig = () => {
  return axiosClient.get<unknown, any>(API_HOME_CONFIG, {
    headers: {
        merchant_id: 13,
    }
  });
};
