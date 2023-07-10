import Iconify from "@/common/components/Iconify";
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import { MOCK_COMBO_DATA_PRODUCT, MOCK_DATA_PRODUCT } from "../../constants";
import { ComboItemDefault } from "@/common/components/product/ComboItem";
import { useRouter } from "next/navigation";

type Props = {
  dataMenu: any;
};

export const ComboPopular = (props: Props) => {
  const {dataMenu} = props;
  const router = useRouter();

  return (
    <Stack
      sx={{
        width: "100%",
        paddingX: { lg: "100px", md: "75px", sm: "50px", xs: "25px" },
        justifyContent: "space-between",
        // border: "1px solid black",
        backgroundColor: "#D5F1DB",
        pt: "50px",
        pb: "100px",
      }}
      spacing={"50px"}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        width={"100%"}
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
            }}
          >
            {dataMenu?.title}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={"50px"} alignItems={"center"} width={"100%"}>
        <Grid
          container
          rowGap={4}
          columnGap={2}
        //   spacing={1}
          p={0}
          m={0}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"flex-start"}
          columns={17}
        >
          {/* {MOCK_COMBO_DATA_PRODUCT?.map((item, index) => (
            <Grid item key={index} width={"100%"} md={6.5} sm={8} lg={5.5} xl={4}>
              <ComboItemDefault
                title={item?.title}
                srcImg={item?.srcImg}
                property={item?.property}
                price={item?.price}
                flashPrice={item?.flashPrice}
              />
            </Grid>
          ))} */}
          {dataMenu?.data?.products?.map((item: any, index: any) => (
            <Grid item key={index} width={"100%"} md={6.5} sm={8} lg={5.5} xl={4}>
              <ComboItemDefault
                title={item?.productDetails[0]?.name}
                srcImg={item?.thumbnail?.url}
                property={item?.productDetails[0]?.shortDescription}
                price={item?.price?.normalPrice}
                flashPrice={item?.price?.salePrice}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
            borderRadius: "60px",
            width: "fit-content",
            padding: "16px 24px 16px 24px",
            minHeight: "56px",
            textTransform: "none",
          }}
          endIcon={<Iconify icon={"solar:arrow-right-outline"} />}
          onClick={()=>{router.push(`category/${dataMenu?.data?.categoryId}`)}}

        >
          Xem tất cả
        </Button>
      </Stack>
    </Stack>
  );
};
