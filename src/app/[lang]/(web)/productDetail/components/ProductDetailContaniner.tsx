"use client";

import React from 'react'
import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { VariantProduct } from './variant-product/VariantProduct';
import { TabDescriptionReview } from './TabDescriptionReview';
import { SliderProductRecomnend } from './SliderProductRecomnend';
import { useGetDetailProd } from '../hooks/useGetDetailProd';
import useTranslation from 'next-translate/useTranslation';

const ProductDetailContaniner = () => {
    const {
        dataTest
    } = useGetDetailProd(180);
    const {t} =useTranslation("common")
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            {t('category.home')}
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
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
    )
}

export default ProductDetailContaniner