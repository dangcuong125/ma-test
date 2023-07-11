'use client'
import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { HeaderBar } from "./components/header/Header";
import { FooterBar } from "./components/footer/Footer";
import { useSelector } from "@/common/redux/store";
import PopupLogin from "./components/popup-login/PopupLogin";

export default function LayoutApp ({ children }: { children: ReactNode }){
  const { isOpenPopupLogin } = useSelector(state => state.headerSlice);
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "space-between",
      }}
    >
      <HeaderBar />
      {children}
      <FooterBar />
      {isOpenPopupLogin && (
        <PopupLogin open={isOpenPopupLogin} />
      )}
    </Stack>
  );
};
