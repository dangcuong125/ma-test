"use client";

import { Box, Paper, Stack, useMediaQuery } from "@mui/material";
import AddressHeader from "./components/AddressHeader";
import NoDataAddress from "./components/NoDataAddress";
import AddressItem from "./components/AddressItem";
import AddressEdit from "../address-edit";
import { LoadingButton } from "@mui/lab";
import AddressCreate from "../address-create";

export default function AddressList() {
  const isXs = useMediaQuery("(max-width:600px)");

  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        py: "36px",
        width: "100%",
        borderRadius: "24px",
        overflowY: "auto",
        maxHeight: { xs: "auto", md: "934px" },
      }}
    >
      <AddressHeader />
      {isXs ? (
        <>
          <Stack spacing={4} px={"16px"}>
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <LoadingButton
              variant="text"
              sx={{
                textDecoration: "underline",
                color: "rgba(31, 138, 112, 1)",
                display: !hasNextPageNotiList ? "none" : "block",
              }}
              ref={ref}
              loading={isFetchingNextPageNotiList}
              onClick={() => fetchNextPageNotiList()}
              disabled={!hasNextPageNotiList || isFetchingNextPageNotiList}
            >
              {t("notify.loadingMore")}
            </LoadingButton> */}
          </Box>
          <NoDataAddress isOpen={false} />
        </>
      ) : (
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "814px",
          }}
        >
          <Stack spacing={4} px={"32px"}>
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />
          </Stack>
          <Box sx={{ height: 0 }}>
            {/* <Button
              ref={ref}
              onClick={() => fetchNextPageNotiList()}
              disabled={!hasNextPageNotiList || isFetchingNextPageNotiList}
            /> */}
          </Box>
          <NoDataAddress isOpen={false} />
        </Box>
      )}

      <AddressCreate />
      <AddressEdit />
    </Paper>
  );
}
