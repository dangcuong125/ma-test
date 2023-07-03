"use client";
import { Box, Grid, Stack } from "@mui/material";
import { ReactNode } from "react";
import { HeaderBar } from "./common/components/Header";
import { FooterBar } from "../(web)/layoutApp/components/footer/Footer";
import Slogan from "./common/components/Slogan";
import { useDispatch, useSelector } from "@/common/redux/store";
import OtpModal from "./common/components/OtpModal";
import { setOpenOtpModal } from "./login/reducers/auth.slice";

export default function LayoutAuth({ children }: { children: ReactNode }) {
  const { isOpenOtpModal } = useSelector(state => state.authLogin);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setOpenOtpModal(false));
  }
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "space-between",
      }}
    >
      <HeaderBar />
      <Box
        sx={{
          width: "100%",
          height: "90%",
          py: "2%",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={5}
            display={{ xs: "none", sm: "flex" }}
          >
            <Slogan />
          </Grid>
          <Grid item xs={12} sm={7}>
            {children}
          </Grid>
        </Grid>
      </Box>
      <FooterBar />
      {
        isOpenOtpModal && (
          <OtpModal count={120} onClose={handleCloseModal} />
        )
      }
    </Stack>
  );
}
