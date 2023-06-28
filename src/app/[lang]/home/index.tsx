'use client'
import { Stack, Box } from "@mui/material";
import { Banner } from "./components/banner/Banner";
export default function HomeApp() {
  return (
    <Stack minHeight={'1000px'}>
      <Banner/>
    </Stack>
  );
}
