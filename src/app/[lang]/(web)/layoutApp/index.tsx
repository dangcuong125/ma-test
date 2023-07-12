'use client'
import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { HeaderBar } from "./components/header/Header";
import { FooterBar } from "./components/footer/Footer";
import { useDispatch, useSelector } from "@/common/redux/store";
import PopupLogin from "./components/popup-login/PopupLogin";
import { setPopupLogin } from "./components/header/header.slice";

export default function LayoutApp ({ children }: { children: ReactNode }){
  const { isOpenPopupLogin } = useSelector(state => state.headerSlice);
  const dispatch = useDispatch();
  const handleClosePopup = () => {
    dispatch(setPopupLogin(false));
  }
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
        <PopupLogin open={isOpenPopupLogin} onClose={handleClosePopup} />
      )}
    </Stack>
  );
};
