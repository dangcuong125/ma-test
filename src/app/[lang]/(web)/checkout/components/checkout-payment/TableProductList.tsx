import { Table, TableBody, TableContainer } from "@mui/material";
import TableHeadCustom from "@/common/components/table/TableHeadCustom";
import { TABLE_PAYMENT_PRODUCT_HEAD } from "../../constant";
import TableProductListRow from "./TableProductListRow";
import { IOrderLineItemReqDto } from "../../../(userTab)/order-history/common/interface";

type Props = {
  products: IOrderLineItemReqDto[];
};

export default function TableProductList({ products }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_PAYMENT_PRODUCT_HEAD} />

        <TableBody>
          {products.map((row, index) => (
            <TableProductListRow key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
