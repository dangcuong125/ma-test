import { useMutation } from "react-query";

export const useCheckPhoneExisted = () => {
  const { isLoading, mutate } = useMutation('asd');

  return { mutate, isLoading };
};
