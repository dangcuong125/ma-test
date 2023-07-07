import { API_CUSTOMER_PROFILE } from "@/common/constants/api.constants";
import { IEditCustomerForm } from "../interfaces/customer-profile.interface";
import axiosClient from "@/common/utils/axios";

export const editCustomerProfile = async (data: IEditCustomerForm) =>
  axiosClient.put(API_CUSTOMER_PROFILE, data);
