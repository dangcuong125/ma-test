"use client";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Stack, Box, Breadcrumbs, Typography, Link, Grid, alpha, IconButton, useTheme, Divider, Button, Card, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { VariantProduct } from "./components/VariantProduct";
import { TabDescriptionReview } from "./components/TabDescriptionReview";
import { SliderProductRecomnend } from "./components/SliderProductRecomnend";

export default function ProductDetail(){
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
        </Typography>
      ];
    return (
     
        <Stack minHeight={'1000px'} paddingX={"100px"} pt={"50px"} spacing={4}>
        <Breadcrumbs separator="·" sx={{ fontWeight: "700 !important" }} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <VariantProduct/>
        <TabDescriptionReview/>
        <SliderProductRecomnend/>
        </Stack>
        
    );
};
