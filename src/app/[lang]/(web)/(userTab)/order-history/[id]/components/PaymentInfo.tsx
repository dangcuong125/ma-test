import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { fFormatCoin } from "@/common/utils/formatNumber";

type Props = {
  totalPoint: number;
  totalShipping: number;
};

export const PaymentInfo = ({ totalPoint, totalShipping }: Props) => {
  return (
    <Card sx={{ mb: 3 }} elevation={5}>
      <CardHeader title="Chi tiết đơn hàng" />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Tổng giá
            </Typography>
            <Typography variant="subtitle2">
              {/* {fFormatCoin(subtotal)} xu */}
              {fFormatCoin(totalPoint)} xu
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Giảm giá
            </Typography>
            <Typography variant="subtitle2">
              {/* {discount ? fCurrency(-discount) : "-"} */}
              {totalShipping === 0 || !totalShipping ? "-" : totalShipping}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Phí vận chuyển
            </Typography>
            <Typography variant="subtitle2">
              {/* {shipping ? fCurrency(shipping) : displayShipping} */}-
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Tổng thanh toán</Typography>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1" sx={{ color: "error.main" }}>
                {fFormatCoin(
                  totalShipping ? totalPoint + totalShipping : totalPoint
                )}{" "}
                xu
                {/* {fFormatCoin(total)} xu */}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                (Chưa bao gồm VAT)
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
