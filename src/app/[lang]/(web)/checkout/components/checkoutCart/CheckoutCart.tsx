"use client";
import {
  Button,
  Card,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import EmptyCart from "../EmptyCart";
import Iconify from "@/common/components/Iconify";
import { TLink } from "@/common/components/TLink";
import CheckoutProductList from "./CheckoutProductList";
import {
  onNextStep,
  removeCartItem,
  setCart,
  setTotal,
  setUpdateQuantity,
} from "../../order.slice";
import CheckoutSummary from "../CheckoutSummary";
import { ICartItem } from "../../interface";
import { useEffect } from "react";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useDeleteCartItem } from "../../hooks/useDeleteCart";
import { useUpdateCartItem } from "../../hooks/useUpdateCartItem";

type Props = {
  data: ICartItem[];
};

export default function CheckoutCart({ data }: Props) {
  const { cart, subtotal, discount, shipping, total } = useSelector(
    (state) => state.checkout
  );
  const dispatch = useDispatch();

  const isEmptyCart = cart.length === 0;

  const { mutate: deleteCartItem } = useDeleteCartItem(
    () => {
      console.log("success");
    },
    () => {
      dispatch(setCart(data));
    }
  );

  const { mutate: updateCartItem } = useUpdateCartItem(
    () => {
      console.log("success");
    },
    () => {
      dispatch(setCart(data));
    }
  );

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleApplyDiscount = (value: number) => {};

  const onDelete = async (id: string) => {
    dispatch(removeCartItem(parseInt(id)));
    deleteCartItem({ productToVariantIds: [parseInt(id)] });
  };

  const onIncreaseQuantity = async (id: string, quantity: number) => {
    dispatch(setUpdateQuantity({ id: parseInt(id), quantity: quantity + 1 }));
    updateCartItem({
      productToVariantIds: [parseInt(id)],
      quantity: quantity + 1,
    });
  };

  const onDecreaseQuantity = async (id: string, quantity: number) => {
    dispatch(setUpdateQuantity({ id: parseInt(id), quantity: quantity - 1 }));
    updateCartItem({
      productToVariantIds: [parseInt(id)],
      quantity: quantity - 1,
    });
  };

  useEffect(() => {
    let totalPrize = 0;
    cart?.forEach((item) => {
      if (item?.product?.productVariants.length > 0) {
        const variant = item?.product?.productVariants[0];
        totalPrize += variant?.productVariantPoint?.salePoint
          ? variant?.productVariantPoint?.salePoint
          : variant?.productVariantPoint?.point * item.quantity;
      }
    });
    dispatch(setTotal(totalPrize));
  }, [cart]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }} elevation={5}>
          <CardHeader
            title={
              <Typography variant="h6">
                Giỏ hàng
                <Typography component={"span"} sx={{ color: "text.secondary" }}>
                  &nbsp;&nbsp;({cart?.length || 0} sản phẩm)
                </Typography>
              </Typography>
            }
            sx={{ mb: 3 }}
          />
          {!isEmptyCart ? (
            // <Scrollbar>
            <CheckoutProductList
              products={cart}
              onDelete={onDelete}
              onDecreaseQuantity={onDecreaseQuantity}
              onIncreaseQuantity={onIncreaseQuantity}
            />
          ) : (
            // </Scrollbar>
            <EmptyCart
              title="Không có sản phẩm trong giỏ quà"
              description=""
              img="/assets/illustration_empty_cart.svg"
            />
          )}
        </Card>
        <Button
          color="inherit"
          component={TLink}
          href={"/"}
          startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
        >
          Quay lại mua sắm
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckoutSummary
          enableDiscount
          total={total}
          discount={discount}
          subtotal={total}
          onApplyDiscount={handleApplyDiscount}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={cart.length === 0}
          onClick={handleNextStep}
          sx={{ backgroundColor: "rgba(31, 138, 112, 1)", borderRadius: 5 }}
        >
          Thanh toán <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
        </Button>
      </Grid>
    </Grid>
  );
}
