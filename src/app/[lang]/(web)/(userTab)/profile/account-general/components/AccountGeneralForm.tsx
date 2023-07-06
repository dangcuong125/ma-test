"use client";
import { useCallback, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Box, Card, Grid, Stack, Typography, Button } from "@mui/material";
import { fData } from "@/common/utils/formatNumber";
import {
  FormProvider,
  RHFTextField,
  RHFUploadAvatar,
} from "@/common/components/hook-form";
import { defaultValues } from "../constants";
import { UpdateCustomerSchema } from "../schemas";
import { useDispatch, useSelector } from "@/common/redux/store";
import {
  IEditCustomerForm,
  IFormCustomerProfile,
  ImageInfo,
} from "../../account-common/interfaces/customer-profile.interface";

import { useEditCustomerProfile } from "../hooks/useEditCustomerProfile";
import {
  customerInfoSelector,
  setCustomerInfo,
} from "../../account-common/reducers/customer-profile.slice";
import useTranslation from "next-translate/useTranslation";
import { formatDate } from "@/common/utils/common.utils";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import AccountHeader from "../../account-common/components/AccountHeader";
import Iconify from "@/common/components/Iconify";
// ----------------------------------------------------------------------

export default function AccountGeneralForm() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { mutate, isSuccess, isLoading } = useEditCustomerProfile({
    onSuccess: () => {
      // enqueueSnackbar(t('update_success'));
    },
    onError: () => {
      // enqueueSnackbar(t('update_fail'));
    },
  });
  // const { handleUpload } = usePresignImg();
  // const { useDeepCompareEffect } = useDeepEffect();
  const methods = useForm<IFormCustomerProfile>({
    resolver: yupResolver(UpdateCustomerSchema),
    defaultValues,
  });

  const customerInfo = useSelector(customerInfoSelector);

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (customerInfo) {
      reset({
        ...customerInfo,
        createdAt: formatDate(customerInfo.createdAt as string),
        photoURL: customerInfo?.avatar?.url,
      });
    }
  }, [customerInfo]);

  const { data } = useGetCustomerInfo(isSuccess);

  // useDeepCompareEffect(() => {
  //   if (isSuccess && data) {
  //     dispatch(setCustomerInfo(data));
  //   }
  // }, [data]);

  // const getImageInfo = async (file: File): Promise<ImageInfo> => {
  //   const imgInfo = await handleUpload(file);
  //   return imgInfo;
  // };
  const onSubmit = async (data: IFormCustomerProfile) => {
    if (typeof data.photoURL !== "string") {
      // const image = await getImageInfo(data?.photoURL as File);
      const dataEdit: IEditCustomerForm = {
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber,
        // avatarId: image?.id,
        avatarId: 0,
      };
      mutate(dataEdit);
      return;
    }
    const dataEdit: IEditCustomerForm = {
      name: data.name,
      address: data.address,
      phoneNumber: data.phoneNumber,
      avatarId: customerInfo.avatar?.id as number,
    };
    mutate(dataEdit);
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      console.log(file);
      if (file) {
        setValue(
          "photoURL",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <AccountHeader title="personal_info" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              py: 10,
              px: 3,
              textAlign: "center",
              boxShadow:
                "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
            }}
          >
            <RHFUploadAvatar
              name="photoURL"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: "auto",
                    display: "block",
                    textAlign: "center",
                    color: "text.secondary",
                  }}
                >
                  {t("allowed")} *.jpeg, *.jpg, *.png, *.gif
                  <br /> {t("max_size_of")} {fData(3145728)}
                </Typography>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              p: 3,
              height: "100%",
              boxShadow:
                "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
            }}
          >
            <Stack
              spacing={2}
              height={"100%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <RHFTextField name="name" label={t("name")} />
              <RHFTextField name="phoneNumber" label={t("phone_number")} />
              <RHFTextField name="email" label="Email" />
              {/* <Stack direction={"row"} spacing={1.5}>
                <RHFTextField
                  disabled
                  name="id"
                  label="ID"
                  InputLabelProps={{ shrink: true }}
                />
                <RHFTextField
                  disabled
                  name="createdAt"
                  label={t("registration_date")}
                />
              </Stack> */}

              {/* <Stack direction="row" spacing={1.5}>
                <RHFTextField disabled name="status" label={t("status")} />
                <RHFTextField disabled name="rank" label={t("rank")} />
              </Stack> */}
              <RHFTextField name="birthday" label={t("birthday")} />
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Stack direction={"row"} justifyContent={"space-between"} mt={"24px"}>
        <Box></Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1F8A70",
            padding: "16px 24px 16px 24px",
            borderRadius: "60px",
          }}
          endIcon={
            <Iconify
              icon={"heroicons:arrow-right-20-solid"}
              sx={{ width: "24px" }}
            />
          }
        >
          {t("save")}
        </Button>
      </Stack>
    </FormProvider>
  );
}
