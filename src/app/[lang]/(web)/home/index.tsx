'use client'
import { Stack, Box } from "@mui/material";
import { Banner } from "./components/banner/Banner";
import { MenuCategory } from "./components/menu-category/Category";
import { PopularProduct } from "./components/popular-product/PopularProduct";
import { ComboPopular } from "./components/combo-popular/ComboPopular";

export default function HomeApp() {
  return (
    <Stack minHeight={'100%'} minWidth={'100%'} spacing={'100px'}>
      <Banner/>
      <MenuCategory/>
      <PopularProduct/>
      <ComboPopular/>
    </Stack>
  );
}
