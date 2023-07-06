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
import { setShowPassword } from "../reducers/login.slice";
import { LoginSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormLogin } from "../interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH } from "@/common/constants/path.constants";
import React from "react";
import { useLogin } from "../hooks/useLogin";
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { TLink } from "@/common/components/TLink";

export default function LoginForm() {
  const loginSchema = LoginSchema();

  const methods = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
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
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useLogin();

  const onSubmit = (data: IFormLogin) => {
    mutate(data, {
      onError: (error: any) => {
        // showErrorSnackbar(error?.message);
      },
    });
  };

  const isTyped = watch("username") && watch("password");
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("auth.login")}</Typography>
        <RHFTextField
          name="username"
          label={t("auth.username")}
          placeholder={t("auth.username")}
          sx={{
            borderRadius: "8px",
          }}
        />
        <RHFTextField
          name="password"
          label={t("auth.password")}
          placeholder={t("auth.password")}
          type={isShowPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => dispatch(setShowPassword(!isShowPassword))}
                  edge="end"
                >
                  <Iconify
                    icon={
                      isShowPassword ? "ion:eye-outline" : "ion:eye-off-outline"
                    }
                  />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
            },
          }}
        />
        <Stack direction={"column"} alignItems={"flex-end"}>
          <TLink
            href={PATH_AUTH.forgot_password}
            style={{
              color: "#1F8A70",
              textAlign: "end",
            }}
          >
            {t("auth.forgot_password")}
          </TLink>
        </Stack>
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
              <></>
            )
          }
        >
          {t("auth.login")}
        </Button>
      </Stack>
    </FormProvider>
  );
}
