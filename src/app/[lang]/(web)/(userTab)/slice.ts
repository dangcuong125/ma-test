import { RootState } from "@/common/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InititalState = {
  showUserTabMobile: boolean;
};

const initialState: InititalState = {
  showUserTabMobile: false,
};

export const userTabSlice = createSlice({
  name: "userTab",
  initialState,
  reducers: {
    setShowUserTabMobile: (state, action: PayloadAction<boolean>) => {
      state.showUserTabMobile = action.payload;
    },
  },
});

export const { setShowUserTabMobile } = userTabSlice.actions;

export const showUserTabMobile = (state: RootState) =>
  state.userTab.showUserTabMobile;

export default userTabSlice.reducer;
