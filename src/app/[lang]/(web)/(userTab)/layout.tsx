"use client";
import { Grid, Stack } from "@mui/material";
import React from "react";
import SideBarUser from "../layoutApp/components/side-bar";
import BottomNavBar from "../layoutApp/components/bottom-nav-bar";

const LayoutAppWithUserTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        minWidth: "100vw",
        justifyContent: "space-between",
        bgcolor: "#F5F5F5",
      }}
      alignItems={"center"}
    >
      {/* <HeaderBar /> */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        px={{ xs: 0, sm: "25px", md: "75px", lg: "100px" }}
        pb={{ xs: "25px", md: "75px", lg: "100px" }}
        pt={{ xs: 0, md: "50px" }}
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
          mt={{ xs: "10px", md: "80px" }}
          alignSelf={"flex-start"}
        >
          {children}
        </Grid>
      </Grid>
      {/* <BottomNavBar /> */}
      {/* <FooterBar /> */}
    </Stack>
  );
};

export default LayoutAppWithUserTab;
