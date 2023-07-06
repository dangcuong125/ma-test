import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./interface";
import { RootState } from "@/common/redux/store";

const initialState: InitialState = {
  isOpenEditForm: false,
  isOpenCreateForm: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setIsOpenEditForm: (state, action: PayloadAction<boolean>) => {
      state.isOpenEditForm = action.payload;
    },
    setIsOpenCreateForm: (state, action: PayloadAction<boolean>) => {
      state.isOpenCreateForm = action.payload;
    },
  },
});

export const { setIsOpenEditForm, setIsOpenCreateForm } = addressSlice.actions;

export const isOpenEditForm = (state: RootState) =>
  state.address.isOpenEditForm;
export const isOpenCreateForm = (state: RootState) =>
  state.address.isOpenCreateForm;

export default addressSlice.reducer;
