"use client";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { setPhoneNumber } from "../slice";
import { RegisterSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormRegister } from "../interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH } from "@/common/constants/path.constants";
import React from "react";
import { useCheckPhoneExisted } from "../hooks/useCheckPhoneExisted";
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { setOpenOtpModal } from "../../login/reducers/auth.slice";
import { OtpModalType } from "../../login/interface";

const RegisterForm = () => {
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
  const { isShowPassword } = useSelector((state) => state.login);
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useCheckPhoneExisted();

  const onSubmit = (data: IFormRegister) => {
    dispatch(setPhoneNumber(data?.phoneNumber))
    dispatch(setOpenOtpModal({
      isOpen: true,
      type: OtpModalType.REGISTER
    }));
    // mutate(data, {
    //   onError: (error: any) => {
    //     // showErrorSnackbar(error?.message);
    //   },
    // });
  };

  const isTyped = watch("phoneNumber");
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("register")}</Typography>
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
  );
}

export default RegisterForm;

