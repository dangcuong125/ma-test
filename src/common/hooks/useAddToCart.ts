import { useMutation, useQueryClient } from "react-query";
import { API_CUSTOMER_CART } from "../constants/api.constants";
import axiosClient from "../utils/axios";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { addToCart } from "../services";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  const variables = useMutation(addToCart, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.CHECKOUT_CART]);
      console.log("Thêm vào giỏ quà thành công.");
    },
    onError(error: Error) {
      console.log(error?.message);
    },
  });

  return {
    ...variables,
  };
};
