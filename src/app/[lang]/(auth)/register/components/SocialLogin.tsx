"use client";

import Iconify from "@/common/components/Iconify";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import RegisterWithFacebook from "./RegisterWithFB";
import RegisterWithGoogle from "./RegisterWithGoogle";

const SocialLogin = () => {

  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent={"space-between"}
      width={"70%"}
      mx={"auto"}
    >
      <RegisterWithFacebook />
      <RegisterWithGoogle />
    </Stack>
  );
};

export default SocialLogin;

