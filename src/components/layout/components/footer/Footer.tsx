import {
  Stack,
  Box,
  Button,
  Divider,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import { ICON_SOCIAL, QUICK_LINK, USER_FEATURES } from "./constants";

export const FooterBar = () => {
  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "black", pb: "24px" }}
      spacing={"104px"}
    >
      <Grid
        direction={"row"}
        sx={{
          pt: "80px",
          pl: "135px",
          pr: "58px",
          color: "white",
          justifyContent: "space-between",
        }}
        spacing={"87px"}
        container
      >
        <Grid item alignItems={"flex-start"}>
          <Stack spacing={"24px"}>
            <Typography variant="h3">Shop Grocery</Typography>
            <Typography variant="h5">Đăng ký</Typography>
            <Typography>Giảm 10% cho order đầu tiên!</Typography>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "white",
                    color: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "aquamarine",
                    color: "white",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          backgroundImage:
                            "url(/assets/icons/core/icon-send.svg)",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={"24px"}>
            <Typography variant="h5"> Hỗ trợ</Typography>
            <Stack spacing={"16px"}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  maxWidth: "175px",
                }}
              >
                169 Nguyễn Ngọc Vũ, Trung Hoà, Cầu Giấy
              </Typography>
              <Typography>shop-grocery@support.com</Typography>
              <Typography>+88015-88888-9999</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <List
            subheader={
              <Typography sx={{ marginBottom: "24px" }} variant="h5">
                Tài khoản
              </Typography>
            }
          >
            {USER_FEATURES?.map((feature, index) => (
              <ListItem
                key={index}
                sx={{ p: 0, mb: "16px", textTransform: "capitalize" }}
              >
                {feature}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <List
            subheader={
              <Typography sx={{ marginBottom: "24px" }} variant="h5">
                Quick Link
              </Typography>
            }
          >
            {QUICK_LINK?.map((feature, index) => (
              <ListItem
                key={index}
                sx={{ p: 0, mb: "16px", textTransform: "capitalize" }}
              >
                {feature}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <Stack spacing={"24px"}>
            <Typography variant="h5">Download App</Typography>
            <Stack spacing={"8px"}>
              <Typography sx={{ fontSize: "12px" }}>
                Giảm 100K khi tải App
              </Typography>
              <Stack direction={"row"} spacing={"8px"}>
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    backgroundImage: "url(/assets/icons/core/qr-code.svg)",
                  }}
                />
                <Stack spacing={"8px"}>
                  <Box
                    sx={{
                      width: "106px",
                      height: "32px",
                      backgroundImage: "url(/assets/icons/core/googleplay.svg)",
                    }}
                  />
                  <Box
                    sx={{
                      width: "106px",
                      height: "36px",
                      backgroundImage: "url(/assets/icons/core/appstore.svg)",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={"24px"}>
              {ICON_SOCIAL?.map((icon, index) => (
                <Box
                key={index}
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundImage: `url(${icon?.src})`,
                }}
              />
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="body2" color="white" textAlign={"center"}>
        Copyright ShopGrocery 2023. All right reserved
      </Typography>
    </Stack>
  );
};
