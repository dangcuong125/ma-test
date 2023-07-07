"use client";

import React from "react";
import {
  AppBar,
  Box,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TitleHeader } from "./components/TitleHeader";
import useTranslation from "next-translate/useTranslation";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { LIST_TAB_CONTENT, OrderStatus } from "./common/constant";
import useSettings from "@/common/hooks/useSettings";
import { OrderItem } from "./components/OrderItem";
import { EmptyHistoryOrder } from "./components/EmptyHistoryOrder";
import { OrderHistorySkeleton } from "./components/OrderHistorySkeleton";

const MyOrderHistoryPage = () => {
  // const { t } = useTranslation("common");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [value, setValue] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          background: "white",
          borderRadius: "24px",
          padding: 3,
        }}
      >
        <TitleHeader title=" Đơn hàng của tôi" />

        <Box sx={{ width: "100%", typography: "body1", marginBottom: 3 }}>
          <Tabs
            value={value}
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
        {value === "ON_HOLD" || value === "" ? (
          <Stack spacing={3}>
            {Array(5)
              .fill(5)
              .map((item, index) => (
                <OrderItem key={index} />
              ))}
          </Stack>
        ) : (
          <EmptyHistoryOrder />
        )}
        {/* <OrderHistorySkeleton /> */}
        {/* <EmptyHistoryOrder /> */}
      </Paper>
    </>
  );
};

export default MyOrderHistoryPage;
