"use client";
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@/common/components/hook-form";
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
import { setShowPassword } from "../../register/slice";
import { RegisterSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormCreateInfo } from "../../register/interface";
import { useRouter } from "next/navigation";
import { PATH_AUTH } from "@/common/constants/path.constants";
import React from "react";
// import { useLogin } from '../hooks/useLogin';
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const InformationForm = () => {
  const registerSchema = RegisterSchema();

  const methods = useForm<IFormCreateInfo>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      agreedTerms: false,
      confirmPassword: "",
      fullName: "",
      password: "",
    },
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
  const { isShowPassword } = useSelector((state) => state.register);
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  //   const { mutate, isLoading } = useLogin();

  const onSubmit = (data: IFormCreateInfo) => {
    // mutate(data, {
    //   onError: (error: any) => {
    //     // showErrorSnackbar(error?.message);
    //   },
    // });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("auth.create_account")}</Typography>
        <RHFTextField
          name="fullName"
          label={t("auth.full_name")}
          placeholder={t("auth.full_name")}
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
        <RHFTextField
          name="confirmPassword"
          label={t("auth.confirm_password")}
          placeholder={t("auth.confirm_password")}
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
        <RHFTextField
          name="referralCode"
          label={t("auth.referral_code")}
          placeholder={t("auth.referral_code")}
          sx={{
            borderRadius: "8px",
          }}
        />
        <RHFCheckbox
          name="agreedTerms"
          label={
            <Typography>
              Tôi đồng ý với{" "}
              <Link href={PATH_AUTH.login} style={{ color: "#1F8A70" }}>
                Điều khoản và chính sách
              </Link>{" "}
              của ShopGrocery
            </Typography>
          }
        />
        <Button
          type="submit"
          disabled={!watch("agreedTerms")}
          variant="contained"
          sx={{
            borderRadius: "24px",
            paddingY: 1,
            boxShadow: 0.5,
            backgroundColor: "#1F8A70",
          }}
          //   endIcon={
          //     isLoading || isSubmitting ? (
          //       <CircularProgress color="inherit" size={'24px'} />
          //     ) : (
          //       <></>
          //     )
          //   }
        >
          {t("continue")}
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default InformationForm;

