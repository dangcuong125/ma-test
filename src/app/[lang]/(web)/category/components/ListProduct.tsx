import { ProductItemDefault } from "@/common/components/product/ProductItem";
import {
    Breadcrumbs,
    Grid,
    Link,
    Pagination,
    Stack,
    Typography
} from "@mui/material";

export default function ListProduct() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Rau củ
    </Link>,
    <Typography key="3" color="primary">
      Hoa quả nhiệt đới
    </Typography>,
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
        <Grid container spacing={4} height={"100%"} width={"100% !important"}>
          {Array.from(Array(20)).map((itemProd, index) => (
            <Grid item xs={4} key={index}>
              <ProductItemDefault
                title="Đào hồng"
                srcImg="/Subtract.png"
                property="1KG"
                price={70000}
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
