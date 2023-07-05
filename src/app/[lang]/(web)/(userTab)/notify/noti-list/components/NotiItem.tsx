"use client";

import { Box, Stack } from "@mui/material";
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
        my={"16px"}
        gap={"16px"}
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
        <Stack spacing={1.5} width={"100%"}>
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
          <Stack spacing={0.5}>
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Plus Jakarta Sans",
                color: "#1A1F36",
                display: "inline-block",
                maxWidth: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {convertStringToHtml(content)}
            </Box>
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
