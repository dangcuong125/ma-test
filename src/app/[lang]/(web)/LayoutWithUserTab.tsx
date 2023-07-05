"use client";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { HeaderBar } from "./layoutApp/components/header/Header";
import { FooterBar } from "./layoutApp/components/footer/Footer";
import SideBarUser from "./layoutApp/components/side-bar";
import BottomNavBar from "./layoutApp/components/bottom-nav-bar";

const LayoutAppWithUserTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "space-between",
        bgcolor: "#F5F5F5",
      }}
      alignItems={"center"}
    >
      <HeaderBar />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        px={{ xs: 0, sm: "25px", md: "75px", lg: "100px" }}
        pb={{ xs: "25px", md: "75px", lg: "100px" }}
        pt={"50px"}
      >
        <Grid
          item
          xs={0}
          md={3}
          minHeight={"492px"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          alignSelf={"flex-start"}
          display={{ xs: "none", md: "flex" }}
        >
          <SideBarUser />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          mt={"80px"}
          alignSelf={"flex-start"}
        >
          {children}
        </Grid>
      </Grid>
      <BottomNavBar />
      <FooterBar />
    </Stack>
  );
};

export default LayoutAppWithUserTab;
