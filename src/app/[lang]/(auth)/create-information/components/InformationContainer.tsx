"use client";

import { Card } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import InformationForm from "./InformationForm";
import { RulePassword } from "./RulePassword";
const InformationContainer = () => {
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
      <InformationForm />
      <RulePassword />
    </Card>
  );
};

export default InformationContainer;

