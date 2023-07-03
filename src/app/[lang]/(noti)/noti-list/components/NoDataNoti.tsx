"use client";

import { Box, Stack } from "@mui/material";

type Props = {
  isOpen: boolean;
};

export default function NoDataNoti({ isOpen }: Props) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      display={isOpen ? "flex" : "none"}
    >
      <Box
        sx={{
          width: "294px",
          height: "292px",
          backgroundImage: "url(/assets/icons/core/empty-noti.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </Stack>
  );
}
