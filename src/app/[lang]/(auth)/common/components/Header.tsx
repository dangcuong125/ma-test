"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const HeaderBar = () => {
  const router = useRouter();
  return (
    <Box
      pl={"5vw"}
      boxShadow={3}
      width={"100%"}
      maxHeight={"100px"}
      position={"sticky"}
      top={0}
      zIndex={99}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          height: "20vw",
          width: "30vw",
          backgroundImage: "url('/assets/Logo.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maxWidth: "160px",
          maxHeight: "70px",
        }}
        onClick={() => router.push("/")}
      />
    </Box>
  );
};
