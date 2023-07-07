import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
    Breadcrumbs,
    Grid,
    Link,
    Pagination,
    Stack,
    Typography
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IProductItems } from "../interfaces";
import { useGetListCategory } from "../hooks/useGetListCategory";

export default function ListProduct() {
  const route = useRouter();
  const {
    dataHomeConfig, isRefetchingHomeConfig, isLoading
  } = useGetListCategory( 34);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Typography
    key="2" color="primary"
    >
      Sản phẩm HOT
    </Typography>
  ];
  return (
    <Grid item md={9}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator="·"
          sx={{ fontWeight: "700 !important" }}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container spacing={{sm:4,xs:1}} height={"100%"} width={"100% !important"}>
          {dataHomeConfig?.map((itemProd :IProductItems, index:number) => (
            <Grid item xs={6} sm={4} key={index}>
              <ProductItemDefault
                title={itemProd?.productDetails[0]?.name}
                srcImg={itemProd?.thumbnail?.url}
                property={itemProd?.productDetails[0]?.shortDescription }
                price={itemProd?.price?.normalPrice}
                onClick={() => route.push('/productDetail')}
              />
            </Grid>
          ))}
          <Pagination
            count={10}
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
