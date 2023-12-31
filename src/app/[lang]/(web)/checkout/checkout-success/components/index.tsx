"use client";

import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";

export default function CheckoutSuccessContainer() {
  const router = useRouter();
  return (
    <Container maxWidth="lg" sx={{ paddingX: 3, paddingY: 10 }}>
      <Stack width={"80%"} marginX={"auto"} spacing={5}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "#666E80",
            fontWeight: 700,
            textAlign: "center",
            paddingBottom: 5,
          }}
        >
          Wow, đơn hàng của bạn đã được đặt thành công !
        </Typography>

        <Image
          src="/assets/checkout-success.svg"
          alt="checkout-success"
          width={250}
          height={250}
          style={{ margin: "0 auto" }}
        />

        <Stack
          direction={"row"}
          spacing={2}
          marginTop={3}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "rgba(31, 138, 112, 1)",
              borderRadius: "60px",
              padding: "16px 24px",
            }}
          >
            E-Voucher của tôi
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "60px",
              padding: "16px 24px",
              borderColor: "rgba(31, 138, 112, 1)",
              color: "rgba(31, 138, 112, 1)",
              fontWeight: 500,
            }}
            onClick={() => {
              router.push(PATH_HOME.order_history.list);
            }}
          >
            Tình trạng đơn hàng
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
