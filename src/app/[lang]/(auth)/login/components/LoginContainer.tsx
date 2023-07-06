"use client";

import React from "react";
import { Card, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import useTranslation from "next-translate/useTranslation";
import { PATH_AUTH } from "@/common/constants/path.constants";
import { TLink } from "@/common/components/TLink";
const LoginContainer = () => {
  const { t } = useTranslation("common");
  return (
    <Card
      sx={{
        width: "30vw",
        p: 3,
        minWidth: "350px",
        mx: "auto",
      }}
    >
      <LoginForm />
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {t("auth.dont_have_account")}{" "}
        <TLink href={PATH_AUTH.register} style={{ color: "#1F8A70" }}>
          {t("auth.get_started")}
        </TLink>
      </Typography>
    </Card>
  );
};

export default LoginContainer;
