'use client'

import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";
import { HeaderBar } from "./components/header/Header";
import { FooterBar } from "./components/footer/Footer";

export default function LayoutApp({children}: {children:ReactNode}) {
  return (
    <Stack sx={{ minHeight: "100vh", minWidth: "100vw", justifyContent: 'space-between'}}>
      <HeaderBar />
      {children}
      <FooterBar/>
    </Stack>
  );
}
