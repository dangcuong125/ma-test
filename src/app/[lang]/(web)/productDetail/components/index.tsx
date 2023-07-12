"use client";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { useGetDetailProd } from "../hooks/useGetDetailProd";
import { VariantProduct } from "../components/variant-product/VariantProduct";
import { TabDescriptionReview } from "../components/TabDescriptionReview";
import { SliderProductRecomnend } from "../components/SliderProductRecomnend";
import { useParams } from "next/navigation";
import { MOCK_DATA } from "../constants";

export const ProductDetailContainer=() => {
  const params = useParams();
  const { data_ProductDetail, isLoading } = useGetDetailProd(
    parseInt(params?.id as string)
  );

  const data_DETAIL = data_ProductDetail;

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/category">
      Sản phẩm
    </Link>,
    <Typography key="3" color="primary">
      {data_DETAIL?.productCategories[0]?.categoryDetails[0]?.name}
    </Typography>,
  ];
  return (
    <>
      <title>{data_DETAIL?.productDetails[0]?.name}</title>
      <Stack
        minHeight={"1000px"}
        sx={{ paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" } }}
        pt={"50px"}
        pb={{ md: "100px", xs: "50px" }}
        spacing={4}
      >
        <Breadcrumbs
          separator="·"
          sx={{ fontWeight: "700 !important" }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <VariantProduct dataItem={data_DETAIL} />
        <TabDescriptionReview data={data_DETAIL} />
        <SliderProductRecomnend dataProductRelated={data_ProductDetail} />
      </Stack>
    </>
  );
}
