'use client'
import { Box, Grid, Stack } from "@mui/material";
import { ReactNode } from "react";
import { HeaderBar } from "./components/Header";
import { FooterBar } from "../layoutApp/components/footer/Footer";
import Slogan from "./components/Slogan";
import useResponsive from "@/common/hooks/useResponsive";

export default function LayoutApp ({ children }: { children: ReactNode }){
  const smUp = useResponsive("up", "sm");
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "space-between",
      }}
    >
      <HeaderBar />
      <Box
      sx={{
        width: "100%",
        height: "90%",
        py: "5%",
      }}
    >
      <Grid container spacing={2}>
        {smUp && (
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              mt: "5%",
            }}
          >
            <Slogan />
          </Grid>
        )}
        <Grid item xs={12} sm={7}>
          {children}
        </Grid>
      </Grid>
    </Box>
      <FooterBar />
    </Stack>
  );
};
