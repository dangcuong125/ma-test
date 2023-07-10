import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IOrderHistoryState = {
  currentTab: string;
};

const initialState: IOrderHistoryState = {
  currentTab: "",
};

const orderHistorySlice = createSlice({
  name: "order-history",
  initialState,
  reducers: {
    onChangeCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { onChangeCurrentTab } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
