"use client";

import { Paper, Stack } from "@mui/material";
import AddressHeader from "./components/AddressHeader";
import NoDataAddress from "./components/NoDataAddress";
import AddressItem from "./components/AddressItem";
import AddressEdit from "../address-edit";

export default function AddressList() {
  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        padding: "36px",
        width: "100%",
        borderRadius: "24px",
        overflowY: "auto",
        maxHeight: "943px",
      }}
    >
      <AddressHeader />
      <Stack spacing={4}>
        <AddressItem />
        <AddressItem />
        <AddressItem />
        <AddressItem />
        <AddressItem />
        <AddressItem />
      </Stack>
      <NoDataAddress isOpen={false} />
      <AddressEdit />
    </Paper>
  );
}
