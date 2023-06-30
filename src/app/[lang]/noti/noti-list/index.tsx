import { Box, Button, Divider, Drawer } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { Suspense, useState } from "react";
import NotiHeader from "./components/NotiHeader";
import ListNoti from "./components/ListNoti";
import { useSelector } from "react-redux";
import { isOpenSideBar, setIsOpenSideBar } from "../noti-common/slice";
import { useDispatch } from "@/common/redux/store";

export default async function NotiList() {
  const widthNoti = "500px";
  const { t } = useTranslation();
  const isOpen = useSelector(isOpenSideBar);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setIsOpenSideBar(true));
  };

  const handleClose = () => {
    dispatch(setIsOpenSideBar(false));
  };

  return (
    <div>
      <Button onClick={handleOpen}>noti</Button>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={handleClose}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            width: widthNoti,
            backgroundColor: "#FFFFFF",
            position: "relative",
          }}
          role="presentation"
        >
          <NotiHeader />
          <Suspense fallback={<>Loading...</>}>
            {/* @ts-expect-error Server Component */}
            <ListNoti />
          </Suspense>
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              right: 0,
              width: widthNoti,
              zIndex: 2,
              backgroundColor: "#FFFFFF",
              p: "20px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "50px",
              }}
            >
              Xem tất cả
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
