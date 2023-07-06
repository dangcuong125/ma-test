import {
  Stack,
  Box,
  styled,
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
import Slider from "react-slick";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { FILTER_COLOR_OPTIONS, THUMB_SIZE, images } from "../../constants";
import { useRef, useState, useEffect } from "react";
import Image from "@/common/components/Image";
import ColorSinglePicker from "@/common/components/hook-form/ColorSinglePicker";
import { Controller, useForm } from "react-hook-form";
import { FormProvider, RHFSelect } from "@/common/components/hook-form";
import Iconify from "@/common/components/Iconify";
import { STATUS } from "../../../category/constants";
import { ItemDelivery } from "./components/ItemDelivery";

const RootStyle = styled("div")(({ theme }) => ({
  "& .slick-slide": {
    float: theme.direction === "rtl" ? "right" : "left",
    "&:focus": { outline: "none" },
  },
}));
const ArrowStyle = styled(IconButton)(({ theme }) => ({
  padding: 6,
  opacity: 0.48,
  color: theme.palette.common.white,
  "&:hover": { opacity: 1 },
}));
export const VariantProduct = () => {
  const theme = useTheme();

  const isRTL = theme.direction === "rtl";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider>();
  const [value, setValues] = useState("1");

  const [nav2, setNav2] = useState<Slider>();

  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);
  const methods = useForm({
    defaultValues: {
      colors: [],
      color: "",
      quantity: 1,
    },
  });
  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);
  const settings1 = {
    speed: 320,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };
  const settings2 = {
    speed: 320,
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: "0px",
    slidesToShow: images.length > 3 ? 3 : images.length,
  };
  const handlePrevious = () => {
    slider2.current?.slickPrev();
  };

  const handleNext = () => {
    slider2.current?.slickNext();
  };
  const onSubmit = async (data: any) => {};

  return (
    <Grid
      container
      height={"100%"}
      sx={{
        gap: { md: "50px", xs: 0 },
      }}
    >
      <Grid item xs={12} md={5.5} lg={5}>
        <RootStyle>
          <Box sx={{ p: 1 }}>
            <Box
              sx={{
                zIndex: 0,
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Slider {...settings1} asNavFor={nav2} ref={slider1}>
                {images.map((img) => (
                  <Image
                    key={img}
                    alt="large image"
                    src={img}
                    ratio="1/1"
                    sx={{ cursor: "zoom-in" }}
                  />
                ))}
              </Slider>
            </Box>
          </Box>
          <Stack display={"flex"} direction={"row"}>
          <ArrowStyle sx={{position:"relative",
left:0,display:{xs:"none",sm:"block"}}} size="small" onClick={handlePrevious}>
              {leftIcon(isRTL)}
            </ArrowStyle>
          <Box
            sx={{
              mx: "auto",
              "& .slick-current .isActive": { opacity: 1 },
              ...(images.length === 1 && { maxWidth: THUMB_SIZE * 1 + 16 }),
              ...(images.length === 2 && { maxWidth: THUMB_SIZE * 2 + 32 }),
              ...(images.length === 3 && { maxWidth: THUMB_SIZE * 3 + 48 }),
              ...(images.length === 4 && { maxWidth: THUMB_SIZE * 3 + 48 }),
              ...(images.length >= 5 && { maxWidth: THUMB_SIZE * 6 }),
              ...(images.length > 2 && {
                position: "relative",
                "&:before, &:after": {
                  top: 0,
                  zIndex: 9,
                  content: "''",
                  height: "100%",
                  position: "absolute",
                  width: (THUMB_SIZE * 2) / 3,
                  backgroundImage: (theme) =>
                    `linear-gradient(to left, ${alpha(
                      theme.palette.background.paper,
                      0
                    )} 0%, ${theme.palette.background.paper} 100%)`,
                },
                "&:after": { right: 0, transform: "scaleX(-1)" },
                overflow: "hidden",
              }),
            }}
          >
         
            <Slider {...settings2} asNavFor={nav1} ref={slider2}>
              {images.map((img, index) => (
                <Box key={img} sx={{ px: 0.75 }}>
                  <Image
                    disabledEffect
                    alt="thumb image"
                    src={img}
                    sx={{
                      width: THUMB_SIZE,
                      height: THUMB_SIZE,
                      borderRadius: 1.5,
                      cursor: "pointer",
                      ...(currentIndex === index && {
                        border: (theme) =>
                          `solid 3px ${theme.palette.primary.main}`,
                      }),
                    }}
                  />
                </Box>
              ))}
            </Slider>
          
          </Box>
          <ArrowStyle sx={{position:"relative",
right:0,display:{xs:"none",sm:"block"}}} size="small"  onClick={handleNext}>
              {rightIcon(isRTL)}
            </ArrowStyle>
            </Stack>
        </RootStyle>
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Typography
              sx={{
                width: "81px",
                fontSize: "12px",
                borderRadius: "6px",
                textAlign: "center",
                fontWeight: 400,
                color: "#B72136",
                backgroundColor: "#ff484229",
              }}
            >
              Khuyến mãi
            </Typography>
            <Stack>
              <Typography variant="h3">Súp lơ xanh</Typography>
              <Typography variant="h4" sx={{ color: "#98A1B3" }}>
                Súp lơ xanh trồng tại Đà Lạt
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h3">50.000VND</Typography>
              <Typography
                variant="h4"
                sx={{ color: "#98A1B3", textDecoration: "line-through" }}
              >
                50.000VND
              </Typography>
            </Stack>
            <Divider />
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1" sx={{ color: "#666E80" }}>
                Chọn màu sắc
              </Typography>
              <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <ColorSinglePicker
                    colors={FILTER_COLOR_OPTIONS}
                    value={field.value}
                    onChange={field.onChange}
                    sx={{
                      ...(FILTER_COLOR_OPTIONS.length > 4 && {
                        maxWidth: 144,
                        justifyContent: "flex-end",
                      }),
                    }}
                  />
                )}
              />
            </Stack>
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle1" sx={{ color: "#666E80" }}>
                Chọn khối lượng
              </Typography>
              <Stack width={"50%"}>
                <RHFSelect name="country" label="Chọn khối lượng">
                  <option></option>
                  {STATUS.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </RHFSelect>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textAlign: "end",
                    py: "6px",
                  }}
                >
                  Bảng khối lượng
                </Typography>
              </Stack>
            </Stack>

            <Divider />
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Incrementer
                name="quantity"
                quantity={watch().quantity}
                available={72}
                onIncrementQuantity={() =>
                  setValue("quantity", watch().quantity + 1)
                }
                onDecrementQuantity={() =>
                  setValue("quantity", watch().quantity - 1)
                }
              />
              <Button
                endIcon={
                  <Iconify icon={"formkit:arrowright"} width={24} height={24} />
                }
                sx={{
                  background: "#1F8A70",
                  color: "white",
                  width: "60%",
                  borderRadius: "30px",
                  fontSize: "18px",
                }}
              >
                Thêm vào giỏ hàng
              </Button>
            </Stack>
            <Stack
              border={"1px solid #E4E4E4"}
              spacing={1}
              p={2}
              borderRadius={1}
            >
              <ItemDelivery
                title="Giao hàng miễn phí"
                description="Enter your Postal code for Delivery Availability"
                srcImg="/Frame.svg"
              />
              <Divider />
              <ItemDelivery
                title="Giao hàng miễn phí"
                description="Enter your Postal code for Delivery Availability"
                srcImg="/Frame.svg"
              />
            </Stack>
          </Stack>
        </FormProvider>
      </Grid>
    </Grid>
  );
};

