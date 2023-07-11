import { useDispatch } from "@/common/redux/store";
import { customerAccumulatePoint } from "../service";
import { useMutation } from "react-query";
import { setAddPointSuccess } from "../slice";

export const useAddPoint = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation(customerAccumulatePoint, {
    onSuccess: (data) => {
      dispatch(setAddPointSuccess(data));
    },
  });

  return { mutate, isLoading };
};
