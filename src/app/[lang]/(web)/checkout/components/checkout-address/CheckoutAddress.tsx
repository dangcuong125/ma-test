"use client";
import { Box, Button, FormControl, Grid, RadioGroup } from "@mui/material";
import { _addressBooks } from "../../constant";
import AddressItem from "./AddressItem";
import { BillingAddress } from "../../interface";
import Iconify from "@/common/components/Iconify";
import { useDispatch, useSelector } from "@/common/redux/store";
import {
  onBackStep,
  onNextStep,
  setOpenModalAddAddress,
} from "../../order.slice";
import CheckoutSummary from "../CheckoutSummary";
import { useGetListUserAddress } from "../../hooks/useGetListUserAddress";
import AddNewAddressModal from "./AddNewAddressModal";
import EmptyCart from "../EmptyCart";

export default function CheckoutAddress() {
  const { subtotal, total, discount, cart } = useSelector(
    (state) => state.checkout
  );

  const {
    data: dataAddress,
    isLoading: isLoadingDataAddress,
    refetch: refetchAddress,
  } = useGetListUserAddress();
  const userAddress = dataAddress?.data?.items || [];

  const dispatch = useDispatch();

  const handleBackStep = () => {
    dispatch(onBackStep());
  };

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleClickOpen = () => {
    dispatch(setOpenModalAddAddress(true));
  };

  const handleCreateAddress = (value: BillingAddress) => {
    console.log(value);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <RadioGroup
            name="addressCurrentId"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value);
            }}
          >
            {userAddress.map((address, index) => (
              <AddressItem
                key={index}
                address={address}
                onCreateBilling={handleCreateAddress}
              />
            ))}

            {userAddress?.length === 0 && (
              <EmptyCart
                title="Không có địa chỉ giao hàng nào"
                description=""
              />
            )}
          </RadioGroup>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              size="small"
              color="inherit"
              onClick={handleBackStep}
              startIcon={<Iconify icon={"eva:arrow-ios-back-fill"} />}
            >
              Quay lại
            </Button>
            <Button
              size="small"
              onClick={handleClickOpen}
              startIcon={<Iconify icon={"eva:plus-fill"} />}
            >
              Thêm mới địa chỉ
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <CheckoutSummary
            subtotal={subtotal}
            total={total}
            discount={discount}
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
            Tiếp tục <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <AddNewAddressModal />
    </>
  );
}
