"use client";

import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { Modal, Box } from "@mui/material";
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
          <QrReader
              scanDelay={300}
              constraints={{
                facingMode: isFrontCamera ? "user" : "enviroment",
              }}
              ViewFinder={() => QRScanContainer(setCamera)}
              onResult={(result, error) => {
                if (result) {
                  setCode(result?.getText());
                }
              }}
              videoStyle={{
                height: "100%",
                backgroundSize: "cover",
              }}
            />
        </Box>
      </Modal>
      {/* )} */}
    </>
  );
};

