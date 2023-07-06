import { Card, CardHeader, Typography } from "@mui/material";
import TableProductList from "../../../../checkout/components/checkout-payment/TableProductList";

export const ProductInfo = () => {
  return (
    <Card sx={{ mb: 3 }} elevation={5}>
      <CardHeader
        title={
          <>
            <Typography variant="h6">Sản phẩm</Typography>
          </>
        }
      />

      <TableProductList products={[]} />
    </Card>
  );
};
