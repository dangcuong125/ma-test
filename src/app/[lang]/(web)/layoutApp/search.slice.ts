import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type searchProps = {
  searchText: string;
  valueSearch: string;
};
const initialState: searchProps = {
  searchText: "",
  valueSearch: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setValueSearch: (state, action: PayloadAction<string>) => {
      state.valueSearch = action.payload;
    },
  },
});

export const { setSearchText, setValueSearch } = searchSlice.actions;

export default searchSlice.reducer;
