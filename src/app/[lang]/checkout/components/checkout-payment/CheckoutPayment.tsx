import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import CheckoutSummary from "../CheckoutSummary";
import { useSelector } from "@/common/redux/store";
import Iconify from "@/common/components/Iconify";
import { TLink } from "@/common/components/TLink";

export default function CheckoutPayment() {
  const { cart, subtotal, discount, shipping, total } = useSelector(
    (state) => state.checkout
  );

  const handleOrder = () => {};

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
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

        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={
              <>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Địa chỉ</Typography>
                  <Button variant="text">
                    <Iconify
                      icon={"eva:edit-fill"}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />{" "}
                    Chỉnh sửa
                  </Button>
                </Stack>
              </>
            }
          />

          <CardContent sx={{ paddingTop: 0 }}>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: "100%",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                Nguyen Van A
              </Typography>
              <Typography
                sx={{ fontWeight: 400, fontSize: "13px", color: "#637381" }}
              >
                0974562587
              </Typography>
              <Typography
                sx={{ fontWeight: 400, fontSize: "15px", color: "#212B36" }}
              >
                Ha Noi
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={
              <>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="h6">Sản phẩm</Typography>
                  <Button variant="text">
                    <Iconify
                      icon={"eva:edit-fill"}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />{" "}
                    Chỉnh sửa
                  </Button>
                </Stack>
              </>
            }
          />
        </Card>

        <Button
          color="inherit"
          component={TLink}
          href={"/"}
          startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
        >
          Quay lại
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckoutSummary total={total} discount={discount} subtotal={total} />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={cart.length === 0}
          onClick={handleOrder}
          sx={{ backgroundColor: "rgba(31, 138, 112, 1)", borderRadius: 5 }}
        >
          Thanh toán <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
        </Button>
      </Grid>
    </Grid>
  );
}
