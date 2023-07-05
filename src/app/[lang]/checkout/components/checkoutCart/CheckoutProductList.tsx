import { Table, TableBody, TableContainer } from "@mui/material";
import { TABLE_CART_PRODUCT_HEAD } from "../../constant";
import CheckoutProductListRow from "./CheckoutProductListRow";
import { ICartItem } from "../../interface";
import TableHeadCustom from "../../../../../common/components/table/TableHeadCustom";

type Props = {
  products: ICartItem[];
  onDelete: (id: string) => void;
  onDecreaseQuantity: (id: string, quantity: number) => void;
  onIncreaseQuantity: (id: string, quantity: number) => void;
};

export default function CheckoutProductList({
  products,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_CART_PRODUCT_HEAD} />

        <TableBody>
          {products.map((row) => (
            <CheckoutProductListRow
              key={row.productToVariantIds[0]}
              row={row}
              onDelete={() => onDelete(row.productToVariantIds[0].toString())}
              onDecrease={() =>
                onDecreaseQuantity(
                  row.productToVariantIds[0].toString(),
                  row?.quantity
                )
              }
              onIncrease={() =>
                onIncreaseQuantity(
                  row.productToVariantIds[0].toString(),
                  row?.quantity
                )
              }
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
