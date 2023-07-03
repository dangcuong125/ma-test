"use client";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import NotiHeader from "./components/NotiHeader";
import NotiItem from "./components/NotiItem";
import NextPageListNoti from "./components/NextPageListNoti";
import NoDataNoti from "./components/NoDataNoti";
import { getNotiList } from "../noti-common/service";
import { INotiItem } from "../noti-common/interface";

const NotiList = () => {
  const [listNoti, setListNoti] = useState<INotiItem[]>([]);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataNoti = await getNotiList({ page: 1, limit: 10 });
        const newListNoti: INotiItem[] = dataNoti.items || [];
        setListNoti(newListNoti);
        setIsNotFound(newListNoti.length === 0);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        maxWidth: "945px",
        padding: "36px",
        width: "100%",
        borderRadius: "24px",
      }}
    >
      <NotiHeader />
      {listNoti.map((item) => (
        <NotiItem key={item.id} notiItem={item} />
      ))}
      <NextPageListNoti />
      <NoDataNoti isOpen={isNotFound} />
    </Paper>
  );
};

export default NotiList;
