"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

const AddPointInfo = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "90vw",
          sm: "60vw",
          md: "40vw",
        },
        mr: "5vw",
        mt: '5%'
      }}
    >
      <Typography variant="h3">
        Cảm ơn bạn đã chọn sản phẩm của{" "}
        <span style={{ color: "#1F8A70" }}>ShopGrocery</span>
      </Typography>

      <Typography variant="body1">
        Bạn đã tích thành công <span style={{ color: "#1F8A70" }}>100 xu</span>!
      </Typography>

      <Typography variant="body1">
        Bạn còn 50 xu để thăng hạn Gold
      </Typography>
    </Box>
  );
};

export default AddPointInfo;
