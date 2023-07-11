import axiosClient from "@/common/utils/axios";
import { IRegisterInformationRequest } from "./interface";
import { API_CUSTOMER_REGISTER } from "@/common/constants/api.constants";
import { IResLogin } from "../login/interface";

export const customerRegisterInformation = (
  data: IRegisterInformationRequest
): Promise<IResLogin> => {
  return axiosClient.post(API_CUSTOMER_REGISTER, data);
};
