"use client";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Grid } from "@mui/material";
import { Filter } from "../components/Filter";
import { ListProduct } from "../components/ListProduct";

 const Category = () => {
    return (
        <Grid container spacing={2} pt={"50px"} paddingX={"100px"} height={'100%'}>
            
            <Filter />
            <ListProduct />
        </Grid>
    );
};
export default Category;