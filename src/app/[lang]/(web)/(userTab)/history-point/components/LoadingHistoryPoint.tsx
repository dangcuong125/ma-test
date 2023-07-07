import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

export default function LoadingHistoryPoint() {
  return (
    <>
      {Array(5).map((_, index) => (
        <Stack direction={"row"} marginTop={"40px"} key={index}>
          <Skeleton variant="rectangular" width={100} height={100} />
          <Box
            paddingLeft={"10px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px", width: "100%" }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px", width: "100%" }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "18px", width: "100%" }}
              animation="wave"
            />
          </Box>
        </Stack>
      ))}
    </>
  );
}
