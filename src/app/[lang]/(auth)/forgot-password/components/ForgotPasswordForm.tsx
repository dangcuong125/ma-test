"use client";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setPhoneNumber } from "../../register/slice";
import { RegisterSchema } from "../../register/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormRegister } from "../../register/interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH } from "@/common/constants/path.constants";
import React from "react";
import { useCheckPhoneExisted } from "../../register/hooks/useCheckPhoneExisted";
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { setOpenOtpModal } from "../../login/reducers/auth.slice";
import { OtpModalType } from "../../login/interface";
import { useSendOtp } from "../../common/hooks/useSendOtp";

const ForgotPasswordForm = () => {
  const registerSchema = RegisterSchema();
  const methods = useForm<IFormRegister>({
    resolver: yupResolver(registerSchema),
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;
  const router = useRouter();
  //   const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { phoneNumber } = useSelector((state) => state.register);
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { refetch: checkUserExisted } = useCheckPhoneExisted({phoneNumber});
  const {mutate, isLoading} = useSendOtp();

  const onSubmit = async (data: IFormRegister) => {
    dispatch(setPhoneNumber(data?.phoneNumber))
    
    try {
      const result = await checkUserExisted();
      if(result?.data?.isExisted) {
        alert("phone number is existed")
      }
      mutate({
        phoneNumber: data?.phoneNumber,
        type: OtpModalType.FORGOT_PASSWORD
      },
        {
          onSuccess: () => {
            dispatch(setOpenOtpModal({
              isOpen: true,
              type: OtpModalType.FORGOT_PASSWORD
            }))
          },
          onError: (error) => {
            alert(error)
          }
        }
      )
    } catch(error) {
      console.log(error)
    }
  };

  const isTyped = watch("phoneNumber");
  return (
    <Card
      sx={{
        width: "30vw",
        p: 3,
        minWidth: "350px",
        mx: "auto",
      }}
    >
    <Typography variant={"h4"} mb={2}>{t("forgot_password")}</Typography>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField
          name="phoneNumber"
          label={t("phoneNumber")}
          placeholder={t("phoneNumber")}
          sx={{
            borderRadius: "8px",
          }}
        />
        <Button
          type="submit"
          disabled={!isTyped}
          variant="contained"
          sx={{
            borderRadius: "24px",
            paddingY: 1,
            boxShadow: 0.5,
            backgroundColor: "#1F8A70",
          }}
          endIcon={
            isLoading || isSubmitting ? (
              <CircularProgress color="inherit" size={"24px"} />
            ) : (
              <Iconify
                icon={"heroicons:arrow-right-20-solid"}
                sx={{ width: "24px" }}
              />
            )
          }
        >
          {t('common:continue')}
        </Button>
      </Stack>
    </FormProvider>
    </Card>
  );
}

export default ForgotPasswordForm;

