import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import {
  InputAdornment,
  IconButton,
  Box,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import { MOCK_DATA_SEARCH } from "../../../constants";
import ATypographyEllipsis from "@/common/components/customComponent/ATyporgraphyEllipsis";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import Image from "@/common/components/Image";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

export default function SearchBox() {
  const route = useRouter();
  return (
    <Autocomplete
      disablePortal
      options={MOCK_DATA_SEARCH}
      sx={{
        width: "100%",
        "& .MuiAutocomplete-popper": {
          ":focus": {
            transition: "0",
            transform: "none!important",
          }, // Disable the animation
        },

        // '& .MuiAutocomplete-popupIndicator': {
        //   display: 'none', // Hide the popup icon
        // },
      }}
      popupIcon={
        <IconButton sx={{ p: 0 }}>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              backgroundImage: "url(/assets/icons/core/menu.svg)",
            }}
          />
        </IconButton>
      }
      renderInput={(params) => (
        <TextField
          {...params}
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
                borderColor: "#1F8A70",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1F8A70",
                color: "white",
              },
            },
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
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
            ),
          }}
        />
      )}
      renderOption={(props, options) => {
        return (
          <li {...props} style={{ width: "100%" }}>
            <Stack
              onClick={() => route.push(PATH_HOME.product.detail(options?.id))}
              width={"100%"}
              direction="row"
              spacing={"16px"}
              alignItems={"center"}
              // sx={{
              //   "&:hover": {
              //     borderRadius: "8px",
              //     background: "#FFF9DE",
              //   },
              // }}
            >
              <Avatar
                src={options?.img}
                alt=""
                sx={{
                  borderRadius: "12px",
                }}
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                overflow="hidden"
                // spacing={2}
              >
                <Stack spacing={1} width={{md: '70%', xs: '100%'}}>
                  <ATypographyEllipsis
                    fontWeight={600}
                    fontSize={"18px"}
                    lineHeight={"24px"}
                  >
                    {options?.label}
                  </ATypographyEllipsis>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      color: "grey",
                    }}
                  >
                    Màu sắc:{" "}
                    <ATypographyEllipsis color={"#212B36"}>
                      {options?.color}
                    </ATypographyEllipsis>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      color: "grey",
                    }}
                  >
                    Giá trị:{" "}
                    <ATypographyEllipsis color={"#212B36"}>
                      {formatNumberToCurrency(options?.price)}
                    </ATypographyEllipsis>
                  </Box>
                </Stack>
                <IconButton
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'flex',
                    },
                    background:
                      "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
                    // ":hover": {
                    //   background: "black",
                    // },
                  }}
                >
                  <Image
                    alt=""
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                    src={"/assets/icons/core/add-to-cart.svg"}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </li>
        );
      }}
    />
  );
}
