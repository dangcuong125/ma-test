"use client";
import { useDispatch } from "@/common/redux/store";
import { Typography, Stack, Button, Box } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function AddressHeader() {
  const { t } = useTranslation("common");

  return (
    <Stack direction={"row"} justifyContent={"space-between"} mb={"10px"}>
      <Typography
        sx={{
          color: "#1A1A1A",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Plus Jakarta Sans",
          mb: "10px",
        }}
      >
        {t("address.heading")}
      </Typography>
      <Button variant="text">
        <Box
          sx={{
            backgroundImage: "url(/assets/icons/core/add-plus.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "12px",
            height: "12px",
            mr: "10px",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Plus Jakarta Sans",
            color: "#1F8A70",
          }}
        >
          {t("address.add_btn")}
        </Typography>
      </Button>
    </Stack>
  );
}
