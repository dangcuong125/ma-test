import {
  Box,
  Divider,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { ICartItem } from "../../interface";
import Image from "next/image";
import { fFormatCoin } from "@/common/utils/formatNumber";

type Props = {
  row: ICartItem;
};

export default function TableProductListRow({ row }: Props) {
  const { product, quantity, productToVariantIds } = row;

  const pointVariant = row?.product?.productVariants[0]?.productVariantPoint;
  const point = pointVariant?.salePoint
    ? pointVariant?.salePoint
    : pointVariant?.point;

  return (
    <TableRow>
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Image
          alt="product image"
          src={row?.product?.thumbnail?.url}
          width={64}
          height={64}
          style={{ borderRadius: 1.5, marginRight: 6 }}
        />

        <Stack spacing={0.5}>
          <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
            {row?.product?.productDetails[0]?.name}
          </Typography>
          {row?.product?.productVariants[0]?.productAttributeTerms?.map(
            (item, index) => (
              <Stack direction="row" alignItems="center" key={index}>
                <Typography variant="body2">
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    size:&nbsp;
                  </Box>
                  {item?.productAttribute?.productAttributeDetails[0]?.name}
                </Typography>

                <Divider orientation="vertical" sx={{ mx: 1, height: 16 }} />

                <Typography variant="body2">
                  <Box component="span" sx={{ color: "text.secondary" }}>
                    color:&nbsp;
                  </Box>
                  {item?.productAttributeTermDetails[0]?.value}
                </Typography>
              </Stack>
            )
          )}
        </Stack>
      </TableCell>
      <TableCell align="center">{fFormatCoin(point)} xu</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell align="center">{fFormatCoin(point * quantity)} xu</TableCell>
    </TableRow>
  );
}
