import { Button, Dialog, Box, Stack } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { isOpenEditForm, setIsOpenEditForm } from "../address-common/slice";
import { useDispatch } from "@/common/redux/store";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@/common/components/hook-form";
import { ISubmitData } from "../address-common/interface";
import {
  DEFAULT_VALUE_FORM_ADDRESS,
  city,
  district,
  ward,
} from "../address-common/constant";
import RHFSelectPagination from "../address-common/components/RHFSelectPagination";
import { AddressSchema } from "../address-common/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";

export default function AddressEdit() {
  const methods = useForm<ISubmitData>({
    resolver: yupResolver(AddressSchema()),
    defaultValues: DEFAULT_VALUE_FORM_ADDRESS,
  });
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpenEditForm);

  const handleClose = () => {
    dispatch(setIsOpenEditForm(false));
  };

  const handleScrollCity = () => {};
  const handleScrollDistrict = () => {};
  const handleScrollWard = () => {};

  const onSubmit = (data: ISubmitData) => {
    console.log(data);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          minWidth: { xs: "100vw", md: "720px" },
        },
      }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} p={"16px"}>
          <Box
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(33, 43, 54, 1)",
              width: "100%",
            }}
          >
            {t("address.form.updateHeading")}
          </Box>
          <Stack spacing={{ xs: 2, md: 3 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <RHFTextField
                name="recipientName"
                label={t("address.form.recipientName")}
              />
              <RHFTextField
                name="phoneNumber"
                label={t("address.form.phoneNumber")}
              />
            </Stack>
            <RHFSelectPagination
              name="city"
              options={city}
              labelProp="name"
              label={t("address.form.city")}
              listBoxScroll={handleScrollCity}
              // loadingScroll={isFetchingNextPageAttribute}
              // isLoading={isLoadingAttribute}
              loadingScroll={false}
              isLoading={false}
              disableClear
            />
            <RHFSelectPagination
              name="district"
              options={district}
              labelProp="name"
              label={t("address.form.district")}
              listBoxScroll={handleScrollDistrict}
              // loadingScroll={isFetchingNextPageAttribute}
              // isLoading={isLoadingAttribute}
              loadingScroll={false}
              isLoading={false}
              disableClear
            />
            <RHFSelectPagination
              name="ward"
              options={ward}
              labelProp="name"
              label={t("address.form.ward")}
              listBoxScroll={handleScrollWard}
              // loadingScroll={isFetchingNextPageAttribute}
              // isLoading={isLoadingAttribute}
              loadingScroll={false}
              isLoading={false}
              disableClear
            />
            <RHFTextField
              name="detailAddress"
              label={t("address.form.detailAddress")}
            />
            <RHFCheckbox name="isDefault" label={t("address.form.isDefault")} />
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              sx={{ mr: 2, borderRadius: "60px" }}
              variant="text"
              onClick={handleClose}
            >
              {t("address.form.back")}
            </Button>
            <LoadingButton
              variant="contained"
              size="large"
              type="submit"
              loading={isSubmitting}
              sx={{
                borderRadius: "60px",
                backgroundColor: "rgba(31, 138, 112, 1)",
              }}
            >
              {t("address.form.update")}
              <Box
                sx={{
                  backgroundImage: "url(/assets/icons/core/arrow-left.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "20px",
                  height: "20px",
                  ml: "6px",
                }}
              />
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </Dialog>
  );
}
