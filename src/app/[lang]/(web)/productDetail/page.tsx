"use client";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { VariantProduct } from "./components/variant-product/VariantProduct";
import { TabDescriptionReview } from "./components/TabDescriptionReview";
import { SliderProductRecomnend } from "./components/SliderProductRecomnend";

export default function ProductDetail() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Rau củ
    </Link>,
    <Typography key="3" color="primary">
      Hoa quả nhiệt đới
    </Typography>,
  ];
  return (
    <Stack
      minHeight={"1000px"}
      sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
      pt={"50px"}
      spacing={4}
    >
      <Breadcrumbs
        separator="·"
        sx={{ fontWeight: "700 !important" }}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <VariantProduct />
      <TabDescriptionReview />
      <SliderProductRecomnend />
    </Stack>
  );
}
