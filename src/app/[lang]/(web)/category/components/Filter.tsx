"use client";
import Iconify from "@/common/components/Iconify";
import {
  FormProvider,
  RHFMultiCheckbox,
  RHFSlider,
} from "@/common/components/hook-form";
import { InputRange } from "@/common/components/hook-form/InputRange";
import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { GENDER_OPTION, SHIPPING, STATUS } from "../constants";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(false);
  const { t } = useTranslation("common");
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

    return {
      value,
      label: index % 10 ? "" : firstValue,
    };
  });
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const onSubmit = async (data: any) => {};
  return (
    <Grid item md={3}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} display={{ sm: "flex", xs: "none" }}>
          <Typography variant="h4">{t("category.filter")}</Typography>
          <Stack>
            <Typography variant="subtitle1">
              {" "}
              {t("category.categorySub")}{" "}
            </Typography>
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
              {t("category.addMore")}
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle1">
              {t("category.location")}{" "}
            </Typography>
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
              {t("category.addMore")}
            </Typography>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle1">
              {" "}
              {t("category.shipping")}{" "}
            </Typography>
            <RHFMultiCheckbox
              name="gender"
              options={SHIPPING}
              sx={{ width: 1, paddingLeft: "11px" }}
            />
          </Stack>
          <Divider />
          <Stack width={"100%"} spacing={2} pb={2}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              {t("category.rangPrice")}
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
              {t("category.apply")}
            </Button>
          </Stack>
          <Divider />
          <Stack>
            <Typography variant="subtitle1">
              {" "}
              {t("category.status")}{" "}
            </Typography>
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
            {t("category.deleteAll")}
          </Button>
        </Stack>
        <Button
          disableRipple
          color="inherit"
          endIcon={<Iconify icon={"ic:round-filter-list"} />}
          onClick={handleOpenFilter}
          sx={{ display: { sm: "block", md: "none" }, p: 0 }}
        >
          {t("category.filter")}
        </Button>
        <Drawer
          anchor="right"
          open={openFilter}
          onClose={handleCloseFilter}
          PaperProps={{
            sx: { width: 260, height: "100%", p: "20px" },
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4"> {t("category.filter")}</Typography>
              <IconButton onClick={handleCloseFilter}>
                <Iconify icon={"eva:close-fill"} width={20} height={20} />
              </IconButton>
            </Stack>

            <Stack>
              <Typography variant="subtitle1">
                {" "}
                {t("category.categorySub")}{" "}
              </Typography>
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
                {t("category.addMore")}
              </Typography>
            </Stack>
            <Divider />
            <Stack>
              <Typography variant="subtitle1">
                {" "}
                {t("category.location")}
              </Typography>
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
                {t("category.addMore")}
              </Typography>
            </Stack>
            <Divider />
            <Stack>
              <Typography variant="subtitle1">
                {" "}
                {t("category.shipping")}{" "}
              </Typography>
              <RHFMultiCheckbox
                name="gender"
                options={SHIPPING}
                sx={{ width: 1, paddingLeft: "11px" }}
              />
            </Stack>
            <Divider />
            <Stack width={"100%"} spacing={2} pb={2}>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {t("category.rangPrice")}
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
                {t("category.apply")}
              </Button>
            </Stack>
            <Divider />
            <Stack>
              <Typography variant="subtitle1">
                {" "}
                {t("category.status")}
              </Typography>
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
              {t("category.deleteAll")}
            </Button>
          </Stack>
        </Drawer>
      </FormProvider>
    </Grid>
  );
}
