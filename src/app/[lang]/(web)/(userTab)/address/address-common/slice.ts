import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interface";
import { RootState } from "@/common/redux/store";

const initialState: InitialState = {
  isOpenEditForm: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setIsOpenEditForm: (state, action: PayloadAction<boolean>) => {
      state.isOpenEditForm = action.payload;
    },
  },
});

export const { setIsOpenEditForm } = addressSlice.actions;

export const isOpenEditForm = (state: RootState) =>
  state.address.isOpenEditForm;

export default addressSlice.reducer;
