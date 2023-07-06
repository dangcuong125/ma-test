"use client";

import { useDispatch } from "@/common/redux/store";
import { Paper, Stack, Box, Button } from "@mui/material";
import { setIsOpenEditForm } from "../../address-common/slice";

export default function AddressItem() {
  const dispatch = useDispatch();

  const handleOpenEditForm = () => {
    dispatch(setIsOpenEditForm(true));
  };

  return (
    <Paper
      sx={{
        padding: { xs: "10px", md: "24px" },
        borderRadius: "16px",
        width: "100%",
        boxShadow: "0 12px 24px -4px rgba(145, 158, 171, 0.12)",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={0.5}>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Plus Jakarta Sans",
                color: "#212B36",
              }}
            >
              Trang Bùi
            </Box>
            <Box
              sx={{
                width: "86px",
                height: "26px",
                backgroundColor: "rgba(24, 144, 255, 0.16)",
                borderRadius: "6px",
                p: "1px 8px",
              }}
            >
              <Box
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "Plus Jakarta Sans",
                  color: "rgba(12, 83, 183, 1)",
                }}
              >
                Mặc định
              </Box>
            </Box>
          </Stack>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(99, 115, 129, 1)",
            }}
          >
            0397122522
          </Box>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(33, 43, 54, 1)",
            }}
          >
            1190 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội
          </Box>
        </Stack>
        <Button variant="text" onClick={handleOpenEditForm}>
          <Box
            sx={{
              backgroundImage: "url(/assets/icons/core/edit-btn.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "24px",
              height: "24px",
            }}
          />
        </Button>
      </Stack>
    </Paper>
  );
}
