"use client";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { VariantProduct } from "./components/variant-product/VariantProduct";
import { TabDescriptionReview } from "./components/TabDescriptionReview";
import { SliderProductRecomnend } from "./components/SliderProductRecomnend";
import { useGetListCategory } from "../category/hooks/useGetListCategory";
import { useGetDetailProd } from "./hooks/useGetDetailProd";

 const ProductDetail= ()=>{
  const {
    dataTest
  } = useGetDetailProd(180);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/category"
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
      <VariantProduct data={dataTest} />
      <TabDescriptionReview data={dataTest} />
      <SliderProductRecomnend />
    </Stack>
  );
}
export default ProductDetail;
