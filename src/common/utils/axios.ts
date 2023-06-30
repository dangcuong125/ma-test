import axios from "axios";
// config

import { store } from "../redux/store";
import { BASE_URL_API, accessTokenExpiredStatusCode, unAuthorizedStatusCode } from "../constants/config.constant";
import { MERCHANT_ID } from "../config";
import { API_REFRESH_TOKEN } from "../constants/api.constants";
import { resetToken, setAccessToken, setIsExpiredToken } from "@/app/[lang]/(auth)/login/reducers/auth.slice";

// ----------------------------------------------------------------------

const axiosClient = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
    common: {
      merchant_id: MERCHANT_ID,
      lang: 'vi',
    },
  },
});

const axiosClient2 = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'Application/json',
    common: {
      merchant_id: MERCHANT_ID,
      lang: 'vi',
    },
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error: any) => {
    const { response, config: originalRequest } = error;
    let isAccessTokenExpired = response?.data?.subCode === accessTokenExpiredStatusCode;
    let is401 = response?.status === unAuthorizedStatusCode;

    const { refreshToken, accessToken } = store?.getState().authLogin;

    if (is401 && isAccessTokenExpired) {
      return new Promise(function (resolve, reject) {
        axiosClient2.defaults.headers.common.Authorization = accessToken;
        axiosClient2
          .post(API_REFRESH_TOKEN, { refreshToken })
          .then(async ({ data }) => {
            const newAccessToken = `Bearer ${data?.accessToken}`;
            axiosClient.defaults.headers.common.Authorization = newAccessToken;
            originalRequest.headers.Authorization = newAccessToken;
            store?.dispatch(setAccessToken(data?.accessToken));
            resolve(axiosClient(originalRequest));
          })
          .catch(async (error) => {
            store?.dispatch(resetToken());
            store?.dispatch(setIsExpiredToken(true));
            reject(error?.response?.data);
          });
      });
    } else {
      return Promise.reject(error?.response?.data);
    }
  }
);
axiosClient.interceptors.request.use(async (config) => {
  const token = store?.getState().authLogin.accessToken;

  if (token) {
    try {
      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.log(e);
    }
  }
  return {
    ...config,
  };
});
export default axiosClient;
