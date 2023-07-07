"use client";
import { Box, Paper } from "@mui/material";
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

        {isLoading ? (
          <LoadingHistoryPoint />
        ) : (
          <>
            {listHistory?.map((item) => (
              <CardHistoryPoint item={item} key={item.id} />
            ))}
          </>
        )}
      </Paper>
    </>
  );
}
