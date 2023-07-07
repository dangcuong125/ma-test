"use client";
import { Box, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";
import { TitleHeader } from "../../order-history/components/TitleHeader";
import { useGetListHistoryPoint } from "../hooks/useGetListHistoryPoint";
import CardHistoryPoint from "./CardHistoryPoint";
import LoadingHistoryPoint from "./LoadingHistoryPoint";

export default function ListHistoryPoint() {
  const { isLoading, listHistory } = useGetListHistoryPoint();

  console.log("isLoading: ", isLoading);
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
        <TitleHeader title="Danh sách tích xu/đổi xu" />

        {/* {isLoading ? ( */}
        {/* <LoadingHistoryPoint /> */}
        <Stack direction={"row"} marginTop={"40px"}>
          <Skeleton variant="rectangular" width={100} height={100} />
          <Box
            paddingLeft={"10px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px", width: "100%" }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px", width: "100%" }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px", width: "100%" }}
              animation="wave"
            />
          </Box>
        </Stack>
        {/* ) : (
          <>
            {listHistory?.map((item) => (
              <CardHistoryPoint item={item} key={item.id} />
            ))}
          </>
        )} */}
      </Paper>
    </>
  );
}
