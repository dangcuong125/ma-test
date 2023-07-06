import { useMutation, useQueryClient } from "react-query";
import { IDataPostOrder } from "../interface";
import { addNewOrder } from "../services";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

export const useAddOrder = (
  handleSuccess?: () => void,
  handleError?: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation(addNewOrder, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEYS.CHECKOUT_CART]);
      handleSuccess && handleSuccess();
    },
    onError() {
      handleError && handleError();
    },
  });
};
