import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartItem, IOrderState } from "./interface";

const initialState: IOrderState = {
  activeStep: 0,
  billing: null,
  cart: [],
  discount: 0,
  shipping: 0,
  subtotal: 0,
  total: 0,
  openModalAddAddress: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    onBackStep(state) {
      state.activeStep -= 1;
    },

    onNextStep(state) {
      state.activeStep += 1;
    },

    onGotoStep(state, action: PayloadAction<number>) {
      state.activeStep = action.payload;
    },
    setCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cart = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setUpdateQuantity: (
      state,
      action: PayloadAction<{ id: Number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const index = state.cart.findIndex(
        (item) => item.productToVariantIds[0] === id
      );
      if (index !== -1) state.cart[index].quantity = action.payload.quantity;
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      const result = state.cart.filter(
        (item) => item.productToVariantIds[0] !== action.payload
      );

      state.cart = result;
    },
    setOpenModalAddAddress: (state, action: PayloadAction<boolean>) => {
      state.openModalAddAddress = action.payload;
    },
  },
});

export const {
  onBackStep,
  onGotoStep,
  onNextStep,
  setCart,
  setTotal,
  setUpdateQuantity,
  removeCartItem,
  setOpenModalAddAddress,
} = orderSlice.actions;

export default orderSlice.reducer;
