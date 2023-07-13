"use client";

import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { Modal, Box, Stack, IconButton } from "@mui/material";
import Iconify from "@/common/components/Iconify";
import QRScanContainer from "./QRScanContainer";

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
    sm: "30vw",
    md: "auto",
  },
  borderRadius: { xs: 0, md: "24px" },
  backgroundColor: "black",
};
export const QRScanPopup = ({ open }: { open: boolean }) => {
  const [isFrontCamera, setFrontCamera] = useState(false);
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
            ViewFinder={() => QRScanContainer({setFrontCamera: setCamera})}
            onResult={(result, error) => {
              if (result) {
                setCode(result?.getText());
              }
            }}
            videoStyle={{
              width: "100%",
              height: "350px",
              position: "absolute",
              top: "50%",
              left: 0,
            }}
            containerStyle={{
              width: '100%',
              height: '100%',
              backgroundColor: "black",
              margin: 'auto',
            }}
            videoContainerStyle={{
              overflow: 'none',
              height: "100%",
              width: '100%',
            }}
          />
        </Box>
      </Modal>
      {/* )} */}
    </>
  );
};
