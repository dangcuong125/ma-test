"use client";
import { Stack, Box } from "@mui/material";
import { Banner } from "./components/banner/Banner";
import { MenuCategory } from "./components/menu-category/Category";
import { PopularProduct } from "./components/popular-product/PopularProduct";
import { ComboPopular } from "./components/combo-popular/ComboPopular";
import { useGetHomeConfig } from "./hooks/useGetHomeConfig";

export default function HomeApp() {
  const { dataHomeConfig, isRefetchingHomeConfig, isLoading } =
    useGetHomeConfig();

  return (
    <Stack minHeight={"100%"} minWidth={"100%"} spacing={"100px"}>

      {dataHomeConfig?.bannerData?.map((data: any, index: number) => (
        <Banner key={index} dataMenu={data} />
      ))}

      {dataHomeConfig?.normalServiceData?.map((data: any, index: number) => (
        <MenuCategory key={index} dataMenu={data} />
      ))}

      {dataHomeConfig?.horizontalProductData1?.map((data: any, index: number) => (
        <PopularProduct key={index} dataMenu={data} />
      ))}
      {dataHomeConfig?.horizontalProductData1?.map((data: any, index: number) => (
        <ComboPopular key={index} dataMenu={data} />
      ))}
    </Stack>
  );
}
