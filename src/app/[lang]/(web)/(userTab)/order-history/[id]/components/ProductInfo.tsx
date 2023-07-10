import { Card, CardHeader, Typography } from "@mui/material";
import TableProductList from "../../../../checkout/components/checkout-payment/TableProductList";
import { IOrderLineItemReqDto } from "../../common/interface";

type Props = {
  data: IOrderLineItemReqDto[] | undefined;
};

export const ProductInfo = ({ data }: Props) => {
  return (
    <Card sx={{ mb: 3 }} elevation={5}>
      <CardHeader
        title={
          <>
            <Typography variant="h6">Sản phẩm</Typography>
          </>
        }
      />

      <TableProductList products={data || []} />
    </Card>
  );
};
