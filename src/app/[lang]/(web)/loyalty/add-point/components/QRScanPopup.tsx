"use client";

import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { Modal, Box, Stack, IconButton } from "@mui/material";
import Iconify from "@/common/components/Iconify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    sm: "30vw",
  },
  minWidth: "350px",
  height: {
    xs: "100%",
    md: "auto",
  },
  borderRadius: "24px",
  overflow: "hidden",
};
export const QRScanPopup = ({ open }: { open: boolean }) => {
  const [isFrontCamera, setFrontCamera] = useState(false);
  const [isAccessCamera, setAccessCamera] = useState(false);
  const [code, setCode] = useState<string>("");
  console.log(code);
  const setCamera = () => {
    setFrontCamera(!isFrontCamera);
  };

  return (
    <>
      {/* {isAccessCamera && ( */}
      <Modal open={open}>
        <Box sx={style}>
          <>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                zIndex: 2,
                position: "absolute",
                top: 10,
              }}
            >
              <IconButton onClick={() => setFrontCamera(!isFrontCamera)}>
                <Iconify
                  icon={"majesticons:close"}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            </Stack>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                minWidth: "225px",
                width: "20vw",
                height: "20vw",
                minHeight: "225px",
                zIndex: 2,
                border: "10px solid",
                borderColor: "#1F8A70",
                borderRadius: '24px'
              }}
            ></Box>
          </>
          <QrReader
            scanDelay={300}
            constraints={{
              facingMode: isFrontCamera ? "user" : "enviroment",
            }}
            onResult={(result, error) => {
              if (result) {
                setCode(result?.getText());
              }
            }}
            videoStyle={{
              height: "100%",
              width: 'auto',
            }}
          />
        </Box>
      </Modal>
      {/* )} */}
    </>
  );
};
