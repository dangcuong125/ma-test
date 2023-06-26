"use client";
import { Box } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function Text() {
  const { t } = useTranslation();
  return (
    <Box style={{ textAlign: "center", padding: "20px 0px" }}>
      {t("common:welcome")}
    </Box>
  );
}
