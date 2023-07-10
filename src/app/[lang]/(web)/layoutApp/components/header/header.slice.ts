import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHeaderState } from "./header.interface";

const initialState: IHeaderState = {
  isOpenUserMenu: false,
};

const headerSlice = createSlice({
  name: "header-slice",
  initialState,
  reducers: {
    setOpenUserMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenUserMenu = action.payload;
    },
    resetHeaderState: (state) => {
      state.isOpenUserMenu = initialState.isOpenUserMenu;
    },
  },
});

export const { resetHeaderState, setOpenUserMenu } = headerSlice.actions;

export default headerSlice.reducer;
