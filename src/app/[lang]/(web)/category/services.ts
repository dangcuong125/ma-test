import axiosClient from "@/common/utils/axios";
import { MOCK_DATA } from "./constants";
import { API_ADDRESS, API_CUSTOMER_PRODUCT } from "@/common/constants/api.constants";
import { IParamsListProduct, IResProductList } from "./interfaces";

export async function getListCategory(categoryId: number) {
  const res = await fetch(
    `https://api-dev-loyalty-2.bilisoftware.com/api/customer/product?categoryIds=${categoryId}&page=1&limit=20`,
    { headers: { merchant_id: "13" } }
  );
  const projects = await res.json();

  return projects;
}

export async function getProjects(categoryId: number) {
  const res = await fetch(
    `https://api-dev-loyalty-2.bilisoftware.com/api/customer/category/${categoryId}`,
    { headers: { merchant_id: "13" } }
  );
  const projects = await res.json();

  return projects;
}

export const getAllCategory=(params?: IParamsListProduct) => {
    return axiosClient.get<unknown, IResProductList>(API_CUSTOMER_PRODUCT, {params});
}
