"use client";

import {
  AppBar,
  Box,
  CircularProgress,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRef, useState } from "react";
import { TitleHeader } from "./TitleHeader";
import { LIST_TAB_CONTENT } from "../common/constant";
import { OrderItem } from "./OrderItem";
import { EmptyHistoryOrder } from "./EmptyHistoryOrder";
import { dispatch, useSelector } from "@/common/redux/store";
import { onChangeCurrentTab } from "../common/slice";
import { useGetOrder } from "../hooks/useGetOrder";
import { OrderHistorySkeleton } from "./OrderHistorySkeleton";

export default function OrderHistoryContainer() {
  // const { t } = useTranslation("common");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const ref = useRef(null);

  const { currentTab } = useSelector((state) => state.orderHistory);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(onChangeCurrentTab(newValue));
  };

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetOrder({ limit: 10, page: 1, statuses: currentTab });

  // @ts-ignore
  const listOrderHistory = data?.pages?.map((item) => item?.items).flat() || [];

  const isNotFound = !listOrderHistory.length || isError;

  const handleScroll = () => {
    if (ref?.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchNextPage();
      }
    }
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          background: "white",
          borderRadius: { xs: 0, md: "24px" },
          padding: 3,
        }}
      >
        <TitleHeader title=" Đơn hàng của tôi" />

        <Box sx={{ width: "100%", typography: "body1", marginBottom: 3 }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="lab API tabs example"
            allowScrollButtonsMobile
            variant={matches ? "fullWidth" : "scrollable"}
            scrollButtons="auto"
            textColor="inherit"
          >
            {LIST_TAB_CONTENT.map((item, index) => (
              <Tab label={item.label} value={item.value} key={index} />
            ))}
          </Tabs>
        </Box>

        {isLoading && <OrderHistorySkeleton />}

        {!isLoading &&
          (!isNotFound ? (
            <Stack spacing={3} alignItems={"center"}>
              {listOrderHistory.map((item, index) => (
                <OrderItem
                  key={index}
                  data={item}
                  isLastChild={index === listOrderHistory.length - 1}
                />
              ))}
              {isFetchingNextPage && (
                <CircularProgress
                  size={"24px"}
                  sx={{
                    bottom: "5vh",
                  }}
                />
              )}
            </Stack>
          ) : (
            <EmptyHistoryOrder />
          ))}
      </Paper>
    </>
  );
}
