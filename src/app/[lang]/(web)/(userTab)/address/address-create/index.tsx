import { Button, Dialog, Box, Stack } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  isOpenCreateForm,
  provinceParamsForm,
  setIsOpenCreateForm,
  setSearchTextProvinceParams,
  setTypeProvinceParams,
} from "../address-common/slice";
import { useDispatch } from "@/common/redux/store";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@/common/components/hook-form";
import {
  IParamsProvinceList,
  IProvince,
  ISubmitData,
  IdataCreateAddress,
} from "../address-common/interface";
import {
  DEFAULT_VALUE_FORM_ADDRESS,
  province,
  district,
  ward,
} from "../address-common/constant";
import { AddressSchema } from "../address-common/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import RHFSelectPagination from "../address-common/components/RHFSelectPagination";
import { useCreateAddress } from "./hooks/useCreateAddress";
import { useGetProvinceList } from "../address-common/hooks/useGetProvinceList";

export default function AddressCreate() {
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
  const isOpen = useSelector(isOpenCreateForm);
  const provinceParams = useSelector(provinceParamsForm);

  const searchParamsProvince: IParamsProvinceList = {
    type: provinceParams.type,
    parentId: provinceParams.parentId,
    searchText: provinceParams.searchText,
    page: 1,
    limit: 20,
  };

  const {
    dataProvinceList,
    fetchNextPageProvinceList,
    hasNextPageProvinceList,
    isFetchingNextPageProvinceList,
    isLoadingProvinceList,
  } = useGetProvinceList(searchParamsProvince);

  const listProvince =
    dataProvinceList?.pages
      ?.map((item) =>
        item?.items?.map((itemProvince: IProvince) => {
          return {
            id: itemProvince.id,
            name: itemProvince.name,
          };
        })
      )
      .flat() || [];

  const handleScrollProvince = (event: any) => {
    const listBoxNode = event?.currentTarget;
    const position = listBoxNode?.scrollTop + listBoxNode?.clientHeight;
    if (listBoxNode.scrollHeight - position <= 1) {
      fetchNextPageProvinceList();
    }
  };

  const handleClose = () => {
    dispatch(setIsOpenCreateForm(false));
  };

  const { mutateNewAddress } = useCreateAddress({
    onSuccess: () => {
      dispatch(setIsOpenCreateForm(false));
      // enqueueSnackbar(t('address.createSuccess'));
    },
    onError: () => {
      // enqueueSnackbar(t('address.createError'));
    },
  });

  const onSubmit = (data: ISubmitData) => {
    const dataCreate: IdataCreateAddress = {
      recipientName: data.recipientName,
      phoneNumber: data.phoneNumber,
      provinceId: data.province.id,
      districtId: data.district.id,
      wardId: data.ward.id,
      detailAddress: data.detailAddress,
      isDefault: data.isDefault,
    };
    mutateNewAddress(dataCreate);
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
            {t("address.form.createHeading")}
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
              name="province"
              options={listProvince}
              labelProp="name"
              label={t("address.form.province")}
              listBoxScroll={handleScrollProvince}
              loadingScroll={isFetchingNextPageProvinceList}
              isLoading={isLoadingProvinceList}
              disableClear
              onClick={() => {
                dispatch(setSearchTextProvinceParams(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "PROVINCE",
                    parentId: undefined,
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvinceParams(e.target.value));
              }}
            />
            <RHFSelectPagination
              name="district"
              options={listProvince}
              labelProp="name"
              label={t("address.form.district")}
              listBoxScroll={handleScrollProvince}
              loadingScroll={isFetchingNextPageProvinceList}
              isLoading={isLoadingProvinceList}
              disableClear
              onClick={() => {
                dispatch(setSearchTextProvinceParams(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "DISTRICT",
                    parentId: watch("province.id"),
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvinceParams(e.target.value));
              }}
            />
            <RHFSelectPagination
              name="ward"
              options={listProvince}
              labelProp="name"
              label={t("address.form.ward")}
              listBoxScroll={handleScrollProvince}
              loadingScroll={isFetchingNextPageProvinceList}
              isLoading={isLoadingProvinceList}
              disableClear
              onClick={() => {
                dispatch(setSearchTextProvinceParams(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "WARD",
                    parentId: watch("district.id"),
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvinceParams(e.target.value));
              }}
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
              {t("address.form.save")}
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
