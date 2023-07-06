"use client";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ListProduct from "./components/ListProduct";
import Filter from "./components/Filter";

 const Category = () => {
    return (
         <Grid container spacing={2} pt={"50px"} paddingX={{xs:"16px",sm:"100px"}} height={'100%'}>
            
            <Filter />
            <ListProduct />
        </Grid>
    );
};
export default Category;