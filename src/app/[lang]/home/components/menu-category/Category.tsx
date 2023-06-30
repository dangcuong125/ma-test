import { Stack, Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import Iconify from "@/common/components/Iconify";
import { SliderMenuItem } from "./SlideMenuItem";
import { MOCK_DATA_PRODUCT } from "../../constants";

export const MenuCategory = () => {
  return (
    <Stack
      sx={{
        minHeight: "300px",
        width: "100%",
        
          paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" },
        
        justifyContent: "space-between",
        // border: "1px solid black",
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        // sx={{ border: "1px solid black" }}
       
      >
        <Stack direction={"row"} spacing={"17px"}
        
        >
          <Box
            sx={{
              // height: "100%",
              minWidth: "21px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            }}
          />

          <Typography
            sx={{
              fontSize: "32px",
              lineHeight: "36px",
              fontWeight: 700,
            }}
          >
            Danh mục
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={"9px"}>
          <IconButton
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#E1E2E6",
            }}
          >
            <Iconify icon={"solar:arrow-left-outline"} />
          </IconButton>
          <IconButton
            sx={{ width: "48px", height: "48px", backgroundColor: "#E1E2E6" }}
          >
            <Iconify icon={"solar:arrow-right-outline"} />
          </IconButton>
        </Stack>
      </Stack>
      <Box>

      <Swiper
        className="swiperMenuCategory"
        pagination={true}
        // navigation={true}
        modules={[Navigation]}
        style={{
          width: "100%",
          // height: "60%",
          // border: "1px solid black",
          
        }}
        spaceBetween={'20px'}
        breakpoints={{
          0: {
            navigation: true,
          },
          400: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
            lazyPreloadPrevNext: 1,    
          },
          1000: {
            slidesPerView: 5,
            navigation: false,
          },
          1440: {
            slidesPerView: 7,
            navigation: false,
          },
          1600: {
            slidesPerView: 9,
          },
        }}
      >
        {MOCK_DATA_PRODUCT?.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderMenuItem
              srcImg={item?.srcImg}
              title="welcome to valhalla saaaaaaaaaasss"
            />
          </SwiperSlide>
        ))}
      </Swiper>
              </Box>
    </Stack>
  );
};
