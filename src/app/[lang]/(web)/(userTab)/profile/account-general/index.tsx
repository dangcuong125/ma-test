"use client";
import { Paper } from "@mui/material";
import AccountGeneralForm from "./components/AccountGeneralForm";

const AccountGeneral = () => {
  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        width: "100%",
        borderRadius: "24px",
        maxHeight: { xs: "auto", md: "934px" },
        padding: "36px",
      }}
    >
      <AccountGeneralForm />
    </Paper>
  );
};

export default AccountGeneral;
