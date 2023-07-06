"use client";
import { FormProvider, RHFTextField } from "@/common/components/hook-form";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "@/common/redux/store";
import { AddPointSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormAddPoint } from "../interface";
import { useRouter } from "next/navigation";
import React from "react";
// import useShowSnackbar from '@/common/hooks/useMessage';
import Iconify from "@/common/components/Iconify";
import useTranslation from "next-translate/useTranslation";
import { PATH_HOME } from "@/common/constants/path.constants";

const RegisterForm = () => {
  const addPointSchema = AddPointSchema();
  const methods = useForm<IFormAddPoint>({
    resolver: yupResolver(addPointSchema),
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
  const { t } = useTranslation("loyalty");
  const dispatch = useDispatch();

  const onSubmit = (data: IFormAddPoint) => {
    // mutate(data, {
    //   onError: (error: any) => {
    //     // showErrorSnackbar(error?.message);
    //   },
    // });
    router.push(PATH_HOME.add_point_success);
  };

  const isTyped = watch("code");
  return (
    <Card
      sx={{
        width: {md:"30vw", xs: '90vw', sm: '50vw'},
        p: 3,
        mx: "auto",
      }}
    >
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant={"h4"}>{t("enter_code")}</Typography>
        <Typography variant={"body2"}>{t("code_guide")}</Typography>
        <RHFTextField
          name="code"
          label={t("product_code")}
          placeholder={t("product_code")}
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
            isSubmitting ? (
              <CircularProgress color="inherit" size={"24px"} />
            ) : (
              <Iconify
                icon={"heroicons:arrow-right-20-solid"}
                sx={{ width: "24px" }}
              />
            )
          }
        >
          {t('check_info')}
        </Button>
      </Stack>
    </FormProvider>
    <Divider
        sx={{
          my: 3,
        }}
      >
        {t("common:auth.or")}
      </Divider>

      <Button
        fullWidth
        variant="contained"
        sx={{
          borderRadius: "24px",
          paddingY: 1,
          boxShadow: 0.5,
          backgroundColor: "#1F8A70",
        }}
      >
        {t("scan_qr_code")}
      </Button>
    </Card>
  );
}

export default RegisterForm;

