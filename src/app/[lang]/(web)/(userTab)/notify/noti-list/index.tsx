"use client";
import { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import NotiHeader from "./components/NotiHeader";
import NotiItem from "./components/NotiItem";
import NextPageListNoti from "./components/NextPageListNoti";
import NoDataNoti from "./components/NoDataNoti";
import { getNotiList } from "../noti-common/service";
import { INotiItem } from "../noti-common/interface";

type Props = {
  listNoti: INotiItem[];
};

const NotiList = ({ listNoti }: Props) => {
  const isNotFound = !listNoti.length;
  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        py: "36px",
        width: "100%",
        borderRadius: "24px",
        maxHeight: "934px",
      }}
    >
      <NotiHeader />
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "814px",
        }}
      >
        {listNoti.map((item) => (
          <NotiItem key={item.id} notiItem={item} />
        ))}
        <NextPageListNoti />
        <NoDataNoti isOpen={isNotFound} />
      </Box>
    </Paper>
  );
};

export default NotiList;
