"use client";
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
import ATypographyEllipsis from "@/common/components/customComponent/ATyporgraphyEllipsis";
import { formatNumberToCurrency } from "@/common/utils/common.utils";
import Image from "@/common/components/Image";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useSearchProd from "../hooks/useSearchProd";
import useDebounce from "../hooks/useDebounce";
import { dispatch, useSelector } from "@/common/redux/store";
import { setSearchText, setValueSearch } from "../../../search.slice";

export default function SearchBox() {
  const route = useRouter();
  const { searchText, valueSearch } = useSelector((state) => state.search);
  const debouncedSearchText = useDebounce<string>(searchText, 500);
  const searchParams: {
    page: number;
    limit: number;
    searchText?: string;
  } = {
    page: 1,
    limit: 20,
  };
  if (debouncedSearchText?.length > 2) {
    searchParams.searchText = debouncedSearchText;
  }

  const { data, fetchNextPage, isFetchingNextPage, isLoading } =
    useSearchProd(searchParams);

  const handleScroll = (event: any) => {
    const listBoxNode = event?.currentTarget;
    const position = listBoxNode?.scrollTop + listBoxNode?.clientHeight;
    if (listBoxNode.scrollHeight - position <= 1) {
      fetchNextPage();
    }
  };
  React.useEffect(() => {
    console.log(data?.pages?.map((item) => item?.items).flat());
  }, [data]);
  const options = data?.pages?.map((item) => item?.items).flat() || [];
  return (
    <Autocomplete
      value={valueSearch}
      options={options}
      getOptionLabel={(option) => option?.productDetails?.[0]?.name || ""}
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
      onChange={(event, newInputValue) => {
        dispatch(setValueSearch(newInputValue?.productDetails[0]?.name));
      }}
      inputValue={searchText}
      onInputChange={(event, newInputValue) => {
        dispatch(setSearchText(newInputValue));
      }}
      loading={isLoading}
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
              onClick={() => route.push(PATH_HOME.product.detail)}
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
                src={options?.thumbnail?.url}
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
                <Stack spacing={1} width={{ md: "70%", xs: "100%" }}>
                  <ATypographyEllipsis
                    fontWeight={600}
                    fontSize={"18px"}
                    lineHeight={"24px"}
                  >
                    {options?.productDetails[0]?.name}
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
                      {formatNumberToCurrency(options?.price?.normalPrice)}
                    </ATypographyEllipsis>
                  </Box>
                </Stack>
                <IconButton
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
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
      ListboxProps={{
        onScroll: handleScroll,
      }}
    />
  );
}
