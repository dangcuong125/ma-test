import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "../constants/queryKeys.constant";
import { addToCart } from "../services";
import useShowSnackbar from "./useMessage";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const variables = useMutation(addToCart, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.CHECKOUT_CART]);
      showSuccessSnackbar("Thêm vào giỏ quà thành công");
    },
    onError(error: Error) {
      showErrorSnackbar(error?.message || "Thêm vào giỏ quà thất bại");
    },
  });

  return {
    ...variables,
  };
};
