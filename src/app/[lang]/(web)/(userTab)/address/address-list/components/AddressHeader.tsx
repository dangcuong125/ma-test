"use client";
import { useDispatch } from "@/common/redux/store";
import { Typography, Stack, Button, Box } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { setIsOpenCreateForm } from "../../address-common/slice";

export default function AddressHeader() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const handleOpenCreateForm = () => {
    dispatch(setIsOpenCreateForm(true));
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      mb={"10px"}
      px={{ xs: "16px", sm: "32px" }}
    >
      <Typography
        sx={{
          color: "#1A1A1A",
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: "700",
          fontFamily: "Plus Jakarta Sans",
          mb: "10px",
        }}
      >
        {t("address.heading")}
      </Typography>
      <Button
        variant="text"
        sx={{ px: "12px", justifyContent: { xs: "flex-end" } }}
        onClick={handleOpenCreateForm}
      >
        <Box
          sx={{
            backgroundImage: "url(/assets/icons/core/add-plus.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: { xs: "20px", sm: "12px" },
            height: { xs: "20px", sm: "12px" },
            mr: { xs: 0, sm: "10px" },
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Plus Jakarta Sans",
            color: "#1F8A70",
            display: { xs: "none", sm: "flex" },
          }}
        >
          {t("address.add_btn")}
        </Typography>
      </Button>
    </Stack>
  );
}
