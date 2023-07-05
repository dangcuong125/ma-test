import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Input,
  Stack,
} from "@mui/material";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@/common/components/hook-form";
import { useForm } from "react-hook-form";
import { NewAddressSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IFormProvince,
  IParamsSearchProvince,
  IProvinceItem,
} from "../../interface";
import Iconify from "@/common/components/Iconify";
import { dispatch, useSelector } from "@/common/redux/store";
import { setOpenModalAddAddress } from "../../order.slice";
import { useGetProvinceData } from "../../hooks/useGetProvinceData";

export default function AddNewAddressModal() {
  const { openModalAddAddress } = useSelector((state) => state.checkout);
  const methods = useForm<IFormProvince>({
    resolver: yupResolver(NewAddressSchema),
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    watch,
  } = methods;

  const paramsProvince: IParamsSearchProvince = {
    type: "DISTRICT",
    parentId: 0,
    searchText: "",
    page: 1,
    limit: 100,
  };

  const {
    data: dataProvince,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetProvinceData(paramsProvince);
  console.log(dataProvince);

  const arrProvince: IProvinceItem[] = dataProvince?.pages[0]?.items || [];
  console.log(arrProvince);
  const onSubmit = (data: IFormProvince) => {
    console.log(data);
  };

  const handleClose = () => {
    dispatch(setOpenModalAddAddress(false));
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openModalAddAddress}
      onClose={handleClose}
    >
      <DialogTitle>Thêm địa chỉ mới</DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={3}>
            <Box
              sx={{
                display: "grid",
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <RHFTextField name="name" label="Tên người nhận" />
              <RHFTextField name="phone" label="Số điện thoại" />
            </Box>

            <RHFSelect
              name="province"
              label="Chọn tỉnh thành"
              onClick={() => console.log("sfsf")}
            >
              {arrProvince?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </RHFSelect>

            <RHFSelect name="district" label="Chọn quận/ huyện">
              {/* {countries.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))} */}
            </RHFSelect>

            <RHFSelect name="ward" label="Chọn xã/ phường">
              {/* {countries.map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))} */}
            </RHFSelect>

            <RHFTextField name="address1" label="Số nhà, tên đường" />

            <RHFCheckbox
              name="isDefault"
              label="Đặt làm địa chỉ mặc định."
              sx={{ mt: 3 }}
            />
            <RHFCheckbox
              name="isSaveAddress"
              label="Lưu địa chỉ."
              sx={{ mt: 3 }}
            />
          </Stack>
        </DialogContent>

        <Divider />

        <DialogActions sx={{ p: 3 }}>
          <Button color="inherit" variant="text" onClick={handleClose}>
            Hủy
          </Button>
          <Button
            size="large"
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "rgba(31, 138, 112, 1)", borderRadius: 5 }}
          >
            Cập nhật <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
