"use client";

import Iconify from "@/common/components/Iconify";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";

const SocialLogin = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent={"space-between"}
      width={"70%"}
      mx={"auto"}
    >
      <IconButton
        sx={{
          py: 1,
          px: 3,
          border: 1,
          borderColor: "#dce0e4",
          borderRadius: "8px",
        }}
      >
        <Iconify
          icon={"logos:facebook"}
          sx={{
            width: "2rem",
            m: 'auto'
          }}
        />
      </IconButton>
      <IconButton
        sx={{
          py: 1,
          px: 3,
          border: 1,
          borderColor: "#dce0e4",
          borderRadius: "8px",
          alignItems: "center",
        }}
      >
        <Iconify
          icon={"flat-color-icons:google"}
          sx={{
            width: "2rem",
            m: 'auto'
          }}
        />
      </IconButton>
    </Stack>
  );
};

export default SocialLogin;

