import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";

import { SliderBannerItem } from "./SliderItem";

type Props = {
  dataMenu: any;
};

export const Banner = (props: Props) => {
  const { dataMenu } = props;

  return (
    <Box
      sx={{
        height: "550px",
        width: "100%",
      }}
    >
      <Swiper
        className="swiperBanner"
        pagination={true}
        modules={[Pagination]}
        loop={true}
        style={{
          width: "100%",
          height: "100%",
        }}
        slidesPerView={1}
      >
        {dataMenu?.data?.map((item: any, index: number) => (
          <SwiperSlide
            style={{
              width: "100%",
              height: "100%",
            }}
            key={index}
          >
            <SliderBannerItem
              srcImg={item?.image}
              onClick={() => console.log("Heklo")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
