import {
  Stack,
  Box,
  Button,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

export const HeaderBar = () => {
  return (
    <Stack
      direction={"row"}
      // spacing={"110px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"100px"}
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
          height: "123px",
          width: "190px",
          backgroundImage: "url('/assets/Logo.svg')",
        }}
      />
      <Box
        sx={{
          height: "48px",
          width: "33%",
          // backgroundColor: "#F3F9FB",
          // borderRadius: "10px",
        }}
      >
        <TextField
          fullWidth
          placeholder="Tìm kiếm"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#F3F9FB",
              color: "black",
              "& fieldset": {
                borderColor: "transparent",
                color: "white",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                borderColor: "aquamarine",
              },
              "&.Mui-focused fieldset": {
                borderColor: "aquamarine",
                color: "white",
              },
            },
          }}
          InputProps={{
            sx: {
              zIndex: 2,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ p: 0 }}>
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundImage: "url(/assets/icons/core/menu.svg)",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
            startAdornment:(
              <InputAdornment position="start">
                <IconButton sx={{ p: 0 }}>
                  <Box
                    sx={{
                      width: "18px",
                      height: "18px",
                      backgroundImage: "url(/assets/icons/core/search.svg)",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
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
        >
          Đăng ký/Đăng nhập
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
          Giỏ hàng
        </Button>
      </Stack>
    </Stack>
  );
};
