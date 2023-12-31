"use client";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
  Breadcrumbs,
  Grid,
  Link,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IProductItems } from "../../interfaces";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useGetListCategory } from "../../hooks/useGetAllCategory";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageCategorySelector, setPageNumber } from "../../category.slice";
import { useAddToCart } from "@/common/hooks/useAddToCart";

export default function ListAllCategoryProduct() {
  const route = useRouter();
  const dispatch = useDispatch();
  const pageNumber = useSelector(pageCategorySelector);

  
  const { mutate } = useAddToCart();

  const searchParams = {
    page: pageNumber,
    limit: 20,
  };

  const { dataListCategory } = useGetListCategory(searchParams);
  const data_CATEGORY = dataListCategory?.items || [];

  const handleAddToCart = (product: any) => {
    const dataAddToCart = {
      productVariantList: [
        {
          productVariantId: product?.defaultProductVariantId,
          quantity: 1,
        },
      ],
      productId: product?.id,
    };
    mutate(dataAddToCart);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value));
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Typography key="2" color="primary">
      Sản phẩm
    </Typography>,
  ];
  return (
    <Grid item md={9}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator="·"
          sx={{ fontWeight: "700 !important" }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid
          container
          spacing={{ sm: 4, xs: 1 }}
          height={"100%"}
          width={"100%"}
        >
          {data_CATEGORY?.map((itemProd: any, index: number) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <ProductItemDefault
                title={itemProd?.productDetails[0]?.name}
                srcImg={itemProd?.thumbnail?.url}
                property={itemProd?.productDetails[0]?.shortDescription}
                price={itemProd?.price?.normalPrice}
                onClick={() =>
                  route.push(PATH_HOME.product.detail(itemProd?.id))
                }
                onClickAddToCart={() => handleAddToCart(itemProd)}
              />
            </Grid>
          ))}
          <Pagination
            count={dataListCategory?.meta?.totalPages}
            page={pageNumber}
            onChange={handleChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingY: "50px",
              width: "100%",
              "& .css-lxelle-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  bgcolor: "#7fc5b8 !important",
                },
            }}
          />
        </Grid>
      </Stack>
    </Grid>
  );
}
