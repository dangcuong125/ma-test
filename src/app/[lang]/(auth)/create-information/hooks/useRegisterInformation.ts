import { useMutation } from "react-query";
import { customerRegisterInformation } from "../service";
import { setAccessToken, setIsLoggedIn, setRefreshToken } from "../../login/reducers/auth.slice";
import { useDispatch } from "react-redux";

export const useRegisterInformation = () => {
    const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation(customerRegisterInformation, {
    onSuccess: (data) => {
        if (!data) return;
      const { accessToken, refreshToken } = data;
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setIsLoggedIn(true));
    }
  });

  return { mutate, isLoading };
};
