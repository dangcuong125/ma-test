import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

export const AddressInfo = () => {
  return (
    <Card sx={{ mb: 3, borderRadius: "16px" }} elevation={5}>
      <CardHeader
        title={<Typography variant="h6">Địa chỉ nhận hàng</Typography>}
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
            ABC
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "13px", color: "#637381" }}
          >
            0971111111
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "15px", color: "#212B36" }}
          >
            571 Quán Sứ, Láng Thượng, Cầu Giấy, Hà Nội
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
