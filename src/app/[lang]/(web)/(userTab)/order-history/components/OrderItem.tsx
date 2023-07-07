import { Paper, Stack, Typography, Divider } from "@mui/material";
import { ProductOrderItem } from "./ProductOrderItem";
import { IconOnHolding } from "./icons/IconOnHolding";
import { TLink } from "@/common/components/TLink";
import { PATH_HOME } from "@/common/constants/path.constants";

export const OrderItem = () => {
  return (
    <Paper elevation={5} sx={{ paddingY: 2, paddingX: 3 }}>
      <Stack direction="column" spacing={1} width={"100%"}>
        <TLink
          href={`${PATH_HOME.order_history.list}/${1}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              color: "#191919",
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: 1,
            }}
          >
            Mã đơn hàng # 123DYA2112234
          </Typography>
        </TLink>
        <Divider sx={{ borderStyle: "dashed" }} />

        <ProductOrderItem />

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingY={1}
        >
          <Stack direction="row" alignItems={"center"} spacing={0.5}>
            <IconOnHolding />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(31, 138, 112, 1)",
              }}
            >
              Đã tiếp nhận
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(31, 138, 112, 1)",
              padding: 0.5,
              border: "1px solid rgba(31, 138, 112, 1)",
            }}
          >
            Miễn phí giao hàng
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
