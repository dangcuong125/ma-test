import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interface";
import { RootState } from "@/common/redux/store";

const initialState: InitialState = {
  isOpenSideBar: false,
  valueTab: 0,
};

export const notiSlice = createSlice({
  name: "noti",
  initialState,
  reducers: {
    setIsOpenSideBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSideBar = action.payload;
    },
    setValueTab: (state, action: PayloadAction<number>) => {
      state.valueTab = action.payload;
    },
  },
});

export const { setIsOpenSideBar, setValueTab } = notiSlice.actions;
export const isOpenSideBar = (state: RootState) => state.noti.isOpenSideBar;
export const valueTabNoti = (state: RootState) => state.noti.valueTab;
export default notiSlice.reducer;
