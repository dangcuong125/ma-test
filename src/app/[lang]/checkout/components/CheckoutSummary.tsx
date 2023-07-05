import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "@/common/components/Iconify";
import { fCurrency, fFormatCoin } from "../../../../common/utils/formatNumber";

type Props = {
  total: number;
  discount?: number;
  subtotal: number;
  shipping?: number;
  onEdit?: VoidFunction;
  enableEdit?: boolean;
  onApplyDiscount?: (discount: number) => void;
  enableDiscount?: boolean;
};

export default function CheckoutSummary({
  total,
  onEdit,
  discount,
  subtotal,
  shipping,
  onApplyDiscount,
  enableEdit = false,
  enableDiscount = false,
}: Props) {
  const displayShipping = shipping !== null ? "Free" : "-";

  return (
    <Card sx={{ mb: 3 }} elevation={5}>
      <CardHeader
        title="Chi tiết đơn hàng"
        action={
          enableEdit && (
            <Button
              size="small"
              onClick={onEdit}
              startIcon={<Iconify icon={"eva:edit-fill"} />}
            >
              Edit
            </Button>
          )
        }
      />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Tổng giá
            </Typography>
            <Typography variant="subtitle2">
              {fFormatCoin(subtotal)} xu
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Giảm giá
            </Typography>
            <Typography variant="subtitle2">
              {discount ? fCurrency(-discount) : "-"}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Phí vận chuyển
            </Typography>
            <Typography variant="subtitle2">
              {shipping ? fCurrency(shipping) : displayShipping}
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Tổng thanh toán</Typography>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1" sx={{ color: "error.main" }}>
                {fFormatCoin(total)} xu
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                (Chưa bao gồm VAT)
              </Typography>
            </Box>
          </Stack>

          {enableDiscount && onApplyDiscount && (
            <TextField
              fullWidth
              placeholder="Mã giảm giá"
              value=""
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => onApplyDiscount(5)}
                      sx={{ mr: -0.5 }}
                    >
                      Sử dụng
                    </Button>
                  </InputAdornment>
                ),
                startAdornment: (
                  <Iconify
                    icon={"iconamoon:discount-light"}
                    sx={{ mr: 1, width: 40, height: 40 }}
                  />
                ),
              }}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
