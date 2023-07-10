import {
  Stack,
  Box,
  Breadcrumbs,
  Typography,
  Link,
  Grid,
  alpha,
  IconButton,
  useTheme,
  Divider,
  Button,
  Card,
  Tab,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import Iconify from "@/common/components/Iconify";
import Image from "@/common/components/Image";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import useTranslation from "next-translate/useTranslation";

export const SliderProductRecomnend = () => {
  const swiperRef = useRef<any>(null);
  const {t} =useTranslation("common")
  const [buttonSlider, setButtonSlider] = useState({
    currentIndex: 0,
    totalSlides: 0,
  });
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { activeIndex, slides } = swiperRef.current.swiper;
      const totalSlides = slides.length;
      setButtonSlider({ currentIndex: activeIndex, totalSlides });
    }
  };
  return (
    <Stack spacing={3}>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack display={"flex"} direction={"row"} spacing={3}>
          <Box
            width={{ xs: "11px", sm: "22px" }}
            borderRadius={0.5}
            sx={{ background: "#1F8A70" }}
          />
          <Typography
            fontWeight={700}
            lineHeight={"50px"}
            fontSize={{ xs: 15, sm: 26 }}
          >
                       {t('product.productRecommend')}

          </Typography>
        </Stack>
        <Stack
          display={"flex"}
          alignItems={"center"}
          direction={"row"}
          spacing={1}
        >
          <Button
            onClick={goPrev}
            sx={{
              height: { xs: 38, sm: 48 },
              background:
                buttonSlider?.currentIndex === 0 ? "#1F8A70" : "#E1E2E6",
              borderRadius: "100px",
              minWidth: { xs: 40, sm: 48 },
              color: buttonSlider?.currentIndex === 0 ? "white" : "black",
            }}
          >
            
            <Iconify height={24} width={24} icon={"ic:round-arrow-back"} />
          </Button>
          <Button
            onClick={goNext}
            sx={{
              height: { xs: 38, sm: 48 },
              background:
                buttonSlider?.currentIndex === buttonSlider?.totalSlides - 4
                  ? "#1F8A70"
                  : "#E1E2E6",
              borderRadius: "100px",
              minWidth: { xs: 40, sm: 48 },
              color:
                buttonSlider?.currentIndex === buttonSlider?.totalSlides - 4
                  ? "white"
                  : "black",
            }}
          >
            <Iconify height={24} width={24} icon={"ic:round-arrow-forward"} />
          </Button>
        </Stack>
      </Stack>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 2,
            lazyPreloadPrevNext: 1,
          },
          1000: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {Array.from(Array(20)).map((itemProd, index) => (
          <SwiperSlide key={index}>
            <ProductItemDefault
              title="Đào hồng"
              srcImg="/Subtract.png"
              property="1KG"
              price={70000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
