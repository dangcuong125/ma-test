import { Stack, Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import Iconify from "@/common/components/Iconify";
import { SliderMenuItem } from "./SlideMenuItem";
import { useCallback, useRef } from "react";

type Props = {
  dataMenu: any;
};

export const MenuCategory = (props: Props) => {
  const { dataMenu } = props;
  const sliderRef = useRef<any>(null);

  const handleClickPrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleClickNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
        <Stack direction={"row"} spacing={"17px"}>
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
              textTransform: "capitalize",
            }}
          >
            {dataMenu?.title}
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={"9px"} className="swiper-nav-btns">
          <IconButton
            sx={{
              ":hover": {
                background:
                  "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
              },
              width: "48px",
              height: "48px",
              backgroundColor: "#E1E2E6",
            }}
            onClick={() => handleClickPrev()}
          >
            <Iconify icon={"solar:arrow-left-outline"} />
          </IconButton>
          <IconButton
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#E1E2E6",
              ":hover": {
                background:
                  "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
              },
            }}
            onClick={() => handleClickNext()}
          >
            <Iconify icon={"solar:arrow-right-outline"} />
          </IconButton>
        </Stack>
      </Stack>
      <Box>
        <Swiper
          ref={sliderRef}
          className="swiperMenuCategory"
          modules={[Navigation, Pagination]}
          style={{
            width: "100%",
            // height: "60%",
            // border: "1px solid black",
          }}
          spaceBetween={"20px"}
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
          {/* {MOCK_DATA_PRODUCT?.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderMenuItem
                srcImg={item?.srcImg}
                title="welcome to valhalla saaaaaaaaaasss"
              />
            </SwiperSlide>
          ))} */}
          {dataMenu?.data?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <SliderMenuItem srcImg={item?.image} title={item?.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
};
