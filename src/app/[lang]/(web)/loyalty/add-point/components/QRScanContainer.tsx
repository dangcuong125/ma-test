"use client";

import { useDispatch } from "@/common/redux/store";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { setOpenScanPopup } from "../../common/slice";
import Iconify from "@/common/components/Iconify";

const QRScanContainer = (setFrontCamera: VoidFunction) => {
  const dispatch = useDispatch();
  return (
    <>
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        zIndex: 2,
        position: 'absolute',
        top: 0
      }}
    >
      <IconButton onClick={setFrontCamera}>
        <Iconify
          icon={"majesticons:close"}
          sx={{ width: "24px", height: "24px" }}
        />
      </IconButton>
    </Stack>
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        minWidth: '225px',
        width: '20vw',
        height: '20vw',
        minHeight: '225px',
        zIndex: 2,
        border: '10px solid',
        borderColor: '#1F8A70'
    }}>
    </Box>
    </>
  );
};

export default QRScanContainer;

