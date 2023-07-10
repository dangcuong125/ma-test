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
          <Stack direction="row" alignItems="center">
            {row?.product?.productVariants[0]?.productAttributeTerms?.map(
              (item, index) => (
                <>
                  <Typography variant="body2">
                    <Box component="span" sx={{ color: "text.secondary" }}>
                      {item?.productAttribute?.productAttributeDetails[0]?.name}
                      :&nbsp;
                    </Box>
                    {item?.productAttributeTermDetails[0]?.value}
                  </Typography>
                  {index !==
                    row?.product?.productVariants[0]?.productAttributeTerms
                      ?.length -
                      1 && (
                    <Divider
                      orientation="vertical"
                      sx={{ mx: 1, height: 16 }}
                    />
                  )}
                </>
              )
            )}
          </Stack>
        </Stack>
      </TableCell>
      <TableCell align="center">{fFormatCoin(point)} xu</TableCell>
      <TableCell align="center">{quantity}</TableCell>
      <TableCell align="center">{fFormatCoin(point * quantity)} xu</TableCell>
    </TableRow>
  );
}
