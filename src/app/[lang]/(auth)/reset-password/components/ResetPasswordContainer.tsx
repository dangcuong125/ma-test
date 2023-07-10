"use client";

import { Card } from "@mui/material";
import ResetPasswordForm from "./ResetPasswordForm";
import { RulePassword } from "@/app/[lang]/(auth)/create-information/components/RulePassword";
const InformationContainer = () => {
  return (
    <Card
      sx={{
        width: "30vw",
        p: 3,
        minWidth: "350px",
        mx: "auto",
      }}
    >
      <ResetPasswordForm />
      <RulePassword />
    </Card>
  );
};

export default InformationContainer;

