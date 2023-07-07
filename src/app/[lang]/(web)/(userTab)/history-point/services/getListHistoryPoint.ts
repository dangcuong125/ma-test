import axiosClient from "@/common/utils/axios";
import { IHistoryPoint } from "../interfaces/interface";
import { DataHistoryPoint } from "../constants/constants";

export const getListHistory = () => {
  // return axiosClient.get<any, Array<IHistoryPoint>>("api");
  return new Promise<Array<IHistoryPoint>>((resolve, reject) => {
    setTimeout(() => resolve(DataHistoryPoint), 5000);
  });
};
