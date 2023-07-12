"use client";

import { Box, Stack, Typography } from "@mui/material";
import { INotiItem } from "../../noti-common/interface";
import { convertStringToHtml } from "../../noti-common/utils/convertStringToHtml";

type Props = {
  notiItem: INotiItem;
};

export default function NotiItem({ notiItem }: Props) {
  const { isRead, noti } = notiItem;
  const { title, timeSent, type, content } = noti;

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        position={"relative"}
        py={"16px"}
        px={{ xs: "16px", sm: "32px" }}
        gap={"16px"}
        justifyContent={"space-between"}
        sx={{
          ":hover": {
            cursor: "pointer",
            backgroundColor: "#eae5e542",
          },
        }}
      >
        <Box
          sx={{
            width: 76,
            height: 76,
            backgroundImage:
              "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <Stack
          spacing={1.5}
          maxWidth={{ xs: "70%", sm: "86%", lg: "90%" }}
          flex={1}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontsize: "16px",
                fontFamily: "Plus Jakarta Sans",
                color: "#191919",
                width: "100%",
              }}
            >
              {title}
            </Box>
            {/* {!isRead && (
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#00AB55",
                  borderRadius: "50%",
                }}
              />
            )} */}
          </Stack>
          <Stack spacing={0.5} width={"100%"}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Plus Jakarta Sans",
                color: "#1A1F36",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {convertStringToHtml(content)}
            </Typography>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Plus Jakarta Sans",
                color: "#98A1B3",
              }}
            >
              {timeSent}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