const leftIcon = (isRTL?: boolean) => (
  <Iconify
    icon={"iconamoon:arrow-right-2"}
    sx={{
      width: 30,
      height: 30,
      color:"black",

      transform: " scaleX(-1)",
      ...(isRTL && { transform: " scaleX(1)" }),
    }}
  />
);

const rightIcon = (isRTL?: boolean) => (
  <Iconify
    icon={"iconamoon:arrow-right-2"}
    sx={{
      width: 30,
      height: 30,
      color:"black",
      ...(isRTL && { transform: " scaleX(-1)" }),
    }}
  />
);

type IncrementerProps = {
  name: string;
  quantity: number;
  available: number;
  onIncrementQuantity: VoidFunction;
  onDecrementQuantity: VoidFunction;
};

function Incrementer({
  available,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
}: IncrementerProps) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        borderColor: "transparent",
        background: "#F3F3F3",
        width: "35%",
        justifyContent: "center",
      }}
    >
      <IconButton
        size="small"
        color="inherit"
        disabled={quantity <= 1}
        onClick={onDecrementQuantity}
      >
        <Iconify icon={"eva:minus-fill"} width={14} height={14} />
      </IconButton>

      <Typography
        variant="body2"
        component="span"
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          width: 40,
          textAlign: "center",
        }}
      >
        {quantity}
      </Typography>

      <IconButton
        size="small"
        color="inherit"
        disabled={quantity >= available}
        onClick={onIncrementQuantity}
      >
        <Iconify icon={"eva:plus-fill"} width={14} height={14} />
      </IconButton>
    </Box>
  );
}
