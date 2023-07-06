import { TLink } from "@/common/components/TLink";
import {
  Stack,
  Box,
  Button,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBox from "./components/SearchBox";
import { PATH_WEB } from "@/common/constants/path.constants";

export const HeaderBar = () => {
  const route = useRouter();
  return (
    <Stack
      direction={"row"}
      // spacing={"110px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={{ xs: 0, sm: "25px", md: "75px", lg: "100px" }}
      boxShadow={3}
      width={"100%"}
      maxHeight={"140px"}
      position={"sticky"}
      top={0}
      zIndex={99}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          height: { md: "123px", sm: "90px", xs: "50px" },
          width: { md: "190px", sm: "150x", xs: "100px" },
          backgroundImage: "url('/assets/Logo.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          padding: "10px",
          cursor: 'pointer',
        }}
        onClick={() => route.push(PATH_WEB.root)}
      />
      <Box
        sx={{
          height: "48px",
          width: "33%",
          display: { xs: "none", sm: "flex" },
          // backgroundColor: "#F3F9FB",
          // borderRadius: "10px",
        }}
      >
        <SearchBox/>
      </Box>
      <Stack direction={"row"} spacing={"20px"}>
        <Button
          sx={{
            color: "#666666",
          }}
          startIcon={
            <Box
              sx={{
                backgroundImage: "url(/assets/icons/core/user.svg)",
                width: "24px",
                height: "24px",
              }}
            />
          }
          onClick={() => route.push('/login')}
        >
          <Typography display={{ xs: "none", md: "flex" }}>
            Đăng ký/Đăng nhập
          </Typography>
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          sx={{
            color: "#666666",
          }}
          startIcon={
            <Box
              sx={{
                backgroundImage: "url(/assets/icons/core/shopping-cart.svg)",
                width: "24px",
                height: "24px",
              }}
            />
          }
        >
          <Typography display={{ xs: "none", md: "flex" }}>Giỏ hàng</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
