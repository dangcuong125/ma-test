"use client";

import React from "react";
import { Card, Divider, Typography } from "@mui/material";
import SocialLogin from "./SocialLogin";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { PATH_AUTH } from "@/common/constants/path.constants";
import RegisterForm from "./RegisterForm";
const RegisterContainer = () => {
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
      <RegisterForm />
      <Typography variant="body2" align="left" sx={{ mt: 3 }}>
        {t("auth.register_term")}{" "}
        <Link href={PATH_AUTH.register} style={{ color: "#1F8A70" }}>
          {t("auth.terms_of_service")}
        </Link>{" "}
        {t("and")}{" "}
        <Link href={PATH_AUTH.register} style={{ color: "#1F8A70" }}>
          {t("auth.privacy_policy")}{" "}
        </Link>
        {t("auth.end_register_term")}
      </Typography>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        {t("auth.already_have_account")}{" "}
        <Link href={PATH_AUTH.login} style={{ color: "#1F8A70" }}>
          {t("auth.login")}
        </Link>
      </Typography>
      <Divider
        sx={{
          my: 3,
        }}
      >
        {t("auth.or")}
      </Divider>

      <SocialLogin />
    </Card>
  );
};

export default RegisterContainer;

