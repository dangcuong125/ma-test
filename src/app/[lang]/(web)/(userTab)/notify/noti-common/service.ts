import axiosClient from "@/common/utils/axios";
import { INotiList, IParamsNotiList } from "./interface";
import { API_NOTIFY } from "@/common/constants/api.constants";

export const getNotiList = (params: IParamsNotiList) => {
  return axiosClient.get<any, INotiList>(API_NOTIFY, { params });
};

export const getCountUnread = async (): Promise<number> => {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4MCwiaWF0IjoxNjg4NTMwNDM2LCJleHAiOjE2ODg1NjY0MzZ9.VjULStOhxErg3vimRedqiHiZNRZkvVUScDHgamNkNVs",
  };
  const response = await fetch(
    "https://api-dev-loyalty-2.bilisoftware.com/api/customer/user-noti/count-unread",
    { headers }
  );
  return response.json();
};
