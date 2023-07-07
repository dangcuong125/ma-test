"use client";

import { Box, Button, Paper, Stack, useMediaQuery } from "@mui/material";
import AddressHeader from "./components/AddressHeader";
import NoDataAddress from "./components/NoDataAddress";
import AddressItem from "./components/AddressItem";
import AddressEdit from "../address-edit";
import { LoadingButton } from "@mui/lab";
import AddressCreate from "../address-create";
import { useGetAddressList } from "./hooks/useGetAddressList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

export default function AddressList() {
  const isXs = useMediaQuery("(max-width:600px)");
  const { t } = useTranslation("common");
  const { ref, inView } = useInView();
  const searchParams = {
    page: 1,
    limit: 5,
  };
  const {
    dataAddressList,
    fetchNextPageAddressList,
    hasNextPageAddressList,
    isFetchingNextPageAddressList,
    isLoadingAddressList,
  } = useGetAddressList(searchParams);

  const listAddress =
    dataAddressList?.pages?.map((item) => item?.items).flat() || [];
  const isNotFound = !listAddress.length;

  useEffect(() => {
    if (inView && !isXs) {
      fetchNextPageAddressList();
    }
  }, [inView]);

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
            {listAddress.map((item) => (
              <AddressItem key={item.id} addressItem={item} />
            ))}
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <LoadingButton
              variant="text"
              sx={{
                textDecoration: "underline",
                color: "rgba(31, 138, 112, 1)",
                display: !hasNextPageAddressList ? "none" : "block",
              }}
              ref={ref}
              loading={isFetchingNextPageAddressList}
              onClick={() => fetchNextPageAddressList()}
              disabled={
                !hasNextPageAddressList || isFetchingNextPageAddressList
              }
            >
              {t("address.loadingMore")}
            </LoadingButton>
          </Box>
          <NoDataAddress isOpen={isNotFound} />
        </>
      ) : (
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: "814px",
          }}
        >
          <Stack spacing={4} px={"32px"}>
            {listAddress.map((item) => (
              <AddressItem key={item.id} addressItem={item} />
            ))}
          </Stack>
          <Box sx={{ height: 0 }}>
            <Button
              ref={ref}
              onClick={() => fetchNextPageAddressList()}
              disabled={
                !hasNextPageAddressList || isFetchingNextPageAddressList
              }
            />
          </Box>
          <NoDataAddress isOpen={isNotFound} />
        </Box>
      )}

      <AddressCreate />
      <AddressEdit />
    </Paper>
  );
}
