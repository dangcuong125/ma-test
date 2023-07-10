import { useMutation } from "react-query";
import { loginCustomer } from "../service";
import { dispatch } from "@/common/redux/store";
import {
  setAccessToken,
  setIsLoggedIn,
  setRefreshToken,
} from "../reducers/auth.slice";

export const useLogin = () => {
  const { mutate, isLoading } = useMutation(loginCustomer, {
    onSuccess: (data) => {
      if (!data) return;
      const { accessToken, refreshToken } = data;
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsLoggedIn(true));
    },
  });
  return { mutate, isLoading };
};
