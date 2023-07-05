import {
  Box,
  Divider,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { ICartItem } from "../../interface";
import Image from "next/image";
import { fCurrency, fFormatCoin } from "@/common/utils/formatNumber";
import Iconify from "@/common/components/Iconify";
import { QuantityBox } from "./QuantityBox";

type CheckoutProductListRowProps = {
  row: ICartItem;
  onDelete: VoidFunction;
  onDecrease: VoidFunction;
  onIncrease: VoidFunction;
};

export default function CheckoutProductListRow({
  row,
  onDelete,
  onDecrease,
  onIncrease,
}: CheckoutProductListRowProps) {
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
      <TableCell>
        <QuantityBox
          quantity={quantity}
          available={row?.product?.productVariants[0]?.quantity}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </TableCell>

      <TableCell align="center">{fFormatCoin(point * quantity)} xu</TableCell>

      <TableCell align="left">
        <IconButton onClick={onDelete}>
          <Iconify icon={"eva:trash-2-outline"} width={20} height={20} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
