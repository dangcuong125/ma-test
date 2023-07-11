"use client";
import { useEffect, useState } from "react";
import { Box, Button, Paper, useMediaQuery } from "@mui/material";
import NotiHeader from "./components/NotiHeader";
import NotiItem from "./components/NotiItem";
import NextPageListNoti from "./components/NextPageListNoti";
import NoDataNoti from "./components/NoDataNoti";
import { getNotiList } from "../noti-common/service";
import { INotiItem } from "../noti-common/interface";
import { useInView } from "react-intersection-observer";
import { useGetNotiList } from "./hooks/useGetNotiList";
import { LoadingButton } from "@mui/lab";
import useTranslation from "next-translate/useTranslation";
import { NotiSkeleton } from "./components/NotiSkeleton";

// type Props = {
//   listNoti: INotiItem[];
// };

const NotiList = () => {
  const { t } = useTranslation("common");
  const { ref, inView } = useInView();
  const isXs = useMediaQuery("(max-width:600px)");

  const {
    dataNotiList,
    fetchNextPageNotiList,
    isFetchingNextPageNotiList,
    isLoadingNotiList,
    hasNextPageNotiList,
  } = useGetNotiList({ page: 1, limit: 5 });

  const listNoti = dataNotiList?.pages?.map((item) => item?.items).flat() || [];

  const isNotFound = !isLoadingNotiList && !listNoti.length;

  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        py: "36px",
        width: "100%",
        borderRadius: { xs: 0, md: "24px" },
      }}
    >
      <NotiHeader />
      {isLoadingNotiList && <NotiSkeleton />}
      <Box>
        {listNoti.map((item) => (
          <NotiItem key={item.id} notiItem={item} />
        ))}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LoadingButton
            variant="text"
            sx={{
              textDecoration: "underline",
              color: "rgba(31, 138, 112, 1)",
              display: !hasNextPageNotiList ? "none" : "block",
            }}
            ref={ref}
            loading={isFetchingNextPageNotiList}
            onClick={() => fetchNextPageNotiList()}
            disabled={!hasNextPageNotiList || isFetchingNextPageNotiList}
          >
            {t("notify.loadingMore")}
          </LoadingButton>
        </Box>
        <NoDataNoti isOpen={isNotFound} />
      </Box>
    </Paper>
  );
};

export default NotiList;
