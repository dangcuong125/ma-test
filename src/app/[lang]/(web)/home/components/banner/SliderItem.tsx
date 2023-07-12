import Iconify from "@/common/components/Iconify";
import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";

type Props = {
  srcImg: string;
  onClick?: VoidFunction;
};

export const SliderBannerItem = (props: Props) => {
  const { srcImg, onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        // borderRadius: '24px',
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        aspectRatio: '16/9',
        // backgroundSize: "auto",
        WebkitBackgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundImage: `url(${srcImg})`,
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          zIndex: 2,
          top: "30%",
          bottom: "30%",
          left: "12.5%",
          maxWidth: "582px",
        }}
        spacing={"24px"}
      >
        <Typography variant="h2"
          sx={{
            textShadow: "1px 1px white",
          }}
        >
          Siêu thị thu nhỏ cho căn bếp của bạn
        </Typography>
        <Typography variant="h3" color={"#1F8A70"}
           sx={{
            textShadow: "1px 1px white",
          }}
        >
          #Giao hàng miễn phí
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            borderRadius: "60px",
            maxWidth: { lg: '30%', xs: '50%'},
            padding: "16px 24x 16px 24px",
            minHeight: "56px",
            
          }}
          endIcon={<Iconify icon={"solar:arrow-right-outline"} />}
        >
          <Typography sx={{
            maxWidth: "80%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",

          }}>Tham gia ngay</Typography>
        </Button>
      </Stack>
    </Box>
  );
};
