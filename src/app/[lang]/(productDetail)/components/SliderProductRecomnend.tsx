import { Stack, Box, Breadcrumbs, Typography, Link, Grid, alpha, IconButton, useTheme, Divider, Button, Card, Tab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Iconify from "@/common/components/Iconify";
import Image from "@/common/components/Image";
import { ProductItemDefault } from "@/common/components/product/ProductItem";




export const SliderProductRecomnend = () => {
    const swiperRef = useRef<Slider | null>(null);
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
            <Stack display={"flex"} direction={"row"} justifyContent={"space-between"}>
                <Stack display={"flex"} direction={"row"} spacing={3}>
                    <Box width={"22px"} borderRadius={0.5} sx={{background:"#1F8A70"}}></Box>
                <Typography fontWeight={700} lineHeight={"50px"}  variant="h4">Sản phẩm tương tự</Typography>
                </Stack>
                <Stack display={"flex"} direction={"row"} spacing={1}>
                    <Button onClick={goPrev} sx={{ height: 48, background: buttonSlider?.currentIndex === 0 ? "#1F8A70" : "#E1E2E6", borderRadius: "100px", minWidth: 48, color: buttonSlider?.currentIndex === 0 ? "white" : "black" }}> <Iconify height={24} width={24} icon={'ic:round-arrow-back'} /></Button>
                    <Button onClick={goNext} sx={{ height: 48, background: buttonSlider?.currentIndex === (buttonSlider?.totalSlides - 4) ? "#1F8A70" : "#E1E2E6", borderRadius: "100px", minWidth: 48, color: buttonSlider?.currentIndex === (buttonSlider?.totalSlides - 4) ? "white" : "black" }}>
                        <Iconify height={24} width={24} icon={'ic:round-arrow-forward'} /></Button>
                </Stack>

            </Stack>
            <Swiper
                ref={swiperRef}
                style={{ height: "600px" }}
                slidesPerView={4}
                spaceBetween={20}
                // pagination={{
                //   clickable: true,
                // }}
                // modules={[Pagination]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
            >
                {Array.from(Array(20)).map((itemProd, index) => (
                    <SwiperSlide style={{ height: "400px" }} key={index} >
                        <Stack>
                            <ProductItemDefault
                                title="Đào hồng"
                                srcImg='/Subtract.png'
                                property="1KG"
                                price={70000}
                            />
                        </Stack>
                    </SwiperSlide>
                ))}


            </Swiper>

        </Stack>
    );
};
