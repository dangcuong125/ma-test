import { Stack, Box, Typography, IconButton } from "@mui/material";
import Image from "../Image";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import { useAddToCart } from "@/common/hooks/useAddToCart";
import useShowSnackbar from "@/common/hooks/useMessage";

type Props = {
  title?: string;
  property?: string;
  srcImg?: string;
  price?: number;
  onClick?: VoidFunction;
  onClickAddToCart?: VoidFunction;
};

export const ProductItemDefault = (props: Props) => {
  const { title, property, srcImg, price, onClick, onClickAddToCart } = props;
  const router = useRouter();


  return (
    <Stack
      sx={{
        overflow: "hidden",
        height: { xs: "300px", sm: "450px" },
        width: "100%",
        justifyContent: "space-between",
        borderRadius: "24px",
        border: "1px solid #E1E2E6",
        boxShadow: "0px 14px 21px rgba(218, 218, 218, 0.15)",

        zIndex: 9999,

        ":hover": {
          cursor: "pointer",
          opacity: 0.7,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          // borderRadius: "24px",
          height: "70%",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
          backgroundColor: "white",
        }}
        onClick={onClick}
      />
      <Stack
        sx={{
          paddingBottom: { xs: "20px", sm: "27px" },
          pt: "2px",
          px: { xs: "16px", sm: "24px" },
        }}
        // width={"100%"}
      >
        <Stack py={"10px"} onClick={onClick}>
          <Typography
            fontSize={{ xs: 20, sm: 24 }}
            fontWeight={700}
            // lineHeight={"24px"}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {title}
          </Typography>
          <Typography
            fontSize={18}
            color={"#98A1B3"}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {property}
          </Typography>
        </Stack>
        <Stack
          alignItems={"baseline"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography
            fontSize={{ xs: 14, sm: 24 }}
            color={"#1F8A70"}
            fontWeight={700}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "70%",
            }}
          >
            {formatNumberToCurrency(price)}
          </Typography>
          <IconButton
            sx={{
              background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
              ":hover": {
                background: "black",
              },
            }}
            onClick={onClickAddToCart}
          >
            <Image
              alt=""
              sx={{
                width: { xs: "24px", sm: "32px" },
                height: { xs: "24px", sm: "32px" },
              }}
              src={"/assets/icons/core/add-to-cart.svg"}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
