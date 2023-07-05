'use client'

import Iconify from "@/common/components/Iconify";
import {
  FormProvider,
  RHFMultiCheckbox,
  RHFSlider,
} from "@/common/components/hook-form";
import { InputRange } from "@/common/components/hook-form/InputRange";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { GENDER_OPTION, SHIPPING, STATUS } from "../constants";

export default function Filter () {
  const methods = useForm({
    defaultValues: {
      priceRange: [0, 200],
    },
  });
  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const marksLabel = [...Array(51)].map((_, index) => {
    const value = index * 10;
    const firstValue = `${value}`;
    console.log(index);

    return {
      value,
      label: index % 10 ? "" : firstValue,
    };
  });
  const onSubmit = async (data: any) => {};
  return (
    <Grid item md={3}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography variant="h4">Bộ lọc tìm kiếm</Typography>
          <Stack>
            <Typography variant="subtitle1"> Theo danh mục </Typography>
            <RHFMultiCheckbox
              name="gender"
              options={GENDER_OPTION}
              sx={{ width: 1, paddingLeft: "11px" }}
            />

            <Typography
              paddingLeft={"36px"}
              fontWeight={700}
              sx={{ textDecoration: "underline" }}
            >
              Xem thêm
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle1"> Địa điểm </Typography>
            <RHFMultiCheckbox
              name="gender"
              options={GENDER_OPTION}
              sx={{ width: 1, paddingLeft: "11px" }}
            />

            <Typography
              paddingLeft={"36px"}
              fontWeight={700}
              sx={{ textDecoration: "underline" }}
            >
              Xem thêm
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle1"> Đơn vị vận chuyển </Typography>
            <RHFMultiCheckbox
              name="gender"
              options={SHIPPING}
              sx={{ width: 1, paddingLeft: "11px" }}
            />
          </Stack>
          <Divider />
          <Stack width={"100%"} spacing={2} pb={2}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              Khoảng giá
            </Typography>

            <Stack direction="row" spacing={2}>
              <InputRange type="từ" />
              <InputRange type="đến" />
            </Stack>

            <RHFSlider
              name="priceRange"
              step={10}
              min={0}
              max={500}
              marks={marksLabel}
              getAriaValueText={(value) => `${value}`}
              valueLabelFormat={(value) => `${value}`}
              sx={{ alignSelf: "center", width: `calc(100% - 20px)` }}
            />
            <Button
              sx={{
                width: "100%",
                height: "56px",
                mt: "42px !important",
                borderRadius: "36px",
                backgroundColor: "#1F8A70",
                color: "white",
              }}
            >
              Áp dụng
            </Button>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle1"> Tình trạng </Typography>
            <RHFMultiCheckbox
              name="gender"
              options={STATUS}
              sx={{ width: 1, paddingLeft: "11px" }}
            />
          </Stack>
          <Divider />
          <Button
            sx={{
              width: "100%",
              height: "56px",
              borderRadius: "36px",
              backgroundColor: "#1F8A70",
              color: "white",
            }}
            endIcon={
              <Iconify icon={"formkit:arrowright"} width={24} height={24} />
            }
          >
            Xóa tất cả
          </Button>
        </Stack>
      </FormProvider>
    </Grid>
  );
};
