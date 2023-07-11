import { RootState } from "@/common/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateProps = {
  page: number;
};

const initialState: StateProps = {
  page: 1,
};

export const categorySlice = createSlice({
  name: "categoryRoot",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPageNumber } = categorySlice.actions;

export const pageCategorySelector = (state: RootState) =>
  state.categoryRoot.page;

export default categorySlice.reducer;
