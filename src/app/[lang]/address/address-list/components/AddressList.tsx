"use client";

import { Stack } from "@mui/material";
import AddressItem from "./AddressItem";

export default function AddressList() {
  return (
    <Stack spacing={4}>
      <AddressItem />
      <AddressItem />
      <AddressItem />
      <AddressItem />
      <AddressItem />
      <AddressItem />
    </Stack>
  );
}
