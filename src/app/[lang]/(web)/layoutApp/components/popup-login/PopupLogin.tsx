"use client";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import {
  Box,
  Modal,
  Card,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import React from "react";
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { TLink } from "@/common/components/TLink";
import { LoginSchema } from "@/app/[lang]/(auth)/login/schema";
import { useLogin } from "@/app/[lang]/(auth)/login/hooks/useLogin";
import { IFormLogin } from "@/app/[lang]/(auth)/login/interface";
import { setShowPassword } from "@/app/[lang]/(auth)/register/slice";
import { setPopupLogin } from "../header/header.slice";

export default function PopupLogin({open}: {open: boolean}) {
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
  //   const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { isShowPassword } = useSelector((state) => state.login);
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { mutate, isLoading } = useLogin();

  const onSubmit = (data: IFormLogin) => {
    mutate(data, {
      onSuccess: () => {
        dispatch(setPopupLogin(false));
        window.location.reload();
      },
      onError: (error: any) => {
        // showErrorSnackbar(error?.message);
      },
    });
  };
  const isTyped = watch("phoneNumber") && watch("password");
  return (
    <Modal open={open}>
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: 24,
        width: "30vw",
        p: 3,
        minWidth: "350px",
        mx: "auto",
      }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Typography variant={"h4"}>{t("login")}</Typography>
          <RHFTextField
            name="phoneNumber"
            label={t("phoneNumber")}
            placeholder={t("phoneNumber")}
            sx={{
              borderRadius: "8px",
            }}
          />
          <RHFTextField
            name="password"
            label={t("password")}
            placeholder={t("password")}
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
                        isShowPassword
                          ? "ion:eye-outline"
                          : "ion:eye-off-outline"
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
              {t("forgot_password")}
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
                <Iconify
                  icon={"heroicons:arrow-right-20-solid"}
                  sx={{ width: "24px" }}
                />
              )
            }
          >
            {t("login")}
          </Button>
        </Stack>
      </FormProvider>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {t("dont_have_account")}{" "}
        <TLink href={PATH_AUTH.register} style={{ color: "#1F8A70" }}>
          {t("get_started")}
        </TLink>
      </Typography>
    </Card>
    </Modal>
  );
}

