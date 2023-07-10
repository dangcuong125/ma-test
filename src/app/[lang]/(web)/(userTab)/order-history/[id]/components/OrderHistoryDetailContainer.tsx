"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { PATH_HOME } from "@/common/constants/path.constants";
import { TitleHeader } from "../../components/TitleHeader";
import { AddressInfo } from "./AddressInfo";
import { ProductInfo } from "./ProductInfo";
import { PaymentInfo } from "./PaymentInfo";
import { useRouter } from "next/navigation";
import { useGetDetailOrder } from "../../hooks/useGetDetailOrder";

type Props = {
  orderId: string;
};

const OrderHistoryDetailContainer = ({ orderId }: Props) => {
  const router = useRouter();

  const { orderDetail, isLoading } = useGetDetailOrder(parseInt(orderId));

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          background: "white",
          borderRadius: "24px",
          padding: 3,
        }}
      >
        <TitleHeader title={`Chi tiết đơn hàng #${orderDetail?.displayId}`} />
        <AddressInfo address={orderDetail?.orderShipping} />
        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={<Typography variant="h6">Phương thức giao hàng</Typography>}
          />

          <CardContent>
            <Stack
              direction="row"
              spacing={3}
              alignItems={"center"}
              sx={{
                paddingY: 2,
                width: "100%",
                borderRadius: "10px",
                border: "0.5px solid rgba(145, 158, 171, 0.32)",
              }}
            >
              <Radio checked />
              <Typography sx={{ fontWeight: 400, fontSize: "15px" }}>
                Thanh toán khi nhận hàng
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <ProductInfo data={orderDetail?.orderLineItemReqDto} />
        <PaymentInfo
          totalPoint={
            orderDetail?.orderLineItemReqDto.reduce((qty, object) => {
              return qty + (object.point || 0) * object.quantity;
            }, 0) || 0
          }
          totalShipping={orderDetail?.shippingTotal || 0}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            direction: "row",
          }}
        >
          <Button
            size="small"
            color="inherit"
            startIcon={
              <Iconify
                icon={"material-symbols:west"}
                color={"rgba(31, 138, 112, 1)"}
              />
            }
            sx={{
              fontSize: "16px",
              color: "rgba(31, 138, 112, 1)",
            }}
            onClick={() => {
              router.push(PATH_HOME.order_history.list);
            }}
          >
            Quay lại
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{
              background: "rgba(31, 138, 112, 1)",
              borderRadius: "40px",
              padding: "16px 24px",
            }}
          >
            Đặt lại đơn hàng
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default OrderHistoryDetailContainer;
