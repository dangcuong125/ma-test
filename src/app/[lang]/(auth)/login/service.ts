import { API_CUSTOMER_LOGIN } from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { IFormLogin, IResLogin } from "./interface";


export const loginCustomer = (data: IFormLogin) => {
    return axiosClient.post<any, IResLogin>(API_CUSTOMER_LOGIN, data);
}