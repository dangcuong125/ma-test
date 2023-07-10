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
  } = useGetNotiList({ page: 1, limit: isXs ? 5 : 7 });

  const listNoti = dataNotiList?.pages?.map((item) => item?.items).flat() || [];

  useEffect(() => {
    if (inView && !isXs) {
      fetchNextPageNotiList();
    }
  }, [inView]);
  const isNotFound = !listNoti.length;
  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        py: "36px",
        width: "100%",
        borderRadius: { xs: 0, md: "24px" },
        maxHeight: { xs: "auto", md: "934px" },
      }}
    >
      <NotiHeader />
      {isXs ? (
        <>
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
        </>
      ) : (
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "814px",
          }}
        >
          {listNoti.map((item) => (
            <NotiItem key={item.id} notiItem={item} />
          ))}
          <Box sx={{ height: 0 }}>
            <Button
              ref={ref}
              onClick={() => fetchNextPageNotiList()}
              disabled={!hasNextPageNotiList || isFetchingNextPageNotiList}
            />
          </Box>
          <NoDataNoti isOpen={isNotFound} />
        </Box>
      )}
    </Paper>
  );
};

export default NotiList;
