"use client";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ListProduct from "./components/ListProduct";
import Filter from "./components/Filter";
import ListAllCategory from "./components/ListAllCategory";

const Category = () => {
  return (
    <>
      <title>Danh mục sản phẩm</title>
      <Grid
        container
        spacing={2}
        pt={"50px"}
        paddingX={{ xs: "16px", sm: "100px" }}
        height={"100%"}
      >
        <Filter />
        <ListAllCategory/>
      </Grid>
    </>
  );
};
export default Category;
