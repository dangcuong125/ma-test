import axios from "axios";
// config

import { store } from "../redux/store";
import { BASE_URL_API } from "../constants/config.constant";

// ----------------------------------------------------------------------

const axiosClient = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error: any) => {
    return Promise.reject(error?.response?.data);
  }
);
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
  };
});
export default axiosClient;
