'use client';
import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
  Grid,
  Link,
  Pagination,
  Stack,
  Typography
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IProductItems } from "../interfaces";
import { useGetNameCategory } from "../hooks/useGetNameCategory";
import useTranslation from "next-translate/useTranslation";
import { getProjects } from "../services";
import { useGetProductList } from "../hooks/useGetProductList";
import BreadCrumbs from "@/common/components/customComponent/BreadCrumbs";
import { PATH_HOME } from "@/common/constants/path.constants";
type Props = {
  categoryId: number
};
function ListProduct(props: Props) {
  const { categoryId } = props
  const route = useRouter();
  const { t } = useTranslation("common")
  const {
    dataTotalUnread, isLoadingTotalUnread
  } = useGetNameCategory(categoryId);
  const {
    dataListProd, isLoadingListProd
  } = useGetProductList(categoryId);
  
  return (
    <Grid item md={9}>
      <Stack spacing={2}>
      <BreadCrumbs
      links={[
        {name:t('category.home'), href:"/"},
        {name: dataTotalUnread?.categoryDetails[0]?.name }
        ]}
      />

        <Grid container spacing={{ sm: 4, xs: 1 }} height={"100%"} width={"100% !important"}>
          {dataListProd?.items.map((itemProd: IProductItems, index: number) => (
            <Grid item xs={6} sm={4} key={index}>
              <ProductItemDefault
                title={itemProd?.productDetails[0]?.name}
                srcImg={itemProd?.thumbnail?.url}
                property={itemProd?.productDetails[0]?.shortDescription}
                price={itemProd?.price?.normalPrice}
                onClick={() => route.push(PATH_HOME.product.detail(itemProd?.id))}
              />
            </Grid>
          ))}
          <Pagination
            count={dataListProd?.meta?.totalPages}
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingY: "50px",
              width: "100%",
              "& .css-lxelle-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
              {
                bgcolor: "#7fc5b8 !important",
              },
            }}
          />
        </Grid>
      </Stack>
    </Grid>
  );
};

export default ListProduct;
