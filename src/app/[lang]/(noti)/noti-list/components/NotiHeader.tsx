"use client";
import { Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function NotiHeader() {
  const { t } = useTranslation("common");
  return (
    <Typography
      sx={{
        color: "#1A1A1A",
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: "Plus Jakarta Sans",
        mb: "10px",
      }}
    >
      {t("noti.noti_list.heading")}
    </Typography>
  );
}
