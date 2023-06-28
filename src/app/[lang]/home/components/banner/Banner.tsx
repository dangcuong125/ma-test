'use client'
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'src/common/styles/css/homeStyle.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { SliderBannerItem } from "./SliderItem";

export const Banner = () => {
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
        <SwiperSlide
           style={{
            width: "100%",
            height: "100%",
          }}
        >
          <SliderBannerItem
            srcImg={'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
            onClick={() => console.log('Heklo')}
          />
        </SwiperSlide>
        <SwiperSlide 
           style={{
            width: "100%",
            height: "100%",
          }}
        >
          <SliderBannerItem
            srcImg={'https://images.unsplash.com/photo-1687606746214-71885aa91e79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'}
            onClick={() => console.log('Heklo')}
          />
        </SwiperSlide>
        <SwiperSlide 
           style={{
            width: "100%",
            height: "100%",
          }}
        >
          <SliderBannerItem
            srcImg={'https://images.unsplash.com/photo-1686854010079-455de3e8db41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
            onClick={() => console.log('Heklo')}
          />
        </SwiperSlide>
        <SwiperSlide 
           style={{
            width: "100%",
            height: "100%",
          }}
        >
          <SliderBannerItem
            srcImg={'https://images.unsplash.com/photo-1686854010079-455de3e8db41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
            onClick={() => console.log('Heklo')}
          />
        </SwiperSlide>
        <SwiperSlide 
           style={{
            width: "100%",
            height: "100%",
          }}
        >
          <SliderBannerItem
            srcImg={'https://images.unsplash.com/photo-1686854010079-455de3e8db41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
            onClick={() => console.log('Heklo')}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
